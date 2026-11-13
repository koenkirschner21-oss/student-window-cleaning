import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ExteriorWindowCleaningPage } from "@/components/services/ExteriorWindowCleaningPage";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  socialImages,
} from "@/lib/seo";

const path = "/services/exterior-window-cleaning";
const title = "Exterior Window Cleaning in Whitby";
const description =
  "Professional exterior window cleaning for homes across Whitby and Durham Region — clear glass, careful detailing, and free quotes from Student Window Cleaning.";

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
      url: "/services/window-cleaning-intro-soapy.webp",
      width: 1200,
      height: 800,
      alt: "Soapy exterior window during professional cleaning",
    }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/services/window-cleaning-intro-soapy.webp"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Exterior Window Cleaning", path },
        ])}
      />
      <JsonLd
        data={buildServiceJsonLd({
          name: "Exterior Window Cleaning",
          description,
          path,
          serviceType: "Exterior window cleaning",
        })}
      />
      <ExteriorWindowCleaningPage />
    </>
  );
}
