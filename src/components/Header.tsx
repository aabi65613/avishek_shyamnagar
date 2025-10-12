// src/components/Header.tsx
"use client"; // Added to use hooks like useCart

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext'; // <-- IMPORTED for Cart Count
import { motion } from 'framer-motion'; // <-- IMPORTED for Motion

const Header = () => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  // Motion variants for a subtle, professional header animation
  const headerVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    hover: { 
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)", // Subtle shadow lift on hover (desktop)
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover" // Apply hover effect
      className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100" // Enhanced styling
    >
      <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-y-3">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="text-3xl font-extrabold text-primary-color tracking-tight">
            BOOKS.shyamnagar
          </Link>
          <span className="text-sm text-gray-500 hidden lg:block border-l pl-3">
            Discount beyond your expectations
          </span>
        </div>

        {/* Search Bar - Professional Look */}
        <div className="w-full md:w-auto flex-grow md:flex-grow-0 md:mx-4 order-3 md:order-2 max-w-md">
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search products..."
              className="bg-gray-50 border border-gray-200 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary-color w-full transition-shadow duration-300"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4 text-primary-color hover:text-secondary-color">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Navigation Links, Phone & Cart */}
        <div className="flex items-center space-x-6 order-2 md:order-3">
          {/* Nav Links */}
          <Link href="/#categories" className="text-primary-color font-medium hover:text-secondary-color text-sm md:text-base transition-colors hidden sm:block">
            Categories
          </Link>
          <Link href="/contact" className="text-primary-color font-medium hover:text-secondary-color text-sm md:text-base transition-colors hidden sm:block">
            Contact
          </Link>
          
          {/* Phone Number */}
          <motion.a 
            href="tel:7059068366" 
            className="flex items-center space-x-1 text-primary-color hover:text-secondary-color text-sm md:text-base font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={18} className="text-secondary-color" />
            <span className="hidden sm:inline">7059068366</span>
          </motion.a>
          
          {/* Cart Icon with Count */}
          <Link href="/cart" className="relative text-primary-color hover:text-secondary-color transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <motion.span 
                key={itemCount} // Key change forces animation when count updates
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="absolute -top-1 -right-1 bg-secondary-color text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white"
              >
                {itemCount}
              </motion.span>
            )}
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
