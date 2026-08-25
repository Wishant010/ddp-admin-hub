"use client";

import { ReviewsList, StarRating } from "@/components/Reviews";

export function ReviewsSection() {
  return (
    <section className="bg-gradient-to-br from-sky-100 via-sky-50 to-blue-50 py-20 md:py-28">
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
      </div>
    </section>
  );
}
