"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/lib/constants";
import { BlurText, SpotlightCard } from "@/components/reactbits";

// WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const values = [
  {
    icon: Heart,
    title: "Passie voor cijfers",
    description: "Administratie is voor mij geen saaie klus, maar een puzzel die ik graag oplos.",
  },
  {
    icon: Users,
    title: "Persoonlijk contact",
    description: "Bij mij geen callcenters of wisselende aanspreekpunten. Je hebt altijd direct contact met mij.",
  },
  {
    icon: Target,
    title: "Nuchtere aanpak",
    description: "Geen onnodige poespas of ingewikkelde termen. Gewoon duidelijk advies.",
  },
  {
    icon: Award,
    title: "Betrouwbaar",
    description: "Ik sta voor kwaliteit en nauwkeurigheid. Je administratie is in goede handen.",
  },
];

export default function OverOns() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-background to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <BlurText
              text="Over Administratiekantoor DDP"
              className="justify-center text-4xl font-bold md:text-5xl mb-6"
              delay={80}
              animateBy="words"
            />
            <p className="text-lg text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: "300ms" }}>
              Leer de persoon achter de cijfers kennen.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-5">
              {/* Photo */}
              <div className="md:col-span-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl opacity-0 animate-scale-in">
                  <Image
                    src="/images/denny-portrait.jpg"
                    alt="Denny Kalijan - Oprichter Administratiekantoor DDP"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                  {/* Name badge */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/90 p-4 backdrop-blur-sm">
                    <p className="font-semibold">Denny Kalijan</p>
                    <p className="text-sm text-muted-foreground">Oprichter & Administrateur</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3">
                <h2 className="mb-6 text-3xl font-bold opacity-0 animate-slide-up">Hallo, ik ben Denny</h2>
                <div className="space-y-4 text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: "100ms" }}>
                  <p>
                    Mijn naam is Denny Kalijan en ik ben de drijvende kracht achter Administratiekantoor DDP.
                    Met een oprechte passie voor cijfers en een nuchtere, praktische aanpak help ik ondernemers
                    grip te krijgen op hun financiën.
                  </p>
                  <p>
                    Ik geloof in persoonlijke aandacht en korte lijnen. Wanneer je mij belt of mailt,
                    krijg je altijd antwoord. Geen doorverwijzingen, geen wachtmuziek, maar direct contact
                    met iemand die jouw situatie kent.
                  </p>
                  <p>
                    Mijn werkwijze is eenvoudig: geen ingewikkelde termen of verwarrende rapportages.
                    Gewoon eerlijk advies en een administratie die klopt. Zo kun jij je focussen op
                    waar je goed in bent: ondernemen.
                  </p>
                  <p className="font-medium text-foreground">
                    Ik kijk ernaar uit om je te helpen!
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row opacity-0 animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <Button asChild variant="default" size="lg" className="group">
                    <Link href="/contact">
                      Maak kennis
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="group">
                    <a
                      href={SOCIALS.whatsappUrl("Hallo Denny! Ik zou graag meer willen weten over jullie diensten.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      Stuur een berichtje
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Waar ik voor sta</h2>
            <p className="text-muted-foreground">
              Mijn waarden vormen de basis van hoe ik werk en met klanten omga.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <SpotlightCard
                key={value.title}
                className="p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-all duration-300">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Laten we kennismaken</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Benieuwd wat ik voor jouw administratie kan betekenen?
            Plan een vrijblijvend kennismakingsgesprek.
          </p>
          <Button asChild variant="accent" size="lg" className="group">
            <Link href="/contact">
              Plan een gesprek
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
