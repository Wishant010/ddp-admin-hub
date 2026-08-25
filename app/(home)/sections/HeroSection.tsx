"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Clock3,
  ShieldCheck,
  UserRound,
  Check,
} from "lucide-react";

// =============================================================================
// HERO HEADER
// =============================================================================
function HeroHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#top" },
    { label: "Pakketten", href: "#pakketten" },
    { label: "Over ons", href: "#over-ons" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0F2F4F]/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1320px] items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Logo + Tekst - Links */}
        <Link href="#top" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="DRFA Logo"
            width={96}
            height={96}
            className="h-12 w-12 rounded-full bg-white p-1 shadow-md"
          />
          <span className="hidden text-lg font-semibold tracking-tight text-white xl:text-xl sm:block lg:hidden xl:block">
            Administratiekantoor DRFA
          </span>
        </Link>

        {/* Desktop Navigation - Gecentreerd */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-base font-medium text-white/85 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA's - Rechts */}
        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <Link
            href="#pakketten"
            className="whitespace-nowrap rounded-full border border-white/35 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 xl:px-6"
          >
            Bekijk pakketten
          </Link>
          <Link
            href="#contact"
            className="whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:brightness-105 xl:px-6"
            style={{
              background: "linear-gradient(90deg, #29A8FF 0%, #27D3B2 100%)",
              boxShadow: "0 10px 30px rgba(26, 133, 220, 0.22)",
            }}
          >
            Offerte aanvragen
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F2F4F] lg:hidden">
          <div className="flex h-full flex-col">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-white transition-transform hover:rotate-90 duration-300"
                aria-label="Sluit menu"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-1 flex-col justify-center px-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between border-b border-white/10 py-5 text-2xl font-medium text-white"
                >
                  {item.label}
                  <ChevronRight className="h-6 w-6 opacity-50 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>

            {/* Mobile CTA's */}
            <div className="space-y-4 p-8">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-full py-4 text-center text-lg font-semibold text-white shadow-lg"
                style={{
                  background: "linear-gradient(90deg, #29A8FF 0%, #27D3B2 100%)",
                }}
              >
                Offerte aanvragen
              </Link>
              <Link
                href="#pakketten"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-full border-2 border-white/30 py-4 text-center text-lg font-semibold text-white"
              >
                Bekijk pakketten
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// =============================================================================
// ORGANISCHE WITTE CURVE ONDERAAN DE HERO
// =============================================================================
function HeroWave() {
  return (
    <svg
      viewBox="0 0 1440 180"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[-1px] left-0 z-[3] block w-full h-[clamp(95px,11vw,180px)]"
    >
      <path
        d="M0,148
           C120,120 245,62 430,56
           C625,50 770,84 925,108
           C1080,132 1235,136 1340,119
           C1385,112 1415,106 1440,108
           L1440,181
           L0,181
           Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// =============================================================================
// BENEFIT CARDS - verbinden de curve met de volgende witte sectie
// =============================================================================
const BENEFITS = [
  {
    icon: Clock3,
    title: "Snelle reactie",
    description: "Binnen 24 uur antwoord",
  },
  {
    icon: ShieldCheck,
    title: "Betrouwbaar",
    description: "Transparant & eerlijk",
  },
  {
    icon: UserRound,
    title: "Persoonlijk contact",
    description: "Altijd dezelfde adviseur",
  },
  {
    icon: Check,
    title: "Geen verrassingen",
    description: "Vaste maandprijs",
  },
] as const;

function BenefitCards() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-16">
        <div className="relative pt-7 md:pt-9">
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.18em] text-[#2685E8]">
            Waarom ondernemers kiezen voor DRFA
          </p>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-[20px] border border-[#193E64]/[0.06] bg-white px-6 py-7 text-center shadow-[0_10px_30px_rgba(31,58,88,0.07),0_2px_6px_rgba(31,58,88,0.025)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(31,58,88,0.10),0_3px_8px_rgba(31,58,88,0.04)]"
                >
                  <div
                    className="mx-auto mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full text-white"
                    style={{
                      background: "linear-gradient(135deg, #29AAFF, #27D5B1)",
                    }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={2} />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#17345B]">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#6D7A8D]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// MAIN HERO SECTION
// =============================================================================
export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-[#0F2F4F] md:min-h-[800px]">
        {/* Achtergrondfoto: laptop, jaarrekening, calculator rechts in beeld */}
        <Image
          src="/4533a709-6886-4af7-accd-7f16fe6b8b67.png"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[68%_center] md:object-[62%_center]"
        />

        {/* Blauwe gradient-overlay: links sterk, rechts vrijwel transparant (desktop) */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,55,97,0.96) 0%, rgba(19,66,108,0.90) 20%, rgba(34,78,119,0.70) 40%, rgba(41,76,110,0.38) 58%, rgba(30,55,80,0.12) 75%, rgba(15,30,45,0.02) 100%)",
          }}
        />
        {/* Sterkere overlay op mobile voor leesbaarheid */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,45,80,0.96) 0%, rgba(20,60,100,0.83) 55%, rgba(20,60,100,0.50) 100%)",
          }}
        />
        {/* Heel subtiele verticale gradient zodat het onderste deel rustiger wordt */}
        <div
          className="absolute inset-x-0 bottom-0 h-44"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,47,79,0) 0%, rgba(15,47,79,0.16) 100%)",
          }}
        />

        {/* Header */}
        <HeroHeader />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 pt-32 pb-40 sm:px-10 md:pt-40 md:pb-60 lg:px-16 lg:pt-44">
          <div className="max-w-[700px]">
            {/* Headline */}
            <h1
              className="animate-fade-in-up text-[42px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-[52px] lg:text-[64px]"
              style={{ animationFillMode: "both" }}
            >
              <span className="bg-gradient-to-r from-[#30A9FF] to-[#29D4B8] bg-clip-text text-transparent">
                Boekhouding
              </span>{" "}
              die de
              <br className="hidden sm:block" /> moeilijke kant
              <br className="hidden sm:block" />{" "}
              <span className="bg-gradient-to-r from-[#30A9FF] to-[#29D4B8] bg-clip-text text-transparent">
                makkelijk
              </span>{" "}
              maakt
            </h1>

            {/* Subtekst */}
            <p
              className="animate-fade-in-up mt-7 max-w-[540px] text-[17px] leading-[1.7] text-white/[0.82] lg:text-[18px]"
              style={{ animationDelay: "0.15s", animationFillMode: "both" }}
            >
              Voor zzp&apos;ers en eenmanszaken. Van boekhouding en BTW-aangifte
              tot jaarcijfers en advies — duidelijk en op tijd.
            </p>

            {/* CTA-rij */}
            <div
              className="animate-fade-in-up mt-8 flex flex-col gap-6 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              <Link
                href="#contact"
                className="group inline-flex h-[56px] items-center justify-center gap-2 self-start rounded-full px-7 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:brightness-105"
                style={{
                  background: "linear-gradient(90deg, #29A8FF 0%, #27D3B2 100%)",
                  boxShadow: "0 10px 30px rgba(26, 133, 220, 0.22)",
                }}
              >
                Offerte aanvragen
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <div className="flex items-center gap-5">
                <span
                  className="hidden h-10 w-px bg-white/25 sm:block"
                  aria-hidden="true"
                />
                <div className="text-sm leading-5">
                  <p className="font-semibold text-white/90">
                    Gratis kennismakingsgesprek
                  </p>
                  <p className="text-white/60">
                    Vrijblijvend &amp; zonder verplichtingen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeroWave />
      </section>

      <BenefitCards />
    </>
  );
}
