import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-mist">Atelier Nord</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-fog">
            Ein Ansprechpartner für Auftritt und Umsetzung — lokales Full-Service Design für KMU in Berlin und Umgebung.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-fog sm:flex-row sm:gap-8">
          <a href="mailto:hello@atelier-nord.de" className="hover:text-brass">
            hello@atelier-nord.de
          </a>
          <a href="tel:+493012345678" className="hover:text-brass">
            +49 30 12345678
          </a>
          <Link href="/impressum" className="hover:text-brass">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-brass">
            Datenschutz
          </Link>
        </div>
      </div>
      <div className="section-pad mx-auto max-w-7xl border-t border-white/5 py-6 text-xs text-fog/70">
        © {new Date().getFullYear()} Atelier Nord · Berlin
      </div>
    </footer>
  );
}
