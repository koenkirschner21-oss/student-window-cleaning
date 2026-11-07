"use client";

import {
  useId,
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

function CheckIcon() {
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
  "inline-flex min-h-12 w-full items-center justify-center rounded-md bg-signature px-6 text-base font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto";

const secondaryActionClass =
  "inline-flex min-h-12 items-center justify-center rounded-md border border-border-strong bg-pure px-5 text-sm font-semibold tracking-tight text-midnight transition-colors duration-150 hover:border-signature hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature";

export function QuoteForm({
  id = "quote-form",
  className = "",
  initialFrequency = "",
  initialServices = [],
}: QuoteFormProps) {
  const seededServices = normalizeInitialServices(initialServices);
  const seededFrequency = seedPlan(seededServices, initialFrequency);

  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormState>({
    ...initialState,
    services: seededServices,
    frequency: seededFrequency,
  });
  const [stepError, setStepError] = useState<string | null>(null);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitBlocked, setSubmitBlocked] = useState(false);
  const headingId = useId();
  const planGroupName = useId();

  const windowSelected = hasWindowService(form.services);
  const gutterOnly = isGutterOnly(form.services);
  const plansDisabled = gutterOnly || form.services.length === 0;
  const frequencyRequired = windowSelected;

  function toggleService(serviceId: ServiceId) {
    setStepError(null);
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
      // Clear irrelevant window plan when leaving window services / gutter-only.
      if (!hasWindowService(services)) {
        next.frequency = "";
      }
      return next;
    });
  }

  function selectPlan(planId: QuotePlanId) {
    if (plansDisabled) return;
    setStepError(null);
    setForm((current) => ({ ...current, frequency: planId }));
  }

  function goToStep2() {
    if (form.services.length === 0) {
      setStepError("Select at least one service.");
      return;
    }
    if (frequencyRequired && !form.frequency) {
      setStepError("Choose a cleaning plan for your windows.");
      return;
    }
    if (!form.propertyType) {
      setStepError("Choose a property type.");
      return;
    }
    setStepError(null);
    setStep(2);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttemptedSubmit(true);

    const phoneOk = isValidNaPhone(form.phone);
    const emailOk = isValidEmail(form.email);
    if (
      !form.streetAddress.trim() ||
      !form.name.trim() ||
      !phoneOk ||
      !emailOk
    ) {
      return;
    }

    setSubmitting(true);
    // No submission endpoint is connected — keep answers and show a truthful state.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitBlocked(true);
    }, 400);
  }

  const streetInvalid = attemptedSubmit && !form.streetAddress.trim();
  const nameInvalid = attemptedSubmit && !form.name.trim();
  const phoneInvalid = attemptedSubmit && !isValidNaPhone(form.phone);
  const emailInvalid = attemptedSubmit && !isValidEmail(form.email);

  return (
    <div
      className={`rounded-md border border-border bg-pure p-5 text-midnight sm:p-7 ${className}`.trim()}
    >
      <div className="mb-5 border-b border-border pb-4">
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
          <p className="mt-2 text-sm leading-relaxed text-navy-muted">
            A few quick selections to help us prepare your free virtual quote.
          </p>
        ) : null}
      </div>

      <div
        className="mb-6 h-1 overflow-hidden rounded-sm bg-ice"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={2}
        aria-valuenow={step}
        aria-label={`Step ${step} of 2`}
      >
        <div
          className="h-full bg-signature transition-[width] duration-200"
          style={{ width: step === 1 ? "50%" : "100%" }}
        />
      </div>

      <form
        id={id}
        aria-labelledby={headingId}
        onSubmit={onSubmit}
        className="space-y-6"
        noValidate
      >
        {step === 1 ? (
          <div className="space-y-6">
            <fieldset>
              <legend className="text-sm font-semibold text-midnight">
                What would you like cleaned?
              </legend>
              <p className="mt-1 text-sm text-navy-muted">
                Exterior and Interior &amp; Exterior are alternative scopes.
                Gutter can be added with either.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {serviceOptions.map((service) => {
                  const selected = form.services.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleService(service.id)}
                      className={[
                        "inline-flex min-h-10 items-center justify-center rounded-md border px-3.5 py-2 text-sm font-semibold tracking-tight transition-colors duration-150",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature",
                        selected
                          ? "border-signature bg-ice text-midnight"
                          : "border-border bg-pure text-midnight hover:border-border-strong",
                      ].join(" ")}
                    >
                      {service.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Always mounted — never conditionally reveal mid-flow. */}
            <fieldset
              aria-disabled={plansDisabled || undefined}
              className={
                plansDisabled ? "opacity-55 transition-opacity" : undefined
              }
            >
              <legend className="text-sm font-semibold text-midnight">
                Choose your cleaning plan
              </legend>
              <p className="mt-1 text-sm text-navy-muted">
                Save more with recurring professional cleaning.
              </p>
              {gutterOnly ? (
                <p className="mt-2 text-xs font-medium text-navy-muted">
                  Window cleaning plans apply when a window service is selected.
                  Gutter-only quotes are priced separately.
                </p>
              ) : null}

              <div
                className="mt-3 grid gap-2.5 sm:grid-cols-3 sm:items-stretch"
                role="radiogroup"
                aria-label="Cleaning plan"
              >
                {quotePlanOptions.map((plan) => {
                  const selected = form.frequency === plan.id;
                  return (
                    <label
                      key={plan.id}
                      className={[
                        "relative flex h-full cursor-pointer flex-col rounded-md border p-3.5 text-left transition-colors duration-150",
                        "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-signature",
                        plansDisabled
                          ? "cursor-not-allowed border-border bg-cloud/60"
                          : selected
                            ? "border-signature bg-ice"
                            : "border-border bg-pure hover:border-border-strong",
                      ].join(" ")}
                    >
                      <input
                        type="radio"
                        className="sr-only"
                        name={planGroupName}
                        value={plan.id}
                        checked={selected}
                        disabled={plansDisabled}
                        onChange={() => selectPlan(plan.id)}
                      />
                      {plan.recommended ? (
                        <span className="mb-1.5 inline-flex w-fit rounded bg-signature/10 px-1.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-signature">
                          Recommended
                        </span>
                      ) : (
                        <span className="mb-1.5 block h-[1.15rem]" aria-hidden />
                      )}
                      <span className="block text-base font-semibold text-midnight">
                        {plan.name}
                      </span>
                      <span className="mt-0.5 block text-xs font-medium text-navy-muted">
                        {plan.subtitle}
                      </span>
                      <ul className="mt-3 space-y-1.5">
                        {plan.checks.map((check) => (
                          <li
                            key={check}
                            className="flex items-start gap-1.5 text-xs font-medium leading-snug text-midnight/80"
                          >
                            <CheckIcon />
                            <span>{check}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto border-t border-border/80 pt-3">
                        <p
                          className={[
                            "text-sm font-bold tracking-tight",
                            plan.savingsDetail
                              ? "text-signature"
                              : "text-midnight",
                          ].join(" ")}
                        >
                          {plan.savingsLabel}
                        </p>
                        {plan.savingsDetail ? (
                          <p className="mt-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-navy-muted">
                            {plan.savingsDetail}
                          </p>
                        ) : null}
                      </div>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold text-midnight">
                What type of property?
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {propertyTypeOptions.map((option) => {
                  const selected = form.propertyType === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => {
                        setStepError(null);
                        setForm((current) => ({
                          ...current,
                          propertyType: option.id,
                        }));
                      }}
                      className={[
                        "inline-flex min-h-10 items-center justify-center rounded-md border px-3.5 py-2 text-sm font-semibold tracking-tight transition-colors duration-150",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature",
                        selected
                          ? "border-signature bg-ice text-midnight"
                          : "border-border bg-pure text-midnight hover:border-border-strong",
                      ].join(" ")}
                    >
                      {option.label}
                    </button>
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
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-0">
            <section className="space-y-3 pb-6">
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

            <section className="space-y-3 border-t border-border py-6">
              <p className="text-sm font-semibold text-midnight">
                Contact Information
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
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

            <section className="space-y-3 border-t border-border pt-6">
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

            <div className="mt-6 space-y-4">
              {streetInvalid || nameInvalid ? (
                <p className="text-sm font-medium text-red-700" role="alert">
                  Add your property address and full name to continue.
                </p>
              ) : null}

              {submitBlocked ? (
                <div
                  className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950"
                  role="status"
                >
                  <p className="font-semibold">
                    Quote requests are not submitting yet.
                  </p>
                  <p className="mt-1">
                    A submission endpoint has not been connected. Nothing was
                    sent, and your answers stay in this browser session. This is
                    a quote request — not a booking.
                  </p>
                </div>
              ) : (
                <p className="text-sm text-navy-muted">
                  Requesting a quote is free and creates no obligation. It is not
                  a booking or payment.
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
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
