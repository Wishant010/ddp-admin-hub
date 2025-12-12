"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Star, ChevronRight } from "lucide-react";

// =============================================================================
// HERO HEADER
// =============================================================================
function HeroHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Pakketten", href: "/pakketten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
            <span className="text-xl font-bold text-white">D</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-semibold text-white">Administratiekantoor DDP</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA's */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="#"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Inloggen
          </Link>
          <Link
            href="/pakketten"
            className="rounded-full border-2 border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            Bekijk pakketten
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-emerald-400"
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
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B3772] lg:hidden">
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
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-full bg-emerald-500 py-4 text-center text-lg font-semibold text-white shadow-lg"
              >
                Offerte aanvragen
              </Link>
              <Link
                href="/pakketten"
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
// DASHBOARD MOCKUP CARD
// =============================================================================
function DashboardMockup() {
  return (
    <div className="w-full max-w-[560px]">
      {/* Tablet Frame */}
      <div className="relative rounded-[28px] bg-slate-900/60 p-3 shadow-2xl ring-1 ring-white/10">
        {/* Screen bezel effect */}
        <div className="absolute left-1/2 top-2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/10" />

        {/* Screen Content */}
        <div className="overflow-hidden rounded-[22px] bg-white/95">
          {/* Dashboard Header */}
          <div className="border-b border-gray-100 bg-gray-50/80 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-400">OVERZICHT</p>
                <h3 className="text-lg font-bold text-gray-900">Dashboard</h3>
              </div>
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-gray-200" />
                <div className="h-3 w-3 rounded-full bg-gray-200" />
                <div className="h-3 w-3 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="space-y-6 p-6">
            {/* Section 1: Openstaande Facturen */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-700">Openstaande facturen</h4>
                <span className="text-xs font-medium text-emerald-500">+12.5%</span>
              </div>

              {/* Stacked Bar */}
              <div className="mb-3 flex h-8 overflow-hidden rounded-lg">
                <div className="bg-emerald-500" style={{ width: "45%" }} />
                <div className="bg-amber-400" style={{ width: "30%" }} />
                <div className="bg-red-500" style={{ width: "25%" }} />
              </div>

              {/* Legend */}
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
                  <span className="text-gray-600">Betaald</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-sm bg-amber-400" />
                  <span className="text-gray-600">In afwachting</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-sm bg-red-500" />
                  <span className="text-gray-600">Verlopen</span>
                </div>
              </div>
            </div>

            {/* Section 2: Winst Chart */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-700">Winst dit jaar</h4>
                <span className="text-lg font-bold text-gray-900">€24.580</span>
              </div>

              {/* Area Chart (Static SVG) */}
              <div className="relative h-24">
                <svg viewBox="0 0 300 80" className="h-full w-full" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="300" y2="20" stroke="#f3f4f6" strokeWidth="1" />
                  <line x1="0" y1="40" x2="300" y2="40" stroke="#f3f4f6" strokeWidth="1" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="#f3f4f6" strokeWidth="1" />

                  {/* Area fill */}
                  <path
                    d="M0,60 Q30,55 60,50 T120,35 T180,25 T240,20 T300,15 L300,80 L0,80 Z"
                    fill="url(#areaGradient)"
                  />

                  {/* Line */}
                  <path
                    d="M0,60 Q30,55 60,50 T120,35 T180,25 T240,20 T300,15"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Month labels */}
                <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-[10px] text-gray-400">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>Jun</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SOCIAL PROOF STRIP
// =============================================================================
function SocialProofStrip() {
  const ratings = [
    { score: "5.0", label: "Google", reviews: "28 reviews" },
    { score: "4.9", label: "Trustpilot", reviews: "45 reviews" },
    { score: "5.0", label: "Facebook", reviews: "19 reviews" },
    { score: "5.0", label: "Klanten", reviews: "50+ reviews" },
  ];

  return (
    <div className="relative z-10 mt-16">
      {/* Title */}
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
        Klanten bevelen Administratiekantoor DDP aan
      </p>

      {/* Rating Cards */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ratings.map((rating) => (
          <div
            key={rating.label}
            className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center backdrop-blur-md transition-all hover:bg-white/15"
          >
            {/* Score + label */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl font-bold text-white">{rating.score}</span>
              <span className="text-sm font-medium text-white/70">Uitstekend</span>
            </div>

            {/* Stars */}
            <div className="mt-2 flex justify-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Source + reviews */}
            <p className="mt-2 text-xs font-medium text-white/70">{rating.label}</p>
            <p className="text-xs text-white/50">{rating.reviews}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// CURVE - Alleen links gebogen, rechts vlak (zoals de schets)
// =============================================================================
function FreshBooksCurve() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block h-[100px] w-full sm:h-[150px] md:h-[200px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 200 L0 200 Q0 0 400 0 L1440 0 L1440 200 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

// =============================================================================
// MAIN HERO SECTION
// =============================================================================
export function HeroSection() {
  return (
    <section className="relative min-h-[820px] overflow-hidden bg-gradient-to-b from-[#0B3772] via-[#0A2F66] to-[#082A5B]">
      {/* Header */}
      <HeroHeader />

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-12 lg:px-8 lg:pt-16">
        {/* Grid: links tekst, rechts mockup */}
        <div className="grid grid-cols-12 items-start gap-10 lg:gap-14">
          {/* Left Column - Text Content */}
          <div className="col-span-12 lg:col-span-6">
            {/* H1 - Grote titel */}
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-6xl xl:text-7xl">
              Boekhouding die de moeilijke kant makkelijk maakt
            </h1>

            {/* Subtekst */}
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              Voor zzp&apos;ers en eenmanszaken. Van boekhouding en BTW-aangifte tot jaarcijfers en advies — duidelijk en op tijd.
            </p>

            {/* CTA Row */}
            <div className="mt-8 flex items-center gap-6">
              {/* Primary Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-emerald-400"
              >
                Offerte aanvragen
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>

              {/* Tekstblok naast knop */}
              <div className="hidden text-xs leading-4 sm:block">
                <p className="font-semibold text-white/80">Binnen 1 werkdag reactie</p>
                <p className="text-white/60">Vanaf €100 per maand</p>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="col-span-12 flex justify-center lg:col-span-6 lg:justify-end">
            <DashboardMockup />
          </div>
        </div>

        {/* Social Proof Strip */}
        <SocialProofStrip />
      </div>

      <FreshBooksCurve />
      <div className="h-[200px]" />
    </section>
  );
}
