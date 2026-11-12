import type { Metadata } from "next";
import { GutterGuardsPageContent } from "@/components/services/GutterGuardsPageContent";

export const metadata: Metadata = {
  title: "Micro-Mesh Gutter Guards in Whitby & Durham Region",
  description:
    "Learn how micro-mesh gutter guards may help reduce debris buildup and support easier maintenance between cleanings. Request a free quote in Whitby and Durham Region.",
  alternates: {
    canonical: "/services/gutter-guards",
  },
  openGraph: {
    title: "Gutter Guards | Student Window Cleaning",
    description:
      "Explore micro-mesh gutter guards as a practical way to help protect your gutters between cleanings. Free personalized quotes available.",
    url: "/services/gutter-guards",
  },
};

export default function Page() {
  return <GutterGuardsPageContent />;
}
