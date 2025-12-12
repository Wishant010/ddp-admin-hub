"use client";

import { ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export function ContactFormSection() {
  return (
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
                      {CONTACT.address}
                      <br />
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
  );
}
