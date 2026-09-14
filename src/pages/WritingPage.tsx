import React from 'react';
import { Link } from '../context/RouterContext';
import { BookMockupTheSystem } from '../components/visual/BookMockupTheSystem';
import { BookMockupDistribution } from '../components/visual/BookMockupDistribution';
import { ArrowRight, BookOpen } from 'lucide-react';

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
        <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs hover:border-gray-300 transition-all">
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

              <div className="pt-2">
                <Link
                  to="/writing/the-system"
                  className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Book & Outline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Book 2: Building Distribution */}
        <article className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs hover:border-gray-300 transition-all">
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
                <span className="px-2.5 py-1 rounded bg-gray-100">4 Working Parts</span>
                <span className="px-2.5 py-1 rounded bg-gray-100">Direct Loops</span>
                <span className="px-2.5 py-1 rounded bg-gray-100">Algorithm Independence</span>
              </div>

              <div className="pt-2">
                <Link
                  to="/writing/building-distribution"
                  className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Working Structure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
