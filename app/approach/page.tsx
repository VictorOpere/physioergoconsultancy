import type { Metadata } from "next";
import { Anthropometrics } from "@/components/sections/Anthropometrics";
import { CTASection } from "@/components/sections/CTASection";
import { Differentiators } from "@/components/sections/Differentiators";
import { PageHeader } from "@/components/sections/PageHeader";
import { Pillars } from "@/components/sections/Pillars";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { approachStages, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "A preventive-first model that assesses context, analyses physical, cognitive and psychosocial risk, and designs practical ergonomics and physiotherapy-led interventions.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Method"
        title="Prevention Before Problems"
        lead="Unlike reactive healthcare approaches, our preventive-first model focuses on identifying risks early and developing solutions that are clinically sound, context-sensitive and tailored to African and hybrid work environments."
        image={images.collaborativeTable}
      />
      <ProcessTimeline
        eyebrow="How We Work"
        title="Five Stages, One Continuous Loop"
        lead="Each engagement moves through the same sequence, then continues as a cycle of monitoring and improvement."
        steps={approachStages}
      />
      <Pillars />
      <Anthropometrics />
      <Differentiators />
      <CTASection />
    </>
  );
}
