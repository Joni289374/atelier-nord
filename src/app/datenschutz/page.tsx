import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Atelier Nord (DSGVO-Vorlage).",
};

export default function DatenschutzPage() {
  return (
    <article className="bg-paper text-ink">
      <div className="section-pad mx-auto max-w-3xl pb-24 pt-28 sm:pt-32">
        <Link href="/" className="text-sm text-pine hover:text-pine-soft">
          ← Zurück zur Startseite
        </Link>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl">Datenschutz</h1>
        <p className="mt-3 text-sm text-ink/55">
          Datenschutzerklärung gemäß DSGVO — Platzhalter-Vorlage
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/80 sm:text-base">
          <section>
            <h2 className="font-display text-xl text-ink">1. Verantwortlicher</h2>
            <p className="mt-3">
              Verantwortlich für die Datenverarbeitung auf dieser Website:
              <br />
              Max Mustermann · Atelier Nord
              <br />
              Torstraße 128 · 10119 Berlin
              <br />
              E-Mail:{" "}
              <a
                className="text-pine underline-offset-2 hover:underline"
                href="mailto:impressum@atelier-nord.de"
              >
                impressum@atelier-nord.de
              </a>
              <br />
              Telefon: +49 30 12345678
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">2. Überblick der Verarbeitungen</h2>
            <p className="mt-3">
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser
              Website, zur Kommunikation mit Anfragenden oder zur Erfüllung gesetzlicher Pflichten
              erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">3. Hosting</h2>
            <p className="mt-3">
              Diese Website wird voraussichtlich bei einem Hosting-Anbieter betrieben (Platzhalter:
              z.&nbsp;B. Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA). Beim Aufruf
              der Seiten können Server-Logfiles (u.&nbsp;a. IP-Adresse, Zeitpunkt, User-Agent,
              referrer) technisch erforderlich verarbeitet werden. Rechtsgrundlage: Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an sicherem und stabilem Betrieb).
            </p>
            <p className="mt-2">
              Sofern ein Auftragsverarbeitungsvertrag (AVV) mit dem Hosting-Anbieter erforderlich
              ist, wird dieser vor produktivem Einsatz abgeschlossen. Details zum konkreten
              Anbieter und Speicherort werden hier nach Go-Live ergänzt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">4. Kontaktaufnahme</h2>
            <p className="mt-3">
              Wenn Sie uns per E-Mail, Telefon oder über das Kontaktformular (mailto-Weiterleitung)
              kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten zur Bearbeitung der
              Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
              Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: bis zur Erledigung der Anfrage und darüber
              hinaus gemäß gesetzlicher Aufbewahrungsfristen, soweit einschlägig.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">5. Cookies & Analytics</h2>
            <p className="mt-3">
              Aktuell setzen wir keine nicht-essentiellen Cookies und kein Tracking-/Analytics-Tool
              ein (Platzhalter). Sollten später Analyse-Dienste (z.&nbsp;B. Vercel Analytics,
              Plausible, Matomo) aktiviert werden, werden Zweck, Anbieter, Rechtsgrundlage und —
              soweit erforderlich — Einwilligung hier beschrieben und technisch umgesetzt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">6. Ihre Rechte</h2>
            <p className="mt-3">
              Sie haben nach Maßgabe der DSGVO insbesondere Rechte auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen
              Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Zudem besteht ein
              Beschwerderecht bei einer Aufsichtsbehörde, z.&nbsp;B. der Berliner Beauftragten für
              Datenschutz und Informationsfreiheit.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">7. Speicherdauer</h2>
            <p className="mt-3">
              Wir löschen personenbezogene Daten, sobald der Zweck der Speicherung entfällt und
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">8. Weitergabe / Drittlandtransfer</h2>
            <p className="mt-3">
              Eine Weitergabe erfolgt nur, soweit gesetzlich erlaubt oder Sie eingewilligt haben.
              Bei Einsatz von US-Anbietern (z.&nbsp;B. Hosting) können Daten in Drittländer
              übermittelt werden; in diesem Fall achten wir auf geeignete Garantien (z.&nbsp;B.
              Standardvertragsklauseln) — Details folgen nach finaler Anbieterwahl.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">9. Aktualität</h2>
            <p className="mt-3">
              Stand: November 2026. Wir passen diese Erklärung an, sobald sich Technik, Hosting oder
              eingesetzte Dienste ändern.
            </p>
          </section>

          <p className="text-xs text-ink/50">
            Hinweis: Diese Datenschutzerklärung ist eine Start-Vorlage mit Platzhaltern und ersetzt
            keine Rechtsberatung.
          </p>
        </div>
      </div>
    </article>
  );
}
