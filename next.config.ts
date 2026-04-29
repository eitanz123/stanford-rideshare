import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/stanford-rideshare",
  assetPrefix: "/stanford-rideshare",
};

export default nextConfig;
