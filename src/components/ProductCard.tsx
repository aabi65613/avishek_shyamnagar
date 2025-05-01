// src/components/ProductCard.tsx
"use client"; // Required for onClick handler and useCart hook

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext'; // Import the useCart hook

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Get the addToCart function from context

  const imagePath = product.imageUrl || '/placeholder-product.png';

  // Use the addToCart function from the context
  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Add visual feedback like a toast notification
    console.log(`Added ${product.title} to cart.`);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col h-full">
      {/* Product Image Container */}
      <div className="relative w-full h-48 md:h-60 bg-gray-200">
        <Image
          src={imagePath}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
          onError={(e) => { e.currentTarget.src = '/placeholder-product.png'; }}
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1 truncate" title={product.title}>{product.title}</h3>
        <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
        <p className="text-xs text-gray-600 mb-3 flex-grow min-h-[40px]">{product.description}</p>

        {/* Price and Add to Cart Button */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-xl font-bold text-primary-color">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart} // Use the handler connected to the context
            className="bg-secondary-color text-white px-3 py-1 rounded-full hover:bg-opacity-90 transition-colors duration-200 flex items-center space-x-1 text-sm"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

