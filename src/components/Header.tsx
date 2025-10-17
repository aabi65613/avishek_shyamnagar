"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Using 0 ensures no count badge is shown, avoiding issues with cart context
    const DUMMY_CART_COUNT = 0; 

    return (
        // Header using deep navy background and fixed position for navigation
        <header className="sticky top-0 z-50 bg-deep-navy shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                
                {/* 1. Logo/Site Title - Reverted to white text */}
                <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
                    <span>Books Shyamnagar</span>
                </Link>

                {/* 2. Desktop Navigation Links */}
                <nav className="hidden md:flex space-x-8 text-white font-medium">
                    <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                    <Link href="/products" className="hover:text-gray-300 transition-colors">Products</Link>
                    <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
                </nav>

                {/* 3. Cart Icon and Mobile Menu Button */}
                <div className="flex items-center space-x-4">
                    
                    {/* Cart Icon */}
                    <Link href="/cart" className="relative p-2 text-white hover:text-gray-300 transition-colors">
                        <ShoppingCart className="h-6 w-6" />
                        {/* Cart count badge */}
                        {DUMMY_CART_COUNT > 0 && (
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-deep-navy transform translate-x-1/2 -translate-y-1/2 bg-secondary-color rounded-full">
                                {DUMMY_CART_COUNT}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* 4. Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden bg-deep-navy border-t border-white/20 absolute w-full shadow-xl">
                    <nav className="flex flex-col space-y-2 p-4 text-white font-medium">
                        <Link href="/" className="py-2 hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/products" className="py-2 hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
                        <Link href="/about" className="py-2 hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/contact" className="py-2 hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
