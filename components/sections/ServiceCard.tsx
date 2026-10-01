import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/lib/content";

interface ServiceCardProps {
  service: Service;
  href?: string;
}

export function ServiceCard({ service, href = "/contact" }: ServiceCardProps) {
  return (
    <article className="group relative h-full">
      <Link
        href={href}
        className="flex h-full flex-col rounded-panel border border-line bg-surface p-8 transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-leaf-300 hover:bg-leaf-50/40 hover:shadow-lift lg:p-9"
      >
        <div className="flex items-center justify-between">
          <span className="eyebrow text-leaf-700 transition-colors duration-300 group-hover:text-leaf-800">
            {service.number}
          </span>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-line mx-4 transition-colors duration-300 group-hover:bg-leaf-200"
          />
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700 transition-[background-color,color,transform] duration-300 ease-out group-hover:-rotate-6 group-hover:bg-leaf-700 group-hover:text-canvas">
            <Icon name={service.icon} size={23} />
          </span>
        </div>

        <h3 className="text-cardtitle mt-9 text-ink">{service.title}</h3>

        <p className="mt-3.5 flex-1 text-[0.97rem] leading-relaxed text-ink-muted">
          {service.description}
        </p>

        <span className="mt-7 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-leaf-700">
          Discuss this service
          <Icon
            name="arrow"
            size={17}
            className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
          />
        </span>
      </Link>
    </article>
  );
}
