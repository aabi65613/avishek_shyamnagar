// src/context/CartContext.tsx - FINAL BUILD FIX
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types/product'; 

// Define the shape of an item in the cart
export interface CartItem extends Product {
  quantity: number;
}

// Define the shape of the Cart Context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from local storage on initial load
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(currentItems => {
      const itemExists = currentItems.find(item => item.id === product.id);

      if (itemExists) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...currentItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(currentItems => {
      // Removed the unused variable assignment: const _itemToRemove = ...
      return currentItems.filter(item => item.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems(currentItems => {
      return currentItems
        .map(item =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        )
        // Optionally, remove if quantity is zero, though we limit it to 1 above
        .filter(item => item.quantity > 0);
    });
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
