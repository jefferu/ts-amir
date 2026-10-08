import type { NextConfig } from "next";

const isStaticExport =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.EXPORT_STATIC === "true" ||
  process.env.NODE_ENV === "production";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: basePath ? basePath : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
