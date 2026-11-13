import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { GutterCleaningPageContent } from "@/components/services/GutterCleaningPageContent";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  socialImages,
} from "@/lib/seo";

const path = "/services/gutter-cleaning";
const title = "Gutter Cleaning in Whitby";
const description =
  "Professional gutter cleaning in Whitby and Durham Region — debris removal, downspout clearing, and careful property care from Student Window Cleaning.";

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
    images: socialImages({
      url: "/before-after/gutters/after.webp",
      width: 1200,
      height: 800,
      alt: "Residential gutter after professional cleaning",
    }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/before-after/gutters/after.webp"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Gutter Cleaning", path },
        ])}
      />
      <JsonLd
        data={buildServiceJsonLd({
          name: "Gutter Cleaning",
          description,
          path,
          serviceType: "Gutter cleaning",
        })}
      />
      <GutterCleaningPageContent />
    </>
  );
}
