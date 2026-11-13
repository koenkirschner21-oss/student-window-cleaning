import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutSocial } from "@/components/about/AboutSocial";
import { BehindTheBusiness } from "@/components/about/BehindTheBusiness";
import { OurStandards } from "@/components/about/OurStandards";
import { OurStory } from "@/components/about/OurStory";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbJsonLd,
  defaultOgImage,
  socialImages,
} from "@/lib/seo";

const path = "/about";
const title = "About Our Student-Run Team";
const description =
  "Meet Student Window Cleaning — a locally operated, student-run team serving homeowners across Whitby and Durham Region with professional window and gutter cleaning.";

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

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path },
        ])}
      />
      <AboutHero />
      <OurStory />
      <OurStandards />
      <BehindTheBusiness />
      <AboutSocial />
    </main>
  );
}
