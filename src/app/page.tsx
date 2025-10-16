// src/app/page.tsx - FINAL CLEAN CODE, INTEGRATING PRODUCTS.TS

import Link from 'next/link';
import ProductCard from "@/components/ProductCard";
// 1. IMPORT THE CORRECT PRODUCT DATA
import { demoProducts } from "@/data/products";

// NOTE: You may need to adjust the path to your Product type if it's not globally available,
// but for now, we'll assume it's imported correctly in the files that need it.
interface Product {
    id: string | number; // Updated to allow number based on your data
    title: string;
    imageUrl: string;
    category: string;
    price: number;
}


export default function Home() {
    // 2. USE THE CORRECT PRODUCT DATA SOURCE
    const featuredProducts: Product[] = demoProducts.slice(0, 8) as Product[]; 

    return (
        <main className="min-h-screen">
            
            {/* Hero Section Placeholder */}
            <section className="bg-primary-color text-white py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                    Discover Books, Tools, and Gifts
                </h1>
                <p className="text-xl opacity-80">Discount beyond your expectations.</p>
            </section>

            {/* Featured Products Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-text-color mb-10">
                    Featured Products
                </h2>
                
                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {featuredProducts.map((product) => ( 
                        // Using the cleaned-up ProductCard component
                        <ProductCard key={product.id} product={product} /> 
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <Link href="/products" className="bg-secondary-color text-deep-navy font-semibold py-3 px-8 rounded-full hover:bg-secondary-color/80 transition-colors">
                        View All Products
                    </Link>
                </div>
            </section>

        </main>
    );
}
