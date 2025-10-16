// src/app/page.tsx - FINAL CLEAN CODE WITH REAL IMAGE PATHS

import Link from 'next/link';
import ProductCard from "@/components/ProductCard";

// NOTE: You may need to adjust the path to your Product type
interface Product {
    id: string;
    title: string;
    imageUrl: string;
    category: string;
    price: number;
}

// --- RESTORED PRODUCT DATA WITH YOUR IMAGE FILENAMES ---
// Assuming these images are placed in your public folder (e.g., /public/1000488519.jpg)
const DUMMY_PRODUCTS: Product[] = [
    // RESTORED IMAGE PATHS:
    { id: '1', title: 'The Great Novel', imageUrl: '/1000488519.jpg', category: 'Fiction', price: 799.00 },
    { id: '2', title: 'Coding Handbook', imageUrl: '/1000488528.jpg', category: 'Technology', price: 1250.50 },
    { id: '3', title: 'Design Principles', imageUrl: '/1000488658.jpg', category: 'Art', price: 950.00 },
    { id: '4', title: 'World Atlas 2024', imageUrl: '/1000490657.jpg', category: 'Education', price: 1500.00 },
    { id: '5', title: 'Cooking Guide', imageUrl: '/1000491005.jpg', category: 'Lifestyle', price: 450.00 },
    
    // Additional placeholders to fill the grid:
    { id: '6', title: 'Science Fact Book', imageUrl: '/placeholder-science.jpg', category: 'Science', price: 800.00 },
    { id: '7', title: 'Travel Journal', imageUrl: '/placeholder-travel.jpg', category: 'Lifestyle', price: 550.00 },
    { id: '8', title: 'Math Problems', imageUrl: '/placeholder-math.jpg', category: 'Education', price: 600.00 },
];
// ----------------------------------------------------------------------


export default function Home() {
    const featuredProducts = DUMMY_PRODUCTS.slice(0, 8); 

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
                
                {/* FIX: Removed index={index} and confirmed map iteration is clean */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {featuredProducts.map((product) => ( 
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
