import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators } from "@/lib/content";

export function Differentiators() {
  return (
    <Section className="bg-mist">
      <SectionHeading
        eyebrow="What Sets Us Apart"
        title="A Different Kind of Workplace Partner"
      />

      <ul className="mt-block grid gap-x-7 gap-y-5 md:grid-cols-2">
        {differentiators.map((point, index) => (
          <Reveal as="li" key={point} delay={index * 80}>
            <div className="flex h-full items-start gap-5 rounded-panel border border-line bg-surface p-7">
              <span className="text-[1.5rem] font-semibold leading-none tracking-[-0.03em] text-leaf-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[1rem] leading-relaxed text-ink">{point}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
