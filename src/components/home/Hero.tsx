import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Homepage hero — copy left, authentic cleaning photo right.
 * Static photo from load; no reveal or overlay effects.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative text-pure"
      style={{
        background:
          "linear-gradient(110deg, #061A38 0%, #082246 55%, #0D315C 100%)",
      }}
    >
      <Container className="grid items-center gap-9 py-14 sm:gap-11 sm:py-16 lg:grid-cols-[52fr_48fr] lg:gap-[4.5rem] lg:py-[7.75rem]">
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

          <p className="mt-5 max-w-[28.5rem] text-[0.95rem] leading-relaxed text-white/70 sm:text-base">
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

        <figure className="m-0 w-full max-w-[28rem] justify-self-center sm:max-w-[30rem] lg:max-w-[29.375rem] lg:justify-self-end">
          {/*
            Source photo is 1200×1600 (3:4). Desktop 5:4 (~470×376) keeps the
            diagonal action with object-position near upper-center so student +
            squeegee stay in frame; lower torso and extreme top glass crop.
            Mobile keeps a taller frame so the action is not squeezed.
          */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-[#0A274F] sm:aspect-[5/6] lg:aspect-[5/4]">
            {/*
              unoptimized serves /public directly so the hero never depends on
              /_next/image to paint. Cover utilities beat global img height:auto.
            */}
            <Image
              src="/our-work/cleaning-action-squeegee.webp"
              alt="Student Window Cleaning team member squeegeeing a residential window"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) min(100vw, 30rem), 29.375rem"
              className="!h-full !w-full !max-w-none object-cover object-[center_36%]"
            />
          </div>
        </figure>
      </Container>
    </section>
  );
}
