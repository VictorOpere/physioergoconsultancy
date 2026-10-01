import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { images, modernWorkplace } from "@/lib/content";

/** Full-bleed cinematic band breaking up the canvas sections. */
export function WorkplaceBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-leaf-950">
      <Image
        src={images.moodyBoardroom.src}
        alt={images.moodyBoardroom.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-leaf-950/94 via-leaf-900/86 to-leaf-800/74"
      />

      <div className="relative mx-auto w-full max-w-[84rem] px-gutter py-section">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="light">Modern Work</Eyebrow>
            <h2 className="text-display mt-6 text-canvas">
              {modernWorkplace.heading}
            </h2>
            <p className="text-lead mt-7 max-w-2xl text-leaf-100/90">
              {modernWorkplace.lead}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-7 max-w-2xl border-l-2 border-leaf-300/70 pl-6 text-[1.08rem] leading-relaxed text-canvas/90">
              {modernWorkplace.statement}
            </p>

            <div className="mt-10">
              <ButtonLink
                href={modernWorkplace.cta.href}
                variant="light"
                size="lg"
                withArrow
              >
                {modernWorkplace.cta.label}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
