import { Arbeitsweise } from "@/components/Arbeitsweise";
import { Beispiele } from "@/components/Beispiele";
import { Hero } from "@/components/Hero";
import { Kontakt } from "@/components/Kontakt";
import { Leistungen } from "@/components/Leistungen";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Leistungen />
      <Arbeitsweise />
      <Beispiele />
      <Kontakt />
    </>
  );
}
