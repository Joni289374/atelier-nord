import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Atelier Nord.",
};

export default function ImpressumPage() {
  return (
    <article className="bg-paper text-ink">
      <div className="section-pad mx-auto max-w-3xl pb-24 pt-28 sm:pt-32">
        <Link href="/" className="text-sm text-pine hover:text-pine-soft">
          ← Zurück zur Startseite
        </Link>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl">Impressum</h1>
        <p className="mt-3 text-sm text-ink/55">Angaben gemäß § 5 TMG / § 5 DDG</p>

        <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-ink/80 sm:text-base">
          <section>
            <h2 className="font-display text-xl text-ink">Anbieter</h2>
            <p className="mt-3">
              Max Mustermann
              <br />
              Atelier Nord
              <br />
              Torstraße 128
              <br />
              10119 Berlin
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Kontakt</h2>
            <p className="mt-3">
              Telefon:{" "}
              <a className="text-pine underline-offset-2 hover:underline" href="tel:+493012345678">
                +49 30 12345678
              </a>
              <br />
              E-Mail:{" "}
              <a
                className="text-pine underline-offset-2 hover:underline"
                href="mailto:impressum@atelier-nord.de"
              >
                impressum@atelier-nord.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Umsatzsteuer</h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: folgt nach
              steuerlicher Einordnung / Platzhalter DE000000000.
            </p>
            <p className="mt-2">
              Sofern die Kleinunternehmerregelung nach § 19 UStG in Anspruch genommen wird, erfolgt
              kein Ausweis der Umsatzsteuer auf Rechnungen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">
              Max Mustermann
              <br />
              Torstraße 128
              <br />
              10119 Berlin
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">EU-Streitschlichtung</h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{" "}
              <a
                className="text-pine underline-offset-2 hover:underline"
                href="https://ec.europa.eu/consumers/odr/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Haftung für Inhalte</h2>
            <p className="mt-3">
              Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf
              diesen Seiten verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
              Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
              unberührt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Haftung für Links</h2>
            <p className="mt-3">
              Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
              keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Urheberrecht</h2>
            <p className="mt-3">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <p className="text-xs text-ink/50">
            Hinweis: Dieses Impressum ist eine Platzhalter-Vorlage für den Projektstart und ersetzt
            keine individuelle Rechtsberatung.
          </p>
        </div>
      </div>
    </article>
  );
}
