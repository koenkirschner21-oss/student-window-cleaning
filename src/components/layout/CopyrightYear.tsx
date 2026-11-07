"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientYear() {
  return new Date().getFullYear();
}

function getServerYear() {
  return 2026;
}

/** Dynamic copyright year without blocking prerender on `new Date()`. */
export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getClientYear, getServerYear);
  return <>{year}</>;
}
