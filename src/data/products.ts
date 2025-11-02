// src/data/products.ts
import { Product } from "@/types/product";

// Master Inventory List (48 Unique Items) - Consolidated and updated
// IMPORTANT: All image paths assume the file is directly in the /public folder (e.g., /IMG_20251101_160454_660.jpg).

export const demoProducts: Product[] = [
  // --- Art/Paints ---
  {
    id: 1,
    category: "Art Supplies",
    title: "Fevicryl Pearl Metallic Colours (15 x 10ml Box)",
    price: 375.00,
    description: "Wholesale box of 15 bottles of Fevicryl Pearl Metallic Colours (10ml each). Perfect for art, craft, and decorative projects.",
    imageUrl: "/IMG_20251101_161017_155.jpg",
  },
  // --- Book/Magazine ---
  {
    id: 2,
    category: "Books & Magazines",
    title: "Bengali Magazine/Book - 'Chetona'",
    price: 75.00,
    description: "A copy of the Bengali magazine/book 'Chetona', featuring a cover with a sunset/clouds graphic.",
    imageUrl: "/IMG_20251101_160427_287.jpg",
  },
  // --- Craft Material ---
  {
    id: 3,
    category: "Craft Material",
    title: "Bag of Gold Sequins/Spangles (Round)",
    price: 100.00,
    description: "A bag of round gold sequins/spangles for craft embellishments, scrapbooking, and decoration.",
    imageUrl: "/IMG_20251101_161313_144.jpg",
  },
  {
    id: 4,
    category: "Craft Material",
    title: "Bag of Pink Star-Shaped Craft Embellishments",
    price: 100.00,
    description: "A bag of pink, star-shaped craft embellishments. Ideal for adding sparkle to DIY projects.",
    imageUrl: "/IMG_20251101_161308_512.jpg",
  },
  {
    id: 5,
    category: "Craft Material",
    title: "Pink Satin Ribbon Roll (Small)",
    price: 30.00,
    description: "A small single spool of pink satin ribbon, perfect for gift wrapping, crafts, and sewing.",
    imageUrl: "/IMG_20251101_160949_645.jpg",
  },
  {
    id: 6,
    category: "Craft Material",
    title: "Red/Orange Satin Ribbon Bundle (4-5 Rolls)",
    price: 65.00,
    description: "A bundle of 4-5 small rolls of red/orange satin ribbon, wrapped together for bulk purchase.",
    imageUrl: "/IMG_20251101_160941_806.jpg",
  },
  {
    id: 7,
    category: "Craft Material",
    title: "The Paper Shop Quilling Strips (Multi-color)",
    price: 28.00,
    description: "Multi-color quilling strips from The Paper Shop (3mm/5mm checked). Essential for paper quilling art.",
    imageUrl: "/IMG_20251101_160849_148.jpg",
  },
  {
    id: 8,
    category: "Craft Material",
    title: "Holographic/Glitter Alphabet Stickers Sheet",
    price: 25.00,
    description: "A sheet of multi-color holographic/glitter alphabet stickers for crafts, scrapbooking, and personalization.",
    imageUrl: "/IMG_20251101_160838_054.jpg",
  },
  {
    id: 9,
    category: "Craft Material",
    title: "Craft / Decorative Plastic Pipes (Bundle)",
    price: 30.00,
    description: "A bundle of yellow/light colored plastic pipes for various craft and decorative projects.",
    imageUrl: "/straw pipe.jpg",
  },
  {
    id: 10,
    category: "Craft Material",
    title: "Assorted Multi-Color Foam Balls (Bag)",
    price: 75.00,
    description: "A bag of assorted multi-color foam balls (polystyrene beads) for making slime or other craft projects.",
    imageUrl: "/IMG_20251101_160719_584.jpg",
  },
  // --- Decorative ---
  {
    id: 11,
    category: "Decorative",
    title: "Indian National Flags (Small Stick Flags)",
    price: 20.00,
    description: "Small Indian National Flags mounted on sticks, perfect for decoration, display, or patriotic events.",
    imageUrl: "/IMG_20251101_161350_955.jpg",
  },
  {
    id: 12,
    category: "Decorative",
    title: "Indian National Flags (Small Stick Flags, Wrapped)",
    price: 20.00,
    description: "A bundle of small Indian National Flags on sticks, wrapped for retail sale.",
    imageUrl: "/IMG_20251101_161348_044.jpg",
  },
  {
    id: 13,
    category: "Decorative",
    title: "Indian National Flags (Small Stick Flags, Bundle)",
    price: 20.00,
    description: "A wrapped bundle of small Indian National Flags on sticks.",
    imageUrl: "/IMG_20251101_161329_092.jpg",
  },
  {
    id: 14,
    category: "Decorative",
    title: "3D Decorative Butterfly Stickers/Magnets (Set)",
    price: 25.00,
    description: "A set of 3D decorative butterfly stickers or magnets in assorted multi-color designs.",
    imageUrl: "/stickers.jpg",
  },
  // --- Educational/Map ---
  {
    id: 15,
    category: "Educational",
    title: "Outline Map of North America (Practical Sheet)",
    price: 10.00,
    description: "A practical sheet of the outline map of North America, suitable for school projects and practice.",
    imageUrl: "/IMG_20251101_160522_860.jpg",
  },
  {
    id: 16,
    category: "Educational",
    title: "Outline Map of South America (Practical Sheet)",
    price: 10.00,
    description: "A practical sheet of the outline map of South America, suitable for school projects and practice.",
    imageUrl: "/IMG_20251101_160528_845.jpg",
  },
  // --- Electrical/DIY ---
  {
    id: 17,
    category: "DIY & Tools",
    title: "Red Electrical Insulation Tape (Bundle)",
    price: 150.00,
    description: "A bundle of approximately 10 rolls of red electrical insulation tape for wiring and DIY projects.",
    imageUrl: "/IMG_20251101_160900_059.jpg",
  },
  // --- Electronics/Office ---
  {
    id: 18,
    category: "Electronics",
    title: "CT-512 Check & Correct Calculator (12-Digit)",
    price: 220.00,
    description: "A large display, 12-digit desktop calculator with check and correct functions (CT-512 model).",
    imageUrl: "/calculator .jpg",
  },
  // --- Filing/Folder ---
  {
    id: 19,
    category: "Office Supplies",
    title: "A4 Office File Folder / Project File (Blue)",
    price: 70.00,
    description: "A blue A4 office file folder or project file with a two-hole punch mechanism. Price varies based on inclusion of sheets.",
    imageUrl: "/IMG_20251101_160703_866.jpg",
  },
  // --- Gift Wrap ---
  {
    id: 20,
    category: "Gift Wrap",
    title: "Floral Design Plastic/Cellophane Sheet (Red/Pink)",
    price: 30.00,
    description: "A plastic/cellophane sheet with a red/pink floral pattern, ideal for gift wrapping and bouquets.",
    imageUrl: "/IMG_20251101_160741_474.jpg",
  },
  {
    id: 21,
    category: "Gift Wrap",
    title: "Decorative Polka Dot Ribbon (Purple/Lilac)",
    price: 40.00,
    description: "A wide, decorative ribbon in purple/lilac with white polka dots, perfect for gift wrapping and crafts.",
    imageUrl: "/IMG_20251101_160807_032.jpg",
  },
  // --- Greeting Card ---
  {
    id: 22,
    category: "Gifts & Cards",
    title: "Large Teacher's Day Greeting Card",
    price: 75.00,
    description: "A large Teacher's Day greeting card with the theme 'You're A Teacher Who's Brilliant'.",
    imageUrl: "/gift card.jpg",
  },
  // --- Jewelry/Accessory ---
  {
    id: 23,
    category: "Jewelry & Accessories",
    title: "Silver-Tone Bell Drop Earring (Jhumka Style)",
    price: 100.00,
    description: "Fashion jewelry, silver-tone bell drop earrings with filigree work (jhumka style).",
    imageUrl: "/jewelry.jpg",
  },
  // --- Notebook ---
  {
    id: 24,
    category: "Notebooks & Diaries",
    title: "Camlin Notebook (Cycling Cover)",
    price: 120.00,
    description: "A Camlin notebook featuring a front cover with a cycling image. High-quality paper for notes and writing.",
    imageUrl: "/IMG_20251101_161216_390.jpg",
  },
  {
    id: 25,
    category: "Notebooks & Diaries",
    title: "Camlin Notebook (Marker Description Back Cover)",
    price: 120.00,
    description: "A Camlin notebook with a back cover showing marker descriptions. High-quality paper for notes and writing.",
    imageUrl: "/IMG_20251101_161203_085.jpg",
  },
  {
    id: 26,
    category: "Notebooks & Diaries",
    title: "Successful Graph Notebook (Soft Cover)",
    price: 30.00,
    description: "A soft cover graph notebook with a 'Successful' brand and a pyramid/business graphic.",
    imageUrl: "/IMG_20251101_160623_179.jpg",
  },
  {
    id: 27,
    category: "Notebooks & Diaries",
    title: "Small Notebook/Drawing Book (Bird Cover, 68 Pages)",
    price: 18.00,
    description: "A small notebook or drawing book (17cm x 21cm, 68 pages) with a bird-themed cover. MRP ₹15.00.",
    imageUrl: "/IMG_20251101_160555_307.jpg",
  },
  {
    id: 28,
    category: "Notebooks & Diaries",
    title: "Classmate Accountancy Book (160 Pages)",
    price: 65.00,
    description: "A Classmate Accountancy Book (160 Pages) with a Colosseum/Rome cover design.",
    imageUrl: "/white page.jpg",
  },
  {
    id: 29,
    category: "Notebooks & Diaries",
    title: "Classmate Exercise Book/Notebook (Back Cover)",
    price: 50.00,
    description: "A Classmate Exercise Book/Notebook (price varies by size/pages). Image shows the back cover with brand details.",
    imageUrl: "/IMG_20251101_155923_300.jpg",
  },
  // --- Office/Carbon Paper ---
  {
    id: 30,
    category: "Office Supplies",
    title: "Kores Silvaback Carbon Paper (100 Sheets)",
    price: 190.00,
    description: "Kores Silvaback Carbon Paper (Standard Weight Black, 100 Sheets). Essential for creating duplicates.",
    imageUrl: "/IMG_20251101_160512_254.jpg",
  },
  // --- Office/Pins ---
  {
    id: 31,
    category: "Office Supplies",
    title: "KEA Golden Thumbtacks / Drawing Pins (Box)",
    price: 45.00,
    description: "A box of KEA Golden Thumbtacks or Drawing Pins. Retail Price (RP) is ₹45.00p.",
    imageUrl: "/IMG_20251101_160910_424.jpg",
  },
  // --- Office/Receipt Book ---
  {
    id: 32,
    category: "Office Supplies",
    title: "Rent Bill Book / Receipt Book (Bharat Stationers)",
    price: 75.00,
    description: "A Rent Bill Book or Receipt Book from Bharat Stationers (Duplicate/Triplicate options available).",
    imageUrl: "/IMG_20251101_160046_934.jpg",
  },
  // --- Office/Tape Dispenser ---
  {
    id: 33,
    category: "Office Supplies",
    title: "Zorex Tape Dispenser (Model 701, Blue Box)",
    price: 100.00,
    description: "A Zorex Tape Dispenser (Model 701) in a blue box. Standard office tape dispenser.",
    imageUrl: "/IMG_20251101_161000_123.jpg",
  },
  {
    id: 34,
    category: "Office Supplies",
    title: "Red Desktop Tape Dispenser (Heavy Duty)",
    price: 325.00,
    description: "A heavy-duty, large red desktop tape dispenser, suitable for office or shop use.",
    imageUrl: "/IMG_20251101_155800_289.jpg",
  },
  // --- Paper/Graph ---
  {
    id: 35,
    category: "Paper & Stationery",
    title: "Multi-Color Graph Paper Stack (Loose Sheets)",
    price: 4.00,
    description: "A stack of assorted loose sheets of multi-color graph paper for school or craft use.",
    imageUrl: "/garph page copy.jpg",
  },
  // --- School Accessory ---
  {
    id: 36,
    category: "School Supplies",
    title: "Suzuka School Bag Cover (Cartoon Pattern)",
    price: 175.00,
    description: "A Suzuka School Bag Cover with a patterned cartoon ship and deer design.",
    imageUrl: "/IMG_20251101_161504_020.jpg",
  },
  {
    id: 37,
    category: "School Supplies",
    title: "Princess-Themed Pencil/Stationery Pouch (Pink)",
    price: 115.00,
    description: "A pink, soft material, princess-themed pencil or stationery pouch.",
    imageUrl: "/IMG_20251101_155848_253.jpg",
  },
  {
    id: 38,
    category: "School Supplies",
    title: "Hello Kitty Plastic Pencil Box (Compartment Style)",
    price: 70.00,
    description: "A yellow/pink Hello Kitty plastic pencil box with a compartment-style design.",
    imageUrl: "/pencil box.jpg",
  },
  // --- School/Science Kit ---
  {
    id: 39,
    category: "School Supplies",
    title: "Taraknath I-TECH Biology Dissection Box",
    price: 325.00,
    description: "A Taraknath I-TECH brand Biology Dissection Box, essential for science students.",
    imageUrl: "/IMG_20251101_160216_578.jpg",
  },
  // --- Stationery Tool (Glue Guns) ---
  {
    id: 40,
    category: "Stationery Tools",
    title: "JS Hot Melt Glue Gun (Copper Point)",
    price: 295.00,
    description: "A JS brand Hot Melt Glue Gun with a copper point. Confirmed price is ₹240 (visible on image).",
    imageUrl: "/IMG_20251101_160247_896.jpg",
  },
  {
    id: 41,
    category: "Stationery Tools",
    title: "Generic Hot Melt Glue Gun (Dark Green)",
    price: 400.00,
    description: "A generic, dark green Hot Melt Glue Gun (110-240V). Standard size and model.",
    imageUrl: "/glue gunn.jpg",
  },
  {
    id: 42,
    category: "Stationery Tools",
    title: "Taraknath Hot Melt Glue Gun (Light Blue Box)",
    price: 400.00,
    description: "A Taraknath brand Hot Melt Glue Gun in a light blue box. Confirmed MRP is ₹400.",
    imageUrl: "/glue gun.jpg",
  },
  // --- Stationery Tool (Other) ---
  {
    id: 43,
    category: "Stationery Tools",
    title: "Red Dome-Shaped Pencil Sharpener",
    price: 18.00,
    description: "A red, dome-shaped pencil sharpener, individually wrapped.",
    imageUrl: "/IMG_20251101_161029_244.jpg",
  },
  // --- Writing/Chalk ---
  {
    id: 44,
    category: "Writing Supplies",
    title: "Silica Chalk Pencils (Box of 100 Sticks)",
    price: 175.00,
    description: "A box of 100 sticks of special quality Silica Chalk Pencils.",
    imageUrl: "/IMG_20251101_160937_628.jpg",
  },
  // --- Writing/Ink ---
  {
    id: 45,
    category: "Writing Supplies",
    title: "Camlin Fountain Pen Ink (Scarlet Red, 60ml)",
    price: 35.00,
    description: "A 60ml bottle of Camlin Fountain Pen Ink in Scarlet Red color.",
    imageUrl: "/IMG_20251101_161007_393.jpg",
  },
  // --- Writing/Pen ---
  {
    id: 46,
    category: "Writing Supplies",
    title: "Linc Signetta Gold Metal Pen",
    price: 200.00,
    description: "A premium Linc Signetta Gold Metal Pen, ideal for gifting or professional use.",
    imageUrl: "/IMG_20251101_160454_660.jpg",
  },
  {
    id: 47,
    category: "Writing Supplies",
    title: "Montex Gel Refill Box (Standard Refills)",
    price: 65.00,
    description: "A box of standard gel pen refills from Montex, approximately ₹5 per piece.",
    imageUrl: "/IMG_20251101_161512_767.jpg",
  },
  {
    id: 48,
    category: "Writing Supplies",
    title: "Classmate BFast Ball Pen Box (Pack)",
    price: 90.00,
    description: "A box pack of Classmate BFast Ball Pens.",
    imageUrl: "/IMG_20251101_161455_212.jpg",
  },
];

// Function to get all unique categories from the products
export const getCategories = (): string[] => {
  const categories = demoProducts.map(product => product.category);
  return [...new Set(categories)]; // Return unique category names
};
