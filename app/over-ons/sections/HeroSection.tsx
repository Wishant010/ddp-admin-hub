"use client";

import { BlurText } from "@/components/reactbits";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-secondary via-background to-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <BlurText
            text="Over Administratiekantoor DDP"
            className="justify-center text-4xl font-bold md:text-5xl mb-6"
            delay={80}
            animateBy="words"
          />
          <p
            className="text-lg text-muted-foreground opacity-0 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            Leer de persoon achter de cijfers kennen.
          </p>
        </div>
      </div>
    </section>
  );
}
