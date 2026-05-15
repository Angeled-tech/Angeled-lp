import { CompatibilitySection } from "../components/sections/CompatibilitySection";
import { FaqSection } from "../components/sections/FaqSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { HeroSection } from "../components/sections/HeroSection";
import { HistoryFeedSection } from "../components/sections/HistoryFeedSection";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { PricingSection } from "../components/sections/PricingSection";
import { ProblemSection } from "../components/sections/ProblemSection";
import { ProductShowcaseSection } from "../components/sections/ProductShowcaseSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <HistoryFeedSection />
      <ProductShowcaseSection />
      <CompatibilitySection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
