"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Eye,
  FileText,
  Handshake,
  MonitorCheck,
  Settings2,
  UserRound,
} from "lucide-react";

// =============================================================================
// USP PILLS
// =============================================================================
function UspPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      className="inline-flex h-11 items-center gap-2 rounded-full border border-[#DCEAF5] bg-white px-4 text-sm font-medium text-[#334A62]"
      style={{ boxShadow: "0 5px 18px rgba(25, 70, 105, 0.045)" }}
    >
      <span className="text-[#18B99C]">{icon}</span>
      {text}
    </div>
  );
}

// =============================================================================
// MONEYBIRD SAMENWERKING VISUAL
// Laptop met online administratie + telefoon + statuskaarten.
// Geen fictieve DRFA-software: Moneybird is het boekhoudpakket, DRFA kijkt mee.
// =============================================================================
function MoneybirdVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 8, y: -x * 8 });
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[560px] perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {/* Zachte radial glow achter de visual */}
      <div
        className="absolute inset-[-15%]"
        style={{ background: "radial-gradient(circle, rgba(38, 157, 243, 0.09), transparent 68%)" }}
      />

      {/* Laptop */}
      <div
        className="relative pt-6 pb-10 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative mx-auto w-[min(100%,440px)]">
          <div className="rounded-t-xl bg-slate-800 p-2 shadow-2xl">
            <div className="aspect-[16/10] overflow-hidden rounded-lg bg-white">
              {/* Vensterbalk */}
              <div className="flex items-center gap-2 border-b border-slate-100 bg-[#F6FAFD] px-3 py-1.5">
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                </div>
                <div className="ml-1 rounded-md border border-slate-100 bg-white px-2 py-0.5 text-[8px] font-semibold text-[#102A4A]">
                  Moneybird administratie
                </div>
              </div>

              <div className="flex h-full flex-col p-3 pb-8">
                {/* Kop met status */}
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-bold text-[#102A4A]">Overzicht</div>
                  <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[7px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Bijgewerkt vandaag
                  </div>
                </div>

                {/* Generieke cijfers: omzet / kosten / resultaat */}
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {[
                    { label: "Omzet", width: "85%" },
                    { label: "Kosten", width: "55%" },
                    { label: "Resultaat", width: "70%" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-slate-100 bg-[#F9FCFE] p-2">
                      <div className="text-[7px] font-medium text-slate-400">{stat.label}</div>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: stat.width,
                            background: "linear-gradient(90deg, #249BF4, #22CDAE)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Grafiek */}
                <div className="mt-2 h-14 rounded-lg bg-[#F6FAFD] p-2">
                  <div className="flex h-full items-end gap-1">
                    {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 65, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${h}%`,
                          background: "linear-gradient(180deg, #249BF4cc, #22CDAEcc)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Administratie-status */}
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-1.5 rounded-md bg-emerald-50/70 px-2 py-1">
                    <Check className="h-2.5 w-2.5 text-emerald-500" />
                    <span className="text-[7px] font-medium text-slate-600">12 documenten verwerkt</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md bg-sky-50/70 px-2 py-1">
                    <FileText className="h-2.5 w-2.5 text-sky-500" />
                    <span className="text-[7px] font-medium text-slate-600">3 openstaande facturen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-3 w-[calc(100%+16px)] max-w-[460px] rounded-b-lg bg-slate-700 shadow-lg" />
        </div>

        {/* Telefoon: klant voegt online een bonnetje toe */}
        <div className="absolute bottom-2 left-0 w-[104px] sm:left-2" style={{ transform: "translateZ(50px)" }}>
          <div className="rounded-2xl bg-slate-900 p-1.5 shadow-xl">
            <div className="mx-auto mb-1 h-1 w-6 rounded-full bg-slate-700" />
            <div className="aspect-[9/14] overflow-hidden rounded-xl bg-[#F6FAFD]">
              <div className="flex h-full flex-col items-center justify-center gap-2 p-2">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
                  style={{ background: "linear-gradient(135deg, #249BF4, #22CDAE)" }}
                >
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-center">
                  <div className="text-[7px] font-bold text-[#102A4A]">Bonnetje toegevoegd</div>
                  <div className="text-[6px] text-slate-500">Direct in je administratie</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kaart: administratie bijgewerkt */}
        <div
          className="absolute right-0 top-0 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-lg sm:right-2"
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
            <Check className="h-3.5 w-3.5 text-emerald-500" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#102A4A]">Administratie bijgewerkt</div>
            <div className="text-[8px] text-slate-500">Klaar voor controle</div>
          </div>
        </div>

        {/* Chip: DRFA kijkt mee */}
        <div
          className="absolute bottom-6 right-0 flex items-center gap-1.5 rounded-full border border-slate-100 bg-white px-3 py-1.5 shadow-md sm:right-4"
          style={{ transform: "translateZ(40px)" }}
        >
          <Eye className="h-3.5 w-3.5 text-[#249BF4]" />
          <span className="text-[10px] font-semibold text-[#334A62]">DRFA kijkt mee</span>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// DE 3 STAPPEN
// Statische proces-uitleg: alle stappen zijn "compleet" zichtbaar.
// =============================================================================
const START_STEPS = [
  {
    number: "01",
    icon: Handshake,
    title: "Kennismaken",
    subtitle: "We bespreken jouw onderneming",
    detail: "We bekijken hoe je administratie nu geregeld is en wat jij nodig hebt.",
    numberColor: "#249BF4",
    featured: false,
  },
  {
    number: "02",
    icon: Settings2,
    title: "Moneybird inrichten",
    subtitle: "Alles goed ingesteld",
    detail: "We zorgen samen dat je administratie goed staat en dat DRFA toegang heeft om met je mee te werken.",
    numberColor: "#22CDAE",
    featured: true,
  },
  {
    number: "03",
    icon: MonitorCheck,
    title: "Samen verder",
    subtitle: "Online inzicht, wij kijken mee",
    detail: "Je administratie blijft online beschikbaar. Jij houdt overzicht en DRFA verwerkt, controleert en ondersteunt waar nodig.",
    numberColor: "#249BF4",
    featured: false,
  },
];

function StepIcon({ icon: Icon, featured }: { icon: typeof Handshake; featured: boolean }) {
  return (
    <div
      className={`flex h-[58px] w-[58px] items-center justify-center rounded-[17px] text-white ${
        featured ? "ring-4 ring-[#22CDAE]/15" : ""
      }`}
      style={{
        background: "linear-gradient(135deg, #249BF4, #22CDAE)",
        boxShadow: "0 10px 26px rgba(34, 155, 208, 0.16)",
      }}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}

function StepsDesktop() {
  return (
    <div className="relative mt-20 hidden md:block">
      {/* Connector: dunne lijn met gradient (proces-uitleg, geen progress bar) */}
      <div className="absolute left-[16.67%] right-[16.67%] top-[57px] h-[2px] bg-[#DFEAF2]">
        <div
          className="h-full w-full"
          style={{ background: "linear-gradient(90deg, #249DF3, #21CBAF)" }}
        />
      </div>

      <div className="relative grid grid-cols-3 gap-8">
        {START_STEPS.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            <div
              className="mb-2 text-sm font-extrabold tracking-[0.08em]"
              style={{ color: step.numberColor }}
            >
              {step.number}
            </div>
            <div className="relative z-10">
              <StepIcon icon={step.icon} featured={step.featured} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#102A4A]">{step.title}</h3>
            <p className="mt-1 text-sm font-semibold text-[#344B63]">{step.subtitle}</p>
            <p className="mt-2 max-w-[300px] text-sm leading-relaxed text-[#65778A]">{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepsMobile() {
  return (
    <div className="relative mt-14 md:hidden">
      {/* Verticale connector */}
      <div className="absolute bottom-8 left-[28px] top-8 w-[2px] bg-[#DFEAF2]">
        <div
          className="h-full w-full"
          style={{ background: "linear-gradient(180deg, #249DF3, #21CBAF)" }}
        />
      </div>

      <div className="relative space-y-8">
        {START_STEPS.map((step) => (
          <div key={step.number} className="flex gap-5">
            <div className="relative z-10 shrink-0">
              <StepIcon icon={step.icon} featured={step.featured} />
            </div>
            <div className="pt-1">
              <div
                className="text-xs font-extrabold tracking-[0.08em]"
                style={{ color: step.numberColor }}
              >
                {step.number}
              </div>
              <h3 className="mt-0.5 text-lg font-bold text-[#102A4A]">{step.title}</h3>
              <p className="mt-0.5 text-sm font-semibold text-[#344B63]">{step.subtitle}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#65778A]">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION — "Zo starten we samen"
// Kernboodschap: jij houdt overzicht in Moneybird, DRFA zorgt dat je
// administratie goed staat en blijft kloppen.
// =============================================================================
export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 pb-20 pt-24 md:px-8 md:pb-[95px] md:pt-[110px]"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8FCFF 100%)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Bovenste gedeelte: tekst links, Moneybird visual rechts */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          {/* Links: tekst en CTA's */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-[42px] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#102A4A] md:text-[48px] lg:text-[54px]">
              Zo starten we{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #269CF4 0%, #22CDAE 100%)" }}
              >
                samen
              </span>
            </h2>

            <p className="mt-5 text-lg leading-[1.55] text-[#344B63] [font-weight:650]">
              In 3 duidelijke stappen naar een administratie die goed staat en online inzichtelijk blijft.
            </p>

            <p className="mt-4 max-w-[600px] text-[16px] leading-[1.75] text-[#65778A] md:text-[17px]">
              We beginnen met een korte kennismaking, richten daarna samen je Moneybird-administratie
              goed in en zorgen dat je boekhouding vanaf dat moment overzichtelijk blijft. Jij houdt
              online inzicht, wij kijken mee en helpen waar nodig.
            </p>

            {/* USP pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              <UspPill icon={<Handshake className="h-4 w-4" />} text="Gratis & vrijblijvend kennismaken" />
              <UspPill icon={<Settings2 className="h-4 w-4" />} text="Moneybird samen ingericht" />
              <UspPill icon={<UserRound className="h-4 w-4" />} text="Persoonlijk contact" />
            </div>

            {/* CTA's */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-[15px] px-[26px] font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-105"
                style={{ background: "linear-gradient(90deg, #249BF4, #20CDA9)" }}
              >
                Plan kennismaking
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#pakketten"
                className="inline-flex h-[54px] items-center justify-center rounded-[15px] border-[1.5px] border-[#BFD2E2] bg-white/60 px-[26px] font-semibold text-[#174A6D] transition-all duration-300 hover:border-[#249BF4] hover:bg-white"
              >
                Bekijk pakketten
              </Link>
            </div>

            {/* Trustline voor bestaande Moneybird-gebruikers */}
            <p className="mt-5 flex items-center gap-1.5 text-[13px] text-[#73869A]">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#18B99C]" />
              Werk je al met Moneybird? Geen probleem — dan sluiten we aan op je bestaande administratie.
            </p>
          </div>

          {/* Rechts: Moneybird samenwerking visual */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <MoneybirdVisual />
          </div>
        </div>

        {/* Onderin: de drie stappen */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <StepsDesktop />
          <StepsMobile />
        </div>
      </div>
    </section>
  );
}
