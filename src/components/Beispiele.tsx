const items = [
  {
    src: "/portfolio/visitenkarten.jpg",
    title: "Rohrwerk Berlin",
    meta: "CI · Visitenkarten",
    alt: "Mockup Visitenkarten Rohrwerk Berlin mit Messingfolie",
  },
  {
    src: "/portfolio/speisekarte.jpg",
    title: "Nordlicht Bistro",
    meta: "Gastro · Speisekarte + QR",
    alt: "Mockup Speisekarte Nordlicht Bistro auf Holztisch",
  },
  {
    src: "/portfolio/fahrzeug.jpg",
    title: "KlimaCraft",
    meta: "Fahrzeug · Teilfolie Transporter",
    alt: "Mockup Transporterbeschriftung KlimaCraft",
  },
  {
    src: "/portfolio/flyer.jpg",
    title: "Handfest Service",
    meta: "CI · Flyer & Visitenkarte",
    alt: "Mockup Flyer Handfest Service",
  },
  {
    src: "/portfolio/cafe.jpg",
    title: "Kaffeewerk",
    meta: "Gastro · Getränkekarte",
    alt: "Mockup Café-Menükarten Kaffeewerk",
  },
];

export function Beispiele() {
  return (
    <section id="beispiele" className="bg-ink text-mist">
      <div className="section-pad mx-auto max-w-7xl py-20 sm:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-glacier">Beispiel-Designs</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
              Portfolio-Studien für typische KMU-Jobs.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-fog sm:text-lg">
              Konzeptmockups — so sieht Full-Service aus, bevor die ersten Kundenjobs fotografiert sind.
            </p>
          </div>
          <p className="text-sm text-fog/80 md:max-w-xs md:text-right">
            Visitenkarten · Speisekarten · Fahrzeug · Flyer
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <figure
              key={item.src}
              className={`group overflow-hidden ${index === 1 ? "sm:row-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${index === 1 ? "h-full min-h-[28rem]" : "aspect-[4/3]"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-glacier">{item.meta}</p>
                  <p className="mt-1 font-display text-xl text-mist">{item.title}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
