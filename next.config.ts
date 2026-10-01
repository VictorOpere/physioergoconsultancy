import type { NextConfig } from "next";

/**
 * All photography is served from `public/photos`, so no remote image hosts are
 * configured. Hotlinking Unsplash meant every cold cache had to beat the image
 * optimiser's upstream timeout before a visitor saw anything.
 */
const nextConfig: NextConfig = {};

export default nextConfig;
