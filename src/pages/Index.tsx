import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingCards } from "@/components/PricingCards";
import { ReviewsList, StarRating } from "@/components/Reviews";
import { STEPS, SOCIALS, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { BlurText, ShinyText, CountUp, SpotlightCard, GradientText } from "@/components/reactbits";
import heroBg from "@/assets/hero-bg.jpg";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Home() {
  return (
    <>
      {/* Hero Section with background image */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5 animate-float" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/4 h-40 w-40 rounded-full bg-white/3 animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge with ShinyText */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-primary-foreground/90 backdrop-blur-sm animate-fade-in">
              <Sparkles className="h-4 w-4 animate-pulse-soft" />
              <ShinyText text="Betrouwbare administratie voor ondernemers" speed={4} />
            </div>

            {/* Hero title with BlurText */}
            <div className="mb-6">
              <BlurText 
                text="Jouw administratie, onze zorg"
                className="justify-center text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl"
                delay={80}
                animateBy="words"
                direction="top"
              />
            </div>

            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl opacity-0 animate-slide-up" style={{ animationDelay: "400ms" }}>
              Persoonlijke administratieve ondersteuning voor freelancers, zzp'ers en kleine ondernemers. Geen gedoe, wel duidelijkheid.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0 animate-slide-up" style={{ animationDelay: "600ms" }}>
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/pakketten">
                  Bekijk pakketten 
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl" className="group">
                <a href={SOCIALS.whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5 transition-transform group-hover:scale-110" /> 
                  Direct contact
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 50L48 45.7C96 41.3 192 32.7 288 35.5C384 38.3 480 52.7 576 55.5C672 58.3 768 49.7 864 44.8C960 40 1056 39 1152 42.7C1248 46.3 1344 54.7 1392 58.8L1440 63V100H0V50Z" className="fill-background"/>
          </svg>
        </div>
      </section>

      {/* Statistics Section with CountUp */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: 50, suffix: "+", label: "Tevreden klanten", icon: Users },
              { value: 5, suffix: " jaar", label: "Ervaring", icon: Clock },
              { value: 4.9, suffix: "", label: "Beoordeling", icon: Star, decimals: 1 },
              { value: 100, suffix: "%", label: "Betrouwbaar", icon: Shield },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center opacity-0 animate-fade-in" 
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="mb-2 flex items-center justify-center">
                  <stat.icon className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-3xl font-bold text-foreground md:text-4xl">
                    <CountUp 
                      to={stat.value} 
                      suffix={stat.suffix}
                      duration={2.5}
                      delay={0.3 + index * 0.1}
                      decimals={stat.decimals || 0}
                    />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - SpotlightCard */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Waarom kiezen voor <GradientText text="DDP" className="font-bold" />?
            </h2>
            <p className="text-lg text-muted-foreground">
              Persoonlijke aandacht, heldere communicatie en een administratie die gewoon klopt.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Persoonlijk contact", description: "Korte lijnen en altijd een direct aanspreekpunt. Geen callcenters, gewoon Denny." },
              { title: "Geen jargon", description: "We leggen alles uit in begrijpelijke taal. Geen verrassingen of ingewikkelde termen." },
              { title: "Transparante prijzen", description: "Vaste maandprijzen zonder verborgen kosten. Je weet precies waar je aan toe bent." }
            ].map((feature, index) => (
              <SpotlightCard 
                key={feature.title}
                className="p-8"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <CheckCircle className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Onze pakketten</h2>
            <p className="text-lg text-muted-foreground">Kies het pakket dat bij jouw situatie past. Upgraden kan altijd.</p>
          </div>
          <PricingCards />
        </div>
      </section>

      {/* How It Works - Enhanced steps */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Zo werkt het</h2>
            <p className="text-lg text-muted-foreground">In drie simpele stappen ben je van je administratie-zorgen af.</p>
          </div>
          <div className="mx-auto max-w-4xl">
            {/* Connection line */}
            <div className="relative">
              <div className="absolute left-8 top-10 hidden h-[calc(100%-80px)] w-0.5 bg-gradient-to-b from-primary via-primary to-transparent md:block" />
              
              <div className="space-y-8">
                {STEPS.map((step, index) => (
                  <div 
                    key={step.number} 
                    className="relative flex gap-6 opacity-0 animate-slide-up" 
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Animated step number */}
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:rotate-6">
                      {step.number}
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping-slow opacity-30" />
                    </div>

                    {/* Content card */}
                    <div className="flex-1 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30">
                      <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center justify-center gap-1">
              <StarRating rating={5} size="lg" />
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Wat klanten zeggen</h2>
            <p className="text-lg text-muted-foreground">Lees de ervaringen van ondernemers die ons voorgingen.</p>
          </div>
          <ReviewsList limit={3} />
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/reviews">
                Alle reviews bekijken
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced animation */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-white/5 animate-float" />
          <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-white/5 animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container relative text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Klaar om te starten?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
            Neem vrijblijvend contact op voor een kennismakingsgesprek. We bespreken graag hoe we jou kunnen helpen.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="xl" className="group glow-accent">
              <Link to="/contact">
                Neem contact op 
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="group">
              <a href={SOCIALS.whatsappUrl("Hallo! Ik wil graag kennismaken.")} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
                WhatsApp ons
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
