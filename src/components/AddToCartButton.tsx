"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full lg:w-auto bg-primary-color text-white py-3 px-8 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-secondary-color focus:ring-4 focus:ring-secondary-color focus:ring-offset-2 shadow-lg hover:shadow-xl"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
