// src/data/products.ts
import { Product } from "@/types/product";

// Demo product data - easy to edit
// IMPORTANT: All image paths now assume the file is directly in the /public folder (e.g., /1000486851.jpg).

export const demoProducts: Product[] = [
  // Product 1: Brush (using IMG_20251011_221013_733.jpg)
  {
    id: 1,
    category: "Brushes & Tools",
    title: "Extremely Soft Brush",
    price: 25.00,
    description: "Brushes that reach every corner of your teeth.",
    imageUrl: "/IMG_20251011_221013_733.jpg", 
  },
  // Product 2: Pen (using IMG_20251011_221616_284.jpg)
  {
    id: 2,
    category: "Stationery",
    title: "Red Pen",
    price: 10.00,
    description: "Extra smooth flow.",
    imageUrl: "/IMG_20251011_221616_284.jpg", 
  },
  // Product 3: Water Color (using IMG_20251011_221652_317.jpg)
  {
    id: 3,
    category: "Art Supplies",
    title: "Water Color Set",
    price: 50.00,
    description: "Premium quality set at a heavy discount.",
    imageUrl: "/IMG_20251011_221652_317.jpg", 
  },
  // Product 4: Black Shirt (using IMG_20251011_221710_762.jpg)
  {
    id: 4,
    category: "Apparel",
    title: "Black Comfort Shirt",
    price: 518.75,
    description: "Super comfortable shirt",
    imageUrl: "/IMG_20251011_221710_762.jpg", 
  },
  // Product 5: Glue (using IMG_20251011_221826_587.jpg)
  {
    id: 5,
    category: "Hobby & Craft",
    title: "3D Printed Glue",
    price: 99.00,
    description: "Beginner friendly design helper",
    imageUrl: "/IMG_20251011_221826_587.jpg", 
  },
  // Product 6: Deep Black Shirt (using IMG_20251011_221833_765.jpg)
  {
    id: 6,
    category: "Apparel",
    title: "Deep Black T-Shirt",
    price: 559.95,
    description: "Comfortable",
    imageUrl: "/IMG_20251011_221833_765.jpg", 
  },
  // Product 7: Candle Set (using original uploaded name 1000486851.jpg)
  {
    id: 7,
    category: "Gifts",
    title: "Scented Candle Set",
    price: 29.99,
    description: "Set of 3 relaxing aromatherapy candles.",
    imageUrl: "/1000486851.jpg", 
  },
  // Product 8: Using uploaded image 1000486856.jpg
  {
    id: 8,
    category: "Gifts",
    title: "Personalized Mug",
    price: 12.50,
    description: "Customizable mug, perfect for any occasion.",
    imageUrl: "/1000486856.jpg", 
  },
  // Product 9: Using uploaded image 1000486857.jpg
  {
    id: 9,
    category: "Experimental Items",
    title: "DIY Terrarium Kit",
    price: 45.00,
    description: "Create your own mini ecosystem.",
    imageUrl: "/1000486857.jpg", 
  },
  // Product 10: Using uploaded image 1000486858.jpg
  {
    id: 10,
    category: "Experimental Items",
    title: "Levitating Plant Pot",
    price: 89.99,
    description: "A unique pot that floats using magnetic levitation.",
    imageUrl: "/1000486858.jpg", 
  },
  // Product 11: Using uploaded image 1000486850.jpg
  {
    id: 11,
    category: "Books",
    title: "The Midnight Library",
    price: 16.50,
    description: "A novel about choices, regrets, and finding hope.",
    imageUrl: "/1000486850.jpg", 
  },
  // Product 12: Using uploaded image 1000486455.jpg
  {
    id: 12,
    category: "Skincare",
    title: "Gentle Face Cleanser",
    price: 19.99,
    description: "Removes impurities without drying the skin.",
    imageUrl: "/1000486455.jpg", 
  },
  // Product 13: Red Plastic Tape Dispenser (using IMG_20251101_155800_289.jpg)
  {
    id: 13,
    category: "Stationery",
    title: "Heavy-Duty Tape Dispenser",
    price: 150.00, // Estimated INR price
    description: "A durable, heavy-duty red plastic tape dispenser with a serrated cutter, perfect for desktop use in homes, offices, or schools.",
    imageUrl: "/IMG_20251101_155800_289.jpg", 
  },
];

// Function to get all unique categories from the products
export const getCategories = (): string[] => {
  const categories = demoProducts.map(product => product.category);
  return [...new Set(categories)]; // Return unique category names
};
