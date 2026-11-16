export function Kontakt() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-paper text-ink">
      <div className="section-pad mx-auto grid max-w-7xl gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-pine">Kontakt</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
            Bereit für einen Auftritt, der hält?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Kurze Mail oder Anruf genügt. Wir matchen Ihr Anliegen auf ein Festpreis-Paket — CI, Gastro oder Fahrzeug — und sagen klar, was drin ist.
          </p>
          <div className="mt-10 flex flex-col gap-4 text-base sm:text-lg">
            <a href="mailto:hello@atelier-nord.de" className="font-display text-2xl text-pine hover:text-pine-soft sm:text-3xl">
              hello@atelier-nord.de
            </a>
            <a href="tel:+493012345678" className="text-ink/80 hover:text-pine">
              +49 30 12345678
            </a>
            <p className="text-sm text-ink/55">Berlin · Europa/Berlin · Antwort typisch innerhalb eines Werktags</p>
          </div>
        </div>

        <form
          className="border border-ink/10 bg-white/70 p-6 shadow-lift backdrop-blur-sm sm:p-8"
          action="mailto:hello@atelier-nord.de"
          method="post"
          encType="text/plain"
        >
          <label className="block text-sm font-medium text-ink/80" htmlFor="name">
            Name / Betrieb
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 outline-none transition focus:border-pine"
            placeholder="z. B. Rohrwerk Berlin"
          />

          <label className="mt-6 block text-sm font-medium text-ink/80" htmlFor="email">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 outline-none transition focus:border-pine"
            placeholder="name@betrieb.de"
          />

          <label className="mt-6 block text-sm font-medium text-ink/80" htmlFor="interest">
            Interesse
          </label>
          <select
            id="interest"
            name="interest"
            className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 outline-none transition focus:border-pine"
            defaultValue="CI-Paket"
          >
            <option>CI-Paket</option>
            <option>Gastro-Karte</option>
            <option>Fahrzeugbranding</option>
            <option>Unklar / Beratung</option>
          </select>

          <label className="mt-6 block text-sm font-medium text-ink/80" htmlFor="message">
            Kurzbeschreibung
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-2 w-full resize-y border-b border-ink/20 bg-transparent py-2 outline-none transition focus:border-pine"
            placeholder="Was brauchen Sie — und bis wann?"
          />

          <button
            type="submit"
            className="mt-8 w-full rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-mist transition hover:bg-pine"
          >
            Anfrage senden
          </button>
          <p className="mt-3 text-xs leading-relaxed text-ink/50">
            Öffnet Ihr E-Mail-Programm an hello@atelier-nord.de. Keine Server-Speicherung über dieses Formular.
          </p>
        </form>
      </div>
    </section>
  );
}
