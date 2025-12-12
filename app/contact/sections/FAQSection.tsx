"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Wat kost een boekhouder per maand?",
    answer:
      "Onze pakketten beginnen vanaf €100 per maand voor het Basis pakket (tot 30 boekingen). Het Compleet pakket kost €150 per maand en het Premium pakket €250 per maand. De exacte kosten hangen af van de omvang van je administratie en welke diensten je nodig hebt.",
  },
  {
    question: "Wat is inbegrepen bij de BTW-aangifte?",
    answer:
      "Bij alle pakketten verzorgen wij de kwartaal-BTW-aangifte. Dit betekent dat wij je boekhouding controleren, de aangifte opstellen en deze namens jou indienen bij de Belastingdienst. Je hoeft zelf niets te doen.",
  },
  {
    question: "Kan ik tussentijds van pakket wisselen?",
    answer:
      "Ja, dat kan! Je kunt op elk moment upgraden naar een uitgebreider pakket. Downgraden kan per kwartaal. We denken graag met je mee over welk pakket het beste bij je situatie past.",
  },
  {
    question: "Welke boekhoudsoftware gebruiken jullie?",
    answer:
      "Wij werken met diverse boekhoudprogramma's zoals Exact Online, Moneybird, e-Boekhouden en Snelstart. We kunnen ook koppelen met jouw bestaande software als je die al gebruikt.",
  },
  {
    question: "Hoe snel krijg ik antwoord op mijn vragen?",
    answer:
      "We streven ernaar om binnen 24 uur te reageren op e-mails. Via WhatsApp reageren we vaak nog sneller. Bij het Premium pakket heb je onbeperkt advies en krijg je prioriteit.",
  },
  {
    question: "Moet ik fysiek langskomen?",
    answer:
      "Nee, dat hoeft niet. Alles kan digitaal worden geregeld. We werken met beveiligde online systemen waar je documenten kunt uploaden. Uiteraard ben je wel welkom voor een persoonlijk gesprek als je dat prettig vindt.",
  },
  {
    question: "Wat als ik net begin als zzp'er?",
    answer:
      "Perfect, we helpen je graag op weg! We kunnen je adviseren over de beste rechtsvorm, je inschrijving bij de KVK begeleiden en zorgen dat je administratie vanaf het begin goed op orde is.",
  },
  {
    question: "Hoe werkt de aangifte inkomstenbelasting?",
    answer:
      "Bij het Compleet en Premium pakket verzorgen wij je jaarlijkse aangifte inkomstenbelasting. We verzamelen alle benodigde gegevens, berekenen je belasting en dienen de aangifte voor je in. Zo weet je zeker dat alles correct is.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-center text-3xl font-bold animate-slide-up">
            Veelgestelde vragen
          </h2>
          <p
            className="mb-10 text-center text-muted-foreground animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            Vind snel antwoord op de meest gestelde vragen
          </p>

          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 animate-slide-up"
                style={{ animationDelay: `${(index + 2) * 50}ms` }}
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5 [&[data-state=open]]:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
