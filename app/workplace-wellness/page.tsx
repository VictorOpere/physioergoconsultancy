import type { Metadata } from "next";
import { Alignment } from "@/components/sections/Alignment";
import { Benefits } from "@/components/sections/Benefits";
import { CTASection } from "@/components/sections/CTASection";
import { Challenges } from "@/components/sections/Challenges";
import { PageHeader } from "@/components/sections/PageHeader";
import { WhoWeSupport } from "@/components/sections/WhoWeSupport";
import { WorkplaceBanner } from "@/components/sections/WorkplaceBanner";
import { images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Workplace Wellness",
  description:
    "Remote, hybrid and high-demand work environments require a new approach to workplace health. See how PhysioErgo turns wellness into a strategic asset.",
  alternates: { canonical: "/workplace-wellness" },
};

export default function WorkplaceWellnessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workplace Wellness"
        title="Wellness as a Strategic Asset"
        lead="Work patterns are changing. Organisations that invest early in prevention are better placed than those that react late."
        image={images.remoteWellbeing}
      />
      <Challenges />
      <WorkplaceBanner />
      <Benefits />
      <Alignment />
      <WhoWeSupport />
      <CTASection />
    </>
  );
}
