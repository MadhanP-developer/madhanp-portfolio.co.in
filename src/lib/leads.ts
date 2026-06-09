import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";

// Shape of a contact-form submission coming from the browser.
export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
  // Honeypot: must stay empty. Bots that auto-fill every field will trip this.
  company?: string;
};

// Best-effort in-memory rate limiter. Note: serverless instances are
// ephemeral and not shared, so this throttles bursts hitting a warm
// instance rather than enforcing a hard global limit. Good enough to blunt
// naive flooding without an external store.
const RATE_LIMIT = 10; // max submissions
const RATE_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes, per IP
const hits = new Map<string, number[]>();

// Resolve the client IP safely. Returns null if it can't be determined or if
// the call fails for any reason — callers must treat null as "don't throttle"
// so we never block (or silently drop) a real lead.
function resolveIp(): string | null {
  try {
    const ip = getRequestIP({ xForwardedFor: true });
    return ip && ip.trim() !== "" ? ip : null;
  } catch {
    return null;
  }
}

function checkRateLimit(ip: string): void {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    throw new Error("Too many messages. Please try again later.");
  }
  recent.push(now);
  hits.set(ip, recent);
  // Opportunistic cleanup so the map can't grow unbounded.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
}

function clean(value: unknown, max: number): string {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function validateLead(data: unknown): LeadInput {
  const d = (data ?? {}) as Record<string, unknown>;
  const name = clean(d.name, 120);
  const email = clean(d.email, 200);
  const phone = clean(d.phone, 40);
  const subject = clean(d.subject, 200);
  const message = clean(d.message, 5000);
  const consent = Boolean(d.consent);

  if (!name) throw new Error("Name is required.");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error("A valid email is required.");
  if (!phone) throw new Error("Phone is required.");
  if (!message) throw new Error("Message is required.");
  if (!consent) throw new Error("Consent is required.");

  return { name, email, phone, subject, message, consent, company: clean(d.company, 200) };
}

// Insert the lead into Supabase via its REST (PostgREST) API.
// Uses the service-role key, which must stay server-side only.
async function saveToSupabase(lead: LeadInput): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars are not configured.");

  const res = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify([
      {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        subject: lead.subject,
        message: lead.message,
        consent: lead.consent,
      },
    ]),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Supabase insert failed (${res.status}): ${detail}`);
  }
}

// Forward the lead to a Google Apps Script Web App that appends a row to a
// Google Sheet and sends a Gmail notification. Non-fatal: the lead is already
// safely stored in the DB, so a webhook hiccup should not fail the request.
async function forwardToWebhook(lead: LeadInput): Promise<void> {
  const webhook = process.env.SHEETS_WEBHOOK_URL;
  if (!webhook) return;

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error(`Sheets/Gmail webhook failed (${res.status}): ${detail}`);
  }
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: LeadInput) => validateLead(data))
  .handler(async ({ data }) => {
    // Honeypot: if the hidden field is filled, a bot submitted it. Pretend
    // success so the bot gets no signal, but store/notify nothing.
    if (data.company && data.company.trim() !== "") {
      return { ok: true } as const;
    }

    // Throttle abusive bursts per client IP. Only when we have a real IP —
    // otherwise we'd lump every visitor into one bucket and block everyone.
    const ip = resolveIp();
    if (ip) checkRateLimit(ip);

    // 1) Persist to the database first (the source of truth).
    await saveToSupabase(data);
    // 2) Best-effort fan-out to Google Sheets + Gmail.
    await forwardToWebhook(data);
    return { ok: true } as const;
  });
