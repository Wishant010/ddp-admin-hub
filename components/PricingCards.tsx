"use client";

import { useState } from "react";
import { ArrowRight, Check, Crown, Layers, Rocket, Sprout, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";
import { PackageOrderModal } from "@/components/PackageOrderModal";

// Iconen per pakket, in dezelfde volgorde als t.packages.items
const PACKAGE_ICONS: LucideIcon[] = [Sprout, Layers, Crown];

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  description: string;
  features: readonly string[];
  highlighted?: boolean;
  badge?: string;
  icon: LucideIcon;
  choosePrefix: string;
  onChoose: () => void;
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  badge,
  icon,
  choosePrefix,
  onChoose,
}: PricingCardProps) {
  const Icon = icon ?? Rocket;

  return (
    <div
      className={cn(
        "group relative mx-auto w-full max-w-[430px] md:max-w-none",
        // Compleet als eerste op mobiel, gewoon in het midden op desktop
        highlighted && "order-first md:order-none z-10"
      )}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2 md:-translate-y-7">
          <span
            className="inline-flex items-center rounded-full px-[17px] py-2 text-[11px] font-extrabold uppercase tracking-[0.04em] text-white"
            style={{
              background: "linear-gradient(90deg, #FF9D25, #FF7B17)",
              boxShadow: "0 8px 20px rgba(244, 125, 24, 0.22)",
            }}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Card */}
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[28px] px-6 py-7 text-center md:min-h-[580px] md:px-9 md:py-9",
          highlighted
            ? cn(
                // Compleet: eigen achtergrondkleur (mint/teal) en steekt duidelijk boven de rest uit
                "border-[1.5px] border-[#20B99B]",
                "bg-gradient-to-b from-[#EDFBF6] to-[#DDF5EC]",
                "shadow-[0_28px_70px_rgba(17,135,112,0.20),0_6px_18px_rgba(17,135,112,0.08)]",
                "md:-translate-y-7 md:scale-[1.03]"
              )
            : cn(
                "border border-[#14375A]/[0.07] bg-white",
                "shadow-[0_18px_50px_rgba(10,42,75,0.10),0_3px_10px_rgba(10,42,75,0.04)]"
              )
        )}
      >
        {/* Hover: kleur vult de kaart van onder naar boven */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 motion-reduce:transition-none motion-reduce:hidden"
          style={{
            background: highlighted
              ? "linear-gradient(180deg, rgba(32,207,174,0) 0%, rgba(32,207,174,0.18) 45%, rgba(32,139,244,0.22) 100%)"
              : "linear-gradient(180deg, rgba(41,168,255,0) 0%, rgba(41,168,255,0.16) 45%, rgba(39,211,178,0.20) 100%)",
          }}
        />

        {/* Inhoud boven de kleur-vul laag */}
        <div className="relative z-10 flex h-full w-full flex-col">
          {/* Icoon */}
          <div
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-[18px] border"
            style={
              highlighted
                ? {
                    background: "linear-gradient(135deg, #DFF8F0 0%, #D2F3E8 100%)",
                    borderColor: "rgba(19, 157, 130, 0.12)",
                  }
                : {
                    background: "linear-gradient(135deg, #F0F7FF 0%, #E8F4FF 100%)",
                    borderColor: "rgba(30, 130, 200, 0.08)",
                  }
            }
          >
            <Icon
              className={cn("h-[26px] w-[26px]", highlighted ? "text-[#139D82]" : "text-[#237EDC]")}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </div>

          {/* Pakketnaam */}
          <h3
            className={cn(
              "mt-4 text-[22px] font-extrabold tracking-[-0.02em]",
              highlighted ? "text-[#0F7F6B]" : "text-[#102D4F]"
            )}
          >
            {name}
          </h3>

          {/* Omschrijving */}
          <p className="mx-auto mt-2 min-h-[46px] max-w-[230px] text-[14px] leading-[1.55] text-[#718095]">
            {description}
          </p>

          {/* Divider-accent */}
          <span
            className="mx-auto mt-5 block h-[2px] w-10 rounded-full"
            aria-hidden="true"
            style={{ background: "linear-gradient(90deg, #B9E9DF, #78DCC6)" }}
          />

          {/* Prijs */}
          <div
            className={cn(
              "mt-[22px] text-[54px] font-extrabold leading-none tracking-[-0.04em]",
              highlighted ? "text-[#0F7F6B]" : "text-[#102B52]"
            )}
          >
            €{price}
          </div>
          <div className="mt-[5px] text-sm font-semibold text-[#738196]">{period}</div>

          {/* Features */}
          <ul className="mt-8 space-y-3.5 text-left">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-full",
                    highlighted ? "bg-[#D5F3EA] text-[#0F8C74]" : "bg-[#EFF9F6] text-[#16A184]"
                  )}
                >
                  <Check className="h-3 w-3" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="text-[14px] leading-[1.45] text-[#53667B]">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-auto pt-8">
            <button
              type="button"
              onClick={onChoose}
              className={cn(
                "flex h-[54px] w-full items-center justify-center gap-2 rounded-[16px] text-[15px] font-bold",
                "focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#2598EB]/25",
                highlighted ? "text-white" : "bg-[#E9F3FA] text-[#163C69]"
              )}
              style={
                highlighted
                  ? {
                      background: "linear-gradient(90deg, #208BF4 0%, #20CFAE 100%)",
                      boxShadow: "0 10px 26px rgba(31, 158, 203, 0.22)",
                    }
                  : undefined
              }
            >
              {`${choosePrefix} ${name}`}
              <ArrowRight className="h-[17px] w-[17px]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PricingCards() {
  const t = useT();
  const [orderPackage, setOrderPackage] = useState<string | null>(null);

  return (
    <>
      <div className="grid items-stretch gap-6 md:grid-cols-3 lg:gap-7">
        {t.packages.items.map((pkg, index) => (
          <PricingCard
            key={pkg.name}
            {...pkg}
            icon={PACKAGE_ICONS[index] ?? Rocket}
            choosePrefix={t.packages.choosePrefix}
            onChoose={() => setOrderPackage(pkg.name)}
          />
        ))}
      </div>

      <PackageOrderModal
        open={orderPackage !== null}
        onOpenChange={(open) => {
          if (!open) setOrderPackage(null);
        }}
        packageName={orderPackage ?? ""}
      />
    </>
  );
}
