import type { Metadata } from "next";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Values } from "@/components/sections/Values";
import { VisionMission } from "@/components/sections/VisionMission";
import { about, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "PhysioErgo Integrative Consultancy Ltd is a Kenyan-based firm advancing workplace health, safety and performance through integrated ergonomics and physiotherapy solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About PhysioErgo"
        title="Wellness in Motion"
        lead={about.body}
        image={images.collaborativeTable}
      />
      <AboutIntro
        withCta={false}
        eyebrow="Our Position"
        heading="Where Health, Work and Performance Meet"
        body={null}
      />
      <VisionMission />
      <Values />
      <CTASection />
    </>
  );
}
