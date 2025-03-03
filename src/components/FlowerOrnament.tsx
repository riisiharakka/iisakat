
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
      {/* Custom hand-drawn heart SVG */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full text-primary/10"
      >
        <path 
          d="M12 21.35c-0.45 0-0.9-0.15-1.28-0.47-1.7-1.42-6.05-5.15-7.05-6.2-1.77-1.82-2.67-4.2-2.67-6.68 0-5 3.95-9 8.5-9 2.35 0 4.58 1 6.13 2.82 1.55-1.82 3.78-2.82 6.13-2.82 4.55 0 8.5 4 8.5 9 0 2.48-0.9 4.86-2.67 6.68-1 1.05-5.35 4.78-7.05 6.2-0.38 0.32-0.83 0.47-1.28 0.47z" 
          stroke="currentColor" 
          strokeWidth="0.7"
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            strokeDasharray: "0.5, 0.8",
            strokeDashoffset: "0.2"
          }}
        />
      </svg>
    </motion.div>
  );
};

export default FlowerOrnament;
