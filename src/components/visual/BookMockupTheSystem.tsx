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
        className="relative w-full max-w-[240px] sm:max-w-[250px] aspect-[1/1.33] bg-white text-neutral-900 rounded-r-md rounded-l-[3px] p-5 sm:p-6 flex flex-col justify-between cursor-default border-t border-b border-l-4 border-l-neutral-300/80 border-r-[10px] border-r-amber-50/90 shadow-[14px_18px_36px_-6px_rgba(0,0,0,0.18),4px_6px_14px_-3px_rgba(0,0,0,0.08),-2px_0_6px_rgba(0,0,0,0.04)]"
      >
        {/* Book Spine Hinge Indentation */}
        <div className="absolute left-2.5 top-0 bottom-0 w-[1.5px] bg-neutral-900/10 pointer-events-none" />

        {/* Paper Page Edge Texture on Right Side */}
        <div className="absolute right-[-10px] top-0 bottom-0 w-[10px] rounded-r-sm overflow-hidden flex flex-col justify-between py-1 pointer-events-none opacity-80">
          <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#fef9c3_0px,#fef9c3_1px,#fef08a_1px,#fef08a_2px)] opacity-40" />
        </div>

        {/* Header Tag */}
        <div className="pl-1">
          <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-neutral-500">
            <span>First Edition</span>
            <span>100+ Pages</span>
          </div>

          <h3 className="mt-6 text-xl sm:text-2xl font-serif tracking-tight text-neutral-950 leading-tight">
            The System <br />
            <span className="italic font-light text-neutral-600">Is Being</span> <br />
            Rewritten
          </h3>

          <p className="mt-3 text-xs text-neutral-600 leading-relaxed font-normal">
            Energy limits, computing physics, and the next decade of technology.
          </p>
        </div>

        {/* Bottom Details */}
        <div className="pl-1 pt-4 border-t border-neutral-200 flex items-end justify-between text-xs font-mono">
          <div>
            <span className="text-[10px] uppercase text-neutral-400 block">Author</span>
            <p className="font-semibold text-neutral-900">Aryan Pandey</p>
          </div>
          <span className="text-[10px] font-mono text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
            Published
          </span>
        </div>
      </motion.div>
    </div>
  );
};
