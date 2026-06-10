# Madhan P — Portfolio

Personal portfolio for **Madhan P**, a Java Full Stack Developer. A server-rendered
single-page experience with a 3D hero, animated UI, and a full contact-lead pipeline
(database + Google Sheets + email notifications).

🔗 **Live:** [madhanp-portfolio.co.in](https://madhanp-portfolio.co.in)

## Features

- **Server-side rendered** with TanStack Start for fast first paint and SEO.
- **Animated UI** — Framer Motion transitions and a deferred Three.js hero scene
  (loaded only on desktop, at browser idle, to protect performance).
- **Contact lead pipeline** — submissions are validated server-side, stored in
  **Supabase**, then forwarded to a **Google Apps Script** webhook that appends a row
  to **Google Sheets**, emails a notification, and sends the submitter an auto-reply.
- **Spam protection** — hidden honeypot field + per-IP rate limiting.
- **Lead status tracking** — `new → contacted → qualified → won → lost`.
- **SEO ready** — per-page meta, Person JSON-LD schema, sitemap, robots.txt, and
  social preview cards (Open Graph / Twitter).
- **Self-hosted fonts** — no render-blocking third-party font requests.

## Tech stack

| Area       | Tools                                                            |
| ---------- | ---------------------------------------------------------------- |
| Framework  | React 19, TanStack Start, TanStack Router, TanStack Query        |
| Styling    | Tailwind CSS v4, Radix UI primitives, Framer Motion              |
| 3D / FX    | Three.js, @react-three/fiber, @react-three/drei                  |
| Backend    | TanStack Start server functions, Supabase (PostgREST)            |
| Integrations | Google Apps Script (Sheets + Gmail)                            |
| Build      | Vite 7, TypeScript                                               |
| Hosting    | Netlify (SSR via a serverless function)                          |

## Getting started

```bash
# install dependencies (bun, npm, or pnpm)
bun install

# start the dev server
bun run dev        # http://localhost:8080

# production build
bun run build

# preview the build
bun run preview
```

## Environment variables

Copy `.env.example` to `.env` and fill in the values (also set these in your host's
environment for production):

| Variable                     | Purpose                                            |
| ---------------------------- | -------------------------------------------------- |
| `SUPABASE_URL`               | Supabase project URL                               |
| `SUPABASE_SERVICE_ROLE_KEY`  | Service-role key — **server-side only**            |
| `SHEETS_WEBHOOK_URL`         | Google Apps Script web-app `/exec` URL             |

Database setup lives in [`docs/leads-setup.sql`](docs/leads-setup.sql), and the
Sheets + Gmail webhook script is in [`docs/apps-script-webhook.gs`](docs/apps-script-webhook.gs).

## Project structure

```
src/
  components/      UI sections (Hero, About, Projects, Contact, Nav, …) + ui primitives
  routes/          File-based routes (/, /about, /projects, /skills, … )
  lib/             Server functions & helpers (leads pipeline, error handling)
  styles.css       Tailwind + self-hosted font faces
public/            Static assets (fonts, og-image, resume, robots.txt, sitemap.xml)
docs/              Supabase SQL + Apps Script webhook source
netlify/           Netlify SSR function wrapper
```

## Deployment

Hosted on **Netlify**. `bun run build` emits a static client bundle (`dist/client`)
and an SSR server bundle (`dist/server`); a Netlify Function
([`netlify/functions/server.mjs`](netlify/functions/server.mjs)) wraps the SSR handler
so every route is server-rendered. Configuration is in
[`netlify.toml`](netlify.toml). Pushing to `main` triggers an automatic deploy.

## License

MIT — see [LICENSE](LICENSE).
