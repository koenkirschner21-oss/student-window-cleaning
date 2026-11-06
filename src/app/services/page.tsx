import type { Metadata } from "next";
import { ScaffoldPage } from "@/components/layout/ScaffoldPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Overview of Student Window Cleaning services. Full service details are being prepared for Phase 2.",
};

export default function ServicesPage() {
  return (
    <ScaffoldPage
      title="Services"
      description="This page is scaffolded for navigation in Phase 1. Detailed service copy, process notes, and photography will land in a later phase. For now, request a quote or return home for the overview."
    />
  );
}
