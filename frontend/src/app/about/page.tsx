import type { Metadata } from "next";
import Image from "next/image";
import ContactCta from "@/components/ContactCta";
import Hero from "@/components/Hero";
import SectionLabel from "@/components/SectionLabel";
import { about, images } from "@/content/site";

export const metadata: Metadata = {
  title: "About A5",
  description:
    "A5 Partners is a holding company that seeks to acquire and run high-quality businesses with durable competitive advantages.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        kicker={about.hero.kicker}
        title={
          <>
            ABOUT <em>A5</em>
          </>
        }
        lead={about.hero.lead}
        image={images.aboutHero}
        compact
      />

      {/* 01 — Who we are */}
      <section className="section-pad">
        <div className="statement-section" data-reveal>
          <SectionLabel num="01">Who we are</SectionLabel>
          <div className="statement-copy">
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.8 }}>{about.statement}</p>
          </div>
        </div>
      </section>

      {/* 02 — What we look for */}
      <section
        className="section-pad"
        style={{ background: "var(--paper-bright)", borderTop: "1px solid var(--border)" }}
      >
        <div className="partnership-section">
          <div data-reveal>
            <SectionLabel num="02">What we look for</SectionLabel>
            <h2 style={{ marginBottom: 32 }}>
              Businesses with proven <em>long-term success</em>
            </h2>
            <p style={{ color: "var(--muted-foreground)", lineHeight: 1.8, fontSize: 17 }}>
              {about.approach}
            </p>
          </div>

          <div className="partnership-image" data-reveal>
            <Image
              src={images.aboutPartnership.src}
              alt={images.aboutPartnership.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="sector-list" style={{ marginTop: 80 }} data-reveal>
          {about.criteria.map((item, i) => (
            <article key={item} style={{ gridTemplateColumns: "80px 1fr 30px" }}>
              <span className="sector-num">{String(i + 1).padStart(2, "0")}</span>
              <p style={{ fontSize: 17, color: "var(--foreground)" }}>{item}</p>
              <span className="sector-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <p
          className="body-large"
          style={{ marginTop: 56, marginLeft: 0, maxWidth: 900 }}
          data-reveal
        >
          {about.geography}
        </p>
      </section>

      {/* 03 — Our team */}
      <section className="people-section section-pad">
        <div data-reveal>
          <SectionLabel num="03">Our team</SectionLabel>
          <h2>
            The people behind <em>A5</em>
          </h2>
        </div>
        <div data-reveal>
          <p style={{ color: "var(--muted-foreground)", lineHeight: 1.8, margin: 0 }}>
            Deep expertise from global technology, financial services, industrial, and
            consumer sectors — applied locally to small, unique companies.
          </p>
        </div>
      </section>

      <section
        className="section-pad"
        style={{ background: "var(--cool)", paddingTop: 0 }}
      >
        <div className="value-grid">
          {about.team.map((member) => (
            <article key={member.name} data-reveal>
              <span className="eyebrow" style={{ color: "var(--cobalt)" }}>
                {member.role}
              </span>
              <h3 style={{ margin: "16px 0 20px", fontSize: 30 }}>{member.name}</h3>
              {member.bio.map((para, i) => (
                <p key={i} style={{ marginBottom: 16 }}>
                  {para}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <ContactCta num="04" />
    </>
  );
}
