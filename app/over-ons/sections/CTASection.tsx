"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
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
  );
}
