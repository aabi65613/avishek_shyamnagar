// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
// import { motion } from 'framer-motion'; // <-- COMMENTED OUT: Build Fix
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Replaced motion.footer with standard <footer>
  return (
    <footer className="w-full bg-primary-color text-white py-10 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-secondary-color/50 pb-8 mb-8">
          
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-xl font-bold text-secondary-color mb-4">Books.shyamnagar</h3>
            <p className="text-sm text-gray-300">
              Discount beyond your expectations. Quality products delivered fast.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-secondary-color/50 pb-1">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                {/* Replaced motion.a with standard <Link> */}
                <Link href="/" className="text-gray-300 hover:text-secondary-color transition-colors">
                  Home
                </Link>
              </li>
              <li>
                {/* Replaced motion.a with standard <Link> */}
                <Link href="/about" className="text-gray-300 hover:text-secondary-color transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                {/* Replaced motion.a with standard <Link> */}
                <Link href="/contact" className="text-gray-300 hover:text-secondary-color transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-secondary-color/50 pb-1">Service</h4>
            <ul className="space-y-2">
              <li>
                {/* Replaced motion.a with standard <Link> */}
                <Link href="/faq" className="text-gray-300 hover:text-secondary-color transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                {/* Replaced motion.a with standard <Link> */}
                <Link href="/shipping" className="text-gray-300 hover:text-secondary-color transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                {/* Replaced motion.a with standard <Link> */}
                <Link href="/terms" className="text-gray-300 hover:text-secondary-color transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-secondary-color/50 pb-1">Connect</h4>
            <div className="flex space-x-4">
              {/* Replaced motion.a with standard <a> */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary-color transition-colors">
                <Facebook size={20} />
              </a>
              {/* Replaced motion.a with standard <a> */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary-color transition-colors">
                <Instagram size={20} />
              </a>
              {/* Replaced motion.a with standard <a> */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary-color transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          &copy; {currentYear} Books.shyamnagar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
