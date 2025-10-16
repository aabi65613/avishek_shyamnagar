// src/components/Footer.tsx - CLEANED OF FRAMER-MOTION
import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "7059068366";
  const email = "contact@books.shyamnagar.com"; // Placeholder Email

  // Removed linkVariants animation object

  return (
    <footer className="bg-primary-color text-white py-10 mt-16 shadow-inner">
      <div className="container mx-auto px-4">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Brand & Description */}
          <div>
            <h3 className="text-2xl font-extrabold mb-3 tracking-wider text-secondary-color">
              BOOKS.shyamnagar
            </h3>
            <p className="text-sm text-gray-300">
              Discount beyond your expectations. Your destination for books, tools, and unique gifts.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-3 border-b border-secondary-color pb-1">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/">
                {/* Changed motion.a back to standard a tag and removed animation props */}
                <a className="hover:text-secondary-color transition-colors">Home</a>
              </Link>
              <Link href="/#categories">
                <a className="hover:text-secondary-color transition-colors">Categories</a>
              </Link>
              <Link href="/cart">
                <a className="hover:text-secondary-color transition-colors">View Cart</a>
              </Link>
              <Link href="/contact">
                <a className="hover:text-secondary-color transition-colors">Contact</a>
              </Link>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-3 border-b border-secondary-color pb-1">Get in Touch</h4>
            <div className="flex flex-col space-y-2 text-sm">
              {/* Phone Number */}
              <a href={`tel:${phoneNumber}`} className="flex items-center space-x-2 hover:text-secondary-color transition-colors">
                <Phone size={16} className="text-secondary-color" />
                <span>{phoneNumber}</span>
              </a>
              {/* Email (Placeholder) */}
              <a href={`mailto:${email}`} className="flex items-center space-x-2 hover:text-secondary-color transition-colors">
                <Mail size={16} className="text-secondary-color" />
                <span>{email}</span>
              </a>
              <p className="pt-2 text-gray-400">Kolkata, West Bengal, India</p>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Books.shyamnagar. All rights reserved.</p>
          <div className="mt-2 text-xs">
            <p>Designed and Built by Manus AI</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
