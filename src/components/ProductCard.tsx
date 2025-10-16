// src/components/ProductCard.tsx - FINAL CLEANUP (Framer Motion Removed)

"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

// NOTE: The 'framer-motion' import was removed here.

interface ProductCardProps {
  product: Product;
  // Index is no longer needed as the staggered effect is removed
  index: number; 
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();

  // --- PREMIUM ANIMATION LOGIC REMOVED ---
  // The 'motionVariants' object was removed here.
  // ----------------------------------------

  return (
    // Replaced <motion.div> with standard <div> and removed all animation props
    <div
      // Kept staggered effect logic for index in case it's used elsewhere, but not needed here.
      // Removed variants={motionVariants}, initial="hidden", animate="visible", whileHover="hover"
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 border border-gray-100 hover:shadow-xl transform hover:scale-[1.03]"
    >
      <Link href={`/products/${product.id}`} className="relative block h-56 w-full">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-opacity duration-500 hover:opacity-90"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          onError={(e) => {
             // Fallback for missing images
             e.currentTarget.src = "/placeholder-product.png";
             e.currentTarget.style.objectFit = 'contain';
          }}
        />
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        {/* Title and Category using brand colors */}
        <p className="text-xs font-medium text-secondary-color uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="text-lg font-semibold text-text-color mb-2 truncate">
          <Link href={`/products/${product.id}`} className="hover:text-primary-color transition-colors">
            {product.title}
          </Link>
        </h3>

        {/* Price using primary color */}
        <div className="text-xl font-bold text-primary-color mb-3 mt-auto">
          ₹{product.price.toFixed(2)}
        </div>

        {/* Add to Cart Button (Standard) */}
        {/* Replaced <motion.button> with standard <button> and removed whileTap */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-primary-color text-white py-2 rounded-lg font-medium transition-all duration-200 hover:bg-secondary-color focus:ring-2 focus:ring-secondary-color focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
