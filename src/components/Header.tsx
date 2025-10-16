// src/components/Header.tsx - FINAL FIX FOR BUILD CRASH

"use client";

import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

// CRITICAL FIX: Removed the ": React.FC" type annotation
const Header = () => {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-deep-navy shadow-md border-b border-secondary-color/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Site Title */}
        <Link href="/" className="text-2xl font-extrabold text-gold tracking-wider hover:text-gold/90 transition-colors">
          Books Shyamnagar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Cart Icon & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative p-2 rounded-full hover:bg-secondary-color/20 transition-colors">
            <ShoppingCart className="h-6 w-6 text-gold" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-deep-navy border-t border-secondary-color/20 pb-4">
          <nav className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 font-medium hover:text-gold py-2 transition-colors border-b border-secondary-color/10 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
