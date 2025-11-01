// src/components/HeroSection.tsx
"use client"; // Needed for useState and useEffect hooks

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// Removed Image import as we are using a CSS background for now

const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Handle hover state for tagline color change
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Style for tagline based on hover state
  const taglineStyle = {
    color: isHovering ? 'var(--secondary-color)' : 'var(--primary-color)', // Change between primary and secondary color on hover
    transition: 'color 0.3s ease-in-out',
    cursor: 'pointer',
  };

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      // Using a gradient background as a placeholder since image generation failed
      className={`relative h-screen flex items-center justify-center overflow-hidden transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} bg-gradient-to-br from-blue-200 via-purple-200 to-orange-100`}
    >
      {/* Removed Image component */}
      {/* Optional: Add an overlay if needed for text contrast on the gradient */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div> */}

      {/* Content Container */}
      {/* Ensure content is above the background/overlay */}
      <div className="relative z-20 text-center px-4">
        {/* Animated Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          Books.shyamnagar
        </motion.h1>

        {/* Animated Tagline with Hover Effect */}
        <motion.p
          className="text-xl md:text-3xl font-medium"
          style={taglineStyle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          Discount beyond your expectations.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;

