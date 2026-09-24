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

  // Gentle 3D perspective rotation: turns gently toward the viewer on scroll
  const scrollRotateY = useTransform(smoothProgress, [0, 0.5, 1], [-10, -3, 5]);
  const scrollRotateX = useTransform(smoothProgress, [0, 0.5, 1], [4, 1, -3]);
  const scrollY = useTransform(smoothProgress, [0, 1], [14, -14]);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center p-4 sm:p-6 bg-neutral-100/70 rounded-2xl border border-neutral-200/80 overflow-hidden [perspective:1200px]"
    >
      {/* 3D Book Assembly */}
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
          scale: 1.02,
          rotateY: -2,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative w-full max-w-[240px] sm:max-w-[250px] aspect-[1/1.33] bg-neutral-900 text-white rounded-r-md rounded-l-[3px] p-5 sm:p-6 flex flex-col justify-between cursor-default border-t border-b border-l-4 border-l-neutral-800 border-r-[10px] border-r-amber-50/90 shadow-[14px_18px_36px_-6px_rgba(0,0,0,0.3),4px_6px_14px_-3px_rgba(0,0,0,0.12),-2px_0_6px_rgba(0,0,0,0.06)]"
      >
        {/* Book Spine Hinge Indentation */}
        <div className="absolute left-2.5 top-0 bottom-0 w-[1.5px] bg-white/10 pointer-events-none" />

        {/* Paper Page Edge Texture on Right Side */}
        <div className="absolute right-[-10px] top-0 bottom-0 w-[10px] rounded-r-sm overflow-hidden flex flex-col justify-between py-1 pointer-events-none opacity-80">
          <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#fef9c3_0px,#fef9c3_1px,#fef08a_1px,#fef08a_2px)] opacity-40" />
        </div>

        {/* Ribbon Bookmark */}
        <div className="absolute top-0 right-5 w-3.5 h-9 bg-amber-600 rounded-b flex items-end justify-center pb-1 shadow-xs">
          <Bookmark className="w-2 h-2 text-white" />
        </div>

        {/* Header Metadata */}
        <div className="pl-1">
          <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>Essay Collection</span>
          </div>

          <h3 className="mt-6 text-xl sm:text-2xl font-serif tracking-tight text-white leading-tight">
            Building <br />
            <span className="italic font-light text-neutral-300">Distribution</span>
          </h3>

          <p className="mt-3 text-xs text-neutral-400 leading-relaxed font-normal border-l border-neutral-700 pl-2.5">
            How products build direct, compounding distribution loops.
          </p>
        </div>

        {/* Footer */}
        <div className="pl-1 pt-4 border-t border-neutral-800 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-neutral-400 block">Author</span>
            <p className="text-xs font-mono font-medium text-neutral-200">Aryan Pandey</p>
          </div>
          <span className="font-mono text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-amber-300 border border-neutral-700">
            Drafting
          </span>
        </div>
      </motion.div>
    </div>
  );
};
