import type { Metadata } from "next";
import { OurWorkFinalCta } from "@/components/our-work/OurWorkFinalCta";
import { OurWorkHero } from "@/components/our-work/OurWorkHero";
import { PropertyPortfolio } from "@/components/our-work/PropertyPortfolio";
import {
  commercialProjects,
  residentialProjects,
} from "@/lib/our-work";

export const metadata: Metadata = {
  title: "Our Work | Window Cleaning Projects in Whitby & Durham Region",
  description:
    "Explore residential and commercial window cleaning projects completed by Student Window Cleaning across Whitby and Durham Region.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work | Window Cleaning Projects in Whitby & Durham Region",
    description:
      "Homes and commercial properties serviced by our student-run window cleaning team across Whitby and Durham Region.",
    url: "/our-work",
  },
};

export default function OurWorkPage() {
  return (
    <main id="main-content" className="flex-1">
      <OurWorkHero />
      <PropertyPortfolio
        residential={residentialProjects}
        commercial={commercialProjects}
      />
      <OurWorkFinalCta />
    </main>
  );
}
