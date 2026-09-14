import React from 'react';
import { BookOpen, Bookmark } from 'lucide-react';

export const BookMockupDistribution: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center p-4 sm:p-8 bg-[#F4F3ED] dark:bg-[#15151A] rounded-2xl border border-ink-border dark:border-white/10 relative overflow-hidden group">
      {/* Subtle paper grain & warm shadow */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      {/* Book Container with Editorial Elevation */}
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[1/1.45] bg-[#18181B] text-[#FAF9F5] rounded-r-xl rounded-l-sm p-6 sm:p-8 shadow-glass-xl border-l-4 border-l-[#27272A] border-y border-r border-stone-700/40 flex flex-col justify-between transform group-hover:-translate-y-1 transition-transform duration-500">
        {/* Spine highlight & Bookmark ribbon */}
        <div className="absolute top-0 right-8 w-4 h-12 bg-amber-600/90 rounded-b shadow-sm flex items-end justify-center pb-1">
          <Bookmark className="w-2.5 h-2.5 text-white/90" />
        </div>

        {/* Header Metadata */}
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-stone-400 uppercase">
            <BookOpen className="w-3 h-3 text-amber-500" />
            <span>ESSAY COLLECTION · IN PROGRESS</span>
          </div>

          <h3 className="mt-8 text-2xl sm:text-3xl font-serif font-normal tracking-tight text-white leading-[1.15]">
            Building <br />
            <span className="italic font-light text-stone-300">Distribution</span>
          </h3>

          <p className="mt-3 text-xs text-stone-400 font-sans leading-relaxed border-l border-stone-700 pl-3">
            A practical exploration of how distribution is actually built in a world where everyone has access to social media.
          </p>
        </div>

        {/* Footer Thesis & Author */}
        <div className="pt-6 border-t border-stone-800 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-stone-400 tracking-wider">Author</span>
            <p className="text-xs font-medium text-stone-200 font-mono">Aryan Pandey</p>
          </div>
          <span className="font-mono text-[10px] bg-stone-800/80 px-2 py-0.5 rounded text-amber-300/90 border border-stone-700">
            WRITING
          </span>
        </div>
      </div>
    </div>
  );
};
