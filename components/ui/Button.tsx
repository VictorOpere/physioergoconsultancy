import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "outline" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[0.01em] transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-sage-700 text-ivory shadow-soft hover:bg-sage-800 hover:shadow-lift",
  outline:
    "border border-sage-300 text-charcoal hover:border-sage-700 hover:bg-sage-50",
  ghost: "text-charcoal hover:text-sage-700",
  light: "bg-ivory text-sage-900 shadow-soft hover:bg-white hover:shadow-lift",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.94rem]",
  lg: "px-8 py-4 text-[1rem]",
};

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "children"> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
}

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {withArrow ? (
        <Icon
          name="arrow"
          size={18}
          className="transition-transform duration-200 ease-out group-hover:translate-x-1"
        />
      ) : null}
    </Link>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
