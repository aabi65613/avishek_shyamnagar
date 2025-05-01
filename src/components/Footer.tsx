// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react'; // Import Phone icon

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "7059068366"; // Corrected phone number

  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          {/* Footer Links */}
          <Link href="/" className="mx-2 hover:text-primary-color">Home</Link>
          <Link href="/#categories" className="mx-2 hover:text-primary-color">Categories</Link>
          <Link href="/contact" className="mx-2 hover:text-primary-color">Contact</Link>
          {/* Phone Number - Added */}
          <a href={`tel:${phoneNumber}`} className="flex items-center justify-center space-x-1 mx-2 hover:text-primary-color">
            <Phone size={16} />
            <span>{phoneNumber}</span>
          </a>
        </div>
        <div className="mb-4">
          <p>&copy; {currentYear} Books.shyamnagar. All rights reserved.</p>
        </div>
        {/* Made by Manus AI Badge */}
        <div className="text-sm text-gray-500">
          <p>Made by Manus AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

