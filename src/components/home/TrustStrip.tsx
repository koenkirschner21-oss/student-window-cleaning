import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

const items: {
  title: string;
  detail: string;
  icon: ReactNode;
}[] = [
  {
    title: "Proudly Student-Run",
    detail: "Local to Whitby",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="size-5"
      >
        <path d="M12 3 4.5 7.5v4.2c0 4.4 3.1 8.3 7.5 9.3 4.4-1 7.5-4.9 7.5-9.3V7.5L12 3Z" />
        <path d="M9.5 12.2 11.2 14l3.5-3.8" />
      </svg>
    ),
  },
  {
    title: "5-Star Google Reviews",
    detail: "Trusted by local homeowners",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="size-5"
      >
        <path d="m12 3.6 2.2 4.5 5 .7-3.6 3.5.9 5L12 15.9 7.5 17.3l.9-5L4.8 8.8l5-.7L12 3.6Z" />
      </svg>
    ),
  },
  {
    title: "Free Personalized Quotes",
    detail: "Tailored to your property",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="size-5"
      >
        <path d="M7 4.5h10a1.5 1.5 0 0 1 1.5 1.5v14L12.5 17 5.5 20V6A1.5 1.5 0 0 1 7 4.5Z" />
        <path d="M9 9h6M9 12.5h6" />
      </svg>
    ),
  },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trust highlights"
      className="border-b border-border bg-cloud"
    >
      <Container className="py-5 sm:py-6">
        <ul className="grid gap-4 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex min-w-0 items-start gap-3 sm:items-center"
            >
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-ice text-signature sm:mt-0">
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="font-heading text-sm font-semibold tracking-tight text-midnight sm:text-[0.95rem]">
                  {item.title}
                </p>
                <p className="mt-0.5 text-sm leading-snug text-navy-muted">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
