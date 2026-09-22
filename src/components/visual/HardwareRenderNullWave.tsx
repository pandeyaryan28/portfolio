import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { springSmooth } from '../ui/motionVariants';

export const HardwareRenderNullWave: React.FC = () => {
  const [activeView, setActiveView] = useState<'studio' | 'lifestyle' | 'blueprint' | 'video'>('studio');
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

  const displayY = useTransform(smoothProgress, [0, 1], [14, -14]);
  const displayScale = useTransform(smoothProgress, [0, 0.5, 1], [0.97, 1.02, 0.98]);

  const views: Array<{ id: 'studio' | 'lifestyle' | 'blueprint' | 'video'; label: string }> = [
    { id: 'studio', label: 'Studio Render' },
    { id: 'lifestyle', label: 'Wearable Fit' },
    { id: 'blueprint', label: 'CAD Blueprint' },
    { id: 'video', label: 'Motion Video' },
  ];

  return (
    <div ref={containerRef} className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Header & View Tabs */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50/50">
        <span className="text-xs font-mono font-medium text-gray-700">
          Null Wave Hardware Prototype
        </span>

        <div className="flex items-center gap-1 relative">
          {views.map((tab) => {
            const isActive = activeView === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`relative px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="hardware-active-tab"
                    className="absolute inset-0 bg-neutral-900 rounded-md -z-10"
                    transition={springSmooth}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Visual Display with Smooth Crossfade & Scroll Depth */}
      <div className="relative aspect-[16/10] max-h-[380px] bg-neutral-900 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            style={
              shouldReduceMotion
                ? {}
                : {
                    y: displayY,
                    scale: displayScale,
                  }
            }
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex items-center justify-center"
          >
            {activeView === 'studio' && (
              <img
                src="/assets/nullwave/mask-studio.png"
                alt="NullWave Studio Render"
                className="w-full h-full object-contain p-4"
              />
            )}

            {activeView === 'lifestyle' && (
              <img
                src="/assets/nullwave/mask-lifestyle.png"
                alt="NullWave Wearable Fit"
                className="w-full h-full object-cover"
              />
            )}

            {activeView === 'blueprint' && (
              <img
                src="/assets/nullwave/mask-blueprint.png"
                alt="NullWave CAD Blueprint"
                className="w-full h-full object-contain p-4"
              />
            )}

            {activeView === 'video' && (
              <video
                src="/assets/nullwave/nullwave-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Technical Specifications Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-200 border-t border-gray-200 bg-gray-50/50 text-xs">
        <motion.div
          whileHover={{ y: -2, backgroundColor: '#FFFFFF' }}
          transition={{ duration: 0.15 }}
          className="p-3"
        >
          <span className="text-gray-500 font-mono text-[11px] block">Acoustic Containment</span>
          <span className="font-medium text-gray-900 mt-0.5 block">Over 40 dB Sound Isolation</span>
        </motion.div>
        <motion.div
          whileHover={{ y: -2, backgroundColor: '#FFFFFF' }}
          transition={{ duration: 0.15 }}
          className="p-3"
        >
          <span className="text-gray-500 font-mono text-[11px] block">Chassis Materials</span>
          <span className="font-medium text-gray-900 mt-0.5 block">Grade 5 Matte Titanium</span>
        </motion.div>
        <motion.div
          whileHover={{ y: -2, backgroundColor: '#FFFFFF' }}
          transition={{ duration: 0.15 }}
          className="p-3"
        >
          <span className="text-gray-500 font-mono text-[11px] block">Air Circulation</span>
          <span className="font-medium text-gray-900 mt-0.5 block">Silent Micro Ducting</span>
        </motion.div>
        <motion.div
          whileHover={{ y: -2, backgroundColor: '#FFFFFF' }}
          transition={{ duration: 0.15 }}
          className="p-3"
        >
          <span className="text-gray-500 font-mono text-[11px] block">Voice Capture</span>
          <span className="font-medium text-gray-900 mt-0.5 block">Dual MEMS Mic Array</span>
        </motion.div>
      </div>
    </div>
  );
};
