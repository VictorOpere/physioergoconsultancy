import { AboutIntro } from "@/components/sections/AboutIntro";
import { Benefits } from "@/components/sections/Benefits";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhoWeSupport } from "@/components/sections/WhoWeSupport";
import { WorkplaceBanner } from "@/components/sections/WorkplaceBanner";
import { processSteps } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Pillars />
      <ServicesGrid withCta />
      <ProcessTimeline
        eyebrow="Our Method"
        title="Prevention Before Problems"
        lead="Unlike reactive healthcare approaches, our preventive-first model focuses on identifying risks early and developing solutions that are clinically sound, context-sensitive and tailored to African and hybrid work environments."
        steps={processSteps}
        tone="sand"
      />
      <Benefits />
      <WorkplaceBanner />
      <WhoWeSupport />
      <CTASection />
    </>
  );
}
