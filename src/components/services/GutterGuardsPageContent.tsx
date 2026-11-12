import Image from "next/image";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { Container } from "@/components/ui/Container";

const benefits = [
  {
    title: "Help reduce debris buildup",
    description:
      "Guards can limit leaves and larger debris collecting in gutter channels between cleanings.",
  },
  {
    title: "Support clearer drainage",
    description:
      "Keeping more debris out of the gutter system may help water continue to flow as intended.",
  },
  {
    title: "Lower ongoing maintenance",
    description:
      "Many homeowners find guards make seasonal upkeep easier — without eliminating the need for care entirely.",
  },
] as const;

/**
 * Dedicated Gutter Guards overview — cautious claims, ready for later design polish.
 */
export function GutterGuardsPageContent() {
  return (
    <main id="main-content" className="flex-1">
      <ServicePageHero
        eyebrow="Gutter Protection"
        title="Gutter Guards"
        description="A practical option for homeowners across Whitby and Durham Region who want to help keep gutters clearer between cleanings."
      />

      <section
        aria-labelledby="gutter-guards-intro-heading"
        className="bg-white text-midnight"
        style={{ paddingBlock: "clamp(3.25rem, 5.5vw, 4.75rem)" }}
      >
        <Container width="portfolio">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <figure className="relative m-0 aspect-[16/10] overflow-hidden rounded-[14px] border border-border bg-cloud">
              <Image
                src="/services/gutter-guards.webp"
                alt="Close-up of micro-mesh gutter guard being installed into a white residential gutter under roof shingles"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-[center_40%]"
                priority
              />
            </figure>

            <div className="max-w-xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-signature sm:text-xs">
                Smarter Gutter Care
              </p>
              <h2
                id="gutter-guards-intro-heading"
                className="font-heading mt-2.5 text-[clamp(1.85rem,3.2vw,2.35rem)] font-semibold tracking-tight text-midnight sm:mt-3 sm:leading-tight"
              >
                Help Protect Your Gutters Between Cleanings.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-muted">
                Gutter guards are designed to help reduce leaves and debris
                collecting in your gutters. They can make ongoing maintenance
                easier and help keep your gutter system clearer between
                cleanings — without replacing the value of professional care
                when it&apos;s needed.
              </p>
              <p className="mt-3 text-base leading-relaxed text-navy-muted">
                Ask our student-run team about gutter guards as part of your
                personalized quote. We&apos;ll help you understand whether
                they&apos;re a good fit for your property.
              </p>
            </div>
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-7">
            {benefits.map((item) => (
              <li key={item.title} className="min-w-0">
                <h3 className="font-heading text-lg font-semibold tracking-tight text-midnight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ServicePageCta
        headline="Interested in Gutter Guards?"
        supporting="Request a free quote and ask about gutter guards for your home. We'll prepare personalized options based on your property."
        service="gutter-cleaning"
      />
    </main>
  );
}
