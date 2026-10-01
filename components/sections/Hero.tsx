import { Blob } from "@/components/ui/Blob";
import { ButtonLink } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { hero, images } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-block pt-28 lg:pt-36">
      <Blob className="-left-40 -top-24 h-[34rem] w-[34rem]" color="var(--color-leaf-200)" />
      <Blob
        className="-right-32 top-40 h-[30rem] w-[30rem]"
        color="var(--color-leaf-100)"
      />

      <div className="mx-auto w-full max-w-[84rem] px-gutter">
        <div className="grid items-center gap-y-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-x-12 xl:gap-x-16">
          <div className="reveal is-revealed max-w-3xl">
            <Eyebrow>{hero.eyebrow}</Eyebrow>

            <h1 className="text-hero mt-6 text-ink">
              {hero.headingLines.map((line, index) => (
                <span key={line} className="block">
                  {index === hero.headingLines.length - 1 ? (
                    <span className="text-leaf-700">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="text-lead mt-7 max-w-lg text-ink-muted">
              {hero.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <ButtonLink href={hero.primaryCta.href} size="lg" withArrow>
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="outline" size="lg">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="group relative">
              <Media
                src={images.workstationDetail.src}
                alt={images.workstationDetail.alt}
                priority
                zoomOnHover
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="aspect-4/3 rounded-[2rem] shadow-lift lg:rounded-[2.5rem]"
              />

              <span
                aria-hidden="true"
                className="absolute -right-4 -top-5 hidden h-24 w-24 rounded-full border border-leaf-300/70 sm:block"
              />
            </div>

            <div className="relative z-10 mx-auto -mt-12 w-[min(22rem,88%)] rounded-panel border border-line/80 bg-surface/95 p-6 shadow-lift backdrop-blur-sm lg:absolute lg:-bottom-10 lg:-left-12 lg:mt-0 lg:w-[19.5rem]">
              <p className="eyebrow text-leaf-700">{hero.floatingCard.label}</p>
              <p className="mt-3 text-[1.05rem] leading-snug font-medium tracking-[-0.015em] text-ink">
                {hero.floatingCard.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
