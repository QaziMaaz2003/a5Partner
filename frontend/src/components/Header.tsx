"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

/** Routes whose hero is a dark full-bleed image, so the header can sit transparent over it. */
const DARK_HERO_ROUTES = ["/", "/about", "/services", "/industries", "/contact"];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overHero = DARK_HERO_ROUTES.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="site-header"
        data-solid={scrolled || open ? "true" : "false"}
        data-theme={!overHero && !scrolled && !open ? "light" : undefined}
      >
        <Link href="/" className="header-mark" aria-label={`${site.name} home`}>
          A5 <span style={{ opacity: 0.55 }}>Partners</span>
        </Link>

        <nav className="header-nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="header-cta">
          <span>Start a conversation</span>
          <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          className="header-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            style={open ? { transform: "translateY(6.5px) rotate(45deg)" } : undefined}
          />
          <span style={open ? { opacity: 0 } : undefined} />
          <span
            style={open ? { transform: "translateY(-6.5px) rotate(-45deg)" } : undefined}
          />
        </button>
      </header>

      {open && (
        <div className="mobile-nav">
          <nav aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.href}>
                {/* Closed here rather than in an effect on pathname, which
                    would setState during render of the new route. */}
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
