import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { challenges, images } from "@/lib/content";

export function Challenges() {
  return (
    <Section>
      <div className="grid items-center gap-y-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-20">
        <div>
          <Reveal>
            <Eyebrow>The Problem We Address</Eyebrow>
            <h2 className="text-section mt-6 text-ink">
              Costs That Build Quietly
            </h2>
            <p className="text-lead mt-7 text-ink-muted">
              Many organisations carry these challenges without a clear way to
              measure or resolve them.
            </p>
          </Reveal>

          <ul className="mt-9 flex flex-col">
            {challenges.map((challenge, index) => (
              <Reveal as="li" key={challenge} delay={index * 70}>
                <div className="flex items-start gap-5 border-b border-line py-4">
                  <span className="eyebrow mt-1 shrink-0 text-leaf-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[1rem] leading-relaxed text-ink-muted">
                    {challenge}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={140}>
            <p className="mt-8 text-[1.05rem] font-medium leading-snug tracking-[-0.015em] text-ink">
              These challenges silently increase costs while undermining
              employee wellbeing.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="group relative">
          <Media
            src={images.screenFatigue.src}
            alt={images.screenFatigue.alt}
            zoomOnHover
            sizes="(max-width: 1024px) 92vw, 44vw"
            className="aspect-4/5 rounded-[2rem] shadow-soft"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 -z-10 hidden h-40 w-40 rounded-[2rem] bg-leaf-100 lg:block"
          />
        </Reveal>
      </div>
    </Section>
  );
}
