"use client";

import { ContactForm, ContactCards } from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-sky-50 to-sky-100 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contact</h2>
          <p className="text-lg text-muted-foreground">
            Vragen of direct aan de slag? Stuur een bericht en we reageren binnen 24 uur.
          </p>
        </div>

        <div className="mb-12">
          <ContactCards />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Stuur een bericht</h3>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Map & Info */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Locatie</h3>
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-xl border border-border bg-muted">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(`${CONTACT.address}, ${CONTACT.postalCity}`)}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie Administratiekantoor DRFA"
                />
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="mb-4 font-semibold">Bedrijfsgegevens</h4>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Bedrijfsnaam</dt>
                    <dd>Administratiekantoor DRFA</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">KVK-nummer</dt>
                    <dd>{CONTACT.kvk}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Adres</dt>
                    <dd className="text-right">
                      {CONTACT.address}
                      <br />
                      {CONTACT.postalCity}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="mb-4 font-semibold">Bereikbaarheid</h4>
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
  );
}
