// Find this part in src/app/page.tsx and replace it

// --- Updated Product Card Component ---
const ProductCard = ({ product }: { product: typeof featuredProducts[0] }) => {
  // We'll add the useCart hook here later when CartContext is ready
  // const { addToCart } = useCart();

  const handleAddToCart = () => {
    // addToCart(product, 1); // This will be uncommented later
    console.log("Add to cart clicked for:", product.title); // Placeholder action
    // We'll add a toast notification here later
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-48 bg-gray-100"> {/* Increased height */}
          <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              style={{ objectFit: 'contain' }} // Use 'contain' to show full image
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="p-2" // Add some padding around the image
          />
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="text-left mb-2">
          <span className="text-xs font-semibold uppercase text-secondary-color tracking-wider">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-deep-navy mt-1 truncate" title={product.title}>
            {product.title}
          </h3>
          {/* --- ADDED DESCRIPTION --- */}
          {product.description && (
            <p className="text-sm text-gray-600 mt-2 line-clamp-2"> {/* Limits to 2 lines */}
              {product.description}
            </p>
          )}
          {/* ------------------------ */}
        </div>

        <div className="mt-auto"> {/* Pushes price and button down */}
          <div className="flex justify-between items-center mt-3">
            <span className="text-xl font-extrabold text-primary-color">
              ₹{product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAddToCart} // Connect the click handler
            className="mt-3 w-full bg-deep-navy text-white px-4 py-2 rounded-lg font-medium hover:bg-deep-navy/90 transition-colors shadow-md text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
// --- End of Replacement ---

// The rest of your page.tsx file stays the same
