import type { ReactNode } from "react";
import { Blob } from "@/components/ui/Blob";
import { Media } from "@/components/ui/Media";
import { Eyebrow } from "@/components/ui/SectionHeading";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  image?: { src: string; alt: string };
  children?: ReactNode;
}

/** Shared masthead for inner routes. Top padding clears the fixed navigation. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-block pt-28 lg:pt-40">
      <Blob
        className="-right-40 -top-32 h-[32rem] w-[32rem]"
        color="var(--color-sage-200)"
      />
      <Blob
        className="-left-44 top-52 h-[26rem] w-[26rem]"
        color="var(--color-sand-200)"
      />

      <div className="mx-auto w-full max-w-[84rem] px-gutter">
        <div className="reveal is-revealed max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-display mt-6 text-charcoal">{title}</h1>
          {lead ? (
            <p className="text-lead mt-7 max-w-2xl text-charcoal-muted">{lead}</p>
          ) : null}
          {children}
        </div>

        {image ? (
          <div className="group mt-block">
            <Media
              src={image.src}
              alt={image.alt}
              priority
              zoomOnHover
              sizes="(max-width: 1024px) 92vw, 84rem"
              className="aspect-4/3 rounded-[2rem] shadow-soft sm:aspect-21/9 lg:rounded-[2.5rem]"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
