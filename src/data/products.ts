// File: src/data/products.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string; // Path to your image in the /public folder
  description?: string;
}

// Corrected product data
export const demoProducts: Product[] = [
  {
    id: '1',
    name: "Artists' Water Colours",
    category: "Art Supplies",
    price: 150.00,
    imageUrl: "/images/products/camel-water-colours.jpg", // Make sure you have this image in /public/images/products/
    description: "High-quality water colours for professional artists and students."
  },
  {
    id: '2',
    name: "Cello Soft Write Ball Pen",
    category: "Stationery",
    price: 10.00,
    imageUrl: "/images/products/cello-soft-write.jpg", // Make sure you have this image
    description: "A smooth writing ball pen for everyday use."
  },
  {
    id: '3',
    name: "Deluxe Chessmen Set",
    category: "Games & Hobbies",
    price: 250.00,
    imageUrl: "/images/products/deluxe-chessmen.jpg", // Make sure you have this image
    description: "A classic deluxe chess set for players of all levels."
  },
  {
    id: '4',
    name: "Fevicryl Glass Colours",
    category: "Art Supplies",
    price: 120.00,
    imageUrl: "/images/products/fevicryl-glass-colours.jpg", // Make sure you have this image
    description: "Vibrant and easy-to-use glass colours for creative projects."
  },
  {
    id: '5',
    name: "Golden Zari Thread Spool",
    category: "Craft Supplies",
    price: 85.00,
    imageUrl: "/images/products/golden-ribbon.jpg", // Make sure you have this image
    description: "Shiny golden thread for embroidery and craft work."
  },
  {
    id: '6',
    name: "Premium Sketchbook",
    category: "Stationery",
    price: 180.00,
    imageUrl: "/images/products/sketchbook.jpg", // You can add a placeholder image here for now
    description: "A5 size sketchbook with high-quality paper for drawing."
  }
];
