import React from 'react';
import Link from 'next/link';
import { BookOpen, Gift, ShoppingBag } from 'lucide-react';

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    category: 'FICTION',
    title: 'The Great Adventures of...',
    price: 799.00,
    imageUrl: 'https://placehold.co/400x550/0f172a/9ca3af?text=Adventure',
  },
  {
    id: 2,
    category: 'TECHNOLOGY',
    title: 'Coding Handbook for...',
    price: 1250.50,
    imageUrl: 'https://placehold.co/400x550/0f172a/9ca3af?text=Code+Guide',
  },
  {
    id: 3,
    category: 'LIFESTYLE',
    title: 'The Secret to Simple Living',
    price: 550.00,
    imageUrl: 'https://placehold.co/400x550/0f172a/9ca3af?text=Lifestyle',
  },
  {
    id: 4,
    category: 'EDUCATION',
    title: 'Math Problems Solved',
    price: 600.00,
    imageUrl: 'https://placehold.co/400x550/0f172a/9ca3af?text=Math',
  },
];

// Mock data for categories
const categories = [
  { name: 'Books', icon: BookOpen, description: 'Fiction, non-fiction, and academic texts.' },
  { name: 'Gifts', icon: Gift, description: 'Scented candles, personalized items, and more.' },
  { name: 'Bags', icon: ShoppingBag, description: 'Totes and custom bags for book lovers.' },
];

const ProductCard = ({ product }: { product: typeof featuredProducts[0] }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
    <div className="p-4 flex flex-col justify-between h-full">
      <div className="text-left">
        <span className="text-xs font-semibold uppercase text-secondary-color tracking-wider">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-deep-navy mt-1 truncate">
          {product.title}
        </h3>
      </div>
      
      {/* Placeholder image representation */}
      <div className="my-3 flex items-center justify-center h-40 bg-gray-50 rounded-lg">
          <p className="text-gray-400 text-sm">Image Placeholder</p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xl font-extrabold text-primary-color">
          ₹{product.price.toFixed(2)}
        </span>
        <button
          // Note: This button does not use "addToCart" logic, ensuring a safe build.
          className="bg-deep-navy text-white px-4 py-2 rounded-lg font-medium hover:bg-deep-navy/90 transition-colors shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-color/90 to-deep-navy text-white text-center py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to Books Shyamnagar
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Your trusted source for quality products. Delivering satisfaction with every order.
          </p>
          <Link 
            href="/products"
            className="inline-block px-8 py-3 bg-secondary-color text-deep-navy font-bold rounded-full text-lg shadow-2xl transition-transform transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary-color mb-8 text-center">
          Featured Products
        </h2>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block px-10 py-3 bg-secondary-color text-deep-navy font-bold rounded-xl text-lg shadow-lg hover:bg-secondary-color/90 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary-color mb-10 text-center">
            Explore Our Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-primary-color transition-shadow hover:shadow-xl">
                <category.icon className="w-8 h-8 text-primary-color mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-deep-navy mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
