import type { NextConfig } from "next";

const isStaticExport =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.EXPORT_STATIC === "true" ||
  process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Enables clean static HTML/CSS export for GitHub Pages
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
