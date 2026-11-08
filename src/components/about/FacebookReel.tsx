"use client";

import { useMemo, useState } from "react";
import { socialLinks } from "@/lib/site";

/**
 * Facebook Reel embed via the official video.php plugin (no autoplay).
 * Click-to-load keeps third-party content off until the visitor asks.
 */
export function FacebookReel() {
  const reelUrl = socialLinks.facebookReel;
  const shareUrl = socialLinks.facebookReelShare ?? reelUrl;
  const [loaded, setLoaded] = useState(false);

  const embedSrc = useMemo(() => {
    if (!reelUrl) return null;
    const params = new URLSearchParams({
      href: reelUrl,
      show_text: "false",
      width: "360",
      height: "640",
      t: "0",
    });
    return `https://www.facebook.com/plugins/video.php?${params.toString()}`;
  }, [reelUrl]);

  if (!reelUrl || !embedSrc) {
    return (
      <div className="mx-auto w-full max-w-[360px] rounded-lg border border-border bg-cloud px-5 py-8 text-center">
        <p className="text-sm font-semibold text-midnight">Reel unavailable</p>
        <p className="mt-2 text-sm leading-relaxed text-navy-muted">
          A verified Facebook Reel URL has not been configured.
        </p>
        {shareUrl ? (
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-signature underline-offset-2 hover:underline"
          >
            Watch on Facebook
          </a>
        ) : null}
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="mx-auto w-full max-w-[360px]">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group flex aspect-[9/16] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-lg border border-border bg-[#0A274F] px-6 text-center text-pure focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
        >
          <span
            aria-hidden
            className="inline-flex size-12 items-center justify-center rounded-full bg-pure text-lg font-semibold text-midnight transition group-hover:bg-ice"
          >
            ▶
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Load Facebook Reel
          </span>
          <span className="max-w-[14rem] text-xs leading-relaxed text-white/65">
            Opens the official Facebook player here. No autoplay.
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-lg border border-border bg-cloud">
      <div className="relative aspect-[9/16] w-full bg-[#0A274F]">
        <iframe
          title="Student Window Cleaning Facebook Reel"
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
