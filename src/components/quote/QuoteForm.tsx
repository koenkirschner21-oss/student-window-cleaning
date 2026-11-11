"use client";

import {
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { AddressField } from "@/components/quote/AddressField";
import {
  isQuotePlanId,
  propertyTypeOptions,
  quotePlanOptions,
  serviceOptions,
  type FrequencyId,
  type PropertyTypeId,
  type QuotePlanId,
  type ServiceId,
} from "@/lib/site";

type QuoteFormProps = {
  id?: string;
  className?: string;
  initialFrequency?: FrequencyId | "";
  initialServices?: ServiceId[];
  initialPropertyType?: PropertyTypeId | "";
};

type FormState = {
  services: ServiceId[];
  frequency: QuotePlanId | "";
  propertyType: PropertyTypeId | "";
  streetAddress: string;
  unit: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const initialState: FormState = {
  services: [],
  frequency: "",
  propertyType: "",
  streetAddress: "",
  unit: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

const windowServiceIds = new Set<ServiceId>(["exterior", "interior-exterior"]);

function isGutterOnly(services: ServiceId[]) {
  return services.length === 1 && services[0] === "gutter-cleaning";
}

function hasWindowService(services: ServiceId[]) {
  return services.some((id) => windowServiceIds.has(id));
}

function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
}

function isValidNaPhone(value: string) {
  const digits = normalizePhone(value);
  if (digits.length === 10) return true;
  if (digits.length === 11 && digits.startsWith("1")) return true;
  return false;
}

function isValidEmail(value: string) {
  if (!value.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function normalizeInitialServices(services: ServiceId[] = []): ServiceId[] {
  const unique = Array.from(new Set(services));
  const windowPick = unique.find((id) => windowServiceIds.has(id));
  const gutter = unique.includes("gutter-cleaning")
    ? (["gutter-cleaning"] as ServiceId[])
    : [];
  return windowPick ? [windowPick, ...gutter] : gutter;
}

function seedPlan(
  services: ServiceId[],
  initialFrequency: FrequencyId | "",
): QuotePlanId | "" {
  if (isGutterOnly(services)) return "";
  return isQuotePlanId(initialFrequency) ? initialFrequency : "";
}

function BenefitCheck() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="mt-0.5 size-3.5 shrink-0 text-signature"
    >
      <path
        d="M3.5 8.2 6.4 11l6.1-6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SelectionIndicator({
  selected,
  shape = "circle",
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

function FieldLabel({
  children,
  optional,
  htmlFor,
}: {
  children: ReactNode;
  optional?: boolean;
  htmlFor?: string;
}) {
  const Tag = htmlFor ? "label" : "span";
  return (
    <Tag htmlFor={htmlFor} className="text-sm font-semibold text-midnight">
      {children}
      {optional ? (
        <span className="ml-1.5 font-normal text-navy-muted">(optional)</span>
      ) : null}
    </Tag>
  );
}

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-pure px-3.5 py-3 text-sm text-midnight transition-colors placeholder:text-navy-muted/70 focus:border-signature focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature";

const primaryActionClass =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-signature px-6 text-base font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto";

const secondaryActionClass =
  "inline-flex min-h-12 items-center justify-center rounded-md border border-border-strong bg-pure px-5 text-sm font-semibold tracking-tight text-midnight transition-colors duration-150 hover:border-signature hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature";

function choiceClass(selected: boolean) {
  return [
    "inline-flex min-h-12 w-full items-center gap-3 rounded-md border px-3.5 py-3 text-left text-sm font-semibold tracking-tight transition-colors duration-150",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature",
    selected
      ? "border-signature bg-ice text-midnight"
      : "border-border bg-pure text-midnight hover:border-border-strong",
  ].join(" ");
}

export function QuoteForm({
  id = "quote-form",
  className = "",
  initialFrequency = "",
  initialServices = [],
  initialPropertyType = "",
}: QuoteFormProps) {
  const seededServices = normalizeInitialServices(initialServices);
  const seededFrequency = seedPlan(seededServices, initialFrequency);
  const seededPropertyType = propertyTypeOptions.some(
    (option) => option.id === initialPropertyType,
  )
    ? initialPropertyType
    : "";

  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormState>({
    ...initialState,
    services: seededServices,
    frequency: seededFrequency,
    propertyType: seededPropertyType,
  });
  const [stepError, setStepError] = useState<string | null>(null);
  const [gutterPlanHint, setGutterPlanHint] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitBlocked, setSubmitBlocked] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const headingId = useId();
  const planGroupName = useId();
  const propertyGroupName = useId();
  const cardRef = useRef<HTMLDivElement>(null);

  const windowSelected = hasWindowService(form.services);
  const gutterOnly = isGutterOnly(form.services);
  const frequencyRequired = windowSelected;
  const planGuidance = gutterOnly
    ? gutterPlanHint
      ? "Window cleaning plans aren’t needed for gutter-only requests."
      : null
    : form.frequency && !windowSelected
      ? "Choose a window cleaning service to continue with this plan."
      : null;

  function toggleService(serviceId: ServiceId) {
    setStepError(null);
    setGutterPlanHint(false);
    setForm((current) => {
      const exists = current.services.includes(serviceId);
      let services: ServiceId[];

      if (exists) {
        services = current.services.filter((value) => value !== serviceId);
      } else if (windowServiceIds.has(serviceId)) {
        services = [
          ...current.services.filter((value) => !windowServiceIds.has(value)),
          serviceId,
        ];
      } else {
        services = [...current.services, serviceId];
      }

      const next = { ...current, services };
      // Gutter-only quotes skip window plans; keep a preselected plan if
      // the customer has not chosen a window service yet.
      if (isGutterOnly(services)) {
        next.frequency = "";
      }
      return next;
    });
  }

  function selectPlan(planId: QuotePlanId) {
    setStepError(null);

    if (gutterOnly) {
      setGutterPlanHint(true);
      return;
    }

    setGutterPlanHint(false);
    setForm((current) => ({ ...current, frequency: planId }));
  }

  function goToStep2() {
    if (form.services.length === 0) {
      setStepError("Select at least one service to continue.");
      return;
    }
    if (frequencyRequired && !form.frequency) {
      setStepError("Choose a cleaning plan for your windows.");
      return;
    }
    if (!form.propertyType) {
      setStepError("Choose a property type to continue.");
      return;
    }
    setStepError(null);
    setGutterPlanHint(false);
    setStep(2);
    // Jump to Step 2 card top, accounting for sticky header — no smooth scroll.
    requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card || typeof window === "undefined") return;
      const sticky = document.querySelector<HTMLElement>("header.sticky");
      const headerOffset = sticky?.getBoundingClientRect().height ?? 76;
      const top =
        card.getBoundingClientRect().top + window.scrollY - headerOffset - 8;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttemptedSubmit(true);
    setSubmitBlocked(false);
    setSubmitError(null);
    setSubmitSuccess(false);

    const phoneOk = isValidNaPhone(form.phone);
    const emailOk = isValidEmail(form.email);
    if (
      !form.streetAddress.trim() ||
      !form.name.trim() ||
      !phoneOk ||
      !emailOk ||
      !form.propertyType
    ) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "quote-page",
          services: form.services,
          propertyType: form.propertyType,
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim() || undefined,
          address: form.streetAddress.trim(),
          notes: form.notes.trim() || undefined,
          frequency: form.frequency || undefined,
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setSubmitBlocked(true);
        setSubmitError(
          payload?.error ||
            "We couldn’t send your quote request. Please try again.",
        );
        return;
      }

      setSubmitSuccess(true);
      setStepError(null);
      setAttemptedSubmit(false);
      setForm({ ...initialState });
      setStep(1);
    } catch {
      setSubmitBlocked(true);
      setSubmitError(
        "Network error — your details are still here. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const streetInvalid = attemptedSubmit && !form.streetAddress.trim();
  const nameInvalid = attemptedSubmit && !form.name.trim();
  const phoneInvalid = attemptedSubmit && !isValidNaPhone(form.phone);
  const emailInvalid = attemptedSubmit && !isValidEmail(form.email);

  return (
    <div
      ref={cardRef}
      className={`rounded-md border border-border bg-pure p-5 text-midnight sm:p-6 ${className}`.trim()}
    >
      <div className="mb-4 border-b border-border pb-3.5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signature">
          Step {step} of 2
        </p>
        <h3
          id={headingId}
          className="font-heading mt-1.5 text-xl font-semibold tracking-tight text-midnight sm:text-2xl"
        >
          {step === 1
            ? "Your Cleaning Details"
            : "Your Property & Contact Details"}
        </h3>
        {step === 1 ? (
          <p className="mt-1.5 text-sm leading-relaxed text-navy-muted">
            Start by selecting the services you&apos;re interested in.
          </p>
        ) : null}
      </div>

      <form
        id={id}
        aria-labelledby={headingId}
        onSubmit={onSubmit}
        className="space-y-5"
        noValidate
      >
        {step === 1 ? (
          <div className="space-y-5">
            <fieldset>
              <legend className="text-sm font-semibold text-midnight">
                1. What would you like cleaned?
              </legend>
              <p className="mt-1 text-sm text-navy-muted">
                Choose a window cleaning option, gutter cleaning, or both.
              </p>
              <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {serviceOptions.map((service) => {
                  const selected = form.services.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      role="checkbox"
                      aria-checked={selected}
                      onClick={() => toggleService(service.id)}
                      className={choiceClass(selected)}
                    >
                      <SelectionIndicator selected={selected} shape="square" />
                      <span>{service.label}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Always mounted — never conditionally reveal mid-flow. */}
            <fieldset>
              <legend className="text-sm font-semibold text-midnight">
                2. Choose your cleaning plan
              </legend>
              <p className="mt-1 text-sm text-navy-muted">
                Save on each visit with recurring cleaning.
              </p>

              <div
                className="mt-2.5 grid gap-2.5 sm:grid-cols-3 sm:items-stretch"
                role="radiogroup"
                aria-label="Cleaning plan"
              >
                {quotePlanOptions.map((plan) => {
                  const selected = form.frequency === plan.id;
                  return (
                    <label
                      key={plan.id}
                      className={[
                        "relative flex h-full min-h-0 flex-col overflow-hidden rounded-md border bg-pure text-left transition-colors duration-150",
                        "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-signature",
                        selected
                          ? "cursor-pointer border-signature bg-ice"
                          : "cursor-pointer border-border hover:border-border-strong",
                      ].join(" ")}
                    >
                      <input
                        type="radio"
                        className="sr-only"
                        name={planGroupName}
                        value={plan.id}
                        checked={selected}
                        onChange={() => selectPlan(plan.id)}
                      />
                      {plan.recommended ? (
                        <span className="bg-midnight px-3 py-1 text-center text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-pure">
                          Recommended · Best Value
                        </span>
                      ) : null}
                      <span className="flex flex-1 flex-col p-3 pt-2.5">
                        <span className="flex items-start justify-between gap-2">
                          <span className="min-w-0">
                            <span className="block text-base font-semibold text-midnight">
                              {plan.name}
                            </span>
                            <span className="mt-0.5 block text-xs font-medium text-navy-muted">
                              {plan.subtitle}
                            </span>
                          </span>
                          <SelectionIndicator
                            selected={selected}
                            shape="circle"
                          />
                        </span>
                        <ul className="mt-2.5 space-y-1.5">
                          {plan.checks.map((check) => (
                            <li
                              key={check}
                              className="flex items-start gap-1.5 text-xs font-medium leading-snug text-midnight/85"
                            >
                              <BenefitCheck />
                              <span>{check}</span>
                            </li>
                          ))}
                        </ul>
                        <span className="mt-auto border-t border-border/80 pt-2.5">
                          <span
                            className={[
                              "block text-sm font-bold tracking-tight",
                              plan.savingsDetail
                                ? "text-signature"
                                : "text-midnight",
                            ].join(" ")}
                          >
                            {plan.savingsLabel}
                          </span>
                          {plan.savingsDetail ? (
                            <span className="mt-0.5 block text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-navy-muted">
                              {plan.savingsDetail}
                            </span>
                          ) : null}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>

              {planGuidance ? (
                <p className="mt-2 text-xs font-medium text-navy-muted" role="status">
                  {planGuidance}
                </p>
              ) : null}
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold text-midnight">
                3. What type of property do you have?
              </legend>
              <div
                className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2"
                role="radiogroup"
                aria-label="Property type"
              >
                {propertyTypeOptions.map((option) => {
                  const selected = form.propertyType === option.id;
                  return (
                    <label
                      key={option.id}
                      className={[choiceClass(selected), "cursor-pointer"].join(
                        " ",
                      )}
                    >
                      <input
                        type="radio"
                        className="sr-only"
                        name={propertyGroupName}
                        value={option.id}
                        checked={selected}
                        onChange={() => {
                          setStepError(null);
                          setForm((current) => ({
                            ...current,
                            propertyType: option.id,
                          }));
                        }}
                      />
                      <SelectionIndicator selected={selected} shape="circle" />
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {stepError ? (
              <p className="text-sm font-medium text-red-700" role="alert">
                {stepError}
              </p>
            ) : null}

            <div>
              <button
                type="button"
                onClick={goToStep2}
                className={primaryActionClass}
              >
                Continue
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                  className="size-4"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <section className="space-y-2.5">
              <div>
                <p className="text-sm font-semibold text-midnight">
                  Property Address
                </p>
                <p className="mt-1 text-sm text-navy-muted">
                  We&apos;ll use your address to assess the property remotely and
                  prepare your free virtual quote.
                </p>
              </div>
              <div>
                <FieldLabel htmlFor="street-address">Street address</FieldLabel>
                <AddressField
                  value={form.streetAddress}
                  onChange={(streetAddress) =>
                    setForm((current) => ({ ...current, streetAddress }))
                  }
                  invalid={streetInvalid}
                  className={fieldClass}
                />
              </div>
              <label className="block">
                <FieldLabel optional>Unit / Suite</FieldLabel>
                <input
                  type="text"
                  name="unit"
                  autoComplete="address-line2"
                  className={fieldClass}
                  value={form.unit}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      unit: event.target.value,
                    }))
                  }
                />
              </label>
            </section>

            <section className="space-y-2.5 border-t border-border pt-5">
              <p className="text-sm font-semibold text-midnight">
                Contact Information
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                <label className="block sm:col-span-2">
                  <FieldLabel>Full name</FieldLabel>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    aria-invalid={nameInvalid || undefined}
                    className={fieldClass}
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                  />
                </label>

                <label className="block">
                  <FieldLabel>Phone</FieldLabel>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    aria-invalid={phoneInvalid || undefined}
                    className={fieldClass}
                    value={form.phone}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        phone: event.target.value,
                      }))
                    }
                  />
                  {phoneInvalid ? (
                    <span className="mt-1 block text-xs font-medium text-red-700">
                      Enter a valid North American phone number.
                    </span>
                  ) : null}
                </label>

                <label className="block">
                  <FieldLabel optional>Email</FieldLabel>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    aria-invalid={emailInvalid || undefined}
                    className={fieldClass}
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                  />
                  {emailInvalid ? (
                    <span className="mt-1 block text-xs font-medium text-red-700">
                      Enter a valid email, or leave it blank.
                    </span>
                  ) : null}
                </label>
              </div>
            </section>

            <section className="space-y-2.5 border-t border-border pt-5">
              <label className="block">
                <FieldLabel optional>
                  Anything else we should know?
                </FieldLabel>
                <textarea
                  name="notes"
                  rows={2}
                  className={`${fieldClass} resize-y`}
                  value={form.notes}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      notes: event.target.value,
                    }))
                  }
                />
              </label>
            </section>

            <div className="space-y-3">
              {streetInvalid || nameInvalid ? (
                <p className="text-sm font-medium text-red-700" role="alert">
                  Add your property address and full name to continue.
                </p>
              ) : null}

              {submitSuccess ? (
                <div
                  className="rounded-md border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-950"
                  role="status"
                >
                  <p className="font-semibold">Quote request received.</p>
                  <p className="mt-1">
                    Thanks — we&apos;ll follow up with a personalized estimate.
                    This is a quote request, not a booking.
                  </p>
                </div>
              ) : null}

              {submitBlocked ? (
                <div
                  className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950"
                  role="alert"
                >
                  <p className="font-semibold">Couldn&apos;t send your request.</p>
                  <p className="mt-1">
                    {submitError ||
                      "Nothing was lost — your answers are still in this form. Try again or call us."}
                  </p>
                </div>
              ) : null}

              <div className="flex flex-col-reverse gap-2.5 sm:flex-row sm:items-center sm:gap-3">
                <button
                  type="button"
                  className={secondaryActionClass}
                  disabled={submitting}
                  onClick={() => {
                    setAttemptedSubmit(false);
                    setSubmitBlocked(false);
                    setStep(1);
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className={`${primaryActionClass} sm:flex-1`}
                  disabled={submitting}
                >
                  {submitting
                    ? "Sending…"
                    : "Request My Free Virtual Quote"}
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
