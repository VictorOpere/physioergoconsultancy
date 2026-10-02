import type { Metadata } from "next";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { PageHeader } from "@/components/sections/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { pageJsonLd, pageMeta } from "@/lib/content";

const description =
  "Photographs of real workstations PhysioErgo Integrative Consultancy assesses: mesh chairs, dual monitors, wrist rests, screen glasses and a height-adjustable desk.";

export const metadata: Metadata = pageMeta({
  title: "Gallery",
  description,
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({ name: "Gallery", description, path: "/gallery" })}
      />
      <PageHeader
        eyebrow="Gallery"
        title="The Workstation, Up Close"
        lead="Photographs of real workstations PhysioErgo assesses — chairs, desks and screen setups, shown as they are used."
      />

      <Section padding="tight" className="pb-section">
        <GalleryGrid />
      </Section>
    </>
  );
}
