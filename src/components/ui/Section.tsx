import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "white" | "cloud" | "ice" | "navy";
  tight?: boolean;
  width?: "default" | "narrow" | "wide";
};

const toneClass = {
  white: "bg-pure text-midnight",
  cloud: "bg-cloud text-midnight",
  ice: "bg-ice text-midnight",
  navy: "bg-midnight text-pure",
} as const;

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  tone = "white",
  tight = false,
  width = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} ${className}`.trim()}
      style={{
        paddingBlock: tight
          ? "var(--space-section-y-tight)"
          : "var(--space-section-y)",
      }}
    >
      <Container width={width} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
