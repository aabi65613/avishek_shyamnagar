// src/data/products.ts
import { Product } from "@/types/product";

// Demo product data - easy to edit
// To update products: change imageUrl, title, price, and description for each item.
// Ensure imageUrl points to a valid image path in the /public folder (e.g., '/products/skincare1.jpg').

export const demoProducts: Product[] = [
  // Skincare Category
  {
    id: 1,
    category: "Skincare",
    title: "Hydrating Face Cream",
    price: 25.99,
    description: "A light, non-greasy cream for daily hydration.",
    imageUrl: "/products/skincare1.jpg", // Placeholder - image needed
  },
  {
    id: 2,
    category: "Skincare",
    title: "Vitamin C Serum",
    price: 34.50,
    description: "Brightens skin and reduces dark spots.",
    imageUrl: "/products/skincare2.jpg", // Placeholder - image needed
  },
  // Books Category
  {
    id: 3,
    category: "Books",
    title: "The Midnight Library",
    price: 15.00,
    description: "A novel about choices, regrets, and finding hope.",
    imageUrl: "/products/book1.jpg", // Placeholder - image needed
  },
  {
    id: 4,
    category: "Books",
    title: "Atomic Habits",
    price: 18.75,
    description: "Build good habits and break bad ones.",
    imageUrl: "/products/book2.jpg", // Placeholder - image needed
  },
  // Instruments Category
  {
    id: 5,
    category: "Instruments",
    title: "Acoustic Guitar",
    price: 199.99,
    description: "Beginner-friendly acoustic guitar with warm tone.",
    imageUrl: "/products/instrument1.jpg", // Placeholder - image needed
  },
  {
    id: 6,
    category: "Instruments",
    title: "Ukulele Starter Kit",
    price: 59.95,
    description: "Includes ukulele, tuner, bag, and picks.",
    imageUrl: "/products/instrument2.jpg", // Placeholder - image needed
  },
  // Gifts Category
  {
    id: 7,
    category: "Gifts",
    title: "Scented Candle Set",
    price: 29.99,
    description: "Set of 3 relaxing aromatherapy candles.",
    imageUrl: "/products/gift1.jpg", // Placeholder - image needed
  },
  {
    id: 8,
    category: "Gifts",
    title: "Personalized Mug",
    price: 12.50,
    description: "Customizable mug, perfect for any occasion.",
    imageUrl: "/products/gift2.jpg", // Placeholder - image needed
  },
  // Experimental Items Category
  {
    id: 9,
    category: "Experimental Items",
    title: "DIY Terrarium Kit",
    price: 45.00,
    description: "Create your own mini ecosystem.",
    imageUrl: "/products/exp1.jpg", // Placeholder - image needed
  },
  {
    id: 10,
    category: "Experimental Items",
    title: "Levitating Plant Pot",
    price: 89.99,
    description: "A unique pot that floats using magnetic levitation.",
    imageUrl: "/products/exp2.jpg", // Placeholder - image needed
  },
  {
    id: 11,
    category: "Books",
    title: "Project Hail Mary",
    price: 16.50,
    description: "An astronaut must save Earth from disaster.",
    imageUrl: "/products/book3.jpg", // Placeholder - image needed
  },
    {
    id: 12,
    category: "Skincare",
    title: "Gentle Face Cleanser",
    price: 19.99,
    description: "Removes impurities without drying the skin.",
    imageUrl: "/products/skincare3.jpg", // Placeholder - image needed
  },
];

// Function to get all unique categories from the products
export const getCategories = (): string[] => {
  const categories = demoProducts.map(product => product.category);
  return [...new Set(categories)]; // Return unique category names
};

