// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "sonner"; // <--- ADDED IMPORT FOR TOASTER

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Books.shyamnagar - Discount beyond your expectations",
  description: "E-commerce store for Skincare, Books, Instruments, Gifts, and Experimental Items.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Added class names here for text/background colors from globals.css */}
      <body className={`${poppins.className} flex flex-col min-h-screen bg-white text-text-color`}>
        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          {/* TOASTER for smooth, premium notifications, using the Gold (secondary) color */}
          <Toaster richColors position="top-right" /> 
        </CartProvider>
      </body>
    </html>
  );
}
