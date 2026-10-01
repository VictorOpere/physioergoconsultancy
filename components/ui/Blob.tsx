interface BlobProps {
  className?: string;
  /** Any CSS colour. Fades to transparent at the edge. */
  color?: string;
  /** Adds a very slow drift, disabled under prefers-reduced-motion. */
  animated?: boolean;
}

/**
 * Soft out-of-focus background shape. Purely decorative, so it stays out of the
 * accessibility tree and never intercepts pointer events.
 */
export function Blob({
  className = "",
  color = "var(--color-leaf-200)",
  animated = true,
}: BlobProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{
        background: `radial-gradient(circle at 35% 35%, ${color}, transparent 68%)`,
        animation: animated ? "drift 22s ease-in-out infinite" : undefined,
      }}
    />
  );
}
