// src/app/cart/page.tsx
"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart, getItemCount } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [homeDelivery, setHomeDelivery] = useState(true); // Default to Home Delivery

  const handlePlaceOrder = () => {
    // Simulate placing order (no actual backend integration)
    console.log("Order placed with Pay on Delivery. Delivery Method:", homeDelivery ? "Home Delivery" : "Store Pickup");
    // You could potentially send this data somewhere or just show a confirmation
    setOrderPlaced(true);
    clearCart(); // Clear the cart after placing the order
  };

  // If order is placed, show confirmation message
  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-700 mb-6">Thank you for your purchase. Your order will be processed shortly.</p>
        <p className="text-md text-gray-600 mb-8">Payment Method: Pay on Delivery</p>
        <p className="text-md text-gray-600 mb-8">Delivery Method: {homeDelivery ? "Home Delivery" : "Store Pickup"}</p>
        <Link href="/" className="bg-primary-color text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  // If cart is empty, show message
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
        <p className="text-lg text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link href="/" className="bg-primary-color text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  // Display cart items and summary
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="lg:w-2/3">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border rounded-lg p-4 shadow-sm bg-white">
                <div className="relative w-20 h-20 mr-4 flex-shrink-0">
                  <Image
                    src={item.imageUrl || 
'/placeholder-product.png'}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    onError={(e) => { e.currentTarget.src = 
'/placeholder-product.png'; }}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-red-600 p-1 border rounded-l"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-3 py-1 border-t border-b">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-green-600 p-1 border rounded-r"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-600 ml-4"
                  aria-label="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary & Checkout */}
        <div className="lg:w-1/3">
          <div className="border rounded-lg p-6 shadow-sm bg-white sticky top-24">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Order Summary</h2>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Subtotal ({getItemCount()} items)</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-600">
              <span>Shipping</span>
              <span>Free</span> {/* Assuming free shipping for now */}
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-800 mb-6 pt-2 border-t">
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>

            {/* Delivery Option */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Option</label>
              <select
                value={homeDelivery ? 'home' : 'pickup'}
                onChange={(e) => setHomeDelivery(e.target.value === 'home')}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-color focus:border-primary-color"
              >
                <option value="home">Home Delivery</option>
                {/* <option value="pickup">Store Pickup</option> */}
                 {/* Only Home Delivery option as requested? If Store Pickup needed, uncomment above */}
              </select>
            </div>

            {/* Pay on Delivery Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-semibold"
            >
              Place Order (Pay on Delivery)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

