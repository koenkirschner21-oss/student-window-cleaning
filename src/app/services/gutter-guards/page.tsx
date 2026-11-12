import type { Metadata } from "next";
import { GutterGuardsPageContent } from "@/components/services/GutterGuardsPageContent";

export const metadata: Metadata = {
  title: "Gutter Guards in Whitby & Durham Region",
  description:
    "Learn how gutter guards may help reduce debris buildup and support lower maintenance between cleanings. Request a free quote in Whitby and Durham Region.",
  alternates: {
    canonical: "/services/gutter-guards",
  },
  openGraph: {
    title: "Gutter Guards | Student Window Cleaning",
    description:
      "Explore gutter guards as a smarter way to help protect your gutters between cleanings. Free personalized quotes available.",
    url: "/services/gutter-guards",
  },
};

export default function Page() {
  return <GutterGuardsPageContent />;
}
