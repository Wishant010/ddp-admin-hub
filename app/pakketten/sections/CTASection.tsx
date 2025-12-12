"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
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
  );
}
