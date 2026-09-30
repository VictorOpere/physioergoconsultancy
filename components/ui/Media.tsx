import Image from "next/image";

interface MediaProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Slow scale-up on hover of the nearest `.group` ancestor. */
  zoomOnHover?: boolean;
  overlay?: "none" | "soft" | "strong";
}

const overlays = {
  none: "",
  soft: "after:absolute after:inset-0 after:bg-gradient-to-t after:from-charcoal/35 after:to-transparent",
  strong:
    "after:absolute after:inset-0 after:bg-gradient-to-br after:from-sage-950/80 after:via-sage-900/60 after:to-sage-800/40",
};

/**
 * Rounded, cropped image frame. Always uses `fill` so the aspect ratio is owned
 * by the caller's container, which keeps responsive cropping predictable.
 */
export function Media({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  zoomOnHover = false,
  overlay = "none",
}: MediaProps) {
  return (
    <div
      className={`relative overflow-hidden bg-sage-100 ${overlays[overlay]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={`object-cover ${
          zoomOnHover
            ? "transition-transform duration-[900ms] ease-out group-hover:scale-105"
            : ""
        }`}
      />
    </div>
  );
}
