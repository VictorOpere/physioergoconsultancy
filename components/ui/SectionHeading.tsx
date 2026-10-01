import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Eyebrow({
  children,
  tone = "leaf",
  className = "",
}: {
  children: ReactNode;
  tone?: "leaf" | "light";
  className?: string;
}) {
  /* An eyebrow is small text, so the vivid leaf-500 is not an option here — it
     only reaches 2.99:1 on white. Both tones below clear AA on their ground. */
  const tones = {
    leaf: "text-leaf-700",
    light: "text-leaf-200",
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
        <Eyebrow tone={tone === "light" ? "light" : "leaf"}>{eyebrow}</Eyebrow>
      ) : null}
      <Tag
        className={`text-section max-w-4xl ${tone === "light" ? "text-canvas" : "text-ink"}`}
      >
        {title}
      </Tag>
      {lead ? (
        <p
          className={`text-lead max-w-2xl ${tone === "light" ? "text-leaf-100/85" : "text-ink-muted"}`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
