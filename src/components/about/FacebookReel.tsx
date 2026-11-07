"use client";

import { useState } from "react";
import { AboutPhotoPlaceholder } from "@/components/about/AboutPhotoPlaceholder";
import { socialLinks } from "@/lib/site";

export function FacebookReel() {
  const reelUrl = socialLinks.facebookReel;
  const [loaded, setLoaded] = useState(false);

  if (!reelUrl) {
    return (
      <div className="overflow-hidden rounded-md border border-border bg-pure">
        <AboutPhotoPlaceholder
          label="Educational Facebook Reel preview"
          tone="cloud"
          aspect="reel"
          className="mx-auto max-w-xs rounded-none border-0 sm:max-w-sm"
          caption="Reel coming soon"
        />
        <div className="border-t border-border px-5 py-4">
          <p className="text-sm font-semibold text-midnight">
            Educational reel placeholder
          </p>
          <p className="mt-1 text-sm leading-relaxed text-navy-muted">
            A verified Facebook Reel URL has not been added yet. Set{" "}
            <code className="rounded bg-ice px-1.5 py-0.5 text-xs text-midnight">
              socialLinks.facebookReel
            </code>{" "}
            in <code className="rounded bg-ice px-1.5 py-0.5 text-xs">site.ts</code>{" "}
            when the link is confirmed.
          </p>
        </div>
      </div>
    );
  }

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="group relative w-full overflow-hidden rounded-md border border-border text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
      >
        <AboutPhotoPlaceholder
          label="Load educational Facebook Reel"
          tone="navy"
          aspect="reel"
          className="mx-auto max-w-xs rounded-none border-0 sm:max-w-sm [&>p]:hidden"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-midnight/35">
          <span className="inline-flex items-center gap-2 rounded-md bg-pure px-4 py-2.5 text-sm font-semibold text-midnight shadow-sm transition group-hover:bg-ice">
            <span aria-hidden className="text-signature">
              ▶
            </span>
            Load reel
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-border bg-pure">
      <div className="mx-auto aspect-[9/16] w-full max-w-xs bg-midnight sm:max-w-sm">
        <iframe
          title="Student Window Cleaning educational Facebook Reel"
          src={reelUrl}
          className="h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
