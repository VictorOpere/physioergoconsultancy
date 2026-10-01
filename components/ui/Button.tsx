import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "outline" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[0.01em] transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-leaf-700 text-canvas shadow-soft hover:bg-leaf-800 hover:shadow-lift",
  outline:
    "border border-leaf-300 text-ink hover:border-leaf-700 hover:bg-leaf-50",
  ghost: "text-ink hover:text-leaf-700",
  light: "bg-canvas text-leaf-900 shadow-soft hover:bg-white hover:shadow-lift",
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
