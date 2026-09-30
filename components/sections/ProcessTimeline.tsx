import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  eyebrow: string;
  title: string;
  lead?: string;
  steps: readonly Step[];
  tone?: "ivory" | "sand";
}

const columns: Record<number, string> = {
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
};

/** Horizontal rail on desktop, vertical rail on mobile. */
export function ProcessTimeline({
  eyebrow,
  title,
  lead,
  steps,
  tone = "ivory",
}: ProcessTimelineProps) {
  return (
    <Section className={tone === "sand" ? "bg-sand-100" : ""}>
      <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />

      <ol
        className={`relative mt-block grid gap-y-9 ${columns[steps.length] ?? "md:grid-cols-4"} md:gap-x-7`}
      >
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-sage-200 md:hidden"
        />
        <span
          aria-hidden="true"
          className="absolute left-6 right-6 top-[1.4rem] hidden h-px bg-sage-200 md:block"
        />

        {steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.number}
            delay={index * 110}
            className="relative flex gap-6 md:flex-col md:gap-0"
          >
            <span
              className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-[0.82rem] font-semibold tracking-[0.02em] transition-colors duration-300 ${
                index === 0
                  ? "border-sage-700 bg-sage-700 text-ivory"
                  : `border-sage-200 text-sage-700 ${tone === "sand" ? "bg-sand-100" : "bg-ivory"}`
              }`}
            >
              {step.number}
            </span>

            <div className="pb-2 md:mt-7 md:pb-0 md:pr-4">
              <h3 className="text-[1.08rem] font-semibold uppercase tracking-[0.08em] text-charcoal">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.96rem] leading-relaxed text-charcoal-muted">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
