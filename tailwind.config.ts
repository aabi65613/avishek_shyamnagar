// tailwind.config.ts
import type { Config } from "tailwindcss";

const config = {
  // We specify where Tailwind should look for files using its classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ensure all src subdirectories are covered
  ],
  prefix: "",
  // The dark mode setting allows toggling themes
  darkMode: "class",
  
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // ----------------------------------------------------
      // THIS IS THE CRITICAL SECTION FOR CUSTOM COLORS
      // ----------------------------------------------------
      colors: {
        // Map classes like 'text-primary-color' to the variable in globals.css
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'accent-color': 'var(--accent-color)',
        'text-color': 'var(--text-color)',
        'background-color': 'var(--background-color)',
      },
      // ----------------------------------------------------
      
      // Keep any other custom styles you might have
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
