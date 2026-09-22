import Image from "next/image";
import ContactCta from "@/components/ContactCta";
import Hero from "@/components/Hero";
import ProcessList from "@/components/ProcessList";
import SectionLabel from "@/components/SectionLabel";
import SignalStrip from "@/components/SignalStrip";
import { home, images } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero
        kicker={home.hero.kicker}
        title={
          <>
            BUILDING
            <br />
            <em>BETTER BUSINESSES</em>
            <br />
            TOGETHER
          </>
        }
        lead={home.hero.lead}
        image={images.homeHero}
        cta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "About A5", href: "/about" }}
      />

      {/* 01 — Belief */}
      <section className="section-pad">
        <div className="statement-section" data-reveal>
          <SectionLabel num="01">Our belief</SectionLabel>
          <div className="statement-copy">
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.8 }}>{home.intro}</p>
          </div>
        </div>
      </section>

      <SignalStrip items={home.marquee} />

      {/* 02 — Mission + values */}
      <section
        className="section-pad"
        style={{ background: "var(--ink)", color: "var(--paper-bright)" }}
      >
        <div data-reveal>
          <SectionLabel num="02">Our mission</SectionLabel>
          <h2 style={{ maxWidth: 1000, marginBottom: 80 }}>{home.mission.body}</h2>
        </div>

        <div className="principles-grid" data-reveal>
          {home.values.map((value, i) => (
            <article key={value.name}>
              <span className="eyebrow" style={{ color: "var(--cobalt)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{value.name}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Full-bleed image */}
      <section className="full-image-section">
        <Image
          src={images.homeFull.src}
          alt={images.homeFull.alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="image-scrim" aria-hidden="true" />
        <div className="image-caption">
          <span className="eyebrow" style={{ color: "var(--cobalt)" }}>
            Partnership
          </span>
          <p style={{ marginTop: 14, fontSize: 19, lineHeight: 1.6 }}>
            We partner with great people and grow great companies the right way — for the
            long term.
          </p>
        </div>
      </section>

      {/* 03 — The five-step plan */}
      <section className="section-pad">
        <div className="process-head" data-reveal>
          <div>
            <SectionLabel num="03">The A5 plan</SectionLabel>
            <h2>{home.processLead}</h2>
          </div>
          <p className="body-large" style={{ margin: 0 }}>
            Five deliberate steps that take a business from assessment to accelerated
            growth, without losing what made it worth acquiring.
          </p>
        </div>

        <ProcessList steps={home.process} />
      </section>

      <ContactCta num="04" />
    </>
  );
}
