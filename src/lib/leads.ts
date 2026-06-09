import { createServerFn } from "@tanstack/react-start";

// Shape of a contact-form submission coming from the browser.
export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};

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

  return { name, email, phone, subject, message, consent };
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
    // 1) Persist to the database first (the source of truth).
    await saveToSupabase(data);
    // 2) Best-effort fan-out to Google Sheets + Gmail.
    await forwardToWebhook(data);
    return { ok: true } as const;
  });
