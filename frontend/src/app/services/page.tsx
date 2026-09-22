import type { Metadata } from "next";
import ContactCta from "@/components/ContactCta";
import Hero from "@/components/Hero";
import MediaSplit from "@/components/MediaSplit";
import SectionLabel from "@/components/SectionLabel";
import { images, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Strategy, organizational transformation, customer and market insights, and operations — the capabilities A5 Partners brings to every business.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        kicker={services.hero.kicker}
        title={
          <>
            OUR <em>SERVICES</em>
          </>
        }
        lead={services.hero.lead}
        image={images.servicesHero}
        compact
      />

      {/* Intro */}
      <section className="section-pad">
        <MediaSplit image={images.servicesIntro} portrait>
          <SectionLabel num="—">What we do</SectionLabel>
          <h2 style={{ marginBottom: 30 }}>{services.intro.heading}</h2>
          {services.intro.body.map((para, i) => (
            <p
              key={i}
              style={{
                color: "var(--muted-foreground)",
                fontSize: 17,
                lineHeight: 1.8,
                marginBottom: 18,
              }}
            >
              {para}
            </p>
          ))}
        </MediaSplit>
      </section>

      {/* The four capabilities */}
      {services.items.map((service, i) => (
        <section
          key={service.name}
          className="section-pad"
          style={{
            background: i % 2 === 1 ? "var(--paper-bright)" : "var(--paper)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <MediaSplit image={service.image} reversed={i % 2 === 1}>
            <SectionLabel num={String(i + 1).padStart(2, "0")}>
              {service.name}
            </SectionLabel>
            <h2 style={{ marginBottom: 28 }}>{service.name}</h2>
            <p
              style={{
                color: "var(--muted-foreground)",
                lineHeight: 1.8,
                fontSize: 17,
              }}
            >
              {service.body}
            </p>

            <div
              style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 34 }}
            >
              {service.offerings.map((offering) => (
                <span
                  key={offering}
                  style={{
                    padding: "9px 16px",
                    border: "1px solid var(--cobalt)",
                    color: "var(--cobalt)",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {offering}
                </span>
              ))}
            </div>
          </MediaSplit>
        </section>
      ))}

      {/* How an engagement runs (cobalt) */}
      <section className="accent-section section-pad">
        <div className="process-head" data-reveal>
          <div>
            <SectionLabel num="05">Engagement</SectionLabel>
            <h2>{services.approach.heading}</h2>
          </div>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8 }}>
            {services.approach.lead}
          </p>
        </div>

        <div className="value-grid" data-reveal>
          {services.approach.steps.map((step) => (
            <article key={step.name}>
              <h3>{step.name}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactCta num="06" />
    </>
  );
}
