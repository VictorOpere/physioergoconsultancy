import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceFamilies } from "@/lib/content";

/** The detailed service breakdown from the PhysioErgo capability deck. */
export function ServiceFamilies() {
  return (
    <Section className="bg-mist">
      <SectionHeading
        eyebrow="In Detail"
        title="What an Engagement Can Include"
        lead="Our work is grouped into three areas that can be delivered on their own or combined into a wider programme."
      />

      <div className="mt-block grid gap-6 lg:grid-cols-3 lg:gap-7">
        {serviceFamilies.map((family, index) => (
          <Reveal key={family.title} delay={index * 110}>
            <article className="flex h-full flex-col rounded-panel border border-line bg-surface p-8 lg:p-9">
              <span className="eyebrow text-leaf-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-cardtitle mt-5 text-ink">
                {family.title}
              </h3>
              <ul className="mt-7 flex flex-col gap-3.5 border-t border-line pt-7">
                {family.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
