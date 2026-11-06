import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  disabled?: boolean;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClass: Record<Variant, string> = {
  primary:
    "bg-signature text-pure shadow-[0_10px_28px_color-mix(in_srgb,var(--color-signature-blue)_28%,transparent)] hover:bg-[color-mix(in_srgb,var(--color-signature-blue)_88%,black)]",
  secondary:
    "bg-pure text-midnight border border-border-strong hover:border-signature hover:text-signature",
  ghost: "bg-transparent text-midnight hover:bg-ice",
  onDark:
    "bg-pure text-midnight hover:bg-ice shadow-[0_10px_28px_color-mix(in_srgb,black_18%,transparent)]",
};

const sizeClass: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

function classes(
  variant: Variant,
  size: Size,
  className: string,
  disabled?: boolean,
) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-[background-color,color,border-color,transform,box-shadow] duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature",
    "active:translate-y-px",
    sizeClass[size],
    variantClass[variant],
    disabled ? "pointer-events-none opacity-55" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    variant = "primary",
    size = "md",
  } = props;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes(variant, size, className, props.disabled)}
        aria-disabled={props.disabled || undefined}
        onClick={props.onClick}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, ...rest } = props as ButtonAsButton;

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes(variant, size, className, disabled)}
      {...rest}
    >
      {children}
    </button>
  );
}
