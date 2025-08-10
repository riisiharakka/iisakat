import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { differenceInCalendarDays, startOfDay } from 'date-fns';
import { cn } from '@/lib/utils';
import FlowerOrnament from './FlowerOrnament';
const SaveTheDate: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  useEffect(() => {
    // Disable page scrolling on mobile
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const now = new Date();
    const target = new Date(2026, 1, 14);
    const days = differenceInCalendarDays(startOfDay(target), startOfDay(now));
    setDaysLeft(days);
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
          <h1 className={cn("text-5xl md:text-7xl font-cursive", "tracking-wide text-primary")}>Silja ja Harri</h1>
          <p className="font-cursive text-xl md:text-2xl text-muted-foreground">
            Save the date
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
            <p className="font-cursive text-muted-foreground text-xl md:text-xl">
              14.2.2026
            </p>
          </div>
          {daysLeft !== null && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.9 }}
              className="font-cursive text-2xl text-muted-foreground md:text-2xl"
            >
              {daysLeft} päivää jäljellä
            </motion.p>
          )}
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 2.2
        }} className="font-cursive text-2xl text-muted-foreground md:text-2xl">Virallinen kutsu lisätietoineen saapuu myöhemmin</motion.p>
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
        
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1.2,
        delay: 1.3
      }} className="w-full max-w-2xl mx-auto space-y-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} className="font-cursive text-xl md:text-2xl text-muted-foreground">
            sanovat tahdon
            <br className="hidden md:block" />
            Helsingissä
          </motion.p>
          <div className="relative rounded-none border-2 border-ornament/80 p-8 md:p-10 bg-background/70">
            <span className="pointer-events-none absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-ornament/80"></span>
            <span className="pointer-events-none absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-ornament/80"></span>
            <span className="pointer-events-none absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-ornament/80"></span>
            <span className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-ornament/80"></span>
            <div className="h-28 md:h-36 bg-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>;
};
export default SaveTheDate;