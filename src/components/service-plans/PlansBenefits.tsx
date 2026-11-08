import Image from "next/image";
import { Container } from "@/components/ui/Container";

const benefits = [
  {
    title: "Consistent Results",
    body: "Maintain cleaner windows throughout the season instead of waiting for buildup to become noticeable.",
  },
  {
    title: "Convenient Upkeep",
    body: "Plan future cleaning visits around your schedule without starting the process from scratch each time.",
  },
  {
    title: "More Value",
    body: "Enjoy savings on every visit when you choose one of our seasonal cleaning plans.",
  },
] as const;

/**
 * Value of Regular Care — photo + intro editorial, then three benefit columns.
 * Photo reuses genuine Our Work branded scrubber action shot.
 */
export function PlansBenefits() {
  return (
    <section
      aria-labelledby="plans-benefits-heading"
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)" }}
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
          <figure className="m-0 w-full justify-self-center lg:justify-self-start">
            <div className="relative aspect-[4/5] w-full max-w-[28rem] overflow-hidden rounded-lg bg-cloud lg:max-w-none">
              <Image
                src="/our-work/cleaning-action-branded-scrub.webp"
                alt="Student Window Cleaning team member in a branded shirt scrubbing a residential window"
                fill
                sizes="(max-width: 1024px) min(100vw, 28rem), 42vw"
                className="object-cover object-[center_22%]"
              />
            </div>
          </figure>

          <div className="max-w-xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
              The Value of Regular Care
            </p>
            <h2
              id="plans-benefits-heading"
              className="font-heading mt-2.5 text-3xl font-semibold tracking-tight text-midnight sm:mt-3 sm:text-[2.15rem] sm:leading-tight"
            >
              Clear Windows, Season After Season.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">
              Keep your home looking its best with professional window cleaning
              that fits your schedule. Whether you choose two visits or three,
              regular care makes it easier to stay on top of your home&apos;s
              upkeep.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 sm:mt-12 sm:pt-10">
          <ul className="grid gap-8 sm:grid-cols-3 sm:gap-0">
            {benefits.map((benefit, index) => (
              <li
                key={benefit.title}
                className={[
                  "min-w-0 sm:px-6 lg:px-8",
                  index === 0 ? "sm:pl-0" : "",
                  index === benefits.length - 1 ? "sm:pr-0" : "",
                  index > 0
                    ? "border-t border-border pt-8 sm:border-t-0 sm:border-l sm:pt-0"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <h3 className="font-heading text-lg font-semibold tracking-tight text-midnight sm:text-xl">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-muted sm:text-[0.95rem]">
                  {benefit.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
