// src/app/page.tsx - FINAL CLEAN CODE

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

// --- Placeholder Data (Replace with your actual data fetching logic) ---
// This ensures the page compiles without external API calls
const DUMMY_PRODUCTS: Product[] = [
    { id: '1', title: 'The Great Novel', imageUrl: '/placeholder-novel.jpg', category: 'Fiction', price: 799.00 },
    { id: '2', title: 'Coding Handbook', imageUrl: '/placeholder-code.jpg', category: 'Technology', price: 1250.50 },
    { id: '3', title: 'Design Principles', imageUrl: '/placeholder-design.jpg', category: 'Art', price: 950.00 },
    { id: '4', title: 'World Atlas 2024', imageUrl: '/placeholder-map.jpg', category: 'Education', price: 1500.00 },
    { id: '5', title: 'Cooking Guide', imageUrl: '/placeholder-food.jpg', category: 'Lifestyle', price: 450.00 },
    { id: '6', title: 'Science Fact Book', imageUrl: '/placeholder-science.jpg', category: 'Science', price: 800.00 },
];
// ----------------------------------------------------------------------


export default function Home() {
    const featuredProducts = DUMMY_PRODUCTS.slice(0, 8); // Display first 8 (if available)

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
                
                {/* CRITICAL FIX: Removed index={index} from ProductCard */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {featuredProducts.map((product) => ( // Removed 'index' from map arguments
                        <ProductCard key={product.id} product={product} /> // Removed index={index}
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <Link href="/products" className="bg-secondary-color text-deep-navy font-semibold py-3 px-8 rounded-full hover:bg-secondary-color/80 transition-colors">
                        View All Products
                    </Link>
                </div>
            </section>

            {/* You can add more sections here */}

        </main>
    );
}
