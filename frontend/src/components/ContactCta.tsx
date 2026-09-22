import Image from "next/image";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import { cta, images, site } from "@/content/site";

export default function ContactCta({ num = "05" }: { num?: string }) {
  return (
    <section className="contact-section section-pad">
      <div className="cta-split">
        <div data-reveal>
          <SectionLabel num={num}>{cta.kicker}</SectionLabel>
          <h2>
            {cta.title} <em>{cta.emphasis}</em>
          </h2>

          <p
            style={{
              maxWidth: 460,
              marginBottom: 38,
              fontSize: 17,
              lineHeight: 1.8,
              color: "color-mix(in oklab, var(--paper-bright) 68%, transparent)",
            }}
          >
            {cta.body}
          </p>

          <div className="cta-row">
            <Link href="/contact" className="button-primary">
              <span>Start a conversation</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <a href={`mailto:${site.email}`} className="button-ghost">
              <span>{site.email}</span>
            </a>
          </div>
        </div>

        <div className="cta-image" data-reveal>
          <Image
            src={images.cta.src}
            alt={images.cta.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
