// src/data/products.ts
import { Product } from "@/types/product";

// Demo product data - easy to edit
// To update products: change imageUrl, title, price, and description for each item.
// Ensure imageUrl points to a valid image path in the /public folder (e.g., '/products/skincare1.jpg').

export const demoProducts: Product[] = [
  // Product 1: Brush (using image 1)
  {
    id: 1,
    category: "Brushes & Tools", // Cleaned up category
    title: "Extremely Soft Brush",
    price: 35.00,
    description: "Brushes that reach every corner of your teeth.",
    imageUrl: "/1000486451.jpg", // <--- UPDATED to your image
  },
  // Product 2: Pen (using image 2)
  {
    id: 2,
    category: "Stationery & Books", // Cleaned up category
    title: "Red Smooth-Flow Pen",
    price: 10.00,
    description: "Extra smooth flow.",
    imageUrl: "/1000486450.jpg", // <--- UPDATED to your image
  },
  // Product 3: Water Color (using image 3)
  {
    id: 3,
    category: "Art Supplies", // Cleaned up category
    title: "Premium Water Color Set",
    price: 50.00,
    description: "Premium quality set at a heavy discount.",
    imageUrl: "/1000486455.jpg", // <--- UPDATED to your image
  },
  // Product 4: Black Shirt (using image 4)
  {
    id: 4,
    category: "Apparel", // Cleaned up category
    title: "Black Comfort Shirt",
    price: 518.75,
    description: "Super comfortable shirt.",
    imageUrl: "/1000486453.jpg", // <--- UPDATED to your image
  },
  // Product 5: Glue (using image 5)
  {
    id: 5,
    category: "Hobby & Craft", // Cleaned up category
    title: "3D Printed Glue (Fevicryl)",
    price: 99.00,
    description: "Beginner friendly design helper.",
    imageUrl: "/1000486581.jpg", // <--- UPDATED to your newest image
  },
  // Product 6: Deep Black Shirt (Placeholder image)
  {
    id: 6,
    category: "Apparel", // Consistent category
    title: "Deep Black T-Shirt",
    price: 559.95,
    description: "Comfortable.",
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
