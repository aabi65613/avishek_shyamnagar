// File: src/data/products.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description?: string;
}

// CORRECTED PRODUCT DATA WITH YOUR EXACT IMAGE FILENAMES
export const demoProducts: Product[] = [
  {
    id: '1',
    name: "Artists' Water Colours",
    category: "Art Supplies",
    price: 150.00,
    // This is the Camel Water Colours box
    imageUrl: "/IMG_20251011_221013_733.jpg",
    description: "High-quality water colours for professional artists and students."
  },
  {
    id: '2',
    name: "Cello Soft Write Ball Pen",
    category: "Stationery",
    price: 10.00,
    // This is the Cello pen
    imageUrl: "/IMG_20251011_221826_587.jpg",
    description: "A smooth writing ball pen for everyday use."
  },
  {
    id: '3',
    name: "Deluxe Chessmen Set",
    category: "Games & Hobbies",
    price: 250.00,
    // This is the Chess set
    imageUrl: "/IMG_20251011_221652_317.jpg",
    description: "A classic deluxe chess set for players of all levels."
  },
  {
    id: '4',
    name: "Fevicryl Glass Colours",
    category: "Art Supplies",
    price: 120.00,
    // This is the Fevicryl box
    imageUrl: "/IMG_20251011_221710_762.jpg",
    description: "Vibrant and easy-to-use glass colours for creative projects."
  },
  {
    id: '5',
    name: "Golden Zari Thread Spool",
    category: "Craft Supplies",
    price: 85.00,
    // This is the golden ribbon
    imageUrl: "/IMG_20251011_221616_284.jpg",
    description: "Shiny golden thread for embroidery and craft work."
  },
  {
    id: '6',
    name: "Premium Sketchbook",
    category: "Stationery",
    price: 180.00,
    // You have not provided an image for this, you can add one later
    imageUrl: "/placeholder.jpg", 
    description: "A5 size sketchbook with high-quality paper for drawing."
  }
];
