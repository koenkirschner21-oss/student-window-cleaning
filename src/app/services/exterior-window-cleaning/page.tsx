import type { Metadata } from "next";
import { ExteriorWindowCleaningPage } from "@/components/services/ExteriorWindowCleaningPage";

export const metadata: Metadata = {
  title: "Exterior Window Cleaning in Whitby & Durham Region",
  description:
    "Professional exterior window cleaning for homes across Whitby and Durham Region from Student Window Cleaning — clear glass, careful detailing, free quotes.",
  alternates: {
    canonical: "/services/exterior-window-cleaning",
  },
  openGraph: {
    title: "Exterior Window Cleaning | Student Window Cleaning",
    description:
      "Refresh your home’s exterior glass with professional exterior window cleaning from our local student-run team.",
    url: "/services/exterior-window-cleaning",
  },
};

export default function Page() {
  return <ExteriorWindowCleaningPage />;
}
