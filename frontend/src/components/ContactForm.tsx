"use client";

import { useState } from "react";

type Fields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

/** Mirrors the backend DTO so users see the same limits before submitting. */
const MAX = { name: 120, email: 200, subject: 200, message: 5000 } as const;

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = "Name is required.";
  else if (values.name.length > MAX.name) errors.name = "Name is too long.";

  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";

  if (!values.subject.trim()) errors.subject = "Subject is required.";
  else if (values.subject.length > MAX.subject) errors.subject = "Subject is too long.";

  if (!values.message.trim()) errors.message = "Message is required.";
  else if (values.message.length > MAX.message) errors.message = "Message is too long.";

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const update =
    (field: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    setFormError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          res.status === 429
            ? "Too many messages sent. Please try again in a few minutes."
            : (data?.message ?? "Something went wrong. Please try again."),
        );
      }

      setStatus("sent");
      setValues(EMPTY);
    } catch (err) {
      setStatus("error");
      setFormError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "sent") {
    // No data-reveal here: this block mounts after the IntersectionObserver has
    // already scanned the page, so it would never be told to become visible.
    return (
      <div>
        <h3 style={{ fontSize: 40, marginBottom: 16 }}>Thank you!</h3>
        <p
          style={{
            color: "color-mix(in oklab, var(--paper-bright) 68%, transparent)",
            lineHeight: 1.8,
            maxWidth: 440,
          }}
        >
          Your message is with us. We read everything that comes in and will be in touch
          shortly.
        </p>
        <button
          type="button"
          className="button-ghost"
          style={{ marginTop: 30 }}
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name*"
          value={values.name}
          onChange={update("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <span className="field-error" id="name-error">
            {errors.name}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email*"
          value={values.email}
          onChange={update("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <span className="field-error" id="email-error">
            {errors.email}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject*"
          value={values.subject}
          onChange={update("subject")}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <span className="field-error" id="subject-error">
            {errors.subject}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Message*"
          value={values.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span className="field-error" id="message-error">
            {errors.message}
          </span>
        )}
      </div>

      {/* Honeypot — hidden from users, rejected by the API when filled. */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <button type="submit" className="button-primary" disabled={status === "sending"}>
        <span>{status === "sending" ? "Sending…" : "Send"}</span>
        <span aria-hidden="true">↗</span>
      </button>

      <p aria-live="polite" style={{ minHeight: 20, marginTop: 18 }}>
        {formError && <span className="field-error">{formError}</span>}
      </p>
    </form>
  );
}
