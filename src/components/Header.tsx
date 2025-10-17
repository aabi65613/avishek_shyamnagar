// File: src/components/Header.tsx
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react'; // Assuming you have lucide-react installed
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // Assuming shadcn Sheet component

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Site Title */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl text-primary">Shyamnagar Store</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Cart Icon & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>

          {/* Mobile Sheet Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 pt-6">
                <Link href="/" className="block py-2 text-lg font-medium hover:text-primary transition-colors">Home</Link>
                <Link href="/shop" className="block py-2 text-lg font-medium hover:text-primary transition-colors">Shop</Link>
                <Link href="/about" className="block py-2 text-lg font-medium hover:text-primary transition-colors">About</Link>
                <Link href="/contact" className="block py-2 text-lg font-medium hover:text-primary transition-colors">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
