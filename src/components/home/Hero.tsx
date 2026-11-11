import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

function GraduationCapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-8 sm:size-[2.05rem]"
    >
      <path d="M2.5 9.5 12 4.5l9.5 5-9.5 5-9.5-5Z" />
      <path d="M6.5 11.6v4.2c0 .3 2.4 2.7 5.5 2.7s5.5-2.4 5.5-2.7v-4.2" />
      <path d="M21.5 9.5v5.2" />
    </svg>
  );
}

function FiveGoldStars() {
  return (
    <span
      className="inline-flex items-center justify-center gap-[3px]"
      style={{ color: "#E9AC16" }}
      aria-hidden
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="size-[0.9rem] fill-current sm:size-[1rem]"
        >
          <path d="M10 1.8 12.4 7l5.6.8-4 3.9.9 5.6L10 14.6 5.1 17.3l.9-5.6-4-3.9L7.6 7 10 1.8Z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Homepage hero — copy left, authentic cleaning photo right.
 * Static photo from load; no reveal or overlay effects.
 * Trust row sits at the bottom of the same navy plane.
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
      <Container className="grid items-center gap-9 pt-14 pb-10 sm:gap-11 sm:pt-16 sm:pb-12 lg:grid-cols-[52fr_48fr] lg:gap-[4.5rem] lg:pt-[7.75rem] lg:pb-14">
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

      <div
        aria-label="Trust highlights"
        className="border-t border-white/[0.1]"
      >
        <Container className="py-8 sm:py-9">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/[0.1]">
            <li className="flex min-w-0 flex-col items-center justify-center gap-2.5 text-center sm:px-6 lg:px-8">
              <span className="inline-flex shrink-0 text-signature">
                <GraduationCapIcon />
              </span>
              <p className="font-heading text-[0.95rem] font-semibold leading-snug tracking-tight text-pure sm:text-base">
                Proudly Student-Run
              </p>
            </li>

            <li className="flex min-w-0 flex-col items-center justify-center gap-1.5 text-center sm:px-6 lg:px-8">
              <p
                className="font-heading text-[1.7rem] font-extrabold leading-none tracking-tight text-pure sm:text-[1.85rem]"
                aria-hidden
              >
                20+
              </p>
              <FiveGoldStars />
              <p className="font-heading text-[0.84rem] font-semibold leading-snug tracking-tight text-white/75 sm:text-[0.9rem]">
                <span className="sr-only">20+ </span>5-Star Google Reviews
              </p>
            </li>

            <li className="flex min-w-0 flex-col items-center justify-center gap-1.5 text-center sm:px-6 lg:px-8">
              <p
                className="font-heading text-[1.7rem] font-extrabold leading-none tracking-tight text-pure sm:text-[1.85rem]"
                aria-hidden
              >
                4+
              </p>
              <p className="font-heading text-[0.84rem] font-semibold leading-snug tracking-tight text-white/75 sm:text-[0.9rem]">
                <span className="sr-only">4+ </span>Years in Business
              </p>
            </li>
          </ul>
        </Container>
      </div>
    </section>
  );
}
