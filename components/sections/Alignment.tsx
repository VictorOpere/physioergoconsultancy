import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { alignment } from "@/lib/content";

export function Alignment() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Organisational Fit"
        title="Aligned With the Goals You Already Have"
        lead="We work as a strategic partner, not just a service provider."
      />

      <ul className="mt-block grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {alignment.map((item, index) => (
          <Reveal as="li" key={item.title} delay={index * 90}>
            <article className="group flex h-full flex-col rounded-panel border border-line bg-surface p-7 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-sage-300 hover:shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 text-sage-700 transition-colors duration-300 group-hover:bg-sage-700 group-hover:text-ivory">
                <Icon name={item.icon} size={23} />
              </span>
              <h3 className="mt-7 text-[1.05rem] font-semibold tracking-[-0.015em] text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-charcoal-muted">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
