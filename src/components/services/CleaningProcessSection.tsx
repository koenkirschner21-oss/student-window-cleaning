import { Container } from "@/components/ui/Container";

export type CleaningProcessStep = {
  number: string;
  title: string;
  description: string;
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
  tone?: "cloud" | "white";
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
  const ringTone = tone === "cloud" ? "ring-cloud" : "ring-pure";

  return (
    <section
      id="cleaning-process"
      aria-labelledby="cleaning-process-heading"
      className={`scroll-mt-28 text-midnight ${tone === "cloud" ? "bg-cloud" : "bg-pure"}`}
      style={{ paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)" }}
    >
      <Container width="portfolio">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
            {eyebrow}
          </p>
          <h2
            id="cleaning-process-heading"
            className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
          >
            {title}
          </h2>
          <p className="mx-auto mt-3.5 max-w-lg text-base leading-relaxed text-navy-muted">
            {description}
          </p>
        </div>

        <ol className="relative mt-10 hidden list-none p-0 md:mt-11 md:grid md:grid-cols-4 md:gap-x-6 lg:gap-x-8">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[3.15rem] right-[12.5%] left-[12.5%] h-px bg-[color-mix(in_srgb,var(--color-midnight-navy)_18%,transparent)]"
          />

          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              <span className="font-heading text-[2.35rem] font-semibold leading-none tracking-tight text-midnight tabular-nums lg:text-[2.6rem]">
                {step.number}
              </span>
              <span
                aria-hidden
                className={`relative z-[1] mt-3.5 size-2.5 shrink-0 rounded-full bg-signature ring-[3px] ${ringTone}`}
              />
              <h3 className="font-heading mt-4 text-base font-semibold tracking-tight text-midnight lg:text-[1.05rem]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[16.5rem] text-sm leading-relaxed text-navy-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <ol className="relative mt-9 list-none space-y-7 p-0 md:hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute top-3 bottom-3 left-[0.6875rem] w-px bg-[color-mix(in_srgb,var(--color-midnight-navy)_18%,transparent)]"
          />

          {steps.map((step) => (
            <li key={step.number} className="relative flex gap-4">
              <span
                aria-hidden
                className={`relative z-[1] mt-1.5 size-2.5 shrink-0 rounded-full bg-signature ring-[3px] ${ringTone}`}
              />
              <div className="min-w-0 flex-1">
                <span className="font-heading text-[1.65rem] font-semibold leading-none tracking-tight text-midnight tabular-nums">
                  {step.number}
                </span>
                <h3 className="font-heading mt-2 text-[1.05rem] font-semibold tracking-tight text-midnight">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-muted">
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
