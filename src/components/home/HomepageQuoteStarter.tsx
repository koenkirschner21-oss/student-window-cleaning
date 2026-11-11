"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import {
  quoteHref,
  type PropertyTypeId,
  type ServiceId,
} from "@/lib/site";

type WindowChoiceId = "exterior" | "interior-exterior" | "not-sure";

const windowChoices: { id: WindowChoiceId; label: string }[] = [
  { id: "exterior", label: "Exterior Window Cleaning" },
  {
    id: "interior-exterior",
    label: "Interior & Exterior Window Cleaning",
  },
  { id: "not-sure", label: "Not Sure Yet" },
];

const propertyChoices: { id: PropertyTypeId; label: string }[] = [
  { id: "detached-semi", label: "Detached / Semi-Detached" },
  { id: "townhouse", label: "Townhouse" },
  { id: "commercial", label: "Commercial" },
  { id: "other", label: "Other" },
];

function SelectionIndicator({
  selected,
  shape = "square",
}: {
  selected: boolean;
  shape?: "circle" | "square";
}) {
  return (
    <span
      aria-hidden
      className={[
        "inline-flex size-5 shrink-0 items-center justify-center border-2 transition-colors duration-150",
        shape === "circle" ? "rounded-full" : "rounded-[4px]",
        selected
          ? "border-signature bg-signature text-pure"
          : "border-border-strong bg-pure text-transparent",
      ].join(" ")}
    >
      <svg viewBox="0 0 16 16" fill="none" className="size-3">
        <path
          d="M3.6 8.2 6.5 11l5.9-6.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function choiceClass(selected: boolean) {
  return [
    "inline-flex min-h-11 w-full items-center gap-3 rounded-md border px-3.5 py-2.5 text-left text-sm font-semibold tracking-tight transition-colors duration-150",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature",
    selected
      ? "border-signature bg-ice text-midnight"
      : "border-border bg-pure text-midnight hover:border-border-strong",
  ].join(" ");
}

export function HomepageQuoteStarter() {
  const router = useRouter();
  const headingId = useId();
  const [windowChoice, setWindowChoice] = useState<WindowChoiceId | null>(null);
  const [gutter, setGutter] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyTypeId | "">("");
  const [error, setError] = useState<string | null>(null);

  function selectWindow(next: WindowChoiceId) {
    setError(null);
    setWindowChoice((current) => (current === next ? null : next));
    if (next === "not-sure") setGutter(false);
  }

  function toggleGutter() {
    setError(null);
    setGutter((current) => {
      const next = !current;
      if (next && windowChoice === "not-sure") setWindowChoice(null);
      return next;
    });
  }

  function onContinue() {
    const hasServiceIntent = windowChoice != null || gutter;
    if (!hasServiceIntent) {
      setError("Select what you’d like cleaned to continue.");
      return;
    }
    if (!propertyType) {
      setError("Choose a property type to continue.");
      return;
    }

    const services: ServiceId[] = [];
    if (windowChoice === "exterior" || windowChoice === "interior-exterior") {
      services.push(windowChoice);
    }
    if (gutter) services.push("gutter-cleaning");

    router.push(
      quoteHref({
        services,
        propertyType,
      }),
    );
  }

  return (
    <div className="rounded-[14px] border border-border bg-pure p-5 text-midnight sm:p-6">
      <div className="border-b border-border pb-3.5">
        <h3
          id={headingId}
          className="font-heading text-xl font-semibold tracking-tight text-midnight sm:text-[1.35rem]"
        >
          Start Your Free Quote
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-navy-muted">
          Choose a few details to get started.
        </p>
      </div>

      <div className="mt-4 space-y-4" aria-labelledby={headingId}>
        <fieldset>
          <legend className="text-sm font-semibold text-midnight">
            1. What would you like cleaned?
          </legend>
          <div className="mt-2.5 grid grid-cols-1 gap-2">
            <div
              className="grid grid-cols-1 gap-2"
              role="radiogroup"
              aria-label="Window cleaning option"
            >
              {windowChoices.map((choice) => {
                const selected = windowChoice === choice.id;
                return (
                  <button
                    key={choice.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => selectWindow(choice.id)}
                    className={choiceClass(selected)}
                  >
                    <SelectionIndicator selected={selected} shape="circle" />
                    <span>{choice.label}</span>
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              role="checkbox"
              aria-checked={gutter}
              onClick={toggleGutter}
              className={choiceClass(gutter)}
            >
              <SelectionIndicator selected={gutter} shape="square" />
              <span>Gutter Cleaning</span>
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-midnight">
            2. What type of property?
          </legend>
          <div
            className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2"
            role="radiogroup"
            aria-label="Property type"
          >
            {propertyChoices.map((choice) => {
              const selected = propertyType === choice.id;
              return (
                <button
                  key={choice.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => {
                    setError(null);
                    setPropertyType(choice.id);
                  }}
                  className={choiceClass(selected)}
                >
                  <SelectionIndicator selected={selected} shape="circle" />
                  <span>{choice.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {error ? (
          <p className="text-sm font-medium text-red-700" role="alert">
            {error}
          </p>
        ) : null}

        <div className="pt-1">
          <button
            type="button"
            onClick={onContinue}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature sm:text-base"
          >
            Continue to My Free Quote →
          </button>
          <p className="mt-2.5 text-center text-sm text-navy-muted">
            Free personalized quote. No obligation.
          </p>
        </div>
      </div>
    </div>
  );
}
