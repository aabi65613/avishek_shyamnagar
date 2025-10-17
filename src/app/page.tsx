// src/app/page.tsx - CRITICAL BUILD FIX: Placeholder to stop "useCart" crash on the homepage.

import React from 'react';
import Link from 'next/link';

// This component uses no external hooks or contexts.
const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center min-h-[70vh]">
      <h1 className="text-5xl font-extrabold text-primary-color mb-4">
        Welcome to Books Shyamnagar
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Your trusted source for quality books and gifts.
      </p>
      
      <div className="flex justify-center space-x-4">
        <Link 
          href="/products" 
          className="px-6 py-3 bg-deep-navy text-white rounded-lg shadow-md hover:bg-deep-navy/90 transition-colors font-semibold"
        >
          Explore Products
        </Link>
        <Link 
          href="/about" 
          className="px-6 py-3 bg-secondary-color text-deep-navy rounded-lg shadow-md hover:bg-secondary-color/90 transition-colors font-semibold"
        >
          Learn About Us
        </Link>
      </div>

    </div>
  );
};

export default HomePage;
