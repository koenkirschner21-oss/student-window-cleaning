import { Container } from "@/components/ui/Container";

/**
 * Official Google Business Profile reviews URL.
 * Leave null until verified — do not invent a public link.
 */
export const GOOGLE_REVIEWS_URL: string | null = null;

const reviews = {
  featured: {
    name: "Lindsey",
    quote:
      "Excellent window cleaning! Easy to work with, showed up when scheduled, and did a really solid job. Everything looked bright and streak-free afterward. Highly recommend.",
  },
  supporting: [
    {
      name: "Michelle D'Souza",
      quote:
        "FANTASTIC job and best price in town!!!! I don't think I have EVER had my windows sooooo clean!! Great job guys!! I will definitely have you back again!",
    },
    {
      name: "Gavin Fregona",
      quote:
        "Reliable and enthusiastic worker. He did a great job and my windows are sparkling clean. Highly recommend!!",
    },
  ],
} as const;

function FiveGoldStars({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <span
      className="inline-flex items-center gap-[3px]"
      style={{ color: "#E9AC16" }}
      aria-label="5 stars"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={
            size === "md" ? "size-4 fill-current" : "size-3.5 fill-current"
          }
          aria-hidden
        >
          <path d="M10 1.8 12.4 7l5.6.8-4 3.9.9 5.6L10 14.6 5.1 17.3l.9-5.6-4-3.9L7.6 7 10 1.8Z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleMark() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-muted">
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09A6.97 6.97 0 0 1 5.48 12c0-.72.13-1.41.36-2.09V7.07H2.18A11.96 11.96 0 0 0 1 12c0 1.94.46 3.77 1.18 5.41l2.85-3.04.81-.28Z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
        />
      </svg>
      Google
    </span>
  );
}

export function GoogleReviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-pure text-midnight"
      style={{
        paddingBlock: "clamp(2.75rem, 5.5vw, 4.25rem)",
      }}
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signature">
              Real Customer Experiences
            </p>
            <h2
              id="reviews-heading"
              className="font-heading mt-2 text-3xl font-semibold tracking-tight text-midnight sm:text-[2.35rem] sm:leading-tight"
            >
              Don&apos;t Just Take Our Word for It.
            </h2>
          </div>
          <GoogleMark />
        </div>

        <div className="mt-7 grid gap-4 lg:mt-8 lg:grid-cols-[1.45fr_1fr] lg:gap-5 lg:items-start">
          <article className="rounded-lg bg-ice px-6 py-7 sm:px-8 sm:py-8">
            <FiveGoldStars size="md" />
            <blockquote className="mt-4">
              <p className="font-heading text-lg font-medium leading-relaxed tracking-tight text-midnight sm:text-xl sm:leading-snug">
                {reviews.featured.quote}
              </p>
            </blockquote>
            <footer className="mt-5">
              <p className="font-heading text-sm font-semibold text-midnight">
                {reviews.featured.name}
              </p>
              <p className="mt-0.5 text-sm text-navy-muted">Google Review</p>
            </footer>
          </article>

          <ul className="grid gap-4">
            {reviews.supporting.map((review) => (
              <li key={review.name}>
                <article className="rounded-lg border border-border bg-cloud px-5 py-5 sm:px-6">
                  <FiveGoldStars size="sm" />
                  <blockquote className="mt-3">
                    <p className="text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
                      {review.quote}
                    </p>
                  </blockquote>
                  <footer className="mt-4">
                    <p className="font-heading text-sm font-semibold text-midnight">
                      {review.name}
                    </p>
                    <p className="mt-0.5 text-sm text-navy-muted">
                      Google Review
                    </p>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>

        {GOOGLE_REVIEWS_URL ? (
          <div className="mt-7">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-border-strong bg-pure px-5 text-sm font-semibold text-midnight transition-colors hover:border-signature hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
            >
              Read More Reviews on Google
            </a>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
