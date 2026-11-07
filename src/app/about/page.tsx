import type { Metadata } from "next";
import { AboutFinalCta } from "@/components/about/AboutFinalCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutSocial } from "@/components/about/AboutSocial";
import { BehindTheBusiness } from "@/components/about/BehindTheBusiness";
import { OurStandards } from "@/components/about/OurStandards";
import { OurStory } from "@/components/about/OurStory";

export const metadata: Metadata = {
  title: "About Us | Student-Run Window Cleaning in Whitby",
  description:
    "Meet Student Window Cleaning — a locally operated, student-run team serving homeowners across Whitby and Durham Region with professional window and gutter cleaning.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Student Window Cleaning",
    description:
      "Built by students. Driven by quality. Learn our story and standards for window cleaning across Whitby and Durham Region.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1">
      <AboutHero />
      <OurStory />
      <OurStandards />
      <BehindTheBusiness />
      <AboutSocial />
      <AboutFinalCta />
    </main>
  );
}
