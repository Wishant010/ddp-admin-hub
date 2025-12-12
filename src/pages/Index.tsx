import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingCards } from "@/components/PricingCards";
import { ReviewsList, StarRating } from "@/components/Reviews";
import { STEPS, SOCIALS, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20 md:py-32">
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl animate-slide-up">
              Jouw administratie, onze zorg
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl animate-slide-up" style={{ animationDelay: "100ms" }}>
              Persoonlijke administratieve ondersteuning voor freelancers, zzp'ers en kleine ondernemers. Geen gedoe, wel duidelijkheid.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/pakketten">Bekijk pakketten <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href={SOCIALS.whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5" /> Direct contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-8">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-muted-foreground"><Users className="h-5 w-5 text-primary" /><span className="text-sm font-medium">50+ tevreden klanten</span></div>
            <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-5 w-5 text-primary" /><span className="text-sm font-medium">Snelle reactie</span></div>
            <div className="flex items-center gap-2 text-muted-foreground"><Shield className="h-5 w-5 text-primary" /><span className="text-sm font-medium">Betrouwbaar</span></div>
            <div className="flex items-center gap-2 text-muted-foreground"><Star className="h-5 w-5 fill-accent text-accent" /><span className="text-sm font-medium">4.9 beoordeling</span></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Waarom kiezen voor DDP?</h2>
            <p className="text-lg text-muted-foreground">Persoonlijke aandacht, heldere communicatie en een administratie die gewoon klopt.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[{ title: "Persoonlijk contact", description: "Korte lijnen en altijd een direct aanspreekpunt." },
              { title: "Geen jargon", description: "We leggen alles uit in begrijpelijke taal." },
              { title: "Transparante prijzen", description: "Vaste maandprijzen zonder verborgen kosten." }
            ].map((feature, index) => (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary"><CheckCircle className="h-6 w-6 text-primary" /></div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Onze pakketten</h2>
            <p className="text-lg text-muted-foreground">Kies het pakket dat bij jouw situatie past.</p>
          </div>
          <PricingCards />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Zo werkt het</h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-8">
            {STEPS.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">{step.number}</div>
                <div className="flex-1 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <StarRating rating={5} size="lg" />
            <h2 className="mb-4 mt-4 text-3xl font-bold md:text-4xl">Wat klanten zeggen</h2>
          </div>
          <ReviewsList limit={3} />
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg"><Link to="/reviews">Alle reviews <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-28">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">Klaar om te starten?</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">Neem vrijblijvend contact op voor een kennismakingsgesprek.</p>
          <Button asChild variant="hero" size="xl"><Link to="/contact">Neem contact op <ArrowRight className="h-5 w-5" /></Link></Button>
        </div>
      </section>
    </>
  );
}
