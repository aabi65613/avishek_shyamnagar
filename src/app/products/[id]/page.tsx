import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { demoProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';

// Currency formatter
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  // This is a client component because of useCart, but we can't use useCart here
  // because we need to fetch data on the server.
  // For simplicity, I will assume the component is a client component for now,
  // but in a real app, data fetching should be server-side.
  // Since the product data is a local array, we can treat it as a server component
  // and pass the product to a client component for the Add to Cart button.

  const productId = parseInt(params.id);
  const product = demoProducts.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-[80vh]">
      <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-xl shadow-lg">
        {/* Product Image */}
        <div className="lg:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-md">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-opacity duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 flex flex-col">
          <p className="text-sm font-medium text-secondary-color uppercase tracking-wider mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold text-text-color mb-4">
            {product.title}
          </h1>
          
          <div className="text-4xl font-extrabold text-primary-color mb-6">
            {formatCurrency(product.price)}
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Add to Cart Component (Client Component) */}
          <AddToCartButton product={product} />

          <div className="mt-8 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-text-color mb-3">Product Information</h2>
            <ul className="text-gray-600 space-y-2">
              <li><span className="font-semibold">Product ID:</span> {product.id}</li>
              <li><span className="font-semibold">Category:</span> {product.category}</li>
              {/* Add more details if available in the Product type */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import AddToCartButton from '@/components/AddToCartButton';
