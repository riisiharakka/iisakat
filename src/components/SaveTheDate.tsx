import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { differenceInCalendarDays, startOfDay } from 'date-fns';
import { cn } from '@/lib/utils';
const SaveTheDate: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  useEffect(() => {
    const now = new Date();
    const target = new Date(2026, 1, 14);
    const days = differenceInCalendarDays(startOfDay(target), startOfDay(now));
    setDaysLeft(days);
  }, []);
  return <div ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden font-september">

      <div className="w-full max-w-3xl mx-auto text-center space-y-6 md:space-y-10">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1.2,
        delay: 0.2
      }} className="space-y-2">
          <h1 className={cn("text-5xl md:text-7xl font-september", "tracking-wide text-primary")}>Silja & Harri</h1>
          <p className="font-serif text-sm md:text-base uppercase tracking-widest text-muted-foreground">
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
          <p className="font-september text-muted-foreground md:text-7xl text-4xl">
            14.2.2026
          </p>
          {daysLeft !== null && <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 1.9
        }} className="font-september text-2xl text-zinc-600 md:text-4xl">
              Päiviä hääjuhlaan: {daysLeft}
            </motion.p>}
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 2.2
        }} className="font-september text-zinc-600 md:text-4xl text-2xl">Virallinen kutsu saapuu myöhemmin</motion.p>
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
      }} className="w-full max-w-md mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img src="/lovable-uploads/def916bb-9748-4bb6-bbf7-62148c0a4852.png" alt="Wedding invitation photo of a couple at sunset on a rooftop" className="w-full h-auto rounded-lg" />
            <img src="/lovable-uploads/46b168bf-6cdb-49a7-b115-3fb0d60d73bc.png" alt="Silja and Harri rooftop portrait in Helsinki - Save the Date" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </div>
        </motion.div>
      </div>
      <footer className="absolute inset-x-0 bottom-6 text-center">
        <p className="font-september text-muted-foreground md:text-2xl text-xl">🤍, Silja & Harri</p>
      </footer>
    </div>;
};
export default SaveTheDate;