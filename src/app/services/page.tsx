import type { Metadata } from "next";
import { GutterCleaningSection } from "@/components/services/GutterCleaningSection";
import { GutterGuardsFeature } from "@/components/services/GutterGuardsFeature";
import { PlansPreview } from "@/components/services/PlansPreview";
import { ResidentialCommercialSection } from "@/components/services/ResidentialCommercialSection";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";
import { ServicesHero } from "@/components/services/ServicesHero";
import { WindowCleaningSection } from "@/components/services/WindowCleaningSection";

export const metadata: Metadata = {
  title: "Window & Gutter Cleaning Services in Whitby",
  description:
    "Professional exterior window cleaning, interior window cleaning, gutter cleaning, and gutter guards in Whitby and Durham Region from Student Window Cleaning.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Window & Gutter Cleaning Services in Whitby",
    description:
      "Explore exterior, interior, gutter cleaning, and gutter guard services for homes across Whitby and Durham Region.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1">
      <ServicesHero />
      <WindowCleaningSection />
      <GutterCleaningSection />
      <GutterGuardsFeature />
      <ResidentialCommercialSection />
      <PlansPreview />
      <ServicesFinalCta />
    </main>
  );
}
