"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock3,
  ShieldCheck,
  Tag,
  UserRound,
  Zap,
} from "lucide-react";
import { useT } from "@/lib/i18n";

// Iconen per rij; de teksten komen uit de vertalingen (lib/translations.ts)
const BENEFIT_ICONS = [UserRound, Zap, ShieldCheck] as const;
const TRUST_ICONS = [Clock3, UserRound, Tag, Check] as const;

// =============================================================================
// MAIN "OVER DRFA" SECTION
// =============================================================================
export function AboutPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const t = useT();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Zachte blauwe glow bovenaan voor een natuurlijke overgang vanaf de witte benefit cards */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(closest-side, rgba(41,168,255,0.07), rgba(39,211,178,0.04) 55%, transparent)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-16">
        {/* ============ Hoofdcontent: tekst links (±52%), grote visual strak rechts (±48%) ============ */}
        <div className="grid items-stretch gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-14">
          {/* Links: content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DCEAF5] bg-[#F4FAFE] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#17456C]">
              <span className="h-[7px] w-[7px] rounded-full bg-gradient-to-r from-[#249BF4] to-[#22CDAE]" />
              {t.about.badge}
            </div>

            {/* Headline */}
            <h2 className="mt-5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#102A4A] md:text-[38px] lg:text-[42px]">
              {t.about.title1}
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #249BF3 0%, #25CBB2 100%)" }}
              >
                {t.about.title2}
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.75] text-[#65778A] md:text-[17px]">
              {t.about.intro}
            </p>

            {/* Benefit rows met dunne dividers */}
            <div className="mt-8 max-w-[560px] divide-y divide-[#EAF1F7] border-y border-[#EAF1F7]">
              {t.about.benefits.map((benefit, index) => {
                const Icon = BENEFIT_ICONS[index] ?? Check;
                return (
                  <div
                    key={benefit.title}
                    className={`flex items-start gap-4 py-5 transition-all duration-500 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${250 + index * 120}ms` }}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D8EDF2] bg-[#F3FBFA] text-[#1DBFA4]">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-[#132C49]">{benefit.title}</h3>
                      <p className="mt-0.5 text-[14.5px] leading-[1.6] text-[#6B7C90]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div
              className={`mt-8 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "650ms" }}
            >
              <Link
                href="#aanpak"
                className="group inline-flex h-[54px] items-center gap-2 rounded-full px-7 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:brightness-105"
                style={{
                  background: "linear-gradient(90deg, #29A8FF 0%, #27D3B2 100%)",
                  boxShadow: "0 10px 30px rgba(26, 133, 220, 0.22)",
                }}
              >
                {t.about.cta}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Rechts: grote premium workspace visual, full-bleed tegen de rechter schermrand */}
          <div
            className={`relative h-full transition-all duration-700 lg:mr-[calc((min(100vw,1240px)-100vw)/2-4rem)] ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div
              className="relative h-full min-h-[400px] overflow-hidden rounded-[28px] sm:min-h-[480px] lg:rounded-r-none"
              style={{
                boxShadow:
                  "0 30px 70px rgba(11, 55, 114, 0.18), 0 8px 22px rgba(11, 55, 114, 0.10)",
              }}
            >
              <Image
                src="/drfa-workspace.png"
                alt={t.about.imageAlt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                quality={90}
                className="object-cover"
              />
              {/* Heel subtiele navy tint onderin zodat de glass card leesbaar blijft */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
                aria-hidden="true"
                style={{
                  background: "linear-gradient(180deg, transparent, rgba(8,42,91,0.22))",
                }}
              />
            </div>

            {/* Floating glassmorphism stat card */}
            <div
              className={`absolute -bottom-6 right-4 max-w-[270px] rounded-2xl border border-white/15 p-5 backdrop-blur-md transition-all duration-700 sm:right-8 lg:right-20 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: "550ms",
                background: "linear-gradient(135deg, rgba(11,55,114,0.68), rgba(8,42,91,0.78))",
                boxShadow: "0 18px 45px rgba(8, 42, 91, 0.35)",
              }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-[34px] font-extrabold leading-none text-white">
                  {t.about.statNumber}
                </span>
              </div>
              <p className="mt-1.5 text-[13.5px] leading-[1.55] text-white/80">
                {t.about.statText}
              </p>
              <p className="mt-2.5 text-[12.5px] font-semibold tracking-[0.02em] text-[#2FD6BC]">
                {t.about.statTagline}
              </p>
            </div>
          </div>
        </div>

        {/* ============ Trust-strip: brede navy balk met vier kolommen ============ */}
        <div
          className={`mt-20 rounded-[24px] px-6 py-9 transition-all duration-700 md:mt-24 md:px-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{
            transitionDelay: "500ms",
            background: "linear-gradient(105deg, #0B3772 0%, #0A2F66 55%, #082A5B 100%)",
            boxShadow: "0 24px 60px rgba(8, 42, 91, 0.22)",
          }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {t.about.trustItems.map((item, index) => {
              const Icon = TRUST_ICONS[index] ?? Check;
              return (
                <div key={item.title} className="flex items-start gap-4 lg:px-7 lg:first:pl-0 lg:last:pr-0">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-[#3ED4C0]"
                    style={{ boxShadow: "0 0 22px rgba(39, 211, 178, 0.22)" }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-white">{item.title}</h4>
                    <p className="mt-1 text-[13.5px] leading-[1.55] text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
