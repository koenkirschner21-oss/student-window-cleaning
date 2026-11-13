import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

const benefits: readonly {
  title: string;
  body: string;
  icon: ReactNode;
}[] = [
  {
    title: "Consistent Results",
    body: "Cleaner windows throughout the season.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-4">
        <path
          d="M9.9 10.4 8.5 7.2 7.1 10.4 3.9 11.8l3.2 1.4 1.4 3.2 1.4-3.2 3.2-1.4-3.2-1.4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="m16.8 5.5-.7-1.7-.7 1.7-1.7.7 1.7.7.7 1.7.7-1.7 1.7-.7-1.7-.7ZM18.6 14.2l-.9-2.1-.9 2.1-2.1.9 2.1.9.9 2.1.9-2.1 2.1-.9-2.1-.9Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Convenient Upkeep",
    body: "Plan future visits around your schedule.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-4">
        <rect
          x="3.5"
          y="5"
          width="17"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 3.5v3M16 3.5v3M3.5 9.5h17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="m9.2 14.2 1.8 1.8 3.8-3.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "More Value",
    body: "Save on every seasonal cleaning visit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-4">
        <path
          d="M12 3.5 14.1 8l4.9.4-3.7 3.2 1.1 4.8L12 14.2 7.6 16.4l1.1-4.8L5 8.4 9.9 8 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 9.2v4.2M13.4 10.2c0-.7-.6-1.1-1.4-1.1s-1.4.4-1.4 1.1c0 .6.5 1 1.4 1.2s1.4.6 1.4 1.3c0 .7-.6 1.2-1.4 1.2s-1.4-.5-1.4-1.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

/**
 * Value of Regular Care — full-width Midnight Navy with photo + 3 benefits.
 */
export function PlansBenefits() {
  return (
    <section
      aria-labelledby="plans-benefits-heading"
      className="text-pure"
      style={{
        backgroundColor: "#061A38",
        paddingBlock: "clamp(2.75rem, 4.5vw, 4rem)",
      }}
    >
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
          <figure className="m-0 w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#0A274F]">
              <Image
                src="/our-work/img-0509.webp"
                alt="Well-maintained tan brick two-garage home with clean white-trimmed windows"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-[center_28%]"
              />
            </div>
          </figure>

          <div className="max-w-xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-xs">
              The Value of Regular Care
            </p>
            <h2
              id="plans-benefits-heading"
              className="font-heading mt-2 text-[1.65rem] font-semibold tracking-tight text-pure sm:mt-2.5 sm:text-[1.9rem] sm:leading-tight"
            >
              Clear Windows, Season After Season.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/72">
              Keep your home looking its best with professional window cleaning
              that fits your schedule.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/12 pt-7 sm:mt-9 sm:pt-8">
          <ul className="grid gap-6 sm:grid-cols-3 sm:gap-0">
            {benefits.map((benefit, index) => (
              <li
                key={benefit.title}
                className={[
                  "min-w-0 sm:px-5 lg:px-7",
                  index === 0 ? "sm:pl-0" : "",
                  index === benefits.length - 1 ? "sm:pr-0" : "",
                  index > 0
                    ? "border-t border-white/12 pt-6 sm:border-t-0 sm:border-l sm:pt-0"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-md text-signature">
                    {benefit.icon}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold tracking-tight text-pure sm:text-lg">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                      {benefit.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
