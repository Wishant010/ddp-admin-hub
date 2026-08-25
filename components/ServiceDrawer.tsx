"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  ArrowRight,
  BarChart3,
  Check,
  FileCheck,
  MessageCircle,
  Receipt,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// =============================================================================
// SERVICE DETAIL DATA
// =============================================================================
export type ServiceKey = "administratie" | "btw" | "jaarcijfers" | "advies";

interface ServiceCta {
  label: string;
  target: string; // anchor id zonder #
}

interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  intro: string;
  listTitle: string;
  items: string[];
  secondTitle: string;
  secondText: string;
  highlight: string;
  ctaTitle: string;
  primaryCta: ServiceCta;
  secondaryCta: ServiceCta;
}

const SERVICE_DETAILS: Record<ServiceKey, ServiceDetail> = {
  administratie: {
    icon: Receipt,
    title: "Administratie",
    intro:
      "Je administratie altijd netjes bijgewerkt en volledig inzichtelijk, zonder dat jij er dagelijks mee bezig hoeft te zijn.",
    listTitle: "Wat we voor je regelen",
    items: [
      "Verwerken van inkoop- en verkoopfacturen",
      "Banktransacties verwerken en controleren",
      "Administratie netjes structureren",
      "Periodieke controle van je boekhouding",
      "Inzicht in openstaande posten",
      "Vragen over je administratie beantwoorden",
    ],
    secondTitle: "Voor wie?",
    secondText:
      "Ideaal voor zzp'ers en eenmanszaken die hun administratie professioneel willen uitbesteden en altijd willen weten waar ze financieel staan.",
    highlight: "Altijd inzicht, zonder administratieve rompslomp.",
    ctaTitle: "Klaar om je administratie uit handen te geven?",
    primaryCta: { label: "Offerte aanvragen", target: "contact" },
    secondaryCta: { label: "Bekijk pakketten", target: "pakketten" },
  },
  btw: {
    icon: FileCheck,
    title: "BTW-aangifte",
    intro:
      "Geen zorgen meer over deadlines of foutieve aangiftes. Wij controleren je administratie en zorgen dat je btw-aangifte correct en op tijd wordt ingediend.",
    listTitle: "Wat we voor je regelen",
    items: [
      "Controle van je btw-administratie",
      "Berekening van te betalen of terug te ontvangen btw",
      "Indienen van de btw-aangifte",
      "Controle op opvallende posten",
      "Signalering vóór de deadline",
      "Uitleg wanneer iets afwijkt",
    ],
    secondTitle: "Wanneer?",
    secondText:
      "Per kwartaal of volgens de aangifteperiode die voor jouw onderneming geldt.",
    highlight: "Elk kwartaal geregeld.",
    ctaTitle: "Nooit meer omkijken naar je btw-aangifte?",
    primaryCta: { label: "Bekijk pakketten", target: "pakketten" },
    secondaryCta: { label: "Offerte aanvragen", target: "contact" },
  },
  jaarcijfers: {
    icon: BarChart3,
    title: "Jaarcijfers",
    intro:
      "Aan het einde van het jaar verwerken we je administratie tot duidelijke jaarcijfers en zorgen we dat je inzicht krijgt in het financiële resultaat van je onderneming.",
    listTitle: "Wat we voor je regelen",
    items: [
      "Jaarafsluiting van je administratie",
      "Jaarrekening of financieel jaaroverzicht",
      "Winst- en verliesrekening",
      "Balans",
      "Aangifte inkomstenbelasting",
      "Bespreking van belangrijke cijfers en aandachtspunten",
    ],
    secondTitle: "Geen cijfers zonder uitleg",
    secondText:
      "We vertellen je in begrijpelijke taal wat de cijfers voor jouw onderneming betekenen.",
    highlight: "Duidelijke jaarcijfers, zonder ingewikkelde financiële taal.",
    ctaTitle: "Klaar voor heldere jaarcijfers?",
    primaryCta: { label: "Plan een kennismaking", target: "contact" },
    secondaryCta: { label: "Bekijk pakketten", target: "pakketten" },
  },
  advies: {
    icon: MessageCircle,
    title: "Advies",
    intro:
      "Persoonlijk financieel en administratief advies wanneer je het nodig hebt. Geen ingewikkelde vaktermen, maar duidelijke antwoorden waar je iets mee kunt.",
    listTitle: "Waarover kunnen we meedenken?",
    items: [
      "Zakelijke kosten en aftrekbaarheid",
      "Investeringen",
      "Reserveren voor belasting",
      "Administratieve inrichting",
      "Groei van je onderneming",
      "Financieel overzicht en planning",
      "Algemene administratieve en financiële vragen",
    ],
    secondTitle: "Persoonlijk contact",
    secondText:
      "Je hebt één aanspreekpunt dat jouw onderneming kent en met je kan meedenken.",
    highlight: "Gewoon duidelijk advies, zonder vakjargon.",
    ctaTitle: "Even sparren over jouw situatie?",
    primaryCta: { label: "Stel je vraag", target: "contact" },
    secondaryCta: { label: "Offerte aanvragen", target: "contact" },
  },
};

// =============================================================================
// SERVICE DRAWER
// Desktop: paneel dat vanaf rechts inschuift.
// Mobiel: bottom-sheet met afgeronde bovenhoeken.
// =============================================================================
interface ServiceDrawerProps {
  service: ServiceKey | null;
  onClose: () => void;
}

export function ServiceDrawer({ service, onClose }: ServiceDrawerProps) {
  const detail = service ? SERVICE_DETAILS[service] : null;

  const closeAndScrollTo = (target: string) => {
    onClose();
    // eerst het paneel laten sluiten, daarna pas scrollen
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }, reduceMotion ? 0 : 340);
  };

  const Icon = detail?.icon;

  return (
    <DialogPrimitive.Root open={service !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-[1000] bg-[rgba(10,35,60,0.34)] backdrop-blur-[3px]",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 duration-200",
            "motion-reduce:animate-none",
          )}
        />
        <DialogPrimitive.Content
          aria-modal="true"
          className={cn(
            "fixed z-[1001] flex flex-col bg-white focus:outline-none",
            // mobiel: bottom-sheet
            "inset-x-0 bottom-0 h-[92dvh] rounded-t-[26px]",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
            "data-[state=open]:duration-[320ms] data-[state=closed]:duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            // desktop: paneel rechts
            "md:inset-x-auto md:inset-y-0 md:right-0 md:h-[100dvh] md:w-[min(540px,92vw)] md:rounded-none",
            "md:data-[state=open]:slide-in-from-bottom-0 md:data-[state=closed]:slide-out-to-bottom-0",
            "md:data-[state=open]:slide-in-from-right md:data-[state=closed]:slide-out-to-right",
            "motion-reduce:animate-none",
          )}
        >
          {detail && Icon && (
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-8 pt-6 sm:px-8 md:pt-8">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl"
                    style={{ background: "linear-gradient(135deg, #E9F5FF, #E8FBF7)" }}
                  >
                    <Icon className="h-6 w-6 text-[#289FF4]" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[#2685E8]">
                    Dienst
                  </p>
                  <DialogPrimitive.Title className="mt-1 text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-[#12304F] md:text-[34px]">
                    {detail.title}
                  </DialogPrimitive.Title>
                </div>
                <DialogPrimitive.Close
                  aria-label="Sluiten"
                  className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#E8EEF4] bg-[#F5F8FB] text-[#12385E] transition-colors hover:bg-[#E9EFF6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#289FF4]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </DialogPrimitive.Close>
              </div>

              {/* Intro */}
              <DialogPrimitive.Description className="mt-4 text-[17px] leading-[1.65] text-[#66778A]">
                {detail.intro}
              </DialogPrimitive.Description>

              {/* Wat we voor je regelen */}
              <div className="mt-7 border-t border-[#EDF1F5] pt-6">
                <h3 className="text-lg font-bold text-[#12304F]">{detail.listTitle}</h3>
                <ul className="mt-4 space-y-3">
                  {detail.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9FAF5] text-[#1FC39A]">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-[15px] text-[#3B506A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tweede sectie */}
              <div className="mt-7 border-t border-[#EDF1F5] pt-6">
                <h3 className="text-lg font-bold text-[#12304F]">{detail.secondTitle}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.7] text-[#64758B]">
                  {detail.secondText}
                </p>
              </div>

              {/* Highlight */}
              <div
                className="mt-7 flex items-center gap-3 rounded-[18px] border border-[#2D96DC]/[0.08] px-5 py-[18px]"
                style={{ background: "linear-gradient(135deg, #F1F8FF, #F0FCF8)" }}
              >
                <Sparkles className="h-5 w-5 shrink-0 text-[#25CDB2]" aria-hidden="true" />
                <p className="text-[15px] font-semibold text-[#12385E]">{detail.highlight}</p>
              </div>

              {/* CTA */}
              <div className="mt-8 border-t border-[#EDF1F5] pt-7">
                <p className="text-center text-base font-bold text-[#12304F]">
                  {detail.ctaTitle}
                </p>
                <button
                  type="button"
                  onClick={() => closeAndScrollTo(detail.primaryCta.target)}
                  className="group mt-4 inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-[14px] text-base font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#289FF4] focus-visible:ring-offset-2"
                  style={{
                    background: "linear-gradient(90deg, #28A7F4, #24CFAC)",
                    boxShadow: "0 10px 26px rgba(36, 159, 214, 0.18)",
                  }}
                >
                  {detail.primaryCta.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => closeAndScrollTo(detail.secondaryCta.target)}
                  className="mt-3 inline-flex w-full items-center justify-center gap-1 py-2 text-[15px] font-semibold text-[#278CE9] transition-colors hover:text-[#1c6fc0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#289FF4] rounded-lg"
                >
                  {detail.secondaryCta.label}
                </button>
              </div>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
