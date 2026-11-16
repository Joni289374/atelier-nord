const packages = [
  {
    id: "ci",
    title: "CI-Pakete",
    eyebrow: "Handwerk & Dienstleister",
    lead: "Betrieb startklar — einheitlicher Auftritt statt Stückwerk.",
    points: [
      "Logo-Anpassung oder schlankes Logo",
      "Visitenkarten, Flyer oder Social-Set",
      "Farben, Typo und kurze Manual-Basics",
      "Festpreis, typisch 7–10 Tage",
    ],
  },
  {
    id: "gastro",
    title: "Gastro-Karten",
    eyebrow: "Print + QR aus einem Master",
    lead: "Speise- und Getränkekarten, die Updates aushalten.",
    points: [
      "Layout 4–8 Seiten inkl. Allergen-Struktur",
      "QR aus demselben Master-Layout",
      "Druck über Partner, Nachdruck planbar",
      "Update-Option für saisonale Wechsel",
    ],
  },
  {
    id: "fahrzeug",
    title: "Fahrzeugbranding",
    eyebrow: "Design + Folier-Partner",
    lead: "Marke auf der Straße — wir designen, Partner montieren.",
    points: [
      "Beschriftung für PKW und Transporter",
      "CI-Farben und klare Lesbarkeit",
      "Montage über geprüfte Folier-Partner",
      "Flotten-Templates für Folge-Fahrzeuge",
    ],
  },
];

export function Leistungen() {
  return (
    <section id="leistungen" className="relative bg-paper text-ink">
      <div className="section-pad mx-auto max-w-7xl py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-pine">Leistungen</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
            Drei klare Einstiege — kein Preiskampf gegen Online-Print.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
            Wir verkaufen Ergebnis und Konsistenz: Beratung, druckfähige Daten, Partnerproduktion und Nachbestellung. Nicht die billigste Datei.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {packages.map((item, index) => (
            <article
              key={item.id}
              className="border-t border-ink/15 pt-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-pine-soft">
                {item.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">{item.lead}</p>
              <ul className="mt-6 space-y-2.5 text-sm text-ink/80">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
