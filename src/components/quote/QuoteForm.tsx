"use client";

import {
  useId,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  propertyTypeOptions,
  quoteFrequencyOptions,
  serviceOptions,
  type FrequencyId,
  type PropertyTypeId,
  type ServiceId,
} from "@/lib/site";

type QuoteFormProps = {
  id?: string;
  className?: string;
  initialFrequency?: FrequencyId | "";
};

type FormState = {
  services: ServiceId[];
  frequency: FrequencyId | "";
  propertyType: PropertyTypeId | "";
  name: string;
  phone: string;
  location: string;
  email: string;
  notes: string;
};

const initialState: FormState = {
  services: [],
  frequency: "",
  propertyType: "",
  name: "",
  phone: "",
  location: "",
  email: "",
  notes: "",
};

const windowServiceIds = new Set<ServiceId>(["exterior", "interior-exterior"]);

function isGutterOnly(services: ServiceId[]) {
  return services.length === 1 && services[0] === "gutter-cleaning";
}

function ChoiceButton({
  selected,
  onClick,
  children,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={[
        "min-h-12 rounded-md border px-4 py-3 text-left text-sm font-semibold tracking-tight transition-colors duration-150",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature",
        selected
          ? "border-signature bg-ice text-midnight"
          : "border-border bg-pure text-midnight hover:border-border-strong",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function FieldLabel({
  children,
  optional,
}: {
  children: ReactNode;
  optional?: boolean;
}) {
  return (
    <span className="text-sm font-semibold text-midnight">
      {children}
      {optional ? (
        <span className="ml-1.5 font-normal text-navy-muted">(optional)</span>
      ) : null}
    </span>
  );
}

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-pure px-3.5 py-3 text-sm text-midnight transition-colors placeholder:text-navy-muted/70 focus:border-signature focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature";

const primaryActionClass =
  "inline-flex min-h-12 w-full items-center justify-center rounded-md bg-signature px-6 text-base font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature sm:w-auto";

const secondaryActionClass =
  "inline-flex min-h-12 items-center justify-center rounded-md border border-border-strong bg-pure px-5 text-sm font-semibold tracking-tight text-midnight transition-colors duration-150 hover:border-signature hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature";

export function QuoteForm({
  id = "quote-form",
  className = "",
  initialFrequency = "",
}: QuoteFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormState>({
    ...initialState,
    frequency: initialFrequency,
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [stepError, setStepError] = useState<string | null>(null);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const headingId = useId();

  const frequencyRequired = useMemo(
    () => form.services.length > 0 && !isGutterOnly(form.services),
    [form.services],
  );

  const frequencyDisabled = isGutterOnly(form.services);

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
      if (isGutterOnly(services)) {
        next.frequency = "";
      }
      return next;
    });
  }

  function goToStep2() {
    if (form.services.length === 0) {
      setStepError("Select at least one service.");
      return;
    }
    if (!form.propertyType) {
      setStepError("Choose a property type.");
      return;
    }
    if (frequencyRequired && !form.frequency) {
      setStepError("Choose how often you’d like service.");
      return;
    }
    setStepError(null);
    setStep(2);
  }

  function onPhotosChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    setPhotos(files.slice(0, 6));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.location.trim()) {
      setAttemptedSubmit(true);
      return;
    }
    setAttemptedSubmit(true);
  }

  const contactInvalid =
    attemptedSubmit &&
    (!form.name.trim() || !form.phone.trim() || !form.location.trim());

  return (
    <div
      className={`rounded-md border border-border bg-pure p-5 text-midnight sm:p-7 ${className}`.trim()}
    >
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-border pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signature">
            Step {step} of 2
          </p>
          <h3
            id={headingId}
            className="font-heading mt-1.5 text-xl font-semibold tracking-tight text-midnight sm:text-2xl"
          >
            {step === 1 ? "Your Cleaning Needs" : "Contact Details"}
          </h3>
        </div>
        <p className="pt-1 text-sm text-navy-muted" aria-live="polite">
          {step === 1 ? "Cleaning Needs" : "Contact Details"}
        </p>
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
          className="h-full bg-signature"
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
                Services needed
              </legend>
              <p className="mt-1 text-sm text-navy-muted">
                Select all that apply. Gutter can combine with either window
                option.
              </p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                {serviceOptions.map((service) => {
                  const selected = form.services.includes(service.id);
                  return (
                    <ChoiceButton
                      key={service.id}
                      selected={selected}
                      onClick={() => toggleService(service.id)}
                      className="min-h-[3.25rem] justify-center text-center sm:px-3"
                    >
                      {service.label}
                    </ChoiceButton>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold text-midnight">
                Frequency
                {frequencyDisabled ? (
                  <span className="ml-1.5 font-normal text-navy-muted">
                    (not needed for gutter-only)
                  </span>
                ) : null}
              </legend>
              <div
                className={[
                  "mt-3 grid gap-2.5 sm:grid-cols-3",
                  frequencyDisabled ? "opacity-50" : "",
                ].join(" ")}
              >
                {quoteFrequencyOptions.map((option) => {
                  const selected = form.frequency === option.id;
                  return (
                    <ChoiceButton
                      key={option.id}
                      selected={selected}
                      onClick={() => {
                        if (frequencyDisabled) return;
                        setStepError(null);
                        setForm((current) => ({
                          ...current,
                          frequency: option.id,
                        }));
                      }}
                      className={[
                        "min-h-[3.75rem]",
                        frequencyDisabled ? "cursor-not-allowed" : "",
                      ].join(" ")}
                    >
                      <span className="block">{option.label}</span>
                      <span
                        className={[
                          "mt-0.5 block text-xs font-medium",
                          selected ? "text-signature" : "text-navy-muted",
                        ].join(" ")}
                      >
                        {option.detail}
                      </span>
                    </ChoiceButton>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold text-midnight">
                Property type
              </legend>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {propertyTypeOptions.map((option) => {
                  const selected = form.propertyType === option.id;
                  return (
                    <ChoiceButton
                      key={option.id}
                      selected={selected}
                      onClick={() => {
                        setStepError(null);
                        setForm((current) => ({
                          ...current,
                          propertyType: option.id,
                        }));
                      }}
                    >
                      {option.label}
                    </ChoiceButton>
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
              <button type="button" onClick={goToStep2} className={primaryActionClass}>
                Continue
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <FieldLabel>Full name</FieldLabel>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  aria-invalid={attemptedSubmit && !form.name.trim()}
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
                  required
                  aria-invalid={attemptedSubmit && !form.phone.trim()}
                  className={fieldClass}
                  value={form.phone}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      phone: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="block sm:col-span-2">
                <FieldLabel>Location / postal code</FieldLabel>
                <input
                  type="text"
                  name="location"
                  autoComplete="postal-code"
                  required
                  aria-invalid={attemptedSubmit && !form.location.trim()}
                  className={fieldClass}
                  value={form.location}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      location: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="block sm:col-span-2">
                <FieldLabel optional>Email</FieldLabel>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className={fieldClass}
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="block sm:col-span-2">
                <FieldLabel optional>Notes</FieldLabel>
                <textarea
                  name="notes"
                  rows={3}
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

              <label className="block sm:col-span-2">
                <FieldLabel optional>Photos</FieldLabel>
                <input
                  type="file"
                  name="photos"
                  accept="image/*"
                  multiple
                  className="mt-2 block w-full text-sm text-navy-muted file:mr-3 file:rounded-md file:border-0 file:bg-ice file:px-3.5 file:py-2 file:text-sm file:font-semibold file:text-midnight"
                  onChange={onPhotosChange}
                />
                {photos.length > 0 ? (
                  <p className="mt-2 text-sm text-navy-muted">
                    {photos.length} file{photos.length === 1 ? "" : "s"} selected
                    — not uploaded yet.
                  </p>
                ) : (
                  <p className="mt-1.5 text-xs text-navy-muted">Up to 6 images.</p>
                )}
              </label>
            </div>

            {attemptedSubmit ? (
              <div
                className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950"
                role="status"
              >
                {contactInvalid ? (
                  <p className="font-semibold">
                    Add your name, phone, and location to continue.
                  </p>
                ) : (
                  <>
                    <p className="font-semibold">
                      Quote requests are not submitting yet.
                    </p>
                    <p className="mt-1">
                      This form is frontend-only for now. Nothing was sent, and
                      your answers stay in this browser session until a
                      submission service is connected.
                    </p>
                  </>
                )}
              </div>
            ) : (
              <p className="text-sm text-navy-muted">
                Quote request only — not a booking, and no price is calculated
                online.
              </p>
            )}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className={secondaryActionClass}
                onClick={() => {
                  setAttemptedSubmit(false);
                  setStep(1);
                }}
              >
                Back
              </button>
              <button type="submit" className={`${primaryActionClass} sm:flex-1`}>
                Request My Free Quote
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
