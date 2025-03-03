import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import FlowerOrnament from './FlowerOrnament';

const SaveTheDate: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Disable page scrolling on mobile
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return <div ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-30">
          <FlowerOrnament className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-30 rotate-180">
          <FlowerOrnament className="w-full h-full" />
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto text-center space-y-6 md:space-y-10">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1.2,
        delay: 0.2
      }} className="space-y-2">
          <h1 className={cn("text-5xl md:text-7xl font-cursive", "tracking-wide text-primary")}>
            Iisakat
          </h1>
          <p className="text-sm md:text-base uppercase tracking-widest text-muted-foreground">
            Save the Date
          </p>
        </motion.div>

        {/* Date section - with reduced spacing */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 1.5
      }} className="space-y-2">
          <div className="inline-block p-4 md:p-6 rounded-md backdrop-blur-sm bg-background/70">
            <p className="text-xl md:text-2xl font-serif">
              14.2.2026
            </p>
          </div>
          <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 1,
            delay: 2.2
          }} className="text-sm font-serif text-muted-foreground md:text-base">
            Formal invitation to follow
          </motion.p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 1
      }} className="divider-ornament py-4">
          <div className="relative h-0.5 w-16 bg-muted-foreground/30"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/ea9e63b3-1152-475e-ae18-f2dc0946dc20.png" 
              alt="Couple" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>;
};
export default SaveTheDate;
