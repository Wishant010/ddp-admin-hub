"use client";

import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Kan ik later switchen naar een ander pakket?",
    answer:
      "Ja, je kunt op elk moment upgraden of downgraden naar een ander pakket. De nieuwe prijzen gaan in vanaf de volgende maand.",
  },
  {
    question: "Wat als ik meer boekingen heb dan mijn pakket toelaat?",
    answer:
      "Geen probleem! We bespreken dan samen of een upgrade naar een hoger pakket zinvol is, of we rekenen een meerprijs per extra boeking.",
  },
  {
    question: "Is er een opzegtermijn?",
    answer:
      "We hanteren een opzegtermijn van 1 maand. Je kunt dus flexibel stoppen wanneer je wilt.",
  },
  {
    question: "Wat houdt 'advies' precies in?",
    answer:
      "Bij advies denk je aan vragen over zakelijke uitgaven, optimalisatie van je belastingpositie, of hulp bij financiële beslissingen zoals een auto van de zaak.",
  },
  {
    question: "Werken jullie met specifieke boekhoudsoftware?",
    answer:
      "We werken met de meest gangbare software zoals e-Boekhouden, Moneybird, Exact Online en anderen. We passen ons aan jouw voorkeur aan.",
  },
];

export function FAQSection() {
  return (
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
  );
}
