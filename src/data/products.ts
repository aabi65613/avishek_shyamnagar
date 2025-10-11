// src/data/products.ts
import { Product } from "@/types/product";

// Demo product data - easy to edit
// To update products: change imageUrl, title, price, and description for each item.
// Ensure imageUrl points to a valid image path in the /public folder.

export const demoProducts: Product[] = [
  // Product 1: Brush (using image 1)
  {
    id: 1,
    category: "Brushes & Tools", 
    title: "Extremely Soft Brush",
    price: 25.00,
    description: "Brushes that reach every corner of your teeth.",
    imageUrl: "/1000486451.jpg", // <--- CORRECTED: Removed /products/
  },
  // Product 2: Pen (using image 2)
  {
    id: 2,
    category: "Stationery & Books", 
    title: "Red Smooth-Flow Pen",
    price: 10.00,
    description: "Extra smooth flow.",
    imageUrl: "/1000486450.jpg", // <--- CORRECTED: Removed /products/
  },
  // Product 3: Water Color (using image 3)
  {
    id: 3,
    category: "Art Supplies", 
    title: "Premium Water Color Set",
    price: 50.00,
    description: "Premium quality set at a heavy discount.",
    imageUrl: "/1000486455.jpg", // <--- CORRECTED: Removed /products/
  },
  // Product 4: Black Shirt (using image 4)
  {
    id: 4,
    category: "Apparel", 
    title: "Black Comfort Shirt",
    price: 518.75,
    description: "Super comfortable shirt",
    imageUrl: "/1000486453.jpg", // <--- CORRECTED: Removed /products/
  },
  // Product 5: Glue (using image 5)
  {
    id: 5,
    category: "Hobby & Craft", 
    title: "3D Printed Glue (Fevicryl)",
    price: 99.00,
    description: "Beginner friendly design helper",
    imageUrl: "/1000486581.jpg", // <--- CORRECTED: Removed /products/
  },
  // Product 6: Deep Black Shirt (using original placeholder path, assuming you don't have this image yet)
  {
    id: 6,
    category: "Apparel", 
    title: "Deep Black T-Shirt",
    price: 559.95,
    description: "Comfortable",
    imageUrl: "/products/instrument2.jpg", // Original path kept for placeholders
  },
  // Gifts Category
  {
    id: 7,
    category: "Gifts",
    title: "Scented Candle Set",
    price: 29.99,
    description: "Set of 3 relaxing aromatherapy candles.",
    imageUrl: "/products/gift1.jpg", // Original path kept for placeholders
  },
  // Gifts Category
  {
    id: 8,
    category: "Gifts",
    title: "Personalized Mug",
    price: 12.50,
    description: "Customizable mug, perfect for any occasion.",
    imageUrl: "/products/gift2.jpg", // Original path kept for placeholders
  },
  // Experimental Items Category
  {
    id: 9,
    category: "Experimental Items",
    title: "DIY Terrarium Kit",
    price: 45.00,
    description: "Create your own mini ecosystem.",
    imageUrl: "/products/exp1.jpg", // Original path kept for placeholders
  },
  {
    id: 10,
    category: "Experimental Items",
    title: "Levitating Plant Pot",
    price: 89.99,
    description: "A unique pot that floats using magnetic levitation.",
    imageUrl: "/products/exp2.jpg", // Original path kept for placeholders
  },
  {
    id: 11,
    category: "Books",
    title: "Project Hail Mary",
    price: 16.50,
    description: "An astronaut must save Earth from disaster.",
    imageUrl: "/products/book3.jpg", // Original path kept for placeholders
  },
  {
    id: 12,
    category: "Skincare",
    title: "Gentle Face Cleanser",
    price: 19.99,
    description: "Removes impurities without drying the skin.",
    imageUrl: "/products/skincare3.jpg", // Original path kept for placeholders
  },
];

// Function to get all unique categories from the products
export const getCategories = (): string[] => {
  const categories = demoProducts.map(product => product.category);
  return [...new Set(categories)]; // Return unique category names
};
