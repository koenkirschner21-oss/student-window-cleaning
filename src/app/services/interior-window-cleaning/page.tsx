import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { InteriorWindowCleaningPage } from "@/components/services/InteriorWindowCleaningPage";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  defaultOgImage,
  socialImages,
} from "@/lib/seo";

const path = "/services/interior-window-cleaning";
const title = "Interior Window Cleaning in Whitby";
const description =
  "Professional interior window cleaning in Whitby and Durham Region — clearer views, careful detailing, and free personalized quotes from Student Window Cleaning.";

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

export default function Page() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Interior Window Cleaning", path },
        ])}
      />
      <JsonLd
        data={buildServiceJsonLd({
          name: "Interior Window Cleaning",
          description,
          path,
          serviceType: "Interior window cleaning",
        })}
      />
      <InteriorWindowCleaningPage />
    </>
  );
}
