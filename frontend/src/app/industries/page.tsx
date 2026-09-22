import type { Metadata } from "next";
import Image from "next/image";
import ContactCta from "@/components/ContactCta";
import Hero from "@/components/Hero";
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

      {/* 02 — How we work */}
      <section
        className="section-pad"
        style={{ background: "var(--ink)", color: "var(--paper-bright)" }}
      >
        <div className="statement-section" data-reveal>
          <SectionLabel num="02">{industries.howWeWork.heading}</SectionLabel>
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

      <ContactCta num="03" />
    </>
  );
}
