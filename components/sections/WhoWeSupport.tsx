import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { audiences } from "@/lib/content";

export function WhoWeSupport() {
  return (
    <Section className="bg-sand-100">
      <SectionHeading
        eyebrow="Who We Support"
        title="Built for Modern Workplaces"
        align="center"
      />

      <ul className="mt-block grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
        {audiences.map((audience, index) => (
          <Reveal
            as="li"
            key={audience.title}
            delay={index * 80}
            className="last:max-lg:col-span-2"
          >
            <div className="group flex h-full flex-col items-center gap-5 rounded-panel border border-line/80 bg-surface px-5 py-9 text-center transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-sage-300 hover:shadow-soft">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-50 text-sage-700 transition-colors duration-300 group-hover:bg-sage-700 group-hover:text-ivory">
                <Icon name={audience.icon} size={25} />
              </span>
              <h3 className="text-[0.98rem] font-semibold leading-snug tracking-[-0.01em] text-charcoal">
                {audience.title}
              </h3>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
