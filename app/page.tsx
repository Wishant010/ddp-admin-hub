"use client";

import {
  HeroSection,
  WhyChooseUsSection,
  PackagesSection,
  HowItWorksSection,
  AboutPreviewSection,
  ReviewsSection,
  CTASection,
} from "./(home)/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <PackagesSection />
      <HowItWorksSection />
      <AboutPreviewSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
