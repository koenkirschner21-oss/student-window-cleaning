import type { Metadata } from "next";
import { GutterCleaningPageContent } from "@/components/services/GutterCleaningPageContent";

export const metadata: Metadata = {
  title: "Gutter Cleaning in Whitby & Durham Region",
  description:
    "Professional gutter cleaning in Whitby and Durham Region — debris removal, downspout clearing, and careful property care from Student Window Cleaning.",
  alternates: {
    canonical: "/services/gutter-cleaning",
  },
  openGraph: {
    title: "Gutter Cleaning | Student Window Cleaning",
    description:
      "Clear accessible gutter debris so water can drain properly. Free quotes from our local student-run team.",
    url: "/services/gutter-cleaning",
  },
};

export default function Page() {
  return <GutterCleaningPageContent />;
}
