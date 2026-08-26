"use client";

import {
  HeroSection,
  WhyChooseUsSection,
  PackagesSection,
  AboutPreviewSection,
  ReviewsSection,
  ContactSection,
} from "./(home)/sections";

export default function Home() {
  return (
    <div id="top">
      <HeroSection />
      <div id="over-ons" className="scroll-mt-20">
        <AboutPreviewSection />
      </div>
      <div id="pakketten" className="scroll-mt-20">
        <PackagesSection />
      </div>
      <div id="aanpak" className="scroll-mt-20">
        <WhyChooseUsSection />
      </div>
      <div id="reviews" className="scroll-mt-20">
        <ReviewsSection />
      </div>
      <div id="contact" className="scroll-mt-20">
        <ContactSection />
      </div>
    </div>
  );
}
