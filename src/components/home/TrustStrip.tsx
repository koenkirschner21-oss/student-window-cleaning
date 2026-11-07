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
      className="size-[1.15rem]"
    >
      <path d="M2.5 9.5 12 4.5l9.5 5-9.5 5-9.5-5Z" />
      <path d="M6.5 11.6v4.2c0 .3 2.4 2.7 5.5 2.7s5.5-2.4 5.5-2.7v-4.2" />
      <path d="M21.5 9.5v5.2" />
    </svg>
  );
}

function FiveGoldStars() {
  return (
    <span
      className="inline-flex items-center justify-center gap-[3px]"
      style={{ color: "#E9AC16" }}
      aria-hidden
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="size-[0.95rem] fill-current sm:size-4"
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
      <Container className="py-4 sm:py-5">
        <ul className="grid grid-cols-1 divide-y divide-border/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <li className="flex min-w-0 items-center justify-center gap-2.5 py-3.5 sm:justify-start sm:py-0 sm:pr-6 lg:pr-8">
            <span className="inline-flex shrink-0 text-signature">
              <GraduationCapIcon />
            </span>
            <p className="font-heading text-[0.8rem] font-semibold tracking-tight text-midnight sm:text-[0.84rem]">
              Proudly Student-Run
            </p>
          </li>

          <li className="flex min-w-0 flex-col items-center justify-center gap-1.5 py-3.5 text-center sm:px-6 sm:py-0 lg:px-8">
            <FiveGoldStars />
            <p className="font-heading text-[0.8rem] font-semibold tracking-tight text-midnight sm:text-[0.84rem]">
              Google Reviews
            </p>
          </li>

          <li className="flex min-w-0 flex-col items-center justify-center gap-0.5 py-3.5 text-center sm:items-end sm:py-0 sm:pl-6 sm:text-right lg:pl-8">
            <p
              className="font-heading text-[1.65rem] font-extrabold leading-none tracking-tight text-signature sm:text-[1.85rem]"
              aria-hidden
            >
              4+
            </p>
            <p className="font-heading text-[0.8rem] font-semibold tracking-tight text-midnight sm:text-[0.84rem]">
              <span className="sr-only">4+ </span>Years in Business
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
