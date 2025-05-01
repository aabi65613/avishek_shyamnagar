// src/app/page.tsx
import React from 'react';

// Import the actual components
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProductsSlider from '@/components/FeaturedProductsSlider'; // Import the slider
import ProductDisplay from '@/components/ProductDisplay';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Slider - Implemented in step 006 */}
      <FeaturedProductsSlider />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Product Display Section (Grouped by Category) */}
      {/* This section displays all products under their respective categories */}
      <ProductDisplay />

      {/* Add other sections as needed */}
    </>
  );
}

