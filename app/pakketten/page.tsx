"use client";

import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingCards } from "@/components/PricingCards";
import { SOCIALS } from "@/lib/constants";

// WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const faqs = [
  {
    question: "Kan ik later switchen naar een ander pakket?",
    answer: "Ja, je kunt op elk moment upgraden of downgraden naar een ander pakket. De nieuwe prijzen gaan in vanaf de volgende maand.",
  },
  {
    question: "Wat als ik meer boekingen heb dan mijn pakket toelaat?",
    answer: "Geen probleem! We bespreken dan samen of een upgrade naar een hoger pakket zinvol is, of we rekenen een meerprijs per extra boeking.",
  },
  {
    question: "Is er een opzegtermijn?",
    answer: "We hanteren een opzegtermijn van 1 maand. Je kunt dus flexibel stoppen wanneer je wilt.",
  },
  {
    question: "Wat houdt 'advies' precies in?",
    answer: "Bij advies denk je aan vragen over zakelijke uitgaven, optimalisatie van je belastingpositie, of hulp bij financiële beslissingen zoals een auto van de zaak.",
  },
  {
    question: "Werken jullie met specifieke boekhoudsoftware?",
    answer: "We werken met de meest gangbare software zoals e-Boekhouden, Moneybird, Exact Online en anderen. We passen ons aan jouw voorkeur aan.",
  },
];

export default function Pakketten() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-background to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-up">
              Kies jouw pakket
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              Transparante prijzen zonder verrassingen. Elk pakket is maandelijks opzegbaar en altijd aanpasbaar aan jouw situatie.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-20">
        <div className="container">
          <PricingCards />

          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">
              Niet zeker welk pakket het beste bij je past?
            </p>
            <Button asChild variant="outline" size="lg">
              <a
                href={SOCIALS.whatsappUrl("Hallo! Ik twijfel welk pakket het beste bij mij past. Kunnen we even overleggen?")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Vraag advies via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Veelgestelde vragen</h2>
              <p className="text-muted-foreground">
                Heb je een andere vraag? Neem gerust contact op.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Klaar om te starten?</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Neem vandaag nog contact op voor een vrijblijvend gesprek over jouw administratie.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">
                Neem contact op
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
