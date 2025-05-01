// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Phone } from 'lucide-react'; // Added Phone icon

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-y-2">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-2xl font-bold text-primary-color">
            Books.shyamnagar
          </Link>
          <span className="text-sm text-gray-500 hidden lg:block">Discount beyond your expectations</span>
        </div>

        {/* Search Bar - Adjusted width and order */}
        <div className="w-full md:w-auto flex-grow md:flex-grow-0 md:mx-4 order-3 md:order-2 max-w-md">
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search products..."
              className="bg-gray-100 border border-gray-300 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-color w-full"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Navigation Links, Phone & Cart - Adjusted order and spacing */}
        <div className="flex items-center space-x-4 order-2 md:order-3">
          <Link href="/#categories" className="text-gray-700 hover:text-primary-color text-sm md:text-base">Categories</Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary-color text-sm md:text-base">Contact</Link>
          {/* Phone Number - Added */}
          <a href="tel:7059068366" className="flex items-center space-x-1 text-gray-700 hover:text-primary-color text-sm md:text-base">
            <Phone size={16} />
            <span>7059068366</span>
          </a>
          <Link href="/cart" className="relative text-gray-700 hover:text-primary-color">
            <ShoppingCart className="h-6 w-6" />
            {/* Basic cart count indicator - functionality to be added later if needed */}
            {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span> */}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

