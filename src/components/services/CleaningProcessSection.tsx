import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export type CleaningProcessStep = {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
};

const defaultSteps: readonly CleaningProcessStep[] = [
  {
    number: "01",
    title: "Wash the Glass",
    description:
      "We remove dirt, dust and buildup using professional window-cleaning techniques.",
  },
  {
    number: "02",
    title: "Squeegee the Glass",
    description:
      "We carefully remove the cleaning solution to achieve a clear, streak-free finish.",
  },
  {
    number: "03",
    title: "Detail the Frame",
    description:
      "We wipe and detail the window edges and frames for a polished finish.",
  },
  {
    number: "04",
    title: "Clean Sills & Tracks",
    description:
      "We finish by cleaning applicable sills and accessible tracks, leaving the window area refreshed.",
  },
] as const;

type CleaningProcessSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: readonly CleaningProcessStep[];
  tone?: "cloud" | "white" | "navy";
};

/**
 * Open 4-step cleaning process timeline — reused on dedicated window pages.
 */
export function CleaningProcessSection({
  eyebrow = "How We Work",
  title = "Our 4-Step Cleaning Process.",
  description = "A detailed approach to cleaner windows, from the first wash to the finishing touches.",
  steps = defaultSteps,
  tone = "cloud",
}: CleaningProcessSectionProps) {
  const isNavy = tone === "navy";
  const ringTone =
    tone === "cloud" ? "ring-cloud" : tone === "white" ? "ring-pure" : "ring-[#061A38]";

  return (
    <section
      id="cleaning-process"
      aria-labelledby="cleaning-process-heading"
      className={`scroll-mt-28 ${
        isNavy
          ? "text-pure"
          : `text-midnight ${tone === "cloud" ? "bg-cloud" : "bg-pure"}`
      }`}
      style={{
        paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)",
        ...(isNavy ? { backgroundColor: "#061A38" } : {}),
      }}
    >
      <Container width="portfolio">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className={`text-[0.7rem] font-semibold uppercase tracking-[0.18em] sm:text-xs ${
              isNavy ? "text-sky" : "text-signature"
            }`}
          >
            {eyebrow}
          </p>
          <h2
            id="cleaning-process-heading"
            className={`font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight sm:mt-3 sm:leading-tight ${
              isNavy ? "text-pure" : "text-midnight"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mx-auto mt-3.5 max-w-lg text-base leading-relaxed ${
              isNavy ? "text-white/72" : "text-navy-muted"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Desktop */}
        <ol className="relative mt-10 hidden list-none p-0 md:mt-11 md:grid md:grid-cols-4 md:gap-x-6 lg:gap-x-8">
          {!isNavy ? (
            <div
              aria-hidden
              className={`pointer-events-none absolute right-[12.5%] left-[12.5%] h-px bg-[color-mix(in_srgb,var(--color-midnight-navy)_18%,transparent)] ${
                steps.some((step) => step.icon) ? "top-[5.15rem]" : "top-[3.15rem]"
              }`}
            />
          ) : null}

          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              {isNavy && step.icon ? (
                <>
                  <span className="inline-flex size-[3.75rem] items-center justify-center rounded-[0.85rem] bg-[#0A274F] text-signature">
                    {step.icon}
                  </span>
                  <span className="mt-3 text-[0.75rem] font-semibold tracking-[0.14em] text-sky tabular-nums">
                    {step.number}
                  </span>
                </>
              ) : (
                <>
                  <span className="font-heading text-[2.35rem] font-semibold leading-none tracking-tight text-midnight tabular-nums lg:text-[2.6rem]">
                    {step.number}
                  </span>
                  {step.icon ? (
                    <span className="mt-3 inline-flex size-10 items-center justify-center text-signature">
                      {step.icon}
                    </span>
                  ) : null}
                  <span
                    aria-hidden
                    className={`relative z-[1] size-2.5 shrink-0 rounded-full bg-signature ring-[3px] ${ringTone} ${step.icon ? "mt-3" : "mt-3.5"}`}
                  />
                </>
              )}
              <h3
                className={`font-heading mt-3 text-base font-semibold tracking-tight lg:text-[1.05rem] ${
                  isNavy ? "text-pure" : "text-midnight"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`mt-2 max-w-[16.5rem] text-sm leading-relaxed ${
                  isNavy ? "text-white/70" : "text-navy-muted"
                }`}
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Mobile */}
        <ol className="relative mt-9 list-none space-y-7 p-0 md:hidden">
          {!isNavy ? (
            <div
              aria-hidden
              className="pointer-events-none absolute top-3 bottom-3 left-[0.6875rem] w-px bg-[color-mix(in_srgb,var(--color-midnight-navy)_18%,transparent)]"
            />
          ) : null}

          {steps.map((step) => (
            <li
              key={step.number}
              className={`relative flex gap-4 ${isNavy ? "items-start" : ""}`}
            >
              {isNavy && step.icon ? (
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-[0.75rem] bg-[#0A274F] text-signature">
                  {step.icon}
                </span>
              ) : (
                <span
                  aria-hidden
                  className={`relative z-[1] mt-1.5 size-2.5 shrink-0 rounded-full bg-signature ring-[3px] ${ringTone}`}
                />
              )}
              <div className="min-w-0 flex-1">
                {isNavy ? (
                  <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-sky tabular-nums">
                    {step.number}
                  </span>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-[1.65rem] font-semibold leading-none tracking-tight text-midnight tabular-nums">
                      {step.number}
                    </span>
                    {step.icon ? (
                      <span className="inline-flex text-signature">{step.icon}</span>
                    ) : null}
                  </div>
                )}
                <h3
                  className={`font-heading mt-1.5 text-[1.05rem] font-semibold tracking-tight ${
                    isNavy ? "text-pure" : "text-midnight"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-1.5 text-sm leading-relaxed ${
                    isNavy ? "text-white/70" : "text-navy-muted"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
