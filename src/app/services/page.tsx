import type { Metadata } from "next";
import { PlansPreview } from "@/components/services/PlansPreview";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";
import { ServicesHero } from "@/components/services/ServicesHero";

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

      <ServiceDetail
        id="exterior-window-cleaning"
        title="Exterior Window Cleaning"
        description="A focused exterior clean that brightens the outside of your home without implying interior work. Ideal when you want the curb-facing glass and accessible exterior surfaces refreshed with care."
        inclusions={[
          "Exterior window glass",
          "Exterior-facing frames",
          "Exterior-facing sills",
          "Exterior-facing sliding-door glass",
          "Exterior-facing deck glass",
          "Exterior-facing garage-door glass",
        ]}
        quoteService="exterior"
        imageSide="left"
        tone="white"
      />

      <ServiceDetail
        id="interior-exterior-window-cleaning"
        title="Interior & Exterior Window Cleaning"
        description="A complete inside-and-out clean for windows and applicable glass surfaces. We work carefully around your home so both sides of the glass look clear and well cared for."
        inclusions={[
          "Interior and exterior window glass",
          "Frames",
          "Sills",
          "Applicable sliding-door / deck / garage-door glass",
        ]}
        quoteService="interior-exterior"
        imageSide="right"
        tone="cloud"
      />

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
