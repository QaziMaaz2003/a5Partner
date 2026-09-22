import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/SectionLabel";
import { contact, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Interested in working with A5 Partners? Getting in touch has never been easier.",
};

const muted = "color-mix(in oklab, var(--paper-bright) 62%, transparent)";

export default function ContactPage() {
  return (
    <section
      className="contact-section section-pad"
      style={{ paddingTop: "clamp(150px, 20vh, 220px)" }}
    >
      <div data-reveal>
        <SectionLabel num="01">{contact.hero.kicker}</SectionLabel>
        <h2>
          {contact.hero.title} <em>{contact.hero.emphasis}</em>
        </h2>
      </div>

      <div className="contact-bottom">
        <div data-reveal>
          <p style={{ marginBottom: 46, fontSize: 18, color: muted, maxWidth: 480 }}>
            {contact.hero.lead}
          </p>
          <ContactForm />
        </div>

        <aside data-reveal>
          <div className="footer-heading">Direct</div>
          <a
            href={`mailto:${site.email}`}
            style={{ fontSize: 18, color: "var(--cobalt)" }}
          >
            {site.email}
          </a>

          <div className="footer-heading" style={{ marginTop: 44 }}>
            Follow
          </div>
          <div style={{ display: "grid", gap: 12, fontSize: 14 }}>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: muted }}
            >
              LinkedIn ↗
            </a>
            <a
              href={site.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: muted }}
            >
              Twitter ↗
            </a>
          </div>

          <div className="footer-heading" style={{ marginTop: 44 }}>
            Focus areas
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: muted, maxWidth: 320 }}>
            Consumer Services · Distribution · Industrials · Transportation. Metro areas
            including Atlanta, Chicago, Los Angeles, and Philadelphia.
          </p>
        </aside>
      </div>
    </section>
  );
}
