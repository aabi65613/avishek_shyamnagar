// src/data/products.ts
import { Product } from "@/types/product";

// Demo product data - easy to edit
// To update products: change imageUrl, title, price, and description for each item.
// Ensure imageUrl points to a valid image path in the /public folder (e.g., '/products/skincare1.jpg').

export const demoProducts: Product[] = [
  // Skincare Category
  {
    id: 1,
    category: "avishek demo website..a brush",
    title: "extremely soft brush",
    price: 25.00,
    description: " brushes that reach every corner of your teeth .",
    imageUrl: "/products/skincare1.jpg", // Placeholder - image needed
  },
  {
    id: 2,
    category: " books store so a pen ",
    title: "red pen",
    price: 10.00,
    description: " extra smooth flow.",
    imageUrl: "/products/skincare2.jpg", // Placeholder - image needed
  },
  // Books Category
  {
    id: 3,
    category: "water colour artists ",
    title: "water color ",
    price: 50.00,
    description: " premium quality at heavy discount.",
    imageUrl: "/products/book1.jpg", // Placeholder - image needed
  },
  {
    id: 4,
    category: "shirt",
    title: "black shrt",
    price: 518.75,
    description: "super comfortable shirt",
    imageUrl: "/products/book2.jpg", // Placeholder - image needed
  },
  // Instruments Category
  {
    id: 5,
    category: "fericryl",
    title: "3d printed glue",
    price: 99.00,
    description: "Beginner friendly design helper",
    imageUrl: "/products/instrument1.jpg", // Placeholder - image needed
  },
  {
    id: 6,
    category: "shirt",
    title: " deep black shirt",
    price: 559.95,
    description: "comfortable",
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

