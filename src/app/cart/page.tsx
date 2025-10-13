// src/app/cart/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, XCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
// import { motion, AnimatePresence } from 'framer-motion'; // <-- COMMENTED OUT: Build Fix

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 5.0 : 0.0;
  const total = subtotal + shipping;

  // No motion or variants needed for now
  // const itemVariants = {
  //   hidden: { opacity: 0, x: -50 },
  //   visible: { opacity: 1, x: 0 },
  //   exit: { opacity: 0, x: 50, transition: { duration: 0.2 } },
  // };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center min-h-[60vh]">
        <XCircle size={64} className="text-secondary-color mb-4" />
        <h1 className="text-3xl font-bold text-primary-color mb-3">Your Cart is Empty</h1>
        <p className="text-lg text-gray-600 mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
        <Link 
          href="/" 
          className="bg-secondary-color text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-primary-color mb-8 border-b-2 border-secondary-color pb-2">
        Your Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Cart Items List - Takes up the main space */}
        <div className="lg:w-3/5 space-y-6">
          <div className="flex justify-between items-center pb-2 border-b">
            <h2 className="text-xl font-semibold text-text-color">Items ({cartItems.length})</h2>
            <button 
              onClick={clearCart} 
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
              <Trash2 size={16} />
              <span>Clear Cart</span>
            </button>
          </div>

          {/* Replaced <AnimatePresence> with JSX comment */}
          {/* <AnimatePresence initial={false}> */}
            {cartItems.map((item) => (
              // Replaced <motion.div> with standard <div>
              <div 
                key={item.id} 
                // variants={itemVariants} 
                // initial="hidden" 
                // animate="visible" 
                // exit="exit"
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                {/* Image */}
                <div className="relative w-20 h-20 flex-shrink-0 mr-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                    sizes="80px"
                    onError={(e) => { e.currentTarget.src = "/placeholder-product.png"; }}
                  />
                </div>
                
                {/* Details */}
                <div className="flex-grow">
                  <Link href={`/products/${item.id}`} className="text-lg font-semibold text-text-color hover:text-primary-color transition-colors truncate block">
                    {item.title}
                  </Link>
                  <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 mx-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium text-text-color">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary-color text-white hover:bg-primary-color transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Price & Remove */}
                <div className="flex flex-col items-end min-w-[100px]">
                  <span className="text-lg font-bold text-primary-color mb-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-gray-500 hover:text-red-600 transition-colors flex items-center space-x-1"
                  >
                    <Trash
