// src/app/layout.tsx - Final structure with Header and necessary components

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import the new Header component
import Header from "@/components/Header"; 
// Import the Footer and Toaster (critical for UI functionality)
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
// CartProvider and useCart are REMOVED here to fix the build error


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
        {/* Only include necessary wrappers */}
        {/* <ProductProvider> */}
        
          <div className="flex flex-col min-h-screen">
            <Header /> {/* Includes the golden color fix */}
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />

        {/* </ProductProvider> */}
      </body>
    </html>
  );
}
