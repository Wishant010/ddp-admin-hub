"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewsList, StarRating } from "@/components/Reviews";

export function ReviewsSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-1">
            <StarRating rating={5} size="lg" />
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Wat klanten zeggen</h2>
          <p className="text-lg text-muted-foreground">
            Lees de ervaringen van ondernemers die ons voorgingen.
          </p>
        </div>
        <ReviewsList limit={3} />
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/reviews">
              Alle reviews bekijken
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
