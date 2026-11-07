"use client";

import {
  useId,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Button } from "@/components/ui/Button";
import {
  frequencyOptions,
  propertyTypeOptions,
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

function isGutterOnly(services: ServiceId[]) {
  return services.length === 1 && services[0] === "gutter-cleaning";
}

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

  function toggleService(serviceId: ServiceId) {
    setStepError(null);
    setForm((current) => {
      const exists = current.services.includes(serviceId);
      const services = exists
        ? current.services.filter((id) => id !== serviceId)
        : [...current.services, serviceId];
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
    setAttemptedSubmit(true);
  }

  return (
    <div className={`rounded-lg border border-border bg-pure p-6 shadow-[var(--shadow-soft)] sm:p-8 ${className}`.trim()}>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signature">
            Free quote
          </p>
          <h3 id={headingId} className="font-heading mt-2 text-2xl font-semibold text-midnight">
            {step === 1 ? "Tell us about the job" : "How can we reach you?"}
          </h3>
        </div>
        <p className="text-sm text-navy-muted" aria-live="polite">
          Step {step} of 2
        </p>
      </div>

      <div
        className="mb-6 h-1.5 overflow-hidden rounded-full bg-ice"
        aria-hidden
      >
        <div
          className="h-full rounded-full bg-signature transition-[width] duration-300"
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
                Select all that apply.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {serviceOptions.map((service) => {
                  const checked = form.services.includes(service.id);
                  return (
                    <label
                      key={service.id}
                      className={[
                        "flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-sm transition",
                        checked
                          ? "border-signature bg-ice text-midnight"
                          : "border-border bg-pure text-midnight hover:border-border-strong",
                      ].join(" ")}
                    >
                      <input
                        type="checkbox"
                        className="size-4 accent-[var(--color-signature-blue)]"
                        checked={checked}
                        onChange={() => toggleService(service.id)}
                      />
                      <span className="font-medium">{service.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-midnight">
                  Property type
                </span>
                <select
                  className="mt-2 w-full rounded-md border border-border bg-pure px-3 py-3 text-sm text-midnight"
                  value={form.propertyType}
                  onChange={(event) => {
                    setStepError(null);
                    setForm((current) => ({
                      ...current,
                      propertyType: event.target.value as PropertyTypeId | "",
                    }));
                  }}
                  required
                >
                  <option value="">Select property type</option>
                  {propertyTypeOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-midnight">
                  Frequency
                  {!frequencyRequired ? (
                    <span className="ml-2 font-normal text-navy-muted">
                      (optional for gutter-only)
                    </span>
                  ) : null}
                </span>
                <select
                  className="mt-2 w-full rounded-md border border-border bg-pure px-3 py-3 text-sm text-midnight disabled:cursor-not-allowed disabled:bg-cloud disabled:text-navy-muted"
                  value={form.frequency}
                  disabled={isGutterOnly(form.services)}
                  onChange={(event) => {
                    setStepError(null);
                    setForm((current) => ({
                      ...current,
                      frequency: event.target.value as FrequencyId | "",
                    }));
                  }}
                  required={frequencyRequired}
                >
                  <option value="">
                    {isGutterOnly(form.services)
                      ? "Not required for gutter-only"
                      : "Select frequency"}
                  </option>
                  {frequencyOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {stepError ? (
              <p className="text-sm font-medium text-red-700" role="alert">
                {stepError}
              </p>
            ) : null}

            <div className="flex flex-wrap gap-3">
              <Button type="button" onClick={goToStep2} size="lg">
                Continue
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="text-sm font-semibold text-midnight">
                  Full name
                </span>
                <input
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded-md border border-border bg-pure px-3 py-3 text-sm"
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
                <span className="text-sm font-semibold text-midnight">
                  Phone
                </span>
                <input
                  type="tel"
                  autoComplete="tel"
                  required
                  className="mt-2 w-full rounded-md border border-border bg-pure px-3 py-3 text-sm"
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
                <span className="text-sm font-semibold text-midnight">
                  Location / postal code
                </span>
                <input
                  type="text"
                  autoComplete="postal-code"
                  required
                  className="mt-2 w-full rounded-md border border-border bg-pure px-3 py-3 text-sm"
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
                <span className="text-sm font-semibold text-midnight">
                  Email{" "}
                  <span className="font-normal text-navy-muted">(optional)</span>
                </span>
                <input
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-md border border-border bg-pure px-3 py-3 text-sm"
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
                <span className="text-sm font-semibold text-midnight">
                  Notes{" "}
                  <span className="font-normal text-navy-muted">(optional)</span>
                </span>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-md border border-border bg-pure px-3 py-3 text-sm"
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
                <span className="text-sm font-semibold text-midnight">
                  Photos{" "}
                  <span className="font-normal text-navy-muted">
                    (optional, up to 6)
                  </span>
                </span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="mt-2 block w-full text-sm text-navy-muted file:mr-4 file:rounded-md file:border-0 file:bg-ice file:px-4 file:py-2 file:text-sm file:font-semibold file:text-midnight"
                  onChange={onPhotosChange}
                />
                {photos.length > 0 ? (
                  <p className="mt-2 text-sm text-navy-muted">
                    {photos.length} file{photos.length === 1 ? "" : "s"} selected
                    (not uploaded yet).
                  </p>
                ) : null}
              </label>
            </div>

            {attemptedSubmit ? (
              <div
                className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950"
                role="status"
              >
                <p className="font-semibold">Quote requests are not submitting yet.</p>
                <p className="mt-1">
                  This form is wired for the frontend only. A backend or form
                  service has not been connected, so nothing was sent. Your
                  answers stay in this browser session.
                </p>
              </div>
            ) : (
              <p className="text-sm text-navy-muted">
                This is a quote request — not a booking — and no price is
                calculated automatically.
              </p>
            )}

            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setAttemptedSubmit(false);
                  setStep(1);
                }}
              >
                Back
              </Button>
              <Button type="submit" size="lg">
                Request quote
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
