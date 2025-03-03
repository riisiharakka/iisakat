
import React from 'react';
import { motion } from 'framer-motion';

interface FlowerOrnamentProps {
  className?: string;
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 2.5, bounce: 0 },
      opacity: { duration: 0.3 }
    }
  }
};

const FlowerOrnament: React.FC<FlowerOrnamentProps> = ({ className }) => {
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <motion.path
          d="M100,20 C120,40 140,40 160,20 C140,50 140,70 160,100 C140,80 120,80 100,100 C80,80 60,80 40,100 C60,70 60,50 40,20 C60,40 80,40 100,20 Z"
          variants={draw}
          custom={1}
          className="text-primary/30"
        />
        <motion.path
          d="M100,40 C110,50 120,50 130,40 C120,55 120,65 130,80 C120,70 110,70 100,80 C90,70 80,70 70,80 C80,65 80,55 70,40 C80,50 90,50 100,40 Z"
          variants={draw}
          custom={2}
          className="text-primary/40"
        />
        <motion.circle
          cx="100"
          cy="60"
          r="5"
          variants={draw}
          custom={3}
          className="text-primary/70"
        />
      </g>
    </motion.svg>
  );
};

export default FlowerOrnament;
