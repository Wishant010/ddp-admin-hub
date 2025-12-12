"use client";

import { PricingCards } from "@/components/PricingCards";

export function PackagesSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28
      bg-gradient-to-b from-[#0B3772] via-[#0A2F66] to-[#082A5B]">

      {/* Top edge - wave coming from white section above */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden z-[1]">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[100px] sm:h-[150px] md:h-[200px]"
          preserveAspectRatio="none"
        >
          <path
            d="M1440 0 L1440 0 Q1440 200 1040 200 L0 200 L0 0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container relative z-[2] pt-16 md:pt-24">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-white">
            Onze pakketten
          </h2>
          <p className="text-lg text-white/70">
            Kies het pakket dat bij jouw situatie past. Upgraden kan altijd.
          </p>
        </div>

        <PricingCards />
      </div>

      {/* Bottom edge - curve on the left like Hero */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-[1]">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[100px] sm:h-[150px] md:h-[200px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 L0 200 Q0 0 400 0 L1440 0 L1440 200 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
