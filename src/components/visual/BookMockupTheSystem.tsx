import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

export const BookMockupTheSystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 26,
    mass: 0.2,
  });

  // Dynamic 3D perspective scroll rotation: turns gently toward the viewer as it scrolls into center
  const scrollRotateY = useTransform(smoothProgress, [0, 0.5, 1], [-12, -4, 4]);
  const scrollRotateX = useTransform(smoothProgress, [0, 0.5, 1], [6, 1, -4]);
  const scrollY = useTransform(smoothProgress, [0, 1], [18, -18]);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden [perspective:1000px]"
    >
      {/* Book Cover with Scroll-Driven 3D Perspective + Interactive Hover */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          ...(shouldReduceMotion
            ? {}
            : {
                rotateY: scrollRotateY,
                rotateX: scrollRotateX,
                y: scrollY,
              }),
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: '0 25px 40px -12px rgba(0, 0, 0, 0.14), 0 10px 15px -5px rgba(0, 0, 0, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="relative w-full max-w-[280px] aspect-[1/1.45] bg-white text-gray-900 rounded-r-xl rounded-l-sm p-6 sm:p-8 shadow-md border-l-4 border-l-gray-300 border-y border-r border-gray-200 flex flex-col justify-between cursor-default"
      >
        {/* Header Tag */}
        <div>
          <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-gray-500">
            <span>First Edition</span>
            <span>100+ Pages</span>
          </div>

          <h3 className="mt-8 text-2xl font-serif tracking-tight text-gray-950 leading-tight">
            The System <br />
            <span className="italic font-light text-gray-600">Is Being</span> <br />
            Rewritten
          </h3>

          <p className="mt-3 text-xs text-gray-600 leading-relaxed">
            Understanding the Forces Shaping the Next Global Order
          </p>
        </div>

        {/* Bottom Details */}
        <div className="pt-6 border-t border-gray-200 flex items-end justify-between text-xs font-mono">
          <div>
            <span className="text-[10px] uppercase text-gray-400">Author</span>
            <p className="font-semibold text-gray-900">Aryan Pandey</p>
          </div>
          <span className="text-[10px] font-mono text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
            PUBLISHED
          </span>
        </div>
      </motion.div>
    </div>
  );
};
