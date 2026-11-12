import Image from "next/image";
import { CleaningProcessSection } from "@/components/services/CleaningProcessSection";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { Container } from "@/components/ui/Container";

const inclusions = [
  "Interior window glass",
  "Interior frames & sills",
  "Interior tracks & sliding doors",
] as const;

const interiorSteps = [
  {
    number: "01",
    title: "Wash the Glass",
    description:
      "We carefully clean interior glass to remove dust, fingerprints, and everyday buildup.",
  },
  {
    number: "02",
    title: "Squeegee the Glass",
    description:
      "We remove the cleaning solution to leave a clear, streak-free interior finish.",
  },
  {
    number: "03",
    title: "Detail the Frame",
    description:
      "We wipe and detail accessible window edges and frames for a polished look inside your home.",
  },
  {
    number: "04",
    title: "Clean Sills & Tracks",
    description:
      "We finish by cleaning applicable interior sills and accessible tracks.",
  },
] as const;

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="mt-0.5 size-3.5 shrink-0 text-signature"
    >
      <path
        d="M3.2 8.2 6.4 11.3 12.8 4.7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InteriorWindowCleaningPage() {
  return (
    <main id="main-content" className="flex-1">
      <ServicePageHero
        eyebrow="Window Cleaning"
        title="Interior Window Cleaning"
        description="Careful interior glass cleaning for clearer views inside your home — provided by our local student-run team across Whitby and Durham Region."
      />

      <section
        aria-labelledby="interior-intro-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)" }}
      >
        <Container width="portfolio">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <figure className="relative m-0 aspect-[16/10] overflow-hidden rounded-[14px] border border-border bg-cloud">
              <Image
                src="/services/interior-exterior-pole.webp"
                alt="Student Window Cleaning team member cleaning a window with a telescopic pole"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-[40%_50%]"
                priority
              />
            </figure>

            <div className="max-w-xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
                Interior Glass Care
              </p>
              <h2
                id="interior-intro-heading"
                className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
              >
                Clearer Views From the Inside.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-muted">
                Enjoy cleaner glass and clearer views from inside your home,
                with careful attention to the details around every window. Our
                student-run team works thoughtfully around your living spaces.
              </p>
              <ul className="mt-6 space-y-2.5">
                {inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-snug text-navy-muted"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CleaningProcessSection
        title="Our Interior Cleaning Process."
        description="A careful approach to interior glass — focused on clarity, detail work, and respect for your home."
        steps={interiorSteps}
        tone="cloud"
      />

      <ServicePageCta
        headline="Ready for Cleaner Interior Windows?"
        supporting="Tell us about your property and we'll prepare a free, personalized quote. Interior cleaning can be requested as part of your overall window care."
      />
    </main>
  );
}
