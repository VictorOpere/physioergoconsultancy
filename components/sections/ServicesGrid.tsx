import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";
import { ServiceCard } from "./ServiceCard";

interface ServicesGridProps {
  withCta?: boolean;
  eyebrow?: string;
  title?: string;
  lead?: string;
}

export function ServicesGrid({
  withCta = false,
  eyebrow = "Our Services",
  title = "How We Support Your Workplace",
  lead,
}: ServicesGridProps) {
  return (
    <Section id="services">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          lead={lead}
          className="lg:max-w-2xl"
        />

        {withCta ? (
          <Reveal delay={120} className="shrink-0">
            <ButtonLink href="/services" variant="outline" withArrow>
              View All Services
            </ButtonLink>
          </Reveal>
        ) : null}
      </div>

      <ul className="mt-block grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal as="li" key={service.number} delay={(index % 3) * 100}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
