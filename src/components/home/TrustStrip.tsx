import { Container } from "@/components/ui/Container";

function GraduationCapIcon() {
  return (
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
      <path d="M2.5 9.5 12 4.5l9.5 5-9.5 5-9.5-5Z" />
      <path d="M6.5 11.6v4.2c0 .3 2.4 2.7 5.5 2.7s5.5-2.4 5.5-2.7v-4.2" />
      <path d="M21.5 9.5v5.2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
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
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
    </svg>
  );
}

function FiveGoldStars() {
  return (
    <span
      className="inline-flex items-center justify-center gap-1"
      style={{ color: "#E6B422" }}
      aria-hidden
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="size-4 fill-current sm:size-[1.05rem]"
        >
          <path d="M10 1.8 12.4 7l5.6.8-4 3.9.9 5.6L10 14.6 5.1 17.3l.9-5.6-4-3.9L7.6 7 10 1.8Z" />
        </svg>
      ))}
    </span>
  );
}

export function TrustStrip() {
  return (
    <section
      aria-label="Trust highlights"
      className="border-b border-border bg-cloud"
    >
      <Container className="py-5 sm:py-6">
        <ul className="grid gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          <li className="flex min-w-0 items-center justify-center gap-2.5 sm:justify-start">
            <span className="inline-flex shrink-0 text-signature">
              <GraduationCapIcon />
            </span>
            <p className="font-heading text-sm font-semibold tracking-tight text-midnight sm:text-[0.95rem]">
              Proudly Student-Run
            </p>
          </li>

          <li className="flex min-w-0 flex-col items-center justify-center gap-1.5 text-center">
            <FiveGoldStars />
            <p className="font-heading text-sm font-semibold tracking-tight text-midnight sm:text-[0.95rem]">
              Google Reviews
            </p>
          </li>

          <li className="flex min-w-0 items-center justify-center gap-2.5 sm:justify-start lg:justify-end">
            <span className="inline-flex shrink-0 text-signature">
              <CalendarIcon />
            </span>
            <p className="font-heading text-sm font-semibold tracking-tight text-midnight sm:text-[0.95rem]">
              4+ Years in Business
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
