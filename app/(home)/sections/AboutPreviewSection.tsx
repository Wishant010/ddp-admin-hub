"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  Clock,
  Eye,
  FileCheck,
  MessageCircle,
  Receipt,
  TrendingUp,
} from "lucide-react";
import CountUp from "@/components/reactbits/CountUp";
import { ServiceDrawer, type ServiceKey } from "@/components/ServiceDrawer";

// =============================================================================
// STAT CARD - Animated stat with CountUp
// =============================================================================
interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  icon: React.ReactNode;
}

function StatCard({ value, suffix = "", label, delay = 0, icon }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-[18px] border border-[#164068]/[0.07] bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(22,64,104,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(22,64,104,0.09)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDF7FF] text-[#2489E8]">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold leading-none text-[#132C49]">
          <CountUp to={value} duration={2} delay={delay} suffix={suffix} />
        </div>
        <p className="mt-1 text-xs text-[#718196]">{label}</p>
      </div>
    </div>
  );
}

// =============================================================================
// DEVICE STACK - 3D tilting devices
// =============================================================================
function DeviceStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 15, y: -x * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[320px] w-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Laptop */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(-50%, -50%) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative">
          {/* Laptop Screen */}
          <div className="relative mx-auto w-[360px] rounded-t-xl bg-slate-800 p-2 shadow-2xl">
            <div className="aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br from-[#0B3772] via-[#0A4488] to-[#0B3772]">
              {/* Dashboard mockup content */}
              <div className="flex h-full flex-col p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded bg-white/20" />
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-emerald-400/60" />
                    <div className="h-2 w-2 rounded-full bg-sky-400/60" />
                  </div>
                </div>
                {/* Stats row */}
                <div className="mt-4 flex gap-2">
                  <div className="flex-1 rounded-lg bg-white/10 p-2.5">
                    <div className="h-2 w-8 rounded bg-white/30" />
                    <div className="mt-2 h-4 w-12 rounded bg-emerald-400/50" />
                  </div>
                  <div className="flex-1 rounded-lg bg-white/10 p-2.5">
                    <div className="h-2 w-8 rounded bg-white/30" />
                    <div className="mt-2 h-4 w-10 rounded bg-sky-400/50" />
                  </div>
                  <div className="flex-1 rounded-lg bg-white/10 p-2.5">
                    <div className="h-2 w-8 rounded bg-white/30" />
                    <div className="mt-2 h-4 w-14 rounded bg-white/40" />
                  </div>
                </div>
                {/* Chart area */}
                <div className="mt-3 flex-1 rounded-lg bg-white/5 p-3">
                  <div className="flex h-full items-end gap-1.5">
                    {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 50, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-sky-400/60 to-emerald-400/60"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Laptop Base */}
          <div className="mx-auto h-3 w-[380px] rounded-b-lg bg-slate-700 shadow-lg" />
          <div className="mx-auto h-1 w-[420px] rounded-b-xl bg-slate-600" />
        </div>
      </div>

      {/* Tablet - positioned to the right and below */}
      <div
        className="absolute right-0 bottom-8 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x * 0.8}deg) rotateY(${tilt.y * 0.8}deg) translateZ(40px)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="w-[180px] rounded-2xl bg-slate-800 p-2 shadow-xl">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-sky-50">
            {/* BTW Overzicht mockup */}
            <div className="flex h-full flex-col p-3">
              <div className="mb-2 text-[8px] font-semibold text-slate-600">BTW Overzicht</div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between rounded bg-slate-50 p-1.5">
                  <div className="h-1.5 w-12 rounded bg-slate-300" />
                  <div className="text-[7px] font-medium text-emerald-600">€2.450</div>
                </div>
                <div className="flex items-center justify-between rounded bg-slate-50 p-1.5">
                  <div className="h-1.5 w-10 rounded bg-slate-300" />
                  <div className="text-[7px] font-medium text-sky-600">€1.830</div>
                </div>
                <div className="flex items-center justify-between rounded bg-emerald-50 p-1.5">
                  <div className="h-1.5 w-14 rounded bg-emerald-200" />
                  <div className="text-[7px] font-bold text-emerald-700">€620</div>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-center gap-1 rounded-lg bg-emerald-500 py-1.5 text-[7px] font-medium text-white">
                <Check className="h-2.5 w-2.5" />
                Ingediend
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone - positioned to the left */}
      <div
        className="absolute left-4 bottom-16 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x * 0.6}deg) rotateY(${tilt.y * 0.6}deg) translateZ(60px)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="w-[100px] rounded-2xl bg-slate-900 p-1.5 shadow-xl">
          {/* Phone notch */}
          <div className="mx-auto mb-1 h-1 w-8 rounded-full bg-slate-700" />
          <div className="aspect-[9/16] overflow-hidden rounded-xl bg-sky-50">
            {/* Phone content */}
            <div className="flex h-full flex-col items-center justify-center p-2">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                <Check className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="text-center">
                <div className="text-[7px] font-semibold text-slate-800">Bonnetje</div>
                <div className="text-[6px] text-slate-500">verwerkt ✅</div>
              </div>
              <div className="mt-3 w-full space-y-1">
                <div className="h-1 w-full rounded bg-slate-100" />
                <div className="h-1 w-3/4 rounded bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// =============================================================================
// SERVICE STRIP - rustige rij met vier diensten
// =============================================================================
const SERVICES = [
  {
    key: "administratie" as ServiceKey,
    icon: Receipt,
    title: "Administratie",
    description: "Je volledige boekhouding netjes bijgewerkt en altijd inzichtelijk.",
  },
  {
    key: "btw" as ServiceKey,
    icon: FileCheck,
    title: "BTW-aangifte",
    description: "Elke kwartaalaangifte correct en op tijd ingediend.",
  },
  {
    key: "jaarcijfers" as ServiceKey,
    icon: BarChart3,
    title: "Jaarcijfers",
    description: "Heldere jaarrekening en aangifte inkomstenbelasting.",
  },
  {
    key: "advies" as ServiceKey,
    icon: MessageCircle,
    title: "Advies",
    description: "Persoonlijk advies zonder ingewikkelde taal.",
  },
] as const;

function ServiceStrip() {
  const [activeService, setActiveService] = useState<ServiceKey | null>(null);

  return (
    <div className="mt-14 border-t border-[#EDF1F5] md:mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`p-7 lg:p-8 ${
                index < SERVICES.length - 1 ? "lg:border-r lg:border-[#E8EEF5]" : ""
              } ${index % 2 === 0 ? "sm:border-r sm:border-[#E8EEF5] lg:border-r" : ""} ${
                index === SERVICES.length - 1 ? "sm:border-r-0 lg:border-r-0" : ""
              }`}
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#EDF7FF] text-[#2489E8]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h4 className="mt-4 text-[17px] font-bold text-[#173653]">{service.title}</h4>
              <p className="mt-1.5 text-sm leading-[1.6] text-[#718196]">{service.description}</p>
              <button
                type="button"
                onClick={() => setActiveService(service.key)}
                className="group mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#278CE9] transition-colors hover:text-[#1c6fc0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#289FF4] rounded"
              >
                Meer informatie
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>

      <ServiceDrawer service={activeService} onClose={() => setActiveService(null)} />
    </div>
  );
}

// =============================================================================
// MAIN ABOUT PREVIEW SECTION
// =============================================================================
export function AboutPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { text: "Vaste contactpersoon die je situatie kent" },
    { text: "Altijd inzicht in je administratie" },
    { text: "Persoonlijk advies zonder ingewikkelde taal" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white pt-20 pb-6 md:pt-[90px] md:pb-8"
    >
      {/* Zeer subtiele decoratieve outline-iconen aan de zijkanten */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <Receipt className="absolute top-[18%] left-[4%] h-16 w-16 rotate-[-10deg] text-[#2D9CFF] opacity-10" />
        <TrendingUp className="absolute bottom-[30%] left-[6%] h-14 w-14 rotate-[6deg] text-[#25CDB2] opacity-10" />
        <Clock className="absolute top-[24%] right-[5%] h-14 w-14 rotate-[10deg] text-[#2D9CFF] opacity-10" />
        <Eye className="absolute bottom-[38%] right-[4%] h-12 w-12 rotate-[-8deg] text-[#25CDB2] opacity-10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 sm:px-10">
        {/* ============ TOP: Centered Introduction ============ */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F2FBF8] px-3.5 py-[7px] text-[13px] font-semibold text-[#17456C]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#20CBAF]" />
            Over ons
          </div>

          {/* Title */}
          <h2 className="mt-4 text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#132C49] md:text-[40px] lg:text-[46px]">
            Over{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #249BF3 0%, #25CBB2 100%)",
              }}
            >
              DRFA Administratiekantoor
            </span>
          </h2>

          {/* Intro text */}
          <p className="mx-auto mt-5 max-w-[700px] text-[17px] leading-[1.65] text-[#6B7C90]">
            Persoonlijke administratieve ondersteuning voor freelancers, zzp&apos;ers en kleine ondernemers.
            Wij nemen het werk uit handen zodat jij kunt ondernemen.
          </p>
        </div>

        {/* ============ MIDDLE: Two Column Grid ============ */}
        <div className="mt-14 grid items-center gap-12 md:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Sub heading */}
            <h3 className="text-[24px] font-extrabold leading-[1.2] text-[#132C49] md:text-[28px]">
              Waarom ondernemers voor ons kiezen
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-[520px] text-base leading-[1.7] text-[#63758A]">
              Met een nuchtere aanpak en persoonlijke aandacht zorgen we dat jouw administratie altijd op orde is.
              Geen ingewikkelde termen, gewoon duidelijke communicatie.
            </p>

            {/* USP-lijst */}
            <div className="mt-6 space-y-3.5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: "linear-gradient(135deg, #2DD7B2, #19B98F)" }}
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-[15px] text-[#3B506A] md:text-base">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`mt-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <Link
                href="#contact"
                className="group inline-flex h-[54px] items-center gap-2 rounded-[14px] px-6 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:brightness-105"
                style={{
                  background: "linear-gradient(90deg, #28A8F5, #24D0AC)",
                  boxShadow: "0 10px 25px rgba(38, 155, 220, 0.18)",
                }}
              >
                Plan een kennismaking
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Right Column - Visual + Stats */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Visual met zachte glow erachter */}
            <div className="relative mx-auto hidden max-w-[560px] md:block">
              <div
                className="absolute left-1/2 top-1/2 h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[10px]"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(circle, rgba(42,170,242,0.10) 0%, rgba(37,205,178,0.06) 45%, transparent 72%)",
                }}
              />
              <div className="relative">
                <DeviceStack />
              </div>
            </div>

            {/* Statistieken */}
            <div
              className={`mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <StatCard
                value={10}
                suffix="+"
                label="jaar ervaring"
                delay={0.3}
                icon={<TrendingUp className="h-5 w-5" />}
              />
              <StatCard
                value={24}
                suffix="u"
                label="responstijd"
                delay={0.5}
                icon={<Clock className="h-5 w-5" />}
              />
              <StatCard
                value={100}
                suffix="%"
                label="overzicht"
                delay={0.7}
                icon={<Eye className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>

        {/* ============ BOTTOM: Service strip ============ */}
        <ServiceStrip />
      </div>
    </section>
  );
}
