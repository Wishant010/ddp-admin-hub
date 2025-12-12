"use client";

import { Heart, Users, Target, Award } from "lucide-react";
import { SpotlightCard } from "@/components/reactbits";

const values = [
  {
    icon: Heart,
    title: "Passie voor cijfers",
    description: "Administratie is voor mij geen saaie klus, maar een puzzel die ik graag oplos.",
  },
  {
    icon: Users,
    title: "Persoonlijk contact",
    description:
      "Bij mij geen callcenters of wisselende aanspreekpunten. Je hebt altijd direct contact met mij.",
  },
  {
    icon: Target,
    title: "Nuchtere aanpak",
    description: "Geen onnodige poespas of ingewikkelde termen. Gewoon duidelijk advies.",
  },
  {
    icon: Award,
    title: "Betrouwbaar",
    description: "Ik sta voor kwaliteit en nauwkeurigheid. Je administratie is in goede handen.",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Waar ik voor sta</h2>
          <p className="text-muted-foreground">
            Mijn waarden vormen de basis van hoe ik werk en met klanten omga.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <SpotlightCard key={value.title} className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-all duration-300">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
