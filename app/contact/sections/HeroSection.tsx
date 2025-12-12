"use client";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-secondary via-background to-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-up">
            Neem contact op
          </h1>
          <p
            className="text-lg text-muted-foreground animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            Heb je een vraag of wil je vrijblijvend kennismaken?
            We horen graag van je!
          </p>
        </div>
      </div>
    </section>
  );
}
