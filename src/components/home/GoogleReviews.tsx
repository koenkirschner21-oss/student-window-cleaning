import { Container } from "@/components/ui/Container";

/** Set when the official Google Business Profile reviews URL is verified. */
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
            size === "md"
              ? "size-4 fill-current sm:size-[1.05rem]"
              : "size-3.5 fill-current"
          }
          aria-hidden
        >
          <path d="M10 1.8 12.4 7l5.6.8-4 3.9.9 5.6L10 14.6 5.1 17.3l.9-5.6-4-3.9L7.6 7 10 1.8Z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleReviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-pure text-midnight"
      style={{ paddingBlock: "var(--space-section-y)" }}
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signature">
            Customer Experiences
          </p>
          <h2
            id="reviews-heading"
            className="font-heading mt-3 text-3xl font-semibold tracking-tight text-midnight sm:text-4xl"
          >
            Don&apos;t Just Take Our Word for It.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-muted sm:text-lg">
            Real experiences from customers across Whitby and Durham Region.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:items-start">
          <article className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:border-border lg:pl-8 lg:pt-0">
            <FiveGoldStars size="md" />
            <blockquote className="mt-4">
              <p className="font-heading text-xl font-medium leading-relaxed tracking-tight text-midnight sm:text-2xl sm:leading-snug">
                {reviews.featured.quote}
              </p>
            </blockquote>
            <footer className="mt-5 text-sm text-navy-muted">
              <p className="font-heading font-semibold text-midnight">
                {reviews.featured.name}
              </p>
              <p className="mt-0.5">Google Review</p>
            </footer>
          </article>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-8">
            {reviews.supporting.map((review) => (
              <li key={review.name}>
                <article className="border-t border-border pt-5">
                  <FiveGoldStars size="sm" />
                  <blockquote className="mt-3">
                    <p className="text-[0.95rem] leading-relaxed text-navy-muted sm:text-base">
                      {review.quote}
                    </p>
                  </blockquote>
                  <footer className="mt-4 text-sm text-navy-muted">
                    <p className="font-heading font-semibold text-midnight">
                      {review.name}
                    </p>
                    <p className="mt-0.5">Google Review</p>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-navy-muted">
            Reviews attributed to Google. Individual five-star ratings shown as
            shared by each customer.
          </p>
          {GOOGLE_REVIEWS_URL ? (
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
            >
              Read More Reviews on Google
              <span aria-hidden>→</span>
            </a>
          ) : (
            <p className="text-sm font-semibold text-navy-muted">
              Read More Reviews on Google
              <span className="mt-0.5 block text-xs font-normal tracking-normal text-navy-muted/80">
                Link available once the official Google Business Profile URL is
                confirmed.
              </span>
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
