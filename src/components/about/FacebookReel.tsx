"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { socialLinks } from "@/lib/site";

const EMBED_WIDTH = 360;
const EMBED_HEIGHT = 640;

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * Official Facebook video.php embed.
 * Lazy-mounts when near the viewport so the real FB preview/player appears
 * without a click-to-load navy placeholder. Muted autoplay only when motion
 * is allowed; browsers still enforce their own autoplay policies.
 */
export function FacebookReel() {
  const reelUrl = socialLinks.facebookReel;
  const shareUrl = socialLinks.facebookReelShare ?? reelUrl;
  const hostRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const preferAutoplay = !prefersReducedMotion;

  useEffect(() => {
    const node = hostRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "200px 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const embedSrc = useMemo(() => {
    if (!reelUrl) return null;
    const params = new URLSearchParams({
      href: reelUrl,
      show_text: "false",
      width: String(EMBED_WIDTH),
      height: String(EMBED_HEIGHT),
      t: "0",
    });
    // FB plugin autoplay is typically muted by the player / browser policy.
    if (preferAutoplay) params.set("autoplay", "true");
    return `https://www.facebook.com/plugins/video.php?${params.toString()}`;
  }, [reelUrl, preferAutoplay]);

  if (!reelUrl || !embedSrc) {
    return (
      <div className="mx-auto w-full max-w-[360px] rounded-xl border border-white/15 bg-white/5 px-5 py-8 text-center text-pure">
        <p className="text-sm font-semibold">Reel unavailable</p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          A verified Facebook Reel URL has not been configured.
        </p>
        {shareUrl ? (
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-[#3999EA] underline-offset-2 hover:underline"
          >
            Watch on Facebook
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <div
      ref={hostRef}
      className="mx-auto w-full max-w-[360px] overflow-hidden rounded-xl"
      style={{ aspectRatio: "9 / 16" }}
    >
      {inView ? (
        <iframe
          title="Student Window Cleaning Facebook Reel"
          src={embedSrc}
          width={EMBED_WIDTH}
          height={EMBED_HEIGHT}
          className="h-full w-full border-0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div
          className="h-full w-full bg-white/5"
          aria-hidden
          // Reserved aspect box prevents CLS before the iframe mounts.
        />
      )}
    </div>
  );
}
