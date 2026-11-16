export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-atmosphere.jpg"
          alt=""
          className="h-full w-full object-cover animate-soft-pan will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="section-pad mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-16 pt-28 sm:pb-20 lg:justify-center lg:pb-24">
        <div className="max-w-3xl">
          <p className="reveal font-display text-4xl leading-none tracking-tight text-mist sm:text-6xl lg:text-7xl xl:text-8xl">
            Atelier Nord
          </p>
          <div className="mt-5 h-px w-24 origin-left scale-x-0 bg-brass animate-line-draw [animation-delay:200ms] sm:w-32" />
          <h1 className="reveal mt-6 max-w-2xl font-display text-2xl leading-snug text-mist/95 sm:text-3xl lg:text-4xl [animation-delay:120ms]">
            Ein Ansprechpartner für Auftritt und Umsetzung
          </h1>
          <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-fog sm:text-lg [animation-delay:220ms]">
            Lokales Full-Service Design für KMU — CI-Pakete, Gastro-Karten mit Print und QR, Fahrzeugbranding über Folier-Partner.
          </p>
          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap [animation-delay:320ms]">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#d4b67a]"
            >
              Projekt anfragen
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center rounded-sm border border-mist/45 bg-ink/35 px-6 py-3 text-sm font-medium text-mist backdrop-blur-sm transition hover:border-brass/70 hover:text-brass"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
