import { connection } from "next/server";

/**
 * Marks the route as request-time capable so root `generateMetadata()` may
 * read the Host header for hostname-aware robots without blocking prerender.
 */
export async function RequestConnectionMarker() {
  await connection();
  return null;
}
