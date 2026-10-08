export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (typeof window !== "undefined" && window.location.pathname.startsWith("/ts-amir")) {
    return `/ts-amir${cleanPath}`;
  }

  const envBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${envBase}${cleanPath}`;
}
