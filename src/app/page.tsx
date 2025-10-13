// src/app/page.tsx - FINAL VISUAL & BUILD FIX
"use client";

import React from 'react';
import ProductCard from '@/components/ProductCard';
import { demoProducts, getCategories } from '@/data/products'; 
// import { motion } from 'framer-motion'; 

const HomePage = () => {
  const products = demoProducts.slice(0, 9); 
  // const categories = getCategories(); // COMMENTED OUT: Unused variable fix

  const featuredProducts = products.filter(p => p.id <= 9); 

  return (
    <div className="min-h-screen">
      
      {/* Hero Section with Brand Colors */}
      <section className="text-center py-24 px-4 bg-background-color text-white shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary-color mb-4 leading-tight">
            Discover Our Premium Collection
          </h1>
          <p className="text-xl md:text-2xl text-secondary-color mb-8 max-w-3xl mx-auto">
            Discount beyond your expectations. Shop the latest styles and quality products delivered fast.
          </p>
          <a
            href="#featured"
            className="inline-block bg-accent-color text-text-color px-8 py-3 rounded-full font-bold text-lg transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 shadow-md"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Main Product Display Section */}
      <section id="featured" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-text-color border-b-2 border-primary-color inline-block pb-1">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;
