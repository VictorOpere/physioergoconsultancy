interface CurveDividerProps {
  /** Tailwind text-* class; the wave inherits it via currentColor. */
  className?: string;
  /** "down" tucks the curve under the section above, "up" lifts it over. */
  direction?: "down" | "up";
  variant?: "wave" | "arc";
}

const shapes = {
  wave: "M0 46C180 92 360 92 540 70C720 48 900 4 1080 0C1260 -4 1350 22 1440 46V120H0Z",
  arc: "M0 120C240 34 560 0 720 0C880 0 1200 34 1440 120H0Z",
} as const;

/**
 * Organic separator between stacked sections. Rendered as a block-level SVG so
 * it stitches seamlessly onto the following section's background colour.
 */
export function CurveDivider({
  className = "text-canvas",
  direction = "down",
  variant = "wave",
}: CurveDividerProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none w-full ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-[clamp(40px,7vw,110px)] w-full ${direction === "up" ? "rotate-180" : ""}`}
      >
        <path d={shapes[variant]} fill="currentColor" />
      </svg>
    </div>
  );
}
