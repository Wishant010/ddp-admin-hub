"use client";

import { ContactForm, ContactCards } from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";
import { useT } from "@/lib/i18n";

export function ContactSection() {
  const t = useT();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="mb-12">
          <ContactCards />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">{t.contact.formTitle}</h3>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Map & Info */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">{t.contact.locationTitle}</h3>
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
                  title={t.contact.mapTitle}
                />
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="mb-4 font-semibold">{t.contact.businessInfo}</h4>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">{t.contact.companyNameLabel}</dt>
                    <dd>{t.header.companyFull}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">{t.contact.kvkLabel}</dt>
                    <dd>{CONTACT.kvk}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">{t.contact.addressLabel}</dt>
                    <dd className="text-right">
                      {CONTACT.address}
                      <br />
                      {CONTACT.postalCity}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="mb-4 font-semibold">{t.contact.availability}</h4>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">{t.contact.monFri}</dt>
                    <dd>9:00 - 17:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">{t.contact.weekend}</dt>
                    <dd>{t.contact.closed}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs text-muted-foreground">
                  {t.contact.outsideHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
