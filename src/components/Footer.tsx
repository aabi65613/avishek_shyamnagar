// src/components/Footer.tsx - FINAL FIX FOR BUILD CRASH

import Link from "next/link";
import { MoveUp } from "lucide-react";

// CRITICAL FIX: Removed the ": React.FC" type annotation
const Footer = () => { 
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-deep-navy text-gray-300 py-10 border-t border-secondary-color/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gold mb-2">Books Shyamnagar</h3>
            <p className="text-sm">
              Your source for quality products.<br />
              Delivering satisfaction with every order.
            </p>
          </div>

          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2 text-sm">
              <h4 className="font-semibold text-gold mb-1">Company</h4>
              <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
              <Link href="/careers" className="hover:text-gold transition-colors">Careers</Link>
            </div>
            
            <div className="flex flex-col space-y-2 text-sm">
              <h4 className="font-semibold text-gold mb-1">Support</h4>
              <Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link>
              <Link href="/shipping" className="hover:text-gold transition-colors">Shipping</Link>
              <Link href="/returns" className="hover:text-gold transition-colors">Returns</Link>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-3 rounded-full bg-gold text-deep-navy shadow-lg transition-all hover:bg-gold/80"
            aria-label="Scroll to top"
          >
            <MoveUp className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-secondary-color/20 text-center text-xs">
          © {currentYear} Books Shyamnagar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
