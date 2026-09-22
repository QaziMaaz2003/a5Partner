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
