"use client";

import { CheckCircle } from "lucide-react";
import { SpotlightCard, GradientText } from "@/components/reactbits";

const features = [
  {
    title: "Persoonlijk contact",
    description: "Korte lijnen en altijd een direct aanspreekpunt. Geen callcenters, gewoon Denny.",
  },
  {
    title: "Geen jargon",
    description: "We leggen alles uit in begrijpelijke taal. Geen verrassingen of ingewikkelde termen.",
  },
  {
    title: "Transparante prijzen",
    description: "Vaste maandprijzen zonder verborgen kosten. Je weet precies waar je aan toe bent.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Waarom kiezen voor <GradientText text="DDP" className="font-bold" />?
          </h2>
          <p className="text-lg text-muted-foreground">
            Persoonlijke aandacht, heldere communicatie en een administratie die gewoon klopt.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <SpotlightCard key={feature.title} className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <CheckCircle className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
