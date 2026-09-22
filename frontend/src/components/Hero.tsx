import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type HeroProps = {
  kicker: string;
  title: ReactNode;
  lead?: string;
  image: { src: string; alt: string };
  compact?: boolean;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({
  kicker,
  title,
  lead,
  image,
  compact = false,
  cta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className={`hero-section${compact ? " hero-compact" : ""}`}>
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" />
      <div className="hero-overlay" aria-hidden="true" />


      <div className="hero-content">
        <div className="hero-kicker eyebrow">{kicker}</div>
        <h1>{title}</h1>

        <div className="hero-bottom">
          {lead ? <p>{lead}</p> : <span />}
          {(cta || secondaryCta) && (
            <div className="cta-row" style={{ justifyContent: "flex-start" }}>
              {cta && (
                <Link href={cta.href} className="button-primary">
                  <span>{cta.label}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="button-ghost">
                  <span>{secondaryCta.label}</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {!compact && (
        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <span>—</span>
        </div>
      )}
    </section>
  );
}
