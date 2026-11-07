import type { Metadata } from "next";
import { OurWorkFinalCta } from "@/components/our-work/OurWorkFinalCta";
import { OurWorkHero } from "@/components/our-work/OurWorkHero";
import { WorkGallery } from "@/components/our-work/WorkGallery";
import { workPhotos } from "@/lib/our-work";

export const metadata: Metadata = {
  title: "Our Work | Window & Gutter Cleaning Gallery in Whitby",
  description:
    "See real Student Window Cleaning work across Whitby and Durham Region — exterior windows, interior & exterior cleans, and gutter care. Request a free quote.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work | Student Window Cleaning",
    description:
      "A gallery of real window and gutter cleaning work from homes and properties across Whitby and Durham Region.",
    url: "/our-work",
  },
};

export default function OurWorkPage() {
  return (
    <main id="main-content" className="flex-1">
      <OurWorkHero />
      <WorkGallery photos={workPhotos} />
      <OurWorkFinalCta />
    </main>
  );
}
