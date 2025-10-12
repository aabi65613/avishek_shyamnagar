// src/data/products.ts
import { Product } from "@/types/product";

// IMPORTANT: Image names must EXACTLY match the file names in the /public folder.

export const demoProducts: Product[] = [
  // Product 1: Brush 
  {
    id: 1,
    category: "Brushes & Tools", 
    title: "Extremely Soft Brush",
    price: 25.00,
    description: "Brushes that reach every corner of your teeth.",
    imageUrl: "/IMG_20251011_221013_733.jpg", 
  },
  // Product 2: Pen
  {
    id: 2,
    category: "Stationery",
    title: "Red Pen",
    price: 10.00,
    description: "Extra smooth flow.",
    imageUrl: "/IMG_20251011_221616_284.jpg", 
  },
  // Product 3: Water Color
  {
    id: 3,
    category: "Art Supplies", 
    title: "Water Color Set",
    price: 50.00,
    description: "Premium quality set at a heavy discount.",
    imageUrl: "/IMG_20251011_221652_317.jpg", 
  },
  // Product 4: Black Shirt
  {
    id: 4,
    category: "Apparel", 
    title: "Black Comfort Shirt",
    price: 518.75,
    description: "Super comfortable shirt",
    imageUrl: "/IMG_20251011_221710_762.jpg", 
  },
  // Product 5: Glue
  {
    id: 5,
    category: "Hobby & Craft", 
    title: "3D Printed Glue",
    price: 99.00,
    description: "Beginner friendly design helper",
    imageUrl: "/IMG_20251011_221826_587.jpg", 
  },
  // Product 6: Deep Black Shirt
  {
    id: 6,
    category: "Apparel", 
    title: "Deep Black T-Shirt",
    price: 559.95,
    description: "Comfortable",
    imageUrl: "/IMG_20251011_221833_765.jpg", 
  },
  // Product 7: Candle Set (using original uploaded name)
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
