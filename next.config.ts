// next.config.js - CHANGED TO STANDARD JAVASCRIPT

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Retained your existing configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // --- IMAGE CONFIGURATION FIX (Critical) ---
  images: {
    // Setting this property is what fixes the image red cross issue
    unoptimized: true,
  },
  // ------------------------------------------
};

module.exports = nextConfig;
