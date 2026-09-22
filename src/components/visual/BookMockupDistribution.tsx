import React, { useRef } from 'react';
import { BookOpen, Bookmark } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

export const BookMockupDistribution: React.FC = () => {
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
      {/* Book Container with Scroll-Driven 3D Perspective + Interactive Hover */}
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
          boxShadow: '0 25px 40px -12px rgba(0, 0, 0, 0.35), 0 10px 15px -5px rgba(0, 0, 0, 0.15)',
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="relative w-full max-w-[280px] aspect-[1/1.45] bg-neutral-900 text-white rounded-r-xl rounded-l-sm p-6 sm:p-8 shadow-md border-l-4 border-l-neutral-800 flex flex-col justify-between cursor-default"
      >
        {/* Ribbon */}
        <div className="absolute top-0 right-6 w-4 h-10 bg-amber-600 rounded-b flex items-end justify-center pb-1 shadow-xs">
          <Bookmark className="w-2.5 h-2.5 text-white" />
        </div>

        {/* Header Metadata */}
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-gray-400 uppercase">
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>Essay Collection</span>
          </div>

          <h3 className="mt-8 text-2xl font-serif tracking-tight text-white leading-tight">
            Building <br />
            <span className="italic font-light text-gray-300">Distribution</span>
          </h3>

          <p className="mt-3 text-xs text-gray-400 leading-relaxed border-l border-gray-700 pl-3">
            How distribution is actually built in a world where everyone has access to social media.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-neutral-800 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-gray-400">Author</span>
            <p className="text-xs font-mono font-medium text-gray-200">Aryan Pandey</p>
          </div>
          <span className="font-mono text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-amber-300">
            DRAFTING
          </span>
        </div>
      </motion.div>
    </div>
  );
};
