import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // Static export has no Image Optimization API; `/_next/image?...` 404s on static hosts.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
