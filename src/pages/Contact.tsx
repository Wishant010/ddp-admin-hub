import { ContactCards, ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Wat kost een boekhouder per maand?",
    answer: "Onze pakketten beginnen vanaf €100 per maand voor het Basis pakket (tot 30 boekingen). Het Compleet pakket kost €150 per maand en het Premium pakket €250 per maand. De exacte kosten hangen af van de omvang van je administratie en welke diensten je nodig hebt."
  },
  {
    question: "Wat is inbegrepen bij de BTW-aangifte?",
    answer: "Bij alle pakketten verzorgen wij de kwartaal-BTW-aangifte. Dit betekent dat wij je boekhouding controleren, de aangifte opstellen en deze namens jou indienen bij de Belastingdienst. Je hoeft zelf niets te doen."
  },
  {
    question: "Kan ik tussentijds van pakket wisselen?",
    answer: "Ja, dat kan! Je kunt op elk moment upgraden naar een uitgebreider pakket. Downgraden kan per kwartaal. We denken graag met je mee over welk pakket het beste bij je situatie past."
  },
  {
    question: "Welke boekhoudsoftware gebruiken jullie?",
    answer: "Wij werken met diverse boekhoudprogramma's zoals Exact Online, Moneybird, e-Boekhouden en Snelstart. We kunnen ook koppelen met jouw bestaande software als je die al gebruikt."
  },
  {
    question: "Hoe snel krijg ik antwoord op mijn vragen?",
    answer: "We streven ernaar om binnen 24 uur te reageren op e-mails. Via WhatsApp reageren we vaak nog sneller. Bij het Premium pakket heb je onbeperkt advies en krijg je prioriteit."
  },
  {
    question: "Moet ik fysiek langskomen?",
    answer: "Nee, dat hoeft niet. Alles kan digitaal worden geregeld. We werken met beveiligde online systemen waar je documenten kunt uploaden. Uiteraard ben je wel welkom voor een persoonlijk gesprek als je dat prettig vindt."
  },
  {
    question: "Wat als ik net begin als zzp'er?",
    answer: "Perfect, we helpen je graag op weg! We kunnen je adviseren over de beste rechtsvorm, je inschrijving bij de KVK begeleiden en zorgen dat je administratie vanaf het begin goed op orde is."
  },
  {
    question: "Hoe werkt de aangifte inkomstenbelasting?",
    answer: "Bij het Compleet en Premium pakket verzorgen wij je jaarlijkse aangifte inkomstenbelasting. We verzamelen alle benodigde gegevens, berekenen je belasting en dienen de aangifte voor je in. Zo weet je zeker dat alles correct is."
  }
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-background to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-up">
              Neem contact op
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              Heb je een vraag of wil je vrijblijvend kennismaken? 
              We horen graag van je!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container">
          <ContactCards />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-2 text-center text-3xl font-bold animate-slide-up">
              Veelgestelde vragen
            </h2>
            <p className="mb-10 text-center text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
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

      {/* Contact Form & Map */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Stuur een bericht</h2>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
                <ContactForm />
              </div>
            </div>

            {/* Map & Info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Locatie</h2>
              <div className="space-y-6">
                {/* Map placeholder */}
                <div className="aspect-video overflow-hidden rounded-xl border border-border bg-muted">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(`${CONTACT.address}, ${CONTACT.postalCity}`)}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Locatie Administratiekantoor DDP"
                  />
                </div>

                {/* Business info */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 font-semibold">Bedrijfsgegevens</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Bedrijfsnaam</dt>
                      <dd>Administratiekantoor DDP</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">KVK-nummer</dt>
                      <dd>{CONTACT.kvk}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Adres</dt>
                      <dd className="text-right">
                        {CONTACT.address}<br />
                        {CONTACT.postalCity}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Opening hours */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 font-semibold">Bereikbaarheid</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Maandag - Vrijdag</dt>
                      <dd>9:00 - 17:00</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Weekend</dt>
                      <dd>Gesloten</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Buiten kantoortijden kun je altijd een bericht achterlaten via WhatsApp of e-mail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
