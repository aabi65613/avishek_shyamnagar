// File: src/components/Header.tsx
import Link from 'next/link';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming button.tsx exists
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // Assuming sheet.tsx exists

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background-color/95 backdrop-blur supports-[backdrop-filter]:bg-background-color/80 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo/Site Title */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Using primary-color for title */}
          <span className="font-bold text-xl md:text-2xl text-primary-color">Books Shyamnagar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-text-color hover:text-secondary-color transition-colors">Home</Link>
          <Link href="/products" className="text-text-color hover:text-secondary-color transition-colors">Shop</Link>
          {/* Add other links as needed */}
          {/* <Link href="/about" className="text-text-color hover:text-secondary-color transition-colors">About</Link> */}
          {/* <Link href="/contact" className="text-text-color hover:text-secondary-color transition-colors">Contact</Link> */}
        </nav>

        {/* Cart Icon & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-primary-color hover:text-secondary-color" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>

          {/* Mobile Sheet Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary-color hover:text-secondary-color">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background-color">
              <div className="flex flex-col gap-4 pt-6">
                 {/* Links using your theme colors */}
                <Link href="/" className="block py-2 text-lg font-medium text-text-color hover:text-secondary-color transition-colors">Home</Link>
                <Link href="/products" className="block py-2 text-lg font-medium text-text-color hover:text-secondary-color transition-colors">Shop</Link>
                 {/* Add other links as needed */}
                {/* <Link href="/about" className="block py-2 text-lg font-medium text-text-color hover:text-secondary-color transition-colors">About</Link> */}
                {/* <Link href="/contact" className="block py-2 text-lg font-medium text-text-color hover:text-secondary-color transition-colors">Contact</Link> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

