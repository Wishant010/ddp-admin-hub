"use client";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-secondary via-background to-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-slide-up">
            Kies jouw pakket
          </h1>
          <p
            className="text-lg text-muted-foreground animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            Transparante prijzen zonder verrassingen. Elk pakket is maandelijks opzegbaar en altijd
            aanpasbaar aan jouw situatie.
          </p>
        </div>
      </div>
    </section>
  );
}
