import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
