import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    // Preserve inbound links from the previous Squarespace site, including the
    // inconsistent paths its own footer used.
    return [
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/industries-1", destination: "/industries", permanent: true },
      { source: "/contact-", destination: "/contact", permanent: true },
      { source: "/abouta5", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
