/**
 * Helper to resolve asset URLs correctly across local development and GitHub Pages.
 * Handles subpath deployment (/ts-amir) seamlessly.
 */
export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // If in browser, detect GitHub Pages pathname prefix
  if (typeof window !== "undefined" && window.location.pathname.startsWith("/ts-amir")) {
    return `/ts-amir${cleanPath}`;
  }

  const envBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${envBase}${cleanPath}`;
}
