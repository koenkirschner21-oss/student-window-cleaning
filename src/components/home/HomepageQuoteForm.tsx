"use client";

import { useId, useState, type FormEvent } from "react";
import { AddressField } from "@/components/quote/AddressField";
import {
  isValidNaPhone,
  isValidOptionalEmail,
  normalizeQuoteServices,
} from "@/lib/quote-lead";
import {
  contact,
  propertyTypeOptions,
  type PropertyTypeId,
  type ServiceId,
} from "@/lib/site";

type WindowChoice = "exterior" | "interior-exterior" | null;

const windowChoices: { id: Exclude<WindowChoice, null>; label: string }[] = [
  { id: "exterior", label: "Exterior Window Cleaning" },
  {
    id: "interior-exterior",
    label: "Interior & Exterior Window Cleaning",
  },
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

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-pure px-3.5 py-3 text-sm text-midnight transition-colors placeholder:text-navy-muted/70 focus:border-signature focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature";

export function HomepageQuoteForm() {
  const headingId = useId();
  const [windowChoice, setWindowChoice] = useState<WindowChoice>(null);
  const [gutter, setGutter] = useState(false);
  const [propertyType, setPropertyType] = useState<PropertyTypeId | "">("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  const services = normalizeQuoteServices([
    ...(windowChoice ? [windowChoice] : []),
    ...(gutter ? (["gutter-cleaning"] as ServiceId[]) : []),
  ]);

  const nameInvalid = attempted && !name.trim();
  const phoneInvalid = attempted && !isValidNaPhone(phone);
  const emailInvalid = attempted && !isValidOptionalEmail(email);
  const addressInvalid = attempted && !address.trim();
  const servicesInvalid = attempted && services.length === 0;
  const propertyInvalid = attempted && !propertyType;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);
    setError(null);

    if (
      services.length === 0 ||
      !propertyType ||
      !name.trim() ||
      !isValidNaPhone(phone) ||
      !isValidOptionalEmail(email) ||
      !address.trim()
    ) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "homepage",
          services,
          propertyType,
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          address: address.trim(),
          notes: notes.trim() || undefined,
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
        id?: string;
      } | null;

      if (!response.ok) {
        setError(
          payload?.error ||
            "We couldn’t send your quote request. Please try again or call us.",
        );
        return;
      }

      setSuccessId(payload?.id ?? "received");
    } catch {
      setError(
        "Network error — your details are still here. Try again or call us.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (successId) {
    return (
      <div
        className="rounded-[14px] border border-border bg-pure p-5 text-midnight sm:p-6"
        role="status"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signature">
          Request received
        </p>
        <h3 className="font-heading mt-2 text-xl font-semibold tracking-tight text-midnight">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-muted">
          Your quote request was accepted. Our team will follow up with a
          personalized estimate. This is a quote request, not a booking.
        </p>
        <a
          href={contact.phoneHref}
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-signature hover:text-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
        >
          Prefer to call? {contact.phoneDisplay}
        </a>
      </div>
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
          Share a few details and we&apos;ll prepare a personalized estimate.
        </p>
      </div>

      <form
        aria-labelledby={headingId}
        onSubmit={onSubmit}
        className="mt-4 space-y-4"
        noValidate
      >
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
                    onClick={() =>
                      setWindowChoice((current) =>
                        current === choice.id ? null : choice.id,
                      )
                    }
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
              onClick={() => setGutter((current) => !current)}
              className={choiceClass(gutter)}
            >
              <SelectionIndicator selected={gutter} shape="square" />
              <span>Gutter Cleaning</span>
            </button>
          </div>
          {servicesInvalid ? (
            <p className="mt-2 text-sm font-medium text-red-700" role="alert">
              Select a window option, gutter cleaning, or both.
            </p>
          ) : null}
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
            {propertyTypeOptions.map((choice) => {
              const selected = propertyType === choice.id;
              const label =
                choice.id === "detached-semi"
                  ? "Detached / Semi-Detached"
                  : choice.label;
              return (
                <button
                  key={choice.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setPropertyType(choice.id)}
                  className={choiceClass(selected)}
                >
                  <SelectionIndicator selected={selected} shape="circle" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
          {propertyInvalid ? (
            <p className="mt-2 text-sm font-medium text-red-700" role="alert">
              Choose a property type.
            </p>
          ) : null}
        </fieldset>

        <fieldset className="space-y-3.5">
          <legend className="text-sm font-semibold text-midnight">
            3. Your details
          </legend>

          <label className="block">
            <span className="text-sm font-semibold text-midnight">
              Full Name
            </span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={[
                fieldClass,
                nameInvalid ? "border-red-500" : "",
              ].join(" ")}
              aria-invalid={nameInvalid}
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-midnight">
              Phone Number
            </span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className={[
                fieldClass,
                phoneInvalid ? "border-red-500" : "",
              ].join(" ")}
              aria-invalid={phoneInvalid}
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-midnight">
              Email Address{" "}
              <span className="font-normal text-navy-muted">(optional)</span>
            </span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={[
                fieldClass,
                emailInvalid ? "border-red-500" : "",
              ].join(" ")}
              aria-invalid={emailInvalid}
            />
          </label>

          <div>
            <span className="text-sm font-semibold text-midnight">
              Property Address
            </span>
            <AddressField
              value={address}
              onChange={setAddress}
              invalid={addressInvalid}
              className={fieldClass}
            />
          </div>

          <label className="block">
            <span className="text-sm font-semibold text-midnight">
              Additional Details{" "}
              <span className="font-normal text-navy-muted">(optional)</span>
            </span>
            <textarea
              name="notes"
              rows={3}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              className={`${fieldClass} resize-y`}
            />
          </label>
        </fieldset>

        {error ? (
          <p className="text-sm font-medium text-red-700" role="alert">
            {error}
          </p>
        ) : null}

        <div className="pt-1">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-signature px-6 text-sm font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
          >
            {submitting ? "Sending…" : "Get My Free Quote"}
          </button>
          <p className="mt-2.5 text-center text-sm text-navy-muted">
            Free personalized quote. No obligation.
          </p>
          <a
            href={contact.phoneHref}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-navy-muted transition-colors hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden
              className="size-4 text-signature"
            >
              <path
                d="M3.2 4.4c.4-1 1.4-1.5 2.4-1.3l1.7.4c.9.2 1.5 1 1.5 1.9v1.5c0 .8-.5 1.5-1.2 1.8l-.8.3c.8 1.7 2.2 3.1 3.9 3.9l.3-.8c.3-.7 1-.1.2 1.2h1.5c.9 0 1.7.6 1.9 1.5l.4 1.7c.2 1-.3 2-1.3 2.4-1.2.5-2.6.3-3.8-.2C7.5 16.2 3.8 12.5 2.3 8.2c-.5-1.2-.7-2.6-.2-3.8Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            Prefer to call? {contact.phoneDisplay}
          </a>
        </div>
      </form>
    </div>
  );
}
