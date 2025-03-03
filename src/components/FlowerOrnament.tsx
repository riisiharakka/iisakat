
import React from 'react';
import { motion } from 'framer-motion';

interface FlowerOrnamentProps {
  className?: string;
}

const FlowerOrnament: React.FC<FlowerOrnamentProps> = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className={className}
    >
      {/* Custom hand-drawn sketchy heart SVG */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full text-primary/10"
      >
        {/* Multiple irregular paths to create a sketchy, hand-drawn effect */}
        <path 
          d="M11.8 20.8c-0.3-0.2-0.7-0.5-1.2-0.9-1.7-1.4-5.8-4.9-6.8-6-1.7-1.8-2.5-4-2.6-6.4 0.1-4.8 3.8-8.6 8.2-8.7 2.3 0.1 4.4 1 5.9 2.7 1.5-1.7 3.6-2.6 5.9-2.7 4.4 0.1 8.1 3.9 8.2 8.7-0.1 2.4-0.9 4.6-2.6 6.4-1 1.1-5.1 4.6-6.8 6-0.5 0.4-0.9 0.7-1.2 0.9" 
          stroke="currentColor" 
          strokeWidth="0.4"
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ strokeDasharray: "1, 0.8" }}
        />
        <path 
          d="M12.2 21.1c-0.4-0.3-0.9-0.6-1.3-1-1.8-1.5-5.6-5-6.5-5.9-1.8-1.9-2.7-4.4-2.8-6.7 0-5.2 4-9.3 8.6-9.3 2.2 0 4.3 0.9 5.9 2.6 1.6-1.7 3.7-2.6 5.9-2.6 4.6 0 8.6 4.1 8.6 9.3-0.1 2.3-1 4.8-2.8 6.7-0.9 0.9-4.7 4.4-6.5 5.9-0.4 0.4-0.9 0.7-1.3 1" 
          stroke="currentColor" 
          strokeWidth="0.3"
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ strokeDasharray: "0.8, 1.2" }}
        />
        <path 
          d="M12 21.6c-0.5-0.3-1-0.7-1.5-1.1-1.5-1.3-5.5-4.8-6.8-6.1-1.9-2-2.9-4.5-2.9-7 0-5.3 4.1-9.6 8.9-9.6 2.1 0 4.3 0.9 5.9 2.7 1.6-1.8 3.8-2.7 5.9-2.7 4.8 0 8.9 4.3 8.9 9.6 0 2.5-1 5-2.9 7-1.3 1.3-5.3 4.8-6.8 6.1-0.5 0.4-1 0.8-1.5 1.1" 
          stroke="currentColor" 
          strokeWidth="0.2"
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ strokeDasharray: "1.5, 0.5" }}
        />
        {/* Add some internal sketch lines for texture */}
        <path 
          d="M8 9.5c0.5 1 1.5 1.7 2.5 2.2 M16 9.5c-0.5 1-1.5 1.7-2.5 2.2"
          stroke="currentColor" 
          strokeWidth="0.2"
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ strokeDasharray: "0.3, 0.6" }}
        />
      </svg>
    </motion.div>
  );
};

export default FlowerOrnament;
