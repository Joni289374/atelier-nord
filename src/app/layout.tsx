import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Atelier Nord — Ein Ansprechpartner für Auftritt und Umsetzung",
    template: "%s · Atelier Nord",
  },
  description:
    "Lokales Full-Service Design für KMU in Berlin: CI-Pakete, Gastro-Karten (Print + QR) und Fahrzeugbranding über Folier-Partner.",
  openGraph: {
    title: "Atelier Nord",
    description:
      "Ein Ansprechpartner für Auftritt und Umsetzung — CI, Gastro und Fahrzeug für KMU.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
