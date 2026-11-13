import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { GutterGuardsPageContent } from "@/components/services/GutterGuardsPageContent";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  socialImages,
} from "@/lib/seo";

const path = "/services/gutter-guards";
const title = "Gutter Guards in Whitby";
const description =
  "Learn how gutter guards may help reduce debris buildup between cleanings. Request a free quote from Student Window Cleaning in Whitby and Durham Region.";

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
      url: "/before-after/gutter-guards/after-mesh-gutter-guard-installed.webp",
      width: 1200,
      height: 800,
      alt: "Residential gutter with mesh guard installed",
    }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      "/before-after/gutter-guards/after-mesh-gutter-guard-installed.webp",
    ],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Gutter Guards", path },
        ])}
      />
      <JsonLd
        data={buildServiceJsonLd({
          name: "Gutter Guards",
          description,
          path,
          serviceType: "Gutter guard installation",
        })}
      />
      <GutterGuardsPageContent />
    </>
  );
}
