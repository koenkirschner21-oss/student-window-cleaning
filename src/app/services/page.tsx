import type { Metadata } from "next";
import { PlansPreview } from "@/components/services/PlansPreview";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";
import { ServicesHero } from "@/components/services/ServicesHero";
import { WindowCleaningSection } from "@/components/services/WindowCleaningSection";

export const metadata: Metadata = {
  title: "Window & Gutter Cleaning Services in Whitby",
  description:
    "Professional exterior window cleaning, interior & exterior window cleaning, and gutter cleaning in Whitby and Durham Region from Student Window Cleaning.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Window & Gutter Cleaning Services in Whitby",
    description:
      "Explore exterior, interior & exterior, and gutter cleaning services for homes across Whitby and Durham Region.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1">
      <ServicesHero />
      <WindowCleaningSection />

      <ServiceDetail
        id="gutter-cleaning"
        title="Gutter Cleaning"
        description="Clear accessible gutters of leaves and buildup so water can flow as intended. This service covers cleaning only — not repairs, roof work, or structural guarantees."
        inclusions={[
          "Leaf removal",
          "Debris clearing",
          "Cleaning of accessible gutters",
        ]}
        quoteService="gutter-cleaning"
        imageSide="left"
        tone="white"
      />

      <PlansPreview />
      <ServicesFinalCta />
    </main>
  );
}
