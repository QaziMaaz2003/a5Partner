import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import MediaSplit from "@/components/MediaSplit";
import SectionLabel from "@/components/SectionLabel";
import { contact, images, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Interested in working with A5 Partners? Getting in touch has never been easier.",
};

const muted = "color-mix(in oklab, var(--paper-bright) 62%, transparent)";

export default function ContactPage() {
  return (
    <>
      <Hero
        kicker={contact.hero.kicker}
        title={
          <>
            LET’S BUILD
            <br />
            <em>TOGETHER</em>
          </>
        }
        lead={contact.hero.lead}
        image={images.contactHero}
        compact
      />

      {/* 01 — The form */}
      <section className="contact-section section-pad">
        <div data-reveal>
          <SectionLabel num="01">Send a message</SectionLabel>
          <h2 style={{ marginBottom: 70 }}>
            Tell us about your <em>business</em>
          </h2>
        </div>

        <div className="contact-bottom">
          <div data-reveal>
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
              Office
            </div>
            <address
              style={{
                fontStyle: "normal",
                fontSize: 14,
                lineHeight: 1.9,
                color: muted,
              }}
            >
              {contact.address.map((line) => (
                <span key={line} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </address>

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
              Consumer Services · Distribution · Industrials · Transportation. Metro
              areas including Atlanta, Chicago, Los Angeles, and Philadelphia.
            </p>
          </aside>
        </div>
      </section>

      {/* 02 — What happens next */}
      <section className="section-pad" style={{ background: "var(--paper-bright)" }}>
        <MediaSplit image={images.contactAside} reversed>
          <SectionLabel num="02">Next steps</SectionLabel>
          <h2 style={{ marginBottom: 34 }}>{contact.expectations.heading}</h2>

          {contact.expectations.steps.map((step, i) => (
            <div
              key={step.name}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: 18,
                paddingBottom: 24,
                marginBottom: 24,
                borderBottom:
                  i < contact.expectations.steps.length - 1
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              <span
                className="eyebrow"
                style={{ color: "var(--cobalt)", paddingTop: 4 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 style={{ fontSize: 22, marginBottom: 8 }}>{step.name}</h3>
                <p
                  style={{
                    margin: 0,
                    color: "var(--muted-foreground)",
                    fontSize: 15,
                    lineHeight: 1.75,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </MediaSplit>
      </section>
    </>
  );
}
