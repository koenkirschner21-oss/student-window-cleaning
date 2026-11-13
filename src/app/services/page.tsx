import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { GutterCleaningSection } from "@/components/services/GutterCleaningSection";
import { GutterGuardsFeature } from "@/components/services/GutterGuardsFeature";
import { PlansPreview } from "@/components/services/PlansPreview";
import { ResidentialCommercialSection } from "@/components/services/ResidentialCommercialSection";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";
import { ServicesHero } from "@/components/services/ServicesHero";
import { WindowCleaningSection } from "@/components/services/WindowCleaningSection";
import {
  buildBreadcrumbJsonLd,
  defaultOgImage,
  socialImages,
} from "@/lib/seo";

const title = "Window & Gutter Cleaning in Whitby";
const description =
  "Professional exterior and interior window cleaning, gutter cleaning, and gutter guards in Whitby and Durham Region from Student Window Cleaning.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title,
    description,
    url: "/services",
    images: socialImages(defaultOgImage),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [defaultOgImage.url],
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
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
