import type { Metadata } from "next";
import Image from "next/image";
import ContactCta from "@/components/ContactCta";
import Hero from "@/components/Hero";
import MediaSplit from "@/components/MediaSplit";
import SectionLabel from "@/components/SectionLabel";
import SectorList from "@/components/SectorList";
import { images, industries } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Consumer Services, Industrial, Distribution, and Transportation — the sectors A5 Partners invests in and operates.",
};

export default function IndustriesPage() {
  return (
    <>
      <Hero
        kicker={industries.hero.kicker}
        title={<em>INDUSTRIES</em>}
        lead={industries.hero.lead}
        image={images.industriesHero}
        compact
      />

      {/* 01 — Where we focus */}
      <section className="section-pad">
        <div className="focus-intro" data-reveal>
          <div>
            <SectionLabel num="01">Where we focus</SectionLabel>
            <h2>
              Four sectors, one <em>operating discipline</em>
            </h2>
          </div>
          <p className="body-large" style={{ margin: 0 }}>
            Sectors ripe for disruption and technological enhancement, where physical
            assets and recurring demand create room to professionalize and scale.
          </p>
        </div>

        <SectorList items={industries.items} />
      </section>

      {/* Each sector in depth, alternating sides */}
      {industries.items.map((sector, i) => (
        <section
          key={sector.name}
          className="section-pad"
          style={{
            background: i % 2 === 0 ? "var(--paper-bright)" : "var(--paper)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <MediaSplit image={sector.image} reversed={i % 2 === 1}>
            <SectionLabel num={String(i + 1).padStart(2, "0")}>
              {sector.name}
            </SectionLabel>
            <h2 style={{ marginBottom: 26 }}>{sector.name}</h2>
            <p
              style={{ color: "var(--muted-foreground)", fontSize: 17, lineHeight: 1.8 }}
            >
              {sector.body}
            </p>
            <p
              style={{
                color: "var(--muted-foreground)",
                fontSize: 17,
                lineHeight: 1.8,
                marginTop: 16,
              }}
            >
              {sector.detail}
            </p>

            <div
              style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 30 }}
            >
              {sector.signals.map((signal) => (
                <span
                  key={signal}
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
                  {signal}
                </span>
              ))}
            </div>
          </MediaSplit>
        </section>
      ))}

      {/* 02 — What makes a business a fit (cobalt) */}
      <section className="accent-section section-pad">
        <div className="process-head" data-reveal>
          <div>
            <SectionLabel num="02">Fit</SectionLabel>
            <h2>{industries.criteria.heading}</h2>
          </div>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8 }}>
            {industries.criteria.lead}
          </p>
        </div>

        <div className="value-grid" data-reveal>
          {industries.criteria.items.map((item) => (
            <article key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="full-image-section">
        <Image
          src={industries.image.src}
          alt={industries.image.alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="image-scrim" aria-hidden="true" />
        <div className="image-caption">
          <span className="eyebrow" style={{ color: "var(--cobalt)" }}>
            Essential links
          </span>
          <p style={{ marginTop: 14, fontSize: 19, lineHeight: 1.6 }}>
            The businesses that keep supply chains, communities, and local economies
            moving.
          </p>
        </div>
      </section>

      {/* 03 — Essential businesses */}
      <section className="section-pad" style={{ background: "var(--paper-bright)" }}>
        <MediaSplit image={images.industriesPlant} reversed>
          <SectionLabel num="03">Why these sectors</SectionLabel>
          <h2 style={{ marginBottom: 28 }}>{industries.plant.heading}</h2>
          <p
            style={{ color: "var(--muted-foreground)", fontSize: 17, lineHeight: 1.8 }}
          >
            {industries.plant.body}
          </p>
        </MediaSplit>
      </section>

      {/* 04 — How we work */}
      <section
        className="section-pad"
        style={{ background: "var(--ink)", color: "var(--paper-bright)" }}
      >
        <div className="statement-section" data-reveal>
          <SectionLabel num="04">{industries.howWeWork.heading}</SectionLabel>
          <div className="statement-copy">
            <p
              style={{
                margin: 0,
                fontSize: 19,
                lineHeight: 1.8,
                color: "color-mix(in oklab, var(--paper-bright) 78%, transparent)",
              }}
            >
              {industries.howWeWork.body}
            </p>
          </div>
        </div>
      </section>

      <ContactCta num="05" />
    </>
  );
}
