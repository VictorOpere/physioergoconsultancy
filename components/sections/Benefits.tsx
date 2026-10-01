import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { benefits, images } from "@/lib/content";

export function Benefits() {
  return (
    <Section>
      <div className="grid items-center gap-y-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-20">
        <div>
          <Reveal>
            <Eyebrow>Why Ergonomics Matters</Eyebrow>
            <h2 className="text-section mt-6 text-ink">
              Invest in the People Behind the Performance
            </h2>
          </Reveal>

          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Reveal
                as="li"
                key={benefit}
                delay={index * 60}
                className="flex items-start gap-3.5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                  <Icon name="check" size={14} strokeWidth={2} />
                </span>
                <span className="text-[0.97rem] leading-relaxed text-ink-muted">
                  {benefit}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className="group relative">
          <Media
            src={images.standingDesk.src}
            alt={images.standingDesk.alt}
            zoomOnHover
            sizes="(max-width: 1024px) 92vw, 44vw"
            className="aspect-4/5 rounded-[2rem] shadow-soft"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 -z-10 hidden h-40 w-40 rounded-[2rem] bg-leaf-100 lg:block"
          />
        </Reveal>
      </div>
    </Section>
  );
}
