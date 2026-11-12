import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { quoteHref, type ServiceId } from "@/lib/site";

type ScreenCleaningAddonProps = {
  headingId: string;
  service: ServiceId;
};

/**
 * Optional screen-cleaning add-on — shared by exterior and interior service pages.
 */
export function ScreenCleaningAddon({
  headingId,
  service,
}: ScreenCleaningAddonProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="bg-white text-midnight"
      style={{ paddingBlock: "clamp(2.5rem, 4.5vw, 4rem)" }}
    >
      <Container width="portfolio">
        <aside className="overflow-hidden rounded-[15px]">
          <div className="grid min-h-[13.75rem] sm:min-h-[14.5rem] md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:min-h-[15.5rem] lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
            <div className="relative min-h-[11.5rem] bg-[#0A274F] md:min-h-0">
              <Image
                src="/our-work/screen-cleaning-action.webp"
                alt="Student Window Cleaning team member scrubbing a residential window screen outdoors"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover object-[center_40%]"
              />
            </div>
            <div
              className="flex flex-col justify-center px-5 py-6 text-pure sm:px-7 sm:py-7 lg:px-8"
              style={{ backgroundColor: "#061A38" }}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky sm:text-[0.7rem]">
                Optional Add-On
              </p>
              <h2
                id={headingId}
                className="font-heading mt-2 text-xl font-semibold tracking-tight text-pure sm:text-[1.35rem]"
              >
                Screen Cleaning Also Available
              </h2>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                Complete your window cleaning with freshly cleaned screens. We
                carefully clean applicable removable screens, helping improve
                the overall finish of your windows.
              </p>
              <div className="mt-5">
                <Link
                  href={quoteHref({ service })}
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-sm font-semibold tracking-tight text-pure transition-colors duration-200 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-sky"
                >
                  Add Screen Cleaning to My Quote
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
