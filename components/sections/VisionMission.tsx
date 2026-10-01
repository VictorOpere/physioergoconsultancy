import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { commitments, visionMission } from "@/lib/content";

export function VisionMission() {
  return (
    <Section className="bg-mist">
      <SectionHeading eyebrow="Direction" title="Where We Are Headed" />

      <div className="mt-block grid gap-6 lg:grid-cols-2 lg:gap-7">
        {visionMission.map((item, index) => (
          <Reveal key={item.label} delay={index * 120}>
            <article className="flex h-full flex-col rounded-panel border border-line bg-surface p-8 lg:p-10">
              <h3 className="eyebrow text-leaf-700">{item.label}</h3>
              <p className="mt-6 text-[1.08rem] leading-relaxed text-ink">
                {item.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160} className="mt-10">
        <div className="rounded-panel border border-leaf-200 bg-leaf-50/60 p-8 lg:p-10">
          <h3 className="eyebrow text-leaf-700">Our Commitment</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
            {commitments.map((commitment) => (
              <li
                key={commitment}
                className="flex items-start gap-3 text-[0.98rem] text-ink-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-600"
                />
                {commitment}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
