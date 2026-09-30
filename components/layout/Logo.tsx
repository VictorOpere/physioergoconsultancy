import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

interface LogoProps {
  className?: string;
}

/**
 * Brand lockup. The supplied artwork is a vertical stack whose two lower lines
 * fall below ~3px at any workable navbar height, so the symbol and its own
 * lettering are set side by side instead. Nothing is redrawn or dropped.
 */
export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/physioergo-lockup.png"
        alt=""
        width={584}
        height={170}
        priority
        className="h-12 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.03] lg:h-14"
      />
    </Link>
  );
}
