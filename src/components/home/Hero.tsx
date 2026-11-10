import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Homepage hero — copy left, authentic cleaning photo right.
 * One-time CSS squeegee reveal on the photo only (prefers-reduced-motion skips it).
 * Photo stays fully opaque; only the soapy overlay wipes away.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-midnight text-pure"
      style={{
        background:
          "linear-gradient(180deg, #061A38 0%, #071F42 55%, #061A38 100%)",
      }}
    >
      <Container className="grid items-center gap-10 py-12 sm:gap-12 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:py-16">
        <div className="motion-fade-up relative z-10 max-w-xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky sm:text-xs">
            Window Cleaning in Whitby &amp; Durham Region
          </p>

          <h1
            id="hero-heading"
            className="font-heading mt-4 font-extrabold uppercase"
          >
            <span className="block text-[clamp(1.85rem,4.6vw,3.35rem)] leading-[1.05] tracking-[0.02em] text-pure">
              Student Run.
            </span>
            <span className="mt-1 block text-[clamp(1.45rem,3.7vw,2.75rem)] leading-[1.08] tracking-[0.015em] text-sky sm:mt-1.5">
              Professionally Done.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-white/70 sm:text-base">
            Professional window and gutter cleaning for homeowners across Whitby
            and Durham Region. Local students delivering quality you can count
            on.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 bg-transparent px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:border-white/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky sm:text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <figure className="m-0 w-full max-w-lg justify-self-center lg:max-w-none lg:justify-self-stretch">
          <div className="hero-squeegee-frame relative aspect-[4/5] w-full overflow-hidden rounded-md bg-[#0A274F] sm:aspect-[5/6] lg:aspect-[4/5]">
            {/*
              unoptimized serves /public directly so the hero never depends on
              /_next/image to paint. CSS cover rules beat global img height:auto.
            */}
            <Image
              src="/our-work/cleaning-action-squeegee.webp"
              alt="Student Window Cleaning team member squeegeeing a residential window"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) min(100vw, 32rem), 40vw"
              className="hero-squeegee-photo object-cover object-[center_30%]"
            />

            <div className="hero-squeegee-soapy" aria-hidden="true">
              <svg
                className="hero-squeegee-soap-svg"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <filter
                    id="hero-soap-frost"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.85 1.15"
                      numOctaves="3"
                      seed="7"
                      result="noise"
                    />
                    <feColorMatrix
                      in="noise"
                      type="matrix"
                      values="0 0 0 0 0.92
                              0 0 0 0 0.96
                              0 0 0 0 1
                              0 0 0 0.55 0"
                      result="soapGrain"
                    />
                    <feGaussianBlur in="soapGrain" stdDeviation="0.45" />
                  </filter>
                  <pattern
                    id="hero-soap-bubbles"
                    width="56"
                    height="56"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="8" cy="12" r="1.2" fill="rgba(255,255,255,0.55)" />
                    <circle cx="24" cy="6" r="0.7" fill="rgba(255,255,255,0.4)" />
                    <circle cx="40" cy="18" r="1.6" fill="rgba(255,255,255,0.48)" />
                    <circle cx="14" cy="34" r="0.9" fill="rgba(255,255,255,0.35)" />
                    <circle cx="32" cy="40" r="1.1" fill="rgba(255,255,255,0.5)" />
                    <circle cx="48" cy="30" r="0.6" fill="rgba(255,255,255,0.32)" />
                    <circle cx="6" cy="48" r="1.4" fill="rgba(255,255,255,0.42)" />
                    <circle
                      cx="22"
                      cy="22"
                      r="2.1"
                      fill="none"
                      stroke="rgba(255,255,255,0.45)"
                      strokeWidth="0.6"
                    />
                    <circle
                      cx="44"
                      cy="46"
                      r="1.7"
                      fill="none"
                      stroke="rgba(255,255,255,0.38)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  filter="url(#hero-soap-frost)"
                  opacity="0.85"
                />
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#hero-soap-bubbles)"
                  opacity="0.9"
                />
              </svg>
            </div>

            <div className="hero-squeegee-blade" aria-hidden="true" />
          </div>
        </figure>
      </Container>
    </section>
  );
}
