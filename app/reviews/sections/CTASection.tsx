"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container text-center">
        <h2 className="mb-4 text-3xl font-bold">Overtuigd?</h2>
        <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
          Word ook een tevreden klant en laat je administratie aan ons over.
        </p>
        <Button asChild variant="accent" size="lg">
          <Link href="/contact">
            Start vandaag
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
