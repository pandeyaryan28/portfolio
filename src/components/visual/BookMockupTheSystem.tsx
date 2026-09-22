import React from 'react';
import { motion } from 'framer-motion';

export const BookMockupTheSystem: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden [perspective:1000px]">
      {/* Book Cover with Interactive 3D Tilt */}
      <motion.div
        whileHover={{
          rotateY: -8,
          rotateX: 4,
          y: -6,
          scale: 1.02,
          boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.12), 0 10px 15px -5px rgba(0, 0, 0, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
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
