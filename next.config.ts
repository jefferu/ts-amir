import type { NextConfig } from "next";

const isStaticExport =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.EXPORT_STATIC === "true" ||
  process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
