import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: [],
  },
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
