import type { Metadata } from "next";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageJsonLd, pageMeta, site } from "@/lib/content";

const description = `Talk to PhysioErgo Integrative Consultancy Ltd in Nairobi, Kenya. Call ${site.phones[0].display} or email ${site.email} to arrange a workplace ergonomics or wellness consultation.`;

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({ name: "Contact", description, path: "/contact" })}
      />
      <PageHeader
        eyebrow="Contact"
        title="Start the Conversation"
        lead="We would welcome the opportunity to understand your organisation's unique needs and explore how PhysioErgo can support your goals."
      />

      <Section padding="tight" className="pb-section">
        <div className="grid gap-y-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-x-16">
          <ContactDetails />

          <div id="consultation-form" className="scroll-mt-28">
            <Reveal className="mb-8">
              <Eyebrow>Consultation Request</Eyebrow>
              <h2 className="text-subsection mt-5 text-ink">
                Tell us about your workplace
              </h2>
              <p className="mt-4 max-w-xl text-ink-muted">
                Share a few details and we will come back to you to arrange an
                initial ergonomic or wellness review.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
