import { BeforeAfterCompare } from "@/components/ui/BeforeAfterCompare";

/**
 * Homepage photographic proof — side-by-side because the source before/after
 * frames were captured from slightly different viewpoints (slider would mislead).
 */
export function WindowBeforeAfter() {
  return (
    <BeforeAfterCompare
      id="window-results"
      eyebrow="See the Difference"
      heading="A Clearer View Starts Here."
      supporting="See the difference professional window cleaning can make."
      before={{
        src: "/before-after/windows/before.webp",
        alt: "Residential white-framed window on a brick home before cleaning, with visible water spots and film on the glass",
        label: "Before",
        objectPosition: "center 45%",
      }}
      after={{
        src: "/before-after/windows/after.webp",
        alt: "Same style of residential brick-home window after cleaning, with clear streak-free glass and sharp reflections",
        label: "After",
        objectPosition: "center 42%",
      }}
      tone="light"
    />
  );
}
