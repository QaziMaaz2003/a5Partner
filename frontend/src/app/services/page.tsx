import type { Metadata } from "next";
import Image from "next/image";
import ContactCta from "@/components/ContactCta";
import Hero from "@/components/Hero";
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

      {services.items.map((service, i) => {
        const flipped = i % 2 === 1;

        return (
          <section
            key={service.name}
            className="section-pad"
            style={{
              background: flipped ? "var(--paper-bright)" : "var(--paper)",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div className="partnership-section">
              <div data-reveal style={{ order: flipped ? 2 : 1 }}>
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
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginTop: 34,
                  }}
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
              </div>

              <div
                className="partnership-image"
                data-reveal
                style={{ order: flipped ? 1 : 2 }}
              >
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>
        );
      })}

      <ContactCta num="05" />
    </>
  );
}
