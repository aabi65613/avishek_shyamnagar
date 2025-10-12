// src/components/ProductCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion'; // <-- FRAMER MOTION FOR PREMIUM ANIMATION

interface ProductCardProps {
  product: Product;
  // Index is needed to make the cards appear one after another (staggered effect)
  index: number; 
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();

  // --- PREMIUM ANIMATION LOGIC ---
  const motionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        delay: index * 0.05, // Staggered delay for a smooth wave effect
      } 
    },
    hover: { 
      scale: 1.05, // Subtle scale up on hover
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)", // Shadow for depth
      transition: { duration: 0.2 } 
    }
  };
  // -------------------------------

  return (
    <motion.div
      variants={motionVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      // Applied new primary/secondary colors
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 border border-gray-100"
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
          ${product.price.toFixed(2)}
        </div>

        {/* Add to Cart Button (Animated) */}
        <motion.button
          onClick={() => addToCart(product)}
          // Motion to make the button feel responsive
          whileTap={{ scale: 0.95 }}
          className="w-full bg-primary-color text-white py-2 rounded-lg font-medium transition-all duration-200 hover:bg-secondary-color focus:ring-2 focus:ring-secondary-color focus:ring-offset-2"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
