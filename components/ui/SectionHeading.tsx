import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({
  children,
  tone = "sage",
  className = "",
}: {
  children: ReactNode;
  tone?: "sage" | "sand" | "light";
  className?: string;
}) {
  const tones = {
    sage: "text-sage-700",
    sand: "text-sand-500",
    light: "text-sage-200",
  };

  return (
    <p className={`eyebrow flex items-center gap-3 ${tones[tone]} ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
      {children}
    </p>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`flex flex-col gap-5 ${centered ? "items-center text-center" : "items-start"} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow tone={tone === "light" ? "light" : "sage"}>{eyebrow}</Eyebrow>
      ) : null}
      <Tag
        className={`text-section max-w-4xl ${tone === "light" ? "text-ivory" : "text-charcoal"}`}
      >
        {title}
      </Tag>
      {lead ? (
        <p
          className={`text-lead max-w-2xl ${tone === "light" ? "text-sage-100/85" : "text-charcoal-muted"}`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
