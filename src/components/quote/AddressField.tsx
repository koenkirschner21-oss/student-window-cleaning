"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { addressAutocomplete } from "@/lib/site";

type AddressFieldProps = {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  invalid?: boolean;
  className?: string;
};

type Prediction = {
  placeId: string;
  description: string;
};

type PlacesAutocompleteService = {
  getPlacePredictions: (
    request: {
      input: string;
      componentRestrictions?: { country: string | string[] };
      location?: { lat: () => number; lng: () => number };
      radius?: number;
      types?: string[];
    },
    callback: (
      predictions: Array<{
        place_id: string;
        description: string;
      }> | null,
      status: string,
    ) => void,
  ) => void;
};

type GoogleMapsWindow = Window & {
  google?: {
    maps?: {
      places?: {
        AutocompleteService: new () => PlacesAutocompleteService;
      };
      LatLng: new (lat: number, lng: number) => {
        lat: () => number;
        lng: () => number;
      };
    };
  };
};

const PLACES_SCRIPT_ID = "swc-google-places-script";
const DEBOUNCE_MS = 280;

function getBrowserPlacesKey() {
  // Static access so Next can inline NEXT_PUBLIC_* at build time.
  return process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY?.trim() || "";
}

function loadPlacesScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const maps = (window as GoogleMapsWindow).google?.maps;
  if (maps?.places?.AutocompleteService) return Promise.resolve();

  const existing = document.getElementById(
    PLACES_SCRIPT_ID,
  ) as HTMLScriptElement | null;
  if (existing) {
    return new Promise((resolve, reject) => {
      if ((window as GoogleMapsWindow).google?.maps?.places) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Places script failed")),
        { once: true },
      );
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = PLACES_SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Places script failed"));
    document.head.appendChild(script);
  });
}

/**
 * Property street address input with optional Google Places suggestions.
 * When `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` is absent or Places fails to load,
 * this stays a clean manual field — no fake suggestions.
 */
export function AddressField({
  id = "street-address",
  name = "streetAddress",
  value,
  onChange,
  invalid,
  className = "",
}: AddressFieldProps) {
  const listboxId = useId();
  const apiKey = getBrowserPlacesKey();
  const placesEnabled = Boolean(apiKey);

  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [placesReady, setPlacesReady] = useState(false);
  const serviceRef = useRef<PlacesAutocompleteService | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const blurCloseRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    if (!placesEnabled) return;

    let cancelled = false;
    loadPlacesScript(apiKey)
      .then(() => {
        if (cancelled) return;
        const g = (window as GoogleMapsWindow).google;
        if (!g?.maps?.places?.AutocompleteService) return;
        serviceRef.current = new g.maps.places.AutocompleteService();
        setPlacesReady(true);
      })
      .catch(() => {
        if (!cancelled) {
          serviceRef.current = null;
          setPlacesReady(false);
        }
      });

    return () => {
      cancelled = true;
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (blurCloseRef.current) clearTimeout(blurCloseRef.current);
    };
  }, [apiKey, placesEnabled]);

  function fetchPredictions(input: string) {
    if (!placesReady || !serviceRef.current || input.trim().length < 3) {
      setPredictions([]);
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    const requestId = ++requestIdRef.current;
    const g = (window as GoogleMapsWindow).google;
    const { bias } = addressAutocomplete;
    const location =
      g?.maps?.LatLng != null
        ? new g.maps.LatLng(bias.lat, bias.lng)
        : undefined;

    serviceRef.current.getPlacePredictions(
      {
        input: input.trim(),
        componentRestrictions: { country: bias.country },
        location,
        radius: bias.radiusMeters,
        types: ["address"],
      },
      (results, status) => {
        if (requestId !== requestIdRef.current) return;
        if (status !== "OK" || !results?.length) {
          setPredictions([]);
          setOpen(false);
          setActiveIndex(-1);
          return;
        }
        const next = results.slice(0, 6).map((item) => ({
          placeId: item.place_id,
          description: item.description,
        }));
        setPredictions(next);
        setOpen(true);
        setActiveIndex(-1);
      },
    );
  }

  function handleChange(next: string) {
    onChange(next);
    if (!placesReady) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchPredictions(next), DEBOUNCE_MS);
  }

  function selectPrediction(prediction: Prediction) {
    onChange(prediction.description);
    setPredictions([]);
    setOpen(false);
    setActiveIndex(-1);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!open || predictions.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) =>
        current < predictions.length - 1 ? current + 1 : 0,
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) =>
        current <= 0 ? predictions.length - 1 : current - 1,
      );
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      selectPrediction(predictions[activeIndex]);
    } else if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  const showList = open && predictions.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type="text"
        name={name}
        autoComplete={placesReady ? "off" : "street-address"}
        required
        role="combobox"
        aria-expanded={showList}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={
          activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
        }
        aria-invalid={invalid || undefined}
        className={className}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        onKeyDown={onKeyDown}
        onFocus={() => {
          if (predictions.length > 0) setOpen(true);
        }}
        onBlur={() => {
          blurCloseRef.current = setTimeout(() => {
            setOpen(false);
            setActiveIndex(-1);
          }, 120);
        }}
        placeholder="Street number and name"
      />

      {showList ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="Address suggestions"
          className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-pure py-1 shadow-md"
        >
          {predictions.map((prediction, index) => {
            const active = index === activeIndex;
            return (
              <li
                key={prediction.placeId}
                id={`${listboxId}-option-${index}`}
                role="option"
                aria-selected={active}
              >
                <button
                  type="button"
                  className={[
                    "block w-full px-3.5 py-2.5 text-left text-sm text-midnight",
                    active ? "bg-ice" : "hover:bg-cloud",
                  ].join(" ")}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => selectPrediction(prediction)}
                >
                  {prediction.description}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
