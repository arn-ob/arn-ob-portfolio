import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
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
