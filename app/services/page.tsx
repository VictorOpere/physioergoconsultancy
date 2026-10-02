import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceFamilies } from "@/components/sections/ServiceFamilies";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhoWeSupport } from "@/components/sections/WhoWeSupport";
import { JsonLd } from "@/components/seo/JsonLd";
import { images, pageJsonLd, pageMeta } from "@/lib/content";

const description =
  "Ergonomic assessments, workplace ergonomics, physiotherapy-led interventions, training, musculoskeletal risk prevention and workplace wellness consulting from PhysioErgo in Nairobi, Kenya.";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({ name: "Services", description, path: "/services" })}
      />
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
