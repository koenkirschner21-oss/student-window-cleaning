import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
  width?: "default" | "narrow" | "wide";
};

const widthClass = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
} as const;

export function Container({
  children,
  className = "",
  as: Tag = "div",
  width = "default",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full ${widthClass[width]} px-5 sm:px-8 ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
