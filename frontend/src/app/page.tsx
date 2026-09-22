import Image from "next/image";
import ContactCta from "@/components/ContactCta";
import Faq from "@/components/Faq";
import FeatureGrid from "@/components/FeatureGrid";
import Hero from "@/components/Hero";
import MediaSplit from "@/components/MediaSplit";
import ProcessList from "@/components/ProcessList";
import SectionLabel from "@/components/SectionLabel";
import SignalStrip from "@/components/SignalStrip";
import StatBand from "@/components/StatBand";
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

      {/* 01 — Our belief */}
      <section className="section-pad">
        <MediaSplit image={images.homeBelief} portrait>
          <SectionLabel num="01">Our belief</SectionLabel>
          <h2 style={{ marginBottom: 30 }}>
            Your company is your <em>life’s work</em>
          </h2>
          <p style={{ color: "var(--muted-foreground)", fontSize: 17, lineHeight: 1.8 }}>
            {home.intro}
          </p>
        </MediaSplit>
      </section>

      <SignalStrip items={home.marquee} />

      {/* 02 — Mission + values */}
      <section
        className="section-pad"
        style={{ background: "var(--ink)", color: "var(--paper-bright)" }}
      >
        <div data-reveal>
          <SectionLabel num="02">Our mission</SectionLabel>
          <h2 style={{ maxWidth: 1000, marginBottom: 80 }}>
            As owners embark on their new chapters, we help them ensure they leave a{" "}
            <em>meaningful legacy</em> for the people closest to them.
          </h2>
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

      {/* 03 — By the numbers (cobalt) */}
      <section className="accent-section section-pad">
        <div className="process-head" data-reveal>
          <div>
            <SectionLabel num="03">By the numbers</SectionLabel>
            <h2>
              A concentrated portfolio, <em>held for decades</em>
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8 }}>
            We would rather own ten businesses properly than a hundred at arm’s length.
          </p>
        </div>

        <StatBand stats={home.stats} />
      </section>

      {/* 04 — Why A5 */}
      <section className="section-pad" style={{ background: "var(--paper-bright)" }}>
        <div className="process-head" data-reveal>
          <div>
            <SectionLabel num="04">Why A5</SectionLabel>
            <h2>{home.differentiators.heading}</h2>
          </div>
          <p className="body-large" style={{ margin: 0 }}>
            {home.differentiators.lead}
          </p>
        </div>

        <FeatureGrid items={home.differentiators.items} />
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

      {/* 05 — Succession */}
      <section className="section-pad">
        <MediaSplit image={images.aboutPartnership} reversed>
          <SectionLabel num="05">Succession</SectionLabel>
          <h2 style={{ marginBottom: 30 }}>{home.partnership.heading}</h2>
          {home.partnership.body.map((para, i) => (
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

      {/* 06 — The five-step plan */}
      <section className="section-pad" style={{ background: "var(--cool)" }}>
        <div className="process-head" data-reveal>
          <div>
            <SectionLabel num="06">The A5 plan</SectionLabel>
            <h2>{home.processLead}</h2>
          </div>
          <p className="body-large" style={{ margin: 0 }}>
            Five deliberate steps that take a business from assessment to accelerated
            growth, without losing what made it worth acquiring.
          </p>
        </div>

        <ProcessList steps={home.process} />
      </section>

      {/* 07 — FAQs */}
      <section className="section-pad" style={{ background: "var(--paper-bright)" }}>
        <div className="process-head" data-reveal>
          <div>
            <SectionLabel num="07">FAQs</SectionLabel>
            <h2>{home.faqHeading}</h2>
          </div>
          <p className="body-large" style={{ margin: 0 }}>
            The things owners most want to know before picking up the phone. If yours
            isn’t here, ask us directly.
          </p>
        </div>

        <Faq items={home.faqs} />
      </section>

      <ContactCta num="08" />
    </>
  );
}
