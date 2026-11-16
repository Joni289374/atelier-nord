"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#arbeitsweise", label: "Arbeitsweise" },
  { href: "/#beispiele", label: "Beispiele" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-white/10 bg-ink/95 backdrop-blur-md" : "bg-ink/55 backdrop-blur-sm"
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-20">
        <Link href="/" className="group flex items-center gap-3" aria-label="Atelier Nord Startseite">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mark.svg" alt="" className="h-9 w-9" width={36} height={36} />
          <span className="font-display text-lg tracking-tight text-mist transition group-hover:text-brass sm:text-xl">
            Atelier Nord
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist/85 transition hover:text-brass"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#kontakt"
            className="rounded-sm bg-brass px-4 py-2 text-sm font-medium text-ink transition hover:bg-[#d4b67a]"
          >
            Projekt anfragen
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-mist md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-px bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="section-pad border-t border-white/10 bg-ink/95 py-4 md:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-base text-mist"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              className="mt-2 rounded-sm bg-brass px-4 py-3 text-center text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Projekt anfragen
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
