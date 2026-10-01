import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/content";

/** The four company values set as large typographic statements. */
export function Values() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What Defines Us"
        title="Four Principles Behind Every Engagement"
      />

      <ul className="mt-block border-t border-line">
        {values.map((value, index) => (
          <Reveal as="li" key={value.title} delay={index * 90}>
            <div className="group grid items-baseline gap-3 border-b border-line py-8 transition-colors duration-300 hover:bg-mist/50 md:grid-cols-[auto_1fr_1.15fr] md:gap-10 md:py-10">
              <span className="eyebrow text-leaf-700 md:w-10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-subsection text-ink transition-transform duration-300 ease-out md:group-hover:translate-x-1.5">
                {value.title}
              </h3>
              <p className="text-[1rem] leading-relaxed text-ink-muted">
                {value.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
