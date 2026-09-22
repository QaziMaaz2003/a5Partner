import Link from "next/link";
import { legalNav, nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-mark">
            A5 <span style={{ opacity: 0.55 }}>Partners</span>
          </div>
          <p
            style={{
              maxWidth: 320,
              marginTop: 18,
              fontSize: 15,
              lineHeight: 1.75,
              color: "color-mix(in oklab, var(--paper-bright) 55%, transparent)",
            }}
          >
            Building better businesses together — through long-term ownership, operational
            discipline, and lasting community impact.
          </p>
        </div>

        <div>
          <div className="footer-heading">Explore</div>
          <div className="footer-links">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-heading">Connect</div>
          <div className="footer-links">
            <a href={`mailto:${site.email}`} style={{ textTransform: "none" }}>
              {site.email}
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={site.social.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>{site.copyright}</span>
          <span>Long-term ownership · Recurring revenue</span>
        </div>
      </div>
    </footer>
  );
}
