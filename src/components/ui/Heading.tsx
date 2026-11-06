import type { ReactNode } from "react";

type Level = 1 | 2 | 3 | 4;

type HeadingProps = {
  as?: `h${Level}`;
  level?: Level;
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  align?: "left" | "center";
};

const levelClass: Record<Level, string> = {
  1: "font-heading text-4xl font-semibold tracking-tight text-midnight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]",
  2: "font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-4xl",
  3: "font-heading text-xl font-semibold tracking-tight text-midnight sm:text-2xl",
  4: "font-heading text-lg font-semibold tracking-tight text-midnight",
};

export function Heading({
  as,
  level = 2,
  children,
  className = "",
  eyebrow,
  align = "left",
}: HeadingProps) {
  const Tag = (as ?? `h${level}`) as `h${Level}`;
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`.trim()}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-signature">
          {eyebrow}
        </p>
      ) : null}
      <Tag className={levelClass[level]}>{children}</Tag>
    </div>
  );
}
