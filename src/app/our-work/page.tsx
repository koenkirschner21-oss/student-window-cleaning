import type { Metadata } from "next";
import { OurWorkFinalCta } from "@/components/our-work/OurWorkFinalCta";
import { OurWorkHero } from "@/components/our-work/OurWorkHero";
import { WorkGallery } from "@/components/our-work/WorkGallery";
import { workPhotos } from "@/lib/our-work";

export const metadata: Metadata = {
  title: "Our Work | Window Cleaning Projects in Whitby & Durham Region",
  description:
    "Browse real Student Window Cleaning projects across Whitby and Durham Region — residential window cleans, on-the-job moments, and gutter care from our student-run team.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work | Window Cleaning Projects in Whitby & Durham Region",
    description:
      "Real window and gutter cleaning work from homes across Whitby and Durham Region — completed by our student-run team.",
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
