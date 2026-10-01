import { Blob } from "@/components/ui/Blob";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { about, images } from "@/lib/content";

interface AboutIntroProps {
  withCta?: boolean;
  eyebrow?: string;
  heading?: string;
  /** Omitted on /about, where the page header already carries the positioning copy. */
  body?: string | null;
}

export function AboutIntro({
  withCta = true,
  eyebrow = about.eyebrow,
  heading = about.heading,
  body = about.body,
}: AboutIntroProps) {
  return (
    <Section className="overflow-hidden">
      <Blob
        className="-left-48 top-1/3 h-[26rem] w-[26rem]"
        color="var(--color-leaf-100)"
      />

      <div className="grid items-center gap-y-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-x-20">
        <Reveal className="relative">
          <div className="group relative">
            <Media
              src={images.calmOffice.src}
              alt={images.calmOffice.alt}
              zoomOnHover
              sizes="(max-width: 1024px) 92vw, 42vw"
              className="aspect-4/5 rounded-[2rem] shadow-soft"
            />
          </div>

          <div className="absolute -bottom-7 right-4 flex items-center gap-3 rounded-full border border-line bg-surface px-5 py-3.5 shadow-lift lg:-right-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-700 text-canvas">
              <Icon name="shield" size={18} />
            </span>
            <span className="eyebrow text-ink">{about.badge}</span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-section mt-6 text-ink">{heading}</h2>
            {body ? (
              <p className="text-lead mt-7 text-ink-muted">{body}</p>
            ) : null}
            <p className={`text-ink-muted ${body ? "mt-5" : "text-lead mt-7"}`}>
              {about.supporting}
            </p>
            <p className="mt-5 text-ink-muted">{about.blend}</p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="mt-9 rounded-panel border-l-2 border-leaf-500 bg-mist/70 py-6 pl-7 pr-6">
              <Icon name="quote" size={26} className="text-leaf-500" />
              <blockquote className="mt-3.5 text-[1.12rem] leading-snug font-medium tracking-[-0.015em] text-ink">
                {about.philosophy}
              </blockquote>
            </figure>
          </Reveal>

          {withCta ? (
            <Reveal delay={180} className="mt-9">
              <ButtonLink href="/about" variant="outline" withArrow>
                More About PhysioErgo
              </ButtonLink>
            </Reveal>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
