import { CurveDivider } from "@/components/ui/CurveDivider";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars } from "@/lib/content";

/** Descending stagger on large screens gives the trio an editorial rhythm. */
const offsets = ["lg:mt-0", "lg:mt-10", "lg:mt-20"];

export function Pillars() {
  return (
    <div className="bg-sand-100">
      <CurveDivider className="text-ivory" />

      <Section padding="tight" className="pb-section">
        <SectionHeading
          eyebrow="Our Approach"
          title="Designing Work Around People"
          lead="Our integrated approach brings together three dimensions of ergonomics."
          align="center"
          className="mx-auto"
        />

        <ul className="mt-block grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {pillars.map((pillar, index) => (
            <Reveal
              as="li"
              key={pillar.number}
              delay={index * 110}
              className={offsets[index]}
            >
              <article className="group relative flex h-full flex-col rounded-panel border border-line bg-surface p-8 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-sage-300 hover:shadow-lift lg:p-9">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-8 top-0 h-px origin-left scale-x-0 bg-sage-500 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-50 text-sage-700 transition-colors duration-300 ease-out group-hover:bg-sage-700 group-hover:text-ivory">
                    <Icon name={pillar.icon} size={26} />
                  </span>
                  <span className="text-[2.4rem] font-semibold leading-none tracking-[-0.04em] text-sage-500 transition-colors duration-300 group-hover:text-sage-600">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-cardtitle mt-8 text-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-3.5 text-[0.97rem] leading-relaxed text-charcoal-muted">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>
    </div>
  );
}
