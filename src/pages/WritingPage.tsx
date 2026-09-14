import React from 'react';
import { Link } from '../context/RouterContext';
import { BookMockupTheSystem } from '../components/visual/BookMockupTheSystem';
import { BookMockupDistribution } from '../components/visual/BookMockupDistribution';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const WritingPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
          Writing
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Books & Writing
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
          In-depth research on computing infrastructure, energy constraints, and product distribution.
        </p>
      </div>

      {/* Publications Grid */}
      <div className="space-y-12">
        {/* Book 1: The System Is Being Rewritten */}
        <motion.article
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs hover:border-gray-400 hover:shadow-md transition-all"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-4 text-xs font-mono text-gray-500">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-gray-700" />
              <span>BOOK · 100+ PAGES</span>
              <span>·</span>
              <span className="text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">PUBLISHED</span>
            </div>
            <Link
              to="/writing/the-system"
              className="text-gray-900 hover:text-black font-medium inline-flex items-center gap-1 group"
            >
              <span>Read Excerpts</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-[220px]">
                <BookMockupTheSystem />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">
                The System Is Being Rewritten
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                How energy limits, computing infrastructure, and economic systems are changing the next decade of technology. Over the past century, systems were built on assumptions that no longer hold today.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-gray-600">
                <span className="px-2.5 py-1 rounded bg-gray-100">6 Chapters</span>
                <span className="px-2.5 py-1 rounded bg-gray-100">Compute Scaling</span>
                <span className="px-2.5 py-1 rounded bg-gray-100">Energy Realism</span>
                <span className="px-2.5 py-1 rounded bg-gray-100">Physical Reality</span>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={SITE_LINKS.writing.theSystem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all inline-flex items-center gap-1.5 shadow-xs hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Amazon Kindle Edition</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <Link
                  to="/writing/the-system"
                  className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-800 text-xs font-medium transition-all inline-flex items-center gap-1.5 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Explore Outline & Chapters</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Book 2: Building Distribution */}
        <motion.article
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs hover:border-gray-400 hover:shadow-md transition-all"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-4 text-xs font-mono text-gray-500">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-gray-700" />
              <span>ESSAY COLLECTION</span>
              <span>·</span>
              <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-medium">IN PROGRESS</span>
            </div>
            <Link
              to="/writing/building-distribution"
              className="text-gray-900 hover:text-black font-medium inline-flex items-center gap-1 group"
            >
              <span>View Structure</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-[220px]">
                <BookMockupDistribution />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">
                Building Distribution
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Why having social media followers is not the same as having real distribution. A practical breakdown of how products build direct, compounding distribution loops that survive algorithm changes.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-gray-600">
                <span className="px-2.5 py-1 rounded bg-gray-100">Audience vs Distribution</span>
                <span className="px-2.5 py-1 rounded bg-gray-100">Inherent Virality</span>
                <span className="px-2.5 py-1 rounded bg-gray-100">Compounding Pipes</span>
              </div>

              <div className="pt-3">
                <Link
                  to="/writing/building-distribution"
                  className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all inline-flex items-center gap-1.5 shadow-xs hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Read Working Outline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};
