"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewsList, ReviewForm, StarRating } from "@/components/Reviews";

export default function Reviews() {
  return (
    <>
      {/* Hero */}
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
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              Ontdek wat andere ondernemers zeggen over onze dienstverlening.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ReviewsList />
        </div>
      </section>

      {/* Leave Review */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">Deel jouw ervaring</h2>
              <p className="text-muted-foreground">
                Ben je klant? We horen graag hoe je onze dienstverlening hebt ervaren.
              </p>
            </div>
            <ReviewForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Overtuigd?</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Word ook een tevreden klant en laat je administratie aan ons over.
          </p>
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">
              Start vandaag
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
