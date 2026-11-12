import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const points = [
  {
    title: "Reduce Debris Buildup",
    description:
      "Help prevent larger leaves and debris from collecting inside your gutters.",
    icon: "debris" as const,
  },
  {
    title: "Less Frequent Maintenance",
    description:
      "Reduce the amount of routine clearing your gutters may need.",
    icon: "calendar" as const,
  },
  {
    title: "Support Better Drainage",
    description:
      "Help keep rainwater moving through your gutter system when properly maintained.",
    icon: "flow" as const,
  },
] as const;

function PointIcon({ kind }: { kind: "debris" | "calendar" | "flow" }) {
  const className = "mt-0.5 size-5 shrink-0 text-signature";

  if (kind === "debris") {
    return (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
        <path
          d="M4 15.5c2.5-.6 4.4-2.4 5.6-4.8.9-1.8 1.5-3.6 2.6-4.7-.4 2.1-.8 4.1-2.3 5.8-1.6 1.8-3.5 2.8-5.9 3.7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 8.5c1.2-.6 2.3-1.7 3.2-3.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12.5 14.5c.7.2 1.6.2 2.5 0 .8-.2 1.5-.5 2-.9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "calendar") {
    return (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
        <rect
          x="3.25"
          y="4.5"
          width="13.5"
          height="12"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M6.5 3.25v2.5M13.5 3.25v2.5M3.25 8h13.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path
        d="M3.5 6.5h13M5 6.5v2c0 .9.5 1.7 1.3 2.1L8 11.5v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6.5v1.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.5 13.5c0 1.4-1 2.5-2.25 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Services overview — educational gutter guards intro + contained CTA.
 */
export function GutterGuardsFeature() {
  return (
    <section
      id="gutter-guards"
      aria-labelledby="gutter-guards-overview-heading"
      className="scroll-mt-28 bg-white text-midnight"
      style={{ paddingBlock: "clamp(3rem, 5vw, 4.5rem)" }}
    >
      <Container width="portfolio">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <figure className="relative m-0 aspect-[4/3] w-full overflow-hidden rounded-[14px] border border-border bg-cloud lg:aspect-[5/4]">
            <Image
              src="/services/gutter-guards.webp"
              alt="Close-up of micro-mesh gutter guard being installed into a white residential gutter under roof shingles"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-[center_40%]"
            />
          </figure>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
              Long-Term Gutter Protection
            </p>
            <h2
              id="gutter-guards-overview-heading"
              className="font-heading mt-2.5 text-[clamp(1.75rem,3.1vw,2.2rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
            >
              Tired of Cleaning Your Gutters Every Season?
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-navy-muted">
              Leaves and debris can build up quickly, especially during the
              fall. Gutter guards help reduce the amount of debris entering your
              gutters, making ongoing maintenance easier.
            </p>

            <ul className="mt-7 space-y-5">
              {points.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <PointIcon kind={point.icon} />
                  <div className="min-w-0">
                    <p className="font-heading text-[1.05rem] font-semibold tracking-tight text-midnight">
                      {point.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-navy-muted">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-9 overflow-hidden rounded-[1.125rem] px-5 py-7 text-center text-pure sm:mt-10 sm:px-8 sm:py-8 lg:px-10"
          style={{ backgroundColor: "#061A38" }}
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-[0.7rem]">
            Explore Gutter Guards
          </p>
          <h3 className="font-heading mx-auto mt-2 max-w-xl text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]">
            A Smarter Way to Protect Your Gutters.
          </h3>
          <p className="mx-auto mt-2.5 max-w-lg text-sm leading-relaxed text-white/72 sm:text-[0.95rem]">
            Discover how gutter guards work and whether they&apos;re the right
            fit for your property.
          </p>
          <div className="mt-5">
            <Link
              href="/services/gutter-guards"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
            >
              Explore Gutter Guards
              <span aria-hidden className="ml-1.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
