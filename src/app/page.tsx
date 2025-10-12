// src/app/page.tsx
import React from 'react';
import { demoProducts } from '@/data/products'; // Correctly import your product data
import ProductCard from '@/components/ProductCard'; // <-- This is the animated card
import { getCategories } from '@/data/products'; // Function to get unique categories

const HomePage = () => {
  const categories = getCategories();

  return (
    <div className="container mx-auto px-4 py-10 sm:py-16">
      {/* Hero Section - Clean and Professional */}
      <section className="text-center mb-12 bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary-color">
        <h1 className="text-5xl font-extrabold text-primary-color mb-4">
          Discover Our Premium Collection
        </h1>
        <p className="text-xl text-gray-600">
          Discount beyond your expectations. Shop the latest styles.
        </p>
      </section>

      {/* Main Product Grid - The Animated Display */}
      <section>
        <h2 className="text-3xl font-bold text-primary-color mb-8 border-b-2 border-secondary-color pb-2 inline-block">
          Featured Products
        </h2>
        
        {/* This grid applies the staggered fade-in animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {demoProducts.map((product, index) => (
            // Passing index is CRUCIAL for the staggered fade-in effect
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
      
      {/* Category List */}
      <section className="mt-16" id="categories">
        <h2 className="text-2xl font-semibold text-primary-color mb-4">
          Browse Categories
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span 
              key={category}
              // Using the Deep Navy and Gold colors for category tags
              className="px-4 py-1.5 bg-primary-color text-white rounded-full text-sm font-medium hover:bg-secondary-color transition-colors cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
