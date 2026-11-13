import type { Metadata } from "next";
import { OurWorkFinalCta } from "@/components/our-work/OurWorkFinalCta";
import { OurWorkHero } from "@/components/our-work/OurWorkHero";
import { PropertyPortfolio } from "@/components/our-work/PropertyPortfolio";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbJsonLd,
  socialImages,
} from "@/lib/seo";
import {
  commercialProjects,
  residentialProjects,
} from "@/lib/our-work";

const path = "/our-work";
const title = "Our Work in Whitby & Durham";
const description =
  "Explore residential and commercial window cleaning projects completed by Student Window Cleaning across Whitby and Durham Region.";

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
      url: "/our-work/hero-branded-scrub-back.webp",
      width: 1200,
      height: 1600,
      alt: "Student Window Cleaning team member scrubbing a residential window",
    }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/our-work/hero-branded-scrub-back.webp"],
  },
};

export default function OurWorkPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Work", path },
        ])}
      />
      <OurWorkHero />
      <PropertyPortfolio
        residential={residentialProjects}
        commercial={commercialProjects}
      />
      <OurWorkFinalCta />
    </main>
  );
}
