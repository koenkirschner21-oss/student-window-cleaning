import type { Metadata } from "next";
import { InteriorWindowCleaningPage } from "@/components/services/InteriorWindowCleaningPage";

export const metadata: Metadata = {
  title: "Interior Window Cleaning in Whitby & Durham Region",
  description:
    "Professional interior window cleaning in Whitby and Durham Region from Student Window Cleaning — clearer views, careful detailing, free personalized quotes.",
  alternates: {
    canonical: "/services/interior-window-cleaning",
  },
  openGraph: {
    title: "Interior Window Cleaning | Student Window Cleaning",
    description:
      "Enjoy clearer views from inside your home with careful interior window cleaning by our local student-run team.",
    url: "/services/interior-window-cleaning",
  },
};

export default function Page() {
  return <InteriorWindowCleaningPage />;
}
