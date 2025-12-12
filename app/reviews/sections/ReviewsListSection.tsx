"use client";

import { ReviewsList } from "@/components/Reviews";

export function ReviewsListSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <ReviewsList />
      </div>
    </section>
  );
}
