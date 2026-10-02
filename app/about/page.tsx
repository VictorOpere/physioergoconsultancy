import type { Metadata } from "next";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Values } from "@/components/sections/Values";
import { VisionMission } from "@/components/sections/VisionMission";
import { JsonLd } from "@/components/seo/JsonLd";
import { about, images, pageJsonLd, pageMeta } from "@/lib/content";

const description =
  "PhysioErgo Integrative Consultancy Ltd is a Kenyan-based firm advancing workplace health, safety and performance through integrated ergonomics and physiotherapy solutions.";

export const metadata: Metadata = pageMeta({
  title: "About",
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ name: "About", description, path: "/about" })} />
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
