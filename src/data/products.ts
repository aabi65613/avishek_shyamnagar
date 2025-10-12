// src/data/products.ts
import { Product } from "@/types/product";

// Demo product data - easy to edit
// IMPORTANT: Image names must EXACTLY match the file names in the /public folder.

export const demoProducts: Product[] = [
  // Product 1: Brush 
  {
    id: 1,
    category: "avishek demo website..a brush",
    title: "extremely soft brush",
    price: 25.00,
    description: " brushes that reach every corner of your teeth .",
    imageUrl: "/IMG_20251011_221013_733.jpg", 
  },
  // Product 2: Pen
  {
    id: 2,
    category: " books store so a pen ",
    title: "red pen",
    price: 10.00,
    description: " extra smooth flow.",
    imageUrl: "/IMG_20251011_221616_284.jpg", 
  },
  // Product 3: Water Color
  {
    id: 3,
    category: "water colour artists ",
    title: "water color ",
    price: 50.00,
    description: " premium quality at heavy discount.",
    imageUrl: "/IMG_20251011_221652_317.jpg", 
  },
  // Product 4: Black Shirt
  {
    id: 4,
    category: "shirt",
    title: "black shrt",
    price: 518.75,
    description: "super comfortable shirt",
    imageUrl: "/IMG_20251011_221710_762.jpg", 
  },
  // Product 5: Glue
  {
    id: 5,
    category: "fericryl",
    title: "3d printed glue",
    price: 99.00,
    description: "Beginner friendly design helper",
    imageUrl: "/IMG_20251011_221826_587.jpg", 
  },
  // Product 6: Deep Black Shirt
  {
    id: 6,
    category: "shirt",
    title: " deep black shirt",
    price: 559.95,
    description: "comfortable",
    imageUrl: "/IMG_20251011_221833_765.jpg", 
  },
  // Product 7: Candle Set (using the last long-number name)
  {
    id: 7,
    category: "Gifts",
    title: "Scented Candle Set",
    price: 29.99,
    description: "Set of 3 relaxing aromatherapy candles.",
    imageUrl: "/1000486851.jpg", 
  },
  // Remaining Products (Placeholders)
  {
    id: 8,
    category: "Gifts",
    title: "Personalized Mug",
    price: 12.50,
    description: "Customizable mug, perfect for any occasion.",
    imageUrl: "/products/gift2.jpg", 
  },
  // ... (rest of the products remain the same)
  {
    id: 9,
    category: "Experimental Items",
    title: "DIY Terrarium Kit",
    price: 45.00,
    description: "Create your own mini ecosystem.",
    imageUrl: "/products/exp1.jpg", 
  },
  {
    id: 10,
    category: "Experimental Items",
    title: "Levitating Plant Pot",
    price: 89.99,
    description: "A unique pot that floats using magnetic levitation.",
    imageUrl: "/products/exp2.jpg", 
  },
  {
    id: 11,
    category: "Books",
    title: "Project Hail Mary",
    price: 16.50,
    description: "An astronaut must save Earth from disaster.",
    imageUrl: "/products/book3.jpg", 
  },
  {
    id: 12,
    category: "Skincare",
    title: "Gentle Face Cleanser",
    price: 19.99,
    description: "Removes impurities without drying the skin.",
    imageUrl: "/products/skincare3.jpg", 
  },
];

// Function to get all unique categories from the products
export const getCategories = (): string[] => {
  const categories = demoProducts.map(product => product.category);
  return [...new Set(categories)]; // Return unique category names
};
