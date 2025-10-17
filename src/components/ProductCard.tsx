// File: src/components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products'; // Use the Product type definition
import { Button } from "@/components/ui/button"; // Assuming you use shadcn/ui button

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-800 mt-1 truncate">
          {product.name}
        </h3>
        <p className="mt-2 text-xl font-bold text-gray-900 flex-grow">
          ₹{product.price.toFixed(2)}
        </p>
        <Button variant="outline" className="mt-4 w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
