import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PlansBenefits } from "@/components/service-plans/PlansBenefits";
import { PlansComparison } from "@/components/service-plans/PlansComparison";
import { PlansFinalCta } from "@/components/service-plans/PlansFinalCta";
import { PlansHero } from "@/components/service-plans/PlansHero";
import { PlansServicesExplainer } from "@/components/service-plans/PlansServicesExplainer";
import {
  buildBreadcrumbJsonLd,
  defaultOgImage,
  socialImages,
} from "@/lib/seo";

const path = "/cleaning-plans";
const title = "Window Cleaning Plans in Whitby";
const description =
  "Compare Basic, Best Value, and Premium window cleaning plans in Whitby and Durham Region — from one-time cleans to seasonal care. Request a free quote.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    images: socialImages(defaultOgImage),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [defaultOgImage.url],
  },
};

export default function CleaningPlansPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cleaning Plans", path },
        ])}
      />
      <PlansHero />
      <PlansComparison />
      <PlansBenefits />
      <PlansServicesExplainer />
      <PlansFinalCta />
    </main>
  );
}
