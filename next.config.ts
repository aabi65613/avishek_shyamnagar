// next.config.js
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // --- IMAGE CONFIGURATION FIX ---
  images: {
    // This is the critical line to fix the persistent "red cross" broken image error
    // when using the Next.js <Image> component with local images.
    unoptimized: true,
  },
  // -------------------------------
}

export default nextConfig
