"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOCIALS } from "@/lib/constants";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function CTASection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        {/* Lichte CTA-card */}
        <div
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-[#E4EDF4] bg-white px-6 py-14 text-center md:px-12 md:py-16"
          style={{ boxShadow: "0 20px 55px rgba(31, 58, 88, 0.08), 0 4px 14px rgba(31, 58, 88, 0.04)" }}
        >
          {/* Subtiele accenten in de hoeken */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-sky-100/70 to-emerald-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-br from-emerald-100/60 to-sky-100/50 blur-3xl" />

          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold text-[#102A4A] md:text-4xl">
              Klaar om te starten?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-[#65778A]">
              Neem vrijblijvend contact op voor een kennismakingsgesprek. We bespreken graag hoe we jou kunnen helpen.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:brightness-105"
                style={{
                  background: "linear-gradient(90deg, #29A8FF 0%, #27D3B2 100%)",
                  boxShadow: "0 10px 30px rgba(26, 133, 220, 0.22)",
                }}
              >
                Neem contact op
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={SOCIALS.whatsappUrl("Hallo! Ik wil graag kennismaken.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-full border-[1.5px] border-[#BFD2E2] bg-white px-8 text-base font-semibold text-[#174A6D] transition-all duration-300 hover:border-[#249BF4] hover:bg-sky-50/50"
              >
                <WhatsAppIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
                WhatsApp ons
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
