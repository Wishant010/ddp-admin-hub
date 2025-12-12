"use client";

import { STEPS } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Zo werkt het</h2>
          <p className="text-lg text-muted-foreground">
            In drie simpele stappen ben je van je administratie-zorgen af.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          {/* Connection line */}
          <div className="relative">
            <div className="absolute left-8 top-10 hidden h-[calc(100%-80px)] w-0.5 bg-gradient-to-b from-primary via-primary to-transparent md:block" />

            <div className="space-y-8">
              {STEPS.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-6 opacity-0 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Animated step number */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:rotate-6">
                    {step.number}
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping-slow opacity-30" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30">
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
