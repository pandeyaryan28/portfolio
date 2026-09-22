import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 350,
    damping: 32,
    restDelta: 0.0005,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-neutral-200/40 z-50 pointer-events-none">
      <motion.div
        className="h-full bg-neutral-900 origin-left shadow-2xs"
        style={{ scaleX }}
        aria-hidden="true"
      />
    </div>
  );
};
