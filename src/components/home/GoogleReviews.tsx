"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import { Container } from "@/components/ui/Container";

/**
 * Official Google Business Profile reviews / write-a-review URL.
 * Leave null until verified — do not invent a public link.
 */
export const GOOGLE_REVIEWS_URL: string | null = null;

/**
 * Verified Google review copy only. Do not invent quotes, names, photos,
 * dates, aggregate ratings, or review counts.
 */
const reviews = [
  {
    id: "lindsey",
    name: "Lindsey",
    quote:
      "Excellent window cleaning! Easy to work with, showed up when scheduled, and did a really solid job. Everything looked bright and streak-free afterward. Highly recommend.",
  },
  {
    id: "michelle-dsouza",
    name: "Michelle D'Souza",
    quote:
      "FANTASTIC job and best price in town!!!! I don't think I have EVER had my windows sooooo clean!! Great job guys!! I will definitely have you back again!",
  },
  {
    id: "gavin-fregona",
    name: "Gavin Fregona",
    quote:
      "Reliable and enthusiastic worker. He did a great job and my windows are sparkling clean. Highly recommend!!",
  },
] as const;

type Review = (typeof reviews)[number];

const PREVIEW_LIMIT_FEATURED = 160;
const PREVIEW_LIMIT_SUPPORTING = 110;

function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return `${parts[0].slice(0, 1)}${parts[parts.length - 1].slice(0, 1)}`.toUpperCase();
}

function FiveGoldStars({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <span
      className="inline-flex items-center gap-[3px]"
      style={{ color: "#E9AC16" }}
      aria-label="5 out of 5 stars"
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

function GoogleMark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 font-medium text-navy-muted",
        compact ? "text-xs" : "text-sm",
      ].join(" ")}
    >
      <svg viewBox="0 0 24 24" className={compact ? "size-3.5" : "size-4"} aria-hidden>
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

function Avatar({ name }: { name: string }) {
  return (
    <span
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-signature-blue)_12%,white)] text-xs font-semibold tracking-wide text-midnight"
      aria-hidden
    >
      {initialsFor(name)}
    </span>
  );
}

function ReviewQuote({
  quote,
  featured = false,
}: {
  quote: string;
  featured?: boolean;
}) {
  const limit = featured ? PREVIEW_LIMIT_FEATURED : PREVIEW_LIMIT_SUPPORTING;
  const needsToggle = quote.length > limit;
  const [expanded, setExpanded] = useState(false);
  const shown =
    !needsToggle || expanded ? quote : `${quote.slice(0, limit).trimEnd()}…`;

  return (
    <div>
      <blockquote>
        <p
          className={
            featured
              ? "font-heading text-lg font-medium leading-relaxed tracking-tight text-midnight sm:text-xl sm:leading-snug"
              : "text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]"
          }
        >
          {shown}
        </p>
      </blockquote>
      {needsToggle ? (
        <button
          type="button"
          className="mt-2 text-sm font-semibold text-signature transition-colors hover:text-midnight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      ) : null}
    </div>
  );
}

function ReviewIdentity({ name }: { name: string }) {
  return (
    <footer className="mt-5 flex items-center gap-3">
      <Avatar name={name} />
      <div className="min-w-0">
        <p className="font-heading text-sm font-semibold text-midnight">{name}</p>
        <p className="mt-0.5 flex items-center gap-1.5 text-sm text-navy-muted">
          <GoogleMark compact />
          <span aria-hidden>·</span>
          <span>Review</span>
        </p>
      </div>
    </footer>
  );
}

function FeaturedCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-[15px] border border-[color-mix(in_srgb,var(--color-signature-blue)_14%,transparent)] bg-ice px-6 py-7 sm:px-8 sm:py-8">
      <FiveGoldStars size="md" />
      <div className="mt-4 flex-1">
        <ReviewQuote quote={review.quote} featured />
      </div>
      <ReviewIdentity name={review.name} />
    </article>
  );
}

function SupportingCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-[15px] border border-border bg-cloud px-5 py-5 sm:px-6 sm:py-6">
      <FiveGoldStars size="sm" />
      <div className="mt-3 flex-1">
        <ReviewQuote quote={review.quote} />
      </div>
      <ReviewIdentity name={review.name} />
    </article>
  );
}

function NavArrow({
  direction,
  onClick,
  disabled,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-pure text-midnight transition-colors hover:border-signature hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature disabled:cursor-not-allowed disabled:opacity-35"
    >
      <span aria-hidden className="text-lg leading-none">
        {direction === "prev" ? "←" : "→"}
      </span>
    </button>
  );
}

function MobileCarousel() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = reviews.length;

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(motion.matches);
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  }

  function onTouchStart(event: TouchEvent) {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  }

  function onTouchEnd(event: TouchEvent) {
    if (touchStartX.current == null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 48) return;
    goTo(delta > 0 ? index - 1 : index + 1);
  }

  const review = reviews[index];

  return (
    <div
      className="lg:hidden"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className={
          reduceMotion
            ? undefined
            : "motion-safe:transition-opacity motion-safe:duration-200"
        }
      >
        {review ? <FeaturedCard review={review} /> : null}
      </div>

      {count > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-4">
          <NavArrow
            direction="prev"
            label="Previous review"
            disabled={index === 0}
            onClick={() => goTo(index - 1)}
          />
          <div className="flex items-center gap-2" role="tablist" aria-label="Reviews">
            {reviews.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={itemIndex === index}
                aria-label={`Show review from ${item.name}`}
                className={[
                  "size-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature",
                  itemIndex === index
                    ? "bg-signature"
                    : "bg-[color-mix(in_srgb,var(--color-midnight-navy)_18%,transparent)] hover:bg-[color-mix(in_srgb,var(--color-midnight-navy)_32%,transparent)]",
                ].join(" ")}
                onClick={() => goTo(itemIndex)}
              />
            ))}
          </div>
          <NavArrow
            direction="next"
            label="Next review"
            disabled={index >= count - 1}
            onClick={() => goTo(index + 1)}
          />
        </div>
      ) : null}
    </div>
  );
}

export function GoogleReviews() {
  const headingId = useId();
  const featured = reviews[0];
  const supporting = reviews.slice(1);

  return (
    <section
      id="reviews"
      aria-labelledby={headingId}
      className="bg-pure text-midnight"
      style={{ paddingBlock: "clamp(2.75rem, 5.5vw, 4.25rem)" }}
    >
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <header className="max-w-xl text-left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
              Real Customer Experiences
            </p>
            <h2
              id={headingId}
              className="font-heading mt-2.5 text-[2.125rem] font-semibold leading-tight tracking-tight text-midnight sm:mt-3 sm:text-[2.35rem]"
            >
              Don&apos;t Just Take Our Word for It.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy-muted sm:text-lg">
              See what local customers are saying about our work.
            </p>
          </header>

          <div className="flex shrink-0 flex-col items-start gap-1.5 lg:items-end lg:pb-1">
            <div className="inline-flex items-center gap-2.5 rounded-md border border-border bg-cloud px-3.5 py-2.5">
              <GoogleMark />
              <FiveGoldStars size="sm" />
            </div>
            {/* Aggregate count / profile link omitted until verified in project config. */}
          </div>
        </div>

        {/* Desktop / tablet editorial: 1 featured + 2 supporting. No fake pagination with only 3 reviews. */}
        <div className="mt-8 hidden items-stretch gap-5 md:grid md:grid-cols-2 lg:mt-9 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-6">
          <div className="min-w-0 md:col-span-2 lg:col-span-1">
            {featured ? <FeaturedCard review={featured} /> : null}
          </div>
          <ul className="grid list-none gap-5 p-0 md:col-span-2 md:grid-cols-2 lg:col-span-1 lg:grid-cols-1 lg:gap-6">
            {supporting.map((review) => (
              <li key={review.id} className="min-h-0">
                <SupportingCard review={review} />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: one review at a time, manual carousel only */}
        <div className="mt-8 md:hidden">
          <MobileCarousel />
        </div>

        <aside
          className="mt-8 overflow-hidden rounded-[15px] sm:mt-9"
          aria-labelledby="reviews-cta-heading"
        >
          <div
            className="flex flex-col gap-5 px-5 py-6 sm:px-7 sm:py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8"
            style={{ backgroundColor: "#061A38" }}
          >
            <div className="max-w-xl text-pure">
              <h3
                id="reviews-cta-heading"
                className="font-heading text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]"
              >
                Happy With Our Work?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                Your feedback means a lot to our student-run team. Share your
                experience with a Google review.
              </p>
            </div>
            {GOOGLE_REVIEWS_URL ? (
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
              >
                Leave a Google Review
              </a>
            ) : null}
          </div>
        </aside>
      </Container>
    </section>
  );
}
