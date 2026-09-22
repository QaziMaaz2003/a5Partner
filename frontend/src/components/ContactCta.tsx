import Link from "next/link";
import SectionLabel from "./SectionLabel";
import { site } from "@/content/site";

export default function ContactCta({ num = "05" }: { num?: string }) {
  return (
    <section className="contact-section section-pad">
      <div data-reveal>
        <SectionLabel num={num}>Get in touch</SectionLabel>
        <h2>
          Let’s build something <em>enduring</em>
        </h2>

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
    </section>
  );
}
