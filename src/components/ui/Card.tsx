import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  interactive?: boolean;
};

/**
 * Cards are reserved for interactive or clearly grouped content blocks.
 * Prefer unboxed layouts when a border/background is not needed.
 */
export function Card({
  children,
  className = "",
  as: Tag = "div",
  interactive = false,
}: CardProps) {
  return (
    <Tag
      className={[
        "rounded-lg border border-border bg-pure p-6 shadow-[var(--shadow-soft)]",
        interactive
          ? "transition-[border-color,box-shadow,transform] duration-200 hover:border-signature/40 hover:shadow-[0_16px_44px_color-mix(in_srgb,var(--color-midnight-navy)_10%,transparent)]"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
