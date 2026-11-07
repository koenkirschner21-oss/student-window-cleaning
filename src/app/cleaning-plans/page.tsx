import type { Metadata } from "next";
import { PlansBenefits } from "@/components/service-plans/PlansBenefits";
import { PlansComparison } from "@/components/service-plans/PlansComparison";
import { PlansFinalCta } from "@/components/service-plans/PlansFinalCta";
import { PlansHero } from "@/components/service-plans/PlansHero";
import { PlansServicesExplainer } from "@/components/service-plans/PlansServicesExplainer";

export const metadata: Metadata = {
  title: "Window Cleaning Service Plans in Whitby",
  description:
    "Compare Basic, Best Value, and Premium window cleaning service plans in Whitby and Durham Region — from one-time cleans to seasonal care. Request a free quote.",
  alternates: {
    canonical: "/cleaning-plans",
  },
  openGraph: {
    title: "Window Cleaning Service Plans in Whitby",
    description:
      "Choose a one-time or seasonal cleaning plan for your home, then request a personalized quote from Student Window Cleaning.",
    url: "/cleaning-plans",
  },
};

export default function CleaningPlansPage() {
  return (
    <main id="main-content" className="flex-1">
      <PlansHero />
      <PlansComparison />
      <PlansBenefits />
      <PlansServicesExplainer />
      <PlansFinalCta />
    </main>
  );
}
