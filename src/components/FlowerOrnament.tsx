
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

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
      <Heart 
        className="w-full h-full text-primary/30" 
        strokeWidth={1}
      />
    </motion.div>
  );
};

export default FlowerOrnament;
