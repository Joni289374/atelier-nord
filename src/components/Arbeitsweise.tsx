const steps = [
  {
    n: "01",
    title: "Briefing",
    text: "Segment, Bestandslogo, Pflichttexte, Fahrzeugfotos oder Speisen — Scope und Paket in einem Gespräch.",
  },
  {
    n: "02",
    title: "Design",
    text: "Klare Richtung statt Endlosvarianten. Interne Qualitätsprüfung für Druck und Folie.",
  },
  {
    n: "03",
    title: "Freigabe",
    text: "Schriftliche Freigabe vor Produktion. Danach keine Überraschungen auf Papier oder Folie.",
  },
  {
    n: "04",
    title: "Umsetzung",
    text: "Druck oder Montage über Partner — ein Ansprechpartner bei uns, Ergebnis am Objekt.",
  },
];

export function Arbeitsweise() {
  return (
    <section id="arbeitsweise" className="relative overflow-hidden bg-pine-deep text-mist">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-glacier/10 blur-3xl" />
      <div className="section-pad relative mx-auto max-w-7xl py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-glacier">Arbeitsweise</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
            Vom Lead zur Nachbestellung — lokal und nachvollziehbar.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist/75 sm:text-lg">
            Design führt. Produktion läuft über Partner. Sie behalten einen Ansprechpartner für Auftritt und Umsetzung.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="relative">
              <span className="font-display text-4xl text-brass/80">{step.n}</span>
              <h3 className="mt-3 font-display text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
