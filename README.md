# a5Partner

A rebuild of [a5partners.com](https://www.a5partners.com/) as a multi-page application: the
existing site's pages, copy, and functionality, rendered in the visual language of the
[redesign concept](https://a5-sparkle-redesign.lovable.app/).

```
frontend/   Next.js 16 (App Router) + React 19 + Tailwind CSS v4
backend/    NestJS 12 + Prisma 7 + SQLite + Resend
```

## Pages

| Route                 | Source page on the old site |
| --------------------- | --------------------------- |
| `/`                   | Home                        |
| `/about`              | About A5                    |
| `/services`           | Our Services                |
| `/industries`         | Industries                  |
| `/contact`            | Contact                     |
| `/privacy-statement`  | Privacy Statement           |
| `/terms-conditions`   | Terms & Conditions          |

Legacy Squarespace paths (`/our-services`, `/industries-1`, `/contact-`, `/abouta5`)
308-redirect to the new routes, so existing inbound links keep working.

## Design system

Ported from the redesign's compiled stylesheet rather than approximated:

- **Type** — DM Serif Display (headings, italic for emphasis) + Manrope 400/500/600/700
- **Color** — cobalt `oklch(55% .205 251)`, ink `oklch(14.5% .016 252)`,
  paper `oklch(97.5% .006 240)`, cool `oklch(91% .012 245)`
- **Motion** — `[data-reveal]` fade-ups driven by one shared IntersectionObserver
  (`threshold: 0.12`), a 30s cobalt marquee, all disabled under
  `prefers-reduced-motion: reduce`

Photography is from Unsplash, loaded through `next/image`.

## Backend

The only dynamic feature on the original site is the contact form, so that is the entire
API surface:

| Method | Route          | Purpose                             |
| ------ | -------------- | ----------------------------------- |
| `GET`  | `/api/health`  | Liveness check                      |
| `POST` | `/api/contact` | Validate → persist → email          |

The form keeps the original's four required fields (Name, Email, Subject, Message), its
`Send` button, and its `Thank you!` confirmation. The old captcha is replaced by a
per-IP rate limit (5 submissions / 10 minutes) plus a honeypot field.

Submissions are written to SQLite before email is attempted, so a delivery failure never
loses a message or fails the request.

## Running locally

Both apps run independently. Start the API first.

```bash
# API — http://localhost:3001
cd backend
cp .env.example .env
npx prisma migrate dev
npm run start:dev

# Web — http://localhost:3000
cd frontend
npm install
npm run dev
```

Open the site at **http://localhost:3000** — use `localhost`, not `127.0.0.1`.

### Environment

Everything in `backend/.env.example` is optional for local development. With no
`RESEND_API_KEY` set, the contact form still works end to end: submissions are stored and
the email payload is logged to the console instead of being sent.

To send real email, add a `RESEND_API_KEY`. Note that Resend only delivers from a domain
verified on your account — until `a5partners.com` is verified there, keep
`CONTACT_FROM_EMAIL` on the `onboarding@resend.dev` sandbox sender, which can only
deliver to the address that owns the Resend account.

### Useful commands

```bash
cd backend
npm run test:e2e        # API tests: health, validation, honeypot
npx prisma studio       # browse stored submissions

cd frontend
npm run build           # production build
npx eslint src          # lint
```

## Deploying to Vercel

This repo holds two apps, so Vercel needs to be told which one to build. That has to be
the **Root Directory** project setting — a `vercel.json` at the repo root is not enough,
because Vercel's framework detection scans the actual repo root for a `package.json`
*before* it reads any custom install/build commands, and fails with "No Next.js version
detected" when it finds none there.

**On import** (<https://vercel.com/new>): after selecting this repo, open **Root
Directory** and set it to `frontend` before deploying.

**On an existing project**: Settings → General → Root Directory → `frontend` → Save,
then redeploy (Deployments tab → latest → ⋯ → Redeploy — changing the setting alone does
not trigger a new build).

With Root Directory set to `frontend`, Vercel finds `frontend/package.json`, detects
Next.js automatically, and needs no `vercel.json` at all.

`backend/` is excluded via `.vercelignore` (evaluated at the repo root regardless of
Root Directory) — see below.

### The contact form in production

The Next.js route at `frontend/src/app/api/contact/route.ts` handles submissions two ways:

| `API_URL` | Behaviour |
| --------- | --------- |
| **unset** | Validates in the route and emails via Resend. Nothing is stored. |
| **set**   | Proxies to the NestJS API, which validates, stores and emails. |

So a Vercel-only deploy works out of the box — just add `RESEND_API_KEY` (and
`CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`) in **Settings → Environment Variables**.
Without a key the submission is logged server-side and the visitor still sees the
success message, so nothing appears broken — but no email is sent and no record is
kept. Set the key before going live.

### Why the backend isn't on Vercel

The NestJS API needs a long-running process and a persistent disk for SQLite. Vercel's
serverless runtime provides neither — the filesystem is ephemeral, so stored submissions
would vanish between invocations.

To run the full stack, host `backend/` on a platform with persistent processes (Render,
Railway, Fly.io), switch the Prisma datasource from `sqlite` to `postgresql`, then set
`API_URL` on the Vercel project to that host. The frontend will switch to the proxy path
automatically.
