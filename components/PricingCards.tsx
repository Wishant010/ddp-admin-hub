"use client";

import Link from "next/link";
import { ArrowRight, Check, Crown, Layers, Rocket, Sprout, type LucideIcon } from "lucide-react";
import { PACKAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PACKAGE_ICONS: Record<string, LucideIcon> = {
  Basis: Sprout,
  Compleet: Layers,
  Premium: Crown,
};

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  description: string;
  features: readonly string[];
  highlighted?: boolean;
  badge?: string;
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  badge,
}: PricingCardProps) {
  const Icon = PACKAGE_ICONS[name] ?? Rocket;

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[430px] md:max-w-none",
        // Compleet als eerste op mobiel, gewoon in het midden op desktop
        highlighted && "order-first md:order-none z-10"
      )}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2 md:-translate-y-3">
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
          "flex h-full flex-col rounded-[28px] bg-white px-6 py-7 text-center md:min-h-[580px] md:px-9 md:py-9",
          "transition-[transform,box-shadow,border-color] duration-[220ms] ease-out motion-reduce:transition-none motion-reduce:transform-none",
          highlighted
            ? cn(
                "border-[1.5px] border-[#20B99B]",
                "shadow-[0_22px_60px_rgba(17,135,112,0.14),0_4px_14px_rgba(17,135,112,0.06)]",
                "md:-translate-y-3 md:hover:-translate-y-4",
                "hover:shadow-[0_26px_68px_rgba(17,135,112,0.17),0_5px_16px_rgba(17,135,112,0.07)]"
              )
            : cn(
                "border border-[#14375A]/[0.07]",
                "shadow-[0_18px_50px_rgba(10,42,75,0.10),0_3px_10px_rgba(10,42,75,0.04)]",
                "hover:-translate-y-[5px] hover:shadow-[0_24px_60px_rgba(10,42,75,0.13)]"
              )
        )}
      >
        {/* Icoon */}
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-[18px] border"
          style={
            highlighted
              ? {
                  background: "linear-gradient(135deg, #EAFBF7 0%, #E1F8F1 100%)",
                  borderColor: "rgba(19, 157, 130, 0.08)",
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
            highlighted ? "text-[#15977F]" : "text-[#102D4F]"
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
            highlighted ? "text-[#15977F]" : "text-[#102B52]"
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
                  highlighted ? "bg-[#E7F8F3] text-[#11977E]" : "bg-[#EFF9F6] text-[#16A184]"
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
          <Link
            href="#contact"
            className={cn(
              "group flex h-[54px] w-full items-center justify-center gap-2 rounded-[16px] text-[15px] font-bold",
              "transition-[transform,box-shadow,background-color] duration-[220ms] ease-out motion-reduce:transition-none",
              "focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#2598EB]/25",
              highlighted
                ? "text-white hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(31,158,203,0.28)]"
                : "bg-[#F1F7FB] text-[#163C69] hover:-translate-y-[1px] hover:bg-[#E8F3FA]"
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
            Kies {name}
            <ArrowRight
              className="h-[17px] w-[17px] transition-transform duration-[220ms] group-hover:translate-x-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PricingCards() {
  return (
    <div className="grid items-stretch gap-6 md:grid-cols-3 lg:gap-7">
      {PACKAGES.map((pkg) => (
        <PricingCard key={pkg.name} {...pkg} />
      ))}
    </div>
  );
}
