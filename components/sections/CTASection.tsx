import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { finalCta, site } from "@/lib/content";

export function CTASection() {
  return (
    <Section padding="tight" className="pb-section">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-sage-900 px-7 py-14 text-center sm:px-12 lg:rounded-[2.75rem] lg:px-20 lg:py-24">
          <span
            aria-hidden="true"
            className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-sage-700/55 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-sand-500/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-section text-ivory">{finalCta.heading}</h2>
            <p className="text-lead mx-auto mt-7 max-w-2xl text-sage-100/85">
              {finalCta.text}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3.5">
              <ButtonLink
                href={finalCta.primaryCta.href}
                variant="light"
                size="lg"
                withArrow
              >
                {finalCta.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={finalCta.secondaryCta.href}
                size="lg"
                className="border border-sage-500/70 bg-transparent text-ivory shadow-none hover:bg-sage-800"
              >
                {finalCta.secondaryCta.label}
              </ButtonLink>
            </div>

            <p className="mt-9 text-[0.92rem] text-sage-200/80">
              Prefer to talk directly?{" "}
              <a
                href={site.phoneHref}
                className="font-medium text-ivory underline decoration-sand-300/60 underline-offset-4 transition-colors hover:decoration-sand-300"
              >
                {site.phone}
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
