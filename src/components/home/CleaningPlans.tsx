import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

const plans = [
  {
    name: "One-time refresh",
    body: "A single visit when the glass needs attention — after construction dust, seasons, or move-in.",
  },
  {
    name: "Seasonal cadence",
    body: "A few planned visits through the year so exteriors stay ahead of pollen, salt, and summer haze.",
  },
  {
    name: "Recurring care",
    body: "A steadier rhythm for homes that want windows kept clear without re-explaining the property each time.",
  },
] as const;

export function CleaningPlans() {
  return (
    <Section id="cleaning-plans" tone="ice">
      <Heading level={2} eyebrow="Cleaning options & plans" className="max-w-2xl">
        Choose a rhythm that fits the home — pricing stays personal.
      </Heading>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-muted">
        Plans are described here without published prices. Quotes are tailored
        after we understand the property, access, and services you need.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="border-t-2 border-signature/70 bg-pure/70 px-1 pt-6"
          >
            <h3 className="font-heading text-xl font-semibold text-midnight">
              {plan.name}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-navy-muted">
              {plan.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button href="/quote">Get a Free Quote</Button>
        <Link
          href="/cleaning-plans"
          className="text-sm font-semibold text-midnight underline-offset-4 hover:underline"
        >
          Cleaning plans overview
        </Link>
      </div>
    </Section>
  );
}
