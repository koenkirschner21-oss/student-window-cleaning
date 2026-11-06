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

function MapPinIcon() {
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
      <path d="M12 21s6.5-5.2 6.5-11A6.5 6.5 0 0 0 5.5 10c0 5.8 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function FiveStars() {
  return (
    <span
      className="inline-flex items-center gap-0.5 text-signature"
      aria-label="Five star Google reviews"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden
          className="size-3.5 fill-current"
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
      className="border-b border-border bg-pure"
    >
      <Container className="py-5 sm:py-6">
        <ul className="grid gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          <li className="flex min-w-0 items-start gap-3">
            <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center text-signature">
              <GraduationCapIcon />
            </span>
            <div className="min-w-0">
              <p className="font-heading text-sm font-semibold tracking-tight text-midnight sm:text-[0.95rem]">
                Proudly Student-Run
              </p>
              <p className="mt-0.5 text-sm leading-snug text-navy-muted">
                Local to Whitby
              </p>
            </div>
          </li>

          <li className="flex min-w-0 items-start gap-3">
            <span className="mt-1 inline-flex shrink-0 items-center">
              <FiveStars />
            </span>
            <div className="min-w-0">
              <p className="font-heading text-sm font-semibold tracking-tight text-midnight sm:text-[0.95rem]">
                Google Reviews
              </p>
              <p className="mt-0.5 text-sm leading-snug text-navy-muted">
                Trusted by local homeowners
              </p>
            </div>
          </li>

          <li className="flex min-w-0 items-start gap-3">
            <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center text-signature">
              <MapPinIcon />
            </span>
            <div className="min-w-0">
              <p className="font-heading text-sm font-semibold tracking-tight text-midnight sm:text-[0.95rem]">
                Serving Durham Region
              </p>
              <p className="mt-0.5 text-sm leading-snug text-navy-muted">
                Professional service since 2023
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
