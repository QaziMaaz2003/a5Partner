import { NextResponse } from "next/server";

/**
 * Contact submissions take one of two paths:
 *
 *  1. `API_URL` set  → proxy to the NestJS API, which validates, persists to the
 *     database and emails. This is the full-fidelity path.
 *  2. `API_URL` unset → send straight to Resend from here. Used on a Vercel-only
 *     deploy where there is no long-running backend. Nothing is persisted, so
 *     email delivery is the only record — see README before relying on it.
 *
 * In development `API_URL` falls back to the local NestJS port so the usual
 * two-server workflow keeps working untouched.
 */
const API_URL =
  process.env.API_URL ??
  (process.env.NODE_ENV !== "production" ? "http://localhost:3001" : undefined);

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "jourdan@a5partners.com";
const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL ?? "A5 Partners <onboarding@resend.dev>";

const MAX = { name: 120, email: 200, subject: 200, message: 5000 } as const;

type Payload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

function validate(body: unknown): { data?: Payload; errors?: string[] } {
  if (typeof body !== "object" || body === null) {
    return { errors: ["Invalid request body."] };
  }

  const raw = body as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const data: Payload = {
    name: str(raw.name),
    email: str(raw.email),
    subject: str(raw.subject),
    message: str(raw.message),
    website: str(raw.website),
  };

  const errors: string[] = [];
  if (!data.name) errors.push("Name is required.");
  else if (data.name.length > MAX.name) errors.push("Name is too long.");

  if (!data.email) errors.push("Email is required.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.push("Enter a valid email address.");

  if (!data.subject) errors.push("Subject is required.");
  else if (data.subject.length > MAX.subject) errors.push("Subject is too long.");

  if (!data.message) errors.push("Message is required.");
  else if (data.message.length > MAX.message) errors.push("Message is too long.");

  return errors.length > 0 ? { errors } : { data };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendViaResend(data: Payload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      `[contact] RESEND_API_KEY not set — message not delivered.\n  From: ${data.name} <${data.email}>\n  Subject: ${data.subject}`,
    );
    return { ok: false as const, reason: "not-configured" as const };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      reply_to: data.email,
      subject: `[a5partners.com] ${data.subject}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Subject: ${data.subject}`,
        "",
        data.message,
      ].join("\n"),
      html:
        `<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;line-height:1.6;color:#111">` +
        `<h2 style="margin:0 0 16px">New contact form submission</h2>` +
        `<p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(data.name)}</p>` +
        `<p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(data.email)}</p>` +
        `<p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>` +
        `<div style="padding:16px;background:#f5f6f8;border-left:3px solid #1f5fe0;white-space:pre-wrap">${escapeHtml(data.message)}</div>` +
        `</div>`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error(`[contact] Resend rejected the message (${res.status}): ${detail}`);
    return { ok: false as const, reason: "send-failed" as const };
  }

  return { ok: true as const };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  // Proxy to the NestJS API when one is configured.
  if (API_URL) {
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Preserve the caller's IP so the API can rate-limit per visitor
          // rather than per proxy.
          "x-forwarded-for":
            request.headers.get("x-forwarded-for") ??
            request.headers.get("x-real-ip") ??
            "",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json().catch(() => ({}));
      return NextResponse.json(data, { status: res.status });
    } catch {
      return NextResponse.json(
        { message: "Unable to reach the contact service. Please try again later." },
        { status: 502 },
      );
    }
  }

  // Standalone path: validate here, then email via Resend.
  const { data, errors } = validate(body);
  if (errors) {
    return NextResponse.json({ message: errors }, { status: 400 });
  }

  // Honeypot — accept silently so bots get no signal.
  if (data!.website) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const result = await sendViaResend(data!);

  if (!result.ok && result.reason === "send-failed") {
    return NextResponse.json(
      { message: "We couldn’t send your message. Please email us directly." },
      { status: 502 },
    );
  }

  // `not-configured` still returns success: the submission was logged, and the
  // visitor should not see an error for a deployment gap.
  return NextResponse.json({ success: true }, { status: 200 });
}
