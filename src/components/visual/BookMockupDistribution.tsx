import React from 'react';
import { BookOpen, Bookmark } from 'lucide-react';

export const BookMockupDistribution: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
      {/* Book Container */}
      <div className="relative w-full max-w-[280px] aspect-[1/1.45] bg-neutral-900 text-white rounded-r-xl rounded-l-sm p-6 sm:p-8 shadow-lg border-l-4 border-l-neutral-800 flex flex-col justify-between">
        {/* Ribbon */}
        <div className="absolute top-0 right-6 w-4 h-10 bg-amber-600 rounded-b flex items-end justify-center pb-1">
          <Bookmark className="w-2.5 h-2.5 text-white" />
        </div>

        {/* Header Metadata */}
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-gray-400 uppercase">
            <BookOpen className="w-3 h-3 text-amber-500" />
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
      </div>
    </div>
  );
};
