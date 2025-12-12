import { Link } from "react-router-dom";
import { Check } from "lucide-react";
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
        "relative flex flex-col rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl animate-slide-up",
        highlighted
          ? "border-primary bg-gradient-to-b from-secondary to-background shadow-lg scale-[1.02] md:scale-105"
          : "border-border bg-card hover:border-primary/50"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground shadow-md">
            {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold tracking-tight">€{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              highlighted ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
            )}>
              <Check className="h-3 w-3" />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        asChild
        variant={highlighted ? "accent" : "outline"}
        size="lg"
        className="w-full"
      >
        <Link to="/contact">Kies {name}</Link>
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
          delay={index * 100}
        />
      ))}
    </div>
  );
}
