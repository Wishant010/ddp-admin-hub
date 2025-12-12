"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PACKAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  description: string;
  features: readonly string[];
  highlighted?: boolean;
  badge?: string;
  index: number;
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
  return (
    <div
      className={cn(
        "group relative",
        highlighted && "z-10 md:-mt-4"
      )}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
            bg-accent text-accent-foreground
            text-xs font-bold uppercase tracking-wider
            shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
            {badge}
          </span>
        </div>
      )}

      {/* Card */}
      <div className={cn(
        "relative rounded-2xl p-8 transition-all duration-300",
        "bg-white border-2",
        highlighted
          ? "border-primary shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/15"
          : "border-white/80 shadow-lg hover:shadow-xl hover:border-primary/30",
        "hover:-translate-y-1"
      )}>

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className={cn(
            "text-lg font-bold mb-2",
            highlighted ? "text-primary" : "text-foreground"
          )}>
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Price with decorative arcs */}
        <div className="relative flex justify-center mb-8">
          <div className="relative text-center px-6 py-3">
            {/* Decorative arcs */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 180 80"
              fill="none"
              aria-hidden="true"
            >
              {/* Top arc */}
              <path
                d="M25 35 C 50 12, 130 12, 155 35"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className={cn(
                  highlighted ? "text-primary/40" : "text-primary/25"
                )}
              />
              {/* Bottom arc */}
              <path
                d="M25 50 C 60 75, 120 75, 155 50"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className={cn(
                  highlighted ? "text-primary/25" : "text-primary/15"
                )}
              />
            </svg>

            <div className={cn(
              "text-5xl font-extrabold tracking-tight",
              highlighted ? "text-primary" : "text-foreground"
            )}>
              €{price}
            </div>
            <div className="mt-1 text-sm font-medium text-muted-foreground">
              {period}
            </div>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                highlighted
                  ? "bg-primary text-white"
                  : "bg-secondary text-primary"
              )}>
                <Check className="h-3 w-3" />
              </div>
              <span className="text-sm text-muted-foreground">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className={cn(
            "flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300",
            highlighted
              ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg"
              : "bg-secondary text-primary hover:bg-primary hover:text-white"
          )}
        >
          <span>Kies {name}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3 md:gap-8 items-start">
      {PACKAGES.map((pkg, index) => (
        <PricingCard
          key={pkg.name}
          {...pkg}
          index={index}
        />
      ))}
    </div>
  );
}
