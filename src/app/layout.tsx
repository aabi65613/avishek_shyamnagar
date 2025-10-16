// src/app/layout.tsx - Final structure with Header and necessary components

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import the new Header component
import Header from "@/components/Header"; 
// Import the Footer and Toaster (critical for UI functionality)
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
// Assuming you have a Product and Cart Provider set up (using placeholder for now)
// import { ProductProvider } from "@/context/ProductContext"; 
// import { CartProvider } from "@/context/CartContext"; 


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Books Shyamnagar",
  description: "Your source for quality books, tools, and gifts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Placeholder for Providers to avoid Type Errors */}
        {/* <ProductProvider>
        <CartProvider> */}
        
          <div className="flex flex-col min-h-screen">
            <Header /> {/* 1. The new Header component */}
            <main className="flex-grow">
              {children}
            </main>
            <Footer /> {/* 2. The previously fixed Footer component */}
          </div>
          <Toaster /> {/* 3. The Toaster component for notifications */}

        {/* </CartProvider>
        </ProductProvider> */}
      </body>
    </html>
  );
}
