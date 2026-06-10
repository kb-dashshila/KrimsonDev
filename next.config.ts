import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/KrimsonDev",
  assetPrefix: "/KrimsonDev/",
};

export default nextConfig;
