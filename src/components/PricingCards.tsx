import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  delay?: number;
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  badge,
  delay = 0,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border-2 p-8 transition-all duration-500 opacity-0 animate-slide-up",
        highlighted
          ? "border-primary bg-gradient-to-b from-secondary to-background shadow-xl scale-[1.02] md:scale-105 hover:shadow-2xl"
          : "border-border bg-card hover:border-primary/50 hover:shadow-xl hover:-translate-y-2"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Badge with animation */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground shadow-lg animate-bounce-in glow-accent">
            {badge}
          </span>
        </div>
      )}

      {/* Glow effect on hover for highlighted */}
      {highlighted && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}

      {/* Header */}
      <div className="relative mb-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>

      {/* Price with counter animation effect */}
      <div className="relative mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:scale-105">€{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      {/* Features with stagger animation */}
      <ul className="relative mb-8 flex-1 space-y-3">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-start gap-3 transition-all duration-300"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110",
              highlighted ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
            )}>
              <Check className="h-3 w-3" />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA with hover animation */}
      <Button
        asChild
        variant={highlighted ? "accent" : "outline"}
        size="lg"
        className="relative w-full overflow-hidden group/btn"
      >
        <Link to="/contact" className="flex items-center justify-center gap-2">
          Kies {name}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3 md:gap-8">
      {PACKAGES.map((pkg, index) => (
        <PricingCard
          key={pkg.name}
          {...pkg}
          delay={index * 150}
        />
      ))}
    </div>
  );
}
