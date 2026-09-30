import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceFamilies } from "@/components/sections/ServiceFamilies";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhoWeSupport } from "@/components/sections/WhoWeSupport";
import { images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ergonomic assessments, workplace ergonomics, physiotherapy-led interventions, training, musculoskeletal risk prevention and workplace wellness consulting from PhysioErgo in Nairobi, Kenya.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="How We Support Your Workplace"
        lead="Integrated ergonomics and physiotherapy services that can be delivered individually or combined into a wider workplace health programme."
        image={images.openOffice}
      />
      <ServicesGrid
        eyebrow="Core Offering"
        title="Six Ways We Work With You"
      />
      <ServiceFamilies />
      <WhoWeSupport />
      <CTASection />
    </>
  );
}
