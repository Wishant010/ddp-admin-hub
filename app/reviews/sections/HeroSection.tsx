"use client";

import { StarRating } from "@/components/Reviews";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-secondary via-background to-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <StarRating rating={5} size="lg" />
            <span className="text-lg font-semibold text-muted-foreground">4.9 / 5</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-up">
            Klantbeoordelingen
          </h1>
          <p
            className="text-lg text-muted-foreground animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            Ontdek wat andere ondernemers zeggen over onze dienstverlening.
          </p>
        </div>
      </div>
    </section>
  );
}
