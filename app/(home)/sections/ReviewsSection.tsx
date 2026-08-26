"use client";

import { ReviewsMarquee, StarRating } from "@/components/Reviews";
import { useT } from "@/lib/i18n";

export function ReviewsSection() {
  const t = useT();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0B3772] via-[#0A2F66] to-[#082A5B]">
      {/* Bovenrand: witte sweep met afgeronde hoek, zelfde motief als de pakketten-sectie */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden z-[1]">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[70px] sm:h-[110px] md:h-[150px]"
          preserveAspectRatio="none"
        >
          <path d="M0 0 Q0 160 380 160 L1440 160 L1440 0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Sfeer: zachte kleurgloed */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 h-[380px] w-[380px] translate-x-1/2 rounded-full bg-emerald-400/15 blur-[120px]" />
      </div>

      <div className="relative z-[2] pt-[120px] pb-[130px] sm:pt-[160px] md:pt-[190px] md:pb-[190px]">
        {/* Compacte kop */}
        <div className="mx-auto mb-8 max-w-2xl px-6 text-center md:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-medium tracking-wide text-sky-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.reviews.badge}
          </span>

          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] text-white md:text-[32px]">
            {t.reviews.titlePre}
            <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent">
              {t.reviews.titleGradient}
            </span>
          </h2>

          {/* Beoordeling in het kort, op één regel */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-slate-300">
            <span className="text-lg font-bold text-white">{t.reviews.score}</span>
            <StarRating rating={5} size="sm" variant="dark" />
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>{t.reviews.recommend}</span>
          </div>
        </div>

        {/* Doorlopende rij reviews over de volledige schermbreedte */}
        <ReviewsMarquee />
      </div>

      {/* Onderrand: witte sweep met afgeronde hoek, gespiegeld */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-[1]">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[70px] sm:h-[110px] md:h-[150px]"
          preserveAspectRatio="none"
        >
          <path d="M1440 160 Q1440 0 1060 0 L0 0 L0 160 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
