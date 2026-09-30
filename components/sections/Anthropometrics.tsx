import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { anthropometrics, images } from "@/lib/content";

export function Anthropometrics() {
  return (
    <Section>
      <div className="grid items-center gap-y-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-x-20">
        <Reveal className="group relative order-last lg:order-first">
          <Media
            src={images.workstationDetail.src}
            alt={images.workstationDetail.alt}
            zoomOnHover
            sizes="(max-width: 1024px) 92vw, 44vw"
            className="aspect-4/3 rounded-[2rem] shadow-soft lg:aspect-4/5"
          />
          <span
            aria-hidden="true"
            className="absolute -right-5 -top-5 -z-10 hidden h-32 w-32 rounded-[1.75rem] bg-sage-100 lg:block"
          />
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>{anthropometrics.eyebrow}</Eyebrow>
            <h2 className="text-section mt-6 text-charcoal">
              {anthropometrics.heading}
            </h2>
          </Reveal>

          <ul className="mt-9 flex flex-col gap-4">
            {anthropometrics.points.map((point, index) => (
              <Reveal
                as="li"
                key={point}
                delay={index * 70}
                className="flex items-start gap-3.5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <Icon name="check" size={14} strokeWidth={2} />
                </span>
                <span className="text-[0.98rem] leading-relaxed text-charcoal-muted">
                  {point}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={140}>
            <figure className="mt-9 rounded-panel border-l-2 border-sage-500 bg-sand-100/70 py-6 pl-7 pr-6">
              <Icon name="quote" size={24} className="text-sage-500" />
              <blockquote className="mt-3 text-[1.1rem] leading-snug font-medium tracking-[-0.015em] text-charcoal">
                {anthropometrics.quote}
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
