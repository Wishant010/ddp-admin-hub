"use client";

import { ReviewForm } from "@/components/Reviews";

export function LeaveReviewSection() {
  return (
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
  );
}
