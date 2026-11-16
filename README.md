# Atelier Nord

Marketing-Website für **Atelier Nord** — lokales Full-Service Design für KMU (CI-Pakete, Gastro-Karten Print+QR, Fahrzeugbranding via Folier-Partner).

Stack: **Next.js (App Router) · TypeScript · Tailwind CSS**

## Lokal starten

```bash
npm install
npm run dev
```

Öffnen: [http://localhost:3000](http://localhost:3000)

Weitere Scripts:

```bash
npm run build   # Produktions-Build
npm run start   # Build lokal serven
npm run lint    # ESLint
```

## Vercel verbinden (3 Schritte)

1. Auf [vercel.com/new](https://vercel.com/new) einloggen und **Import Git Repository** wählen.
2. Das GitHub-Repo dieses Projekts auswählen (Framework Preset: **Next.js**, Root Directory: `.`, Build Command / Output: Vercel-Defaults belassen).
3. **Deploy** klicken — danach deployst jeder Push auf `main` automatisch neu.

Kein `vercel.json` nötig: Next.js-Defaults reichen.

## Seiten

| Route | Inhalt |
| --- | --- |
| `/` | Hero, Leistungen, Arbeitsweise, Beispiel-Designs, Kontakt |
| `/impressum` | Anbieterkennzeichnung (TMG/DDG-Stil) |
| `/datenschutz` | DSGVO-Vorlage inkl. Hosting/Analytics-Platzhalter |

## Kontakt-Platzhalter

- hello@atelier-nord.de
- +49 30 12345678

## Hinweis

Portfolio-Bilder unter `public/portfolio/` sind Konzept-Mockups für den Markenauftritt.
