import type { ElementType, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  as?: ElementType;
  className?: string;
  /** Inner width. "wide" suits full-bleed media, "narrow" suits long-form copy. */
  width?: "default" | "wide" | "narrow";
  padding?: "default" | "tight" | "none";
  "aria-labelledby"?: string;
}

const widths = {
  default: "max-w-[84rem]",
  wide: "max-w-[96rem]",
  narrow: "max-w-[68rem]",
};

const paddings = {
  default: "py-section",
  tight: "py-block",
  none: "",
};

/** Consistent vertical rhythm and gutter for every content band on the site. */
export function Section({
  children,
  id,
  as: Tag = "section",
  className = "",
  width = "default",
  padding = "default",
  ...rest
}: SectionProps) {
  return (
    <Tag id={id} className={`relative ${paddings[padding]} ${className}`} {...rest}>
      <div className={`mx-auto w-full px-gutter ${widths[width]}`}>{children}</div>
    </Tag>
  );
}
