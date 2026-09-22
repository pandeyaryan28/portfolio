import React from 'react';
import { Link } from '../context/RouterContext';
import { BookMockupTheSystem } from '../components/visual/BookMockupTheSystem';
import { BookMockupDistribution } from '../components/visual/BookMockupDistribution';
import { ScrollReveal, ScrollStagger, ScrollItem, ScrollParallax } from '../components/ui/ScrollReveal';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const WritingPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-12">
      {/* Page Header with Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4"
      >
        <div className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
          Writing & Research
        </div>
        <h1 className="text-4xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Books & Writing
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
          In-depth research on computing infrastructure, energy constraints, and product distribution mechanics.
        </p>
      </motion.div>

      {/* Publications Stack with Noticeable Scroll Transitions */}
      <div className="space-y-14">
        {/* Book 1: The System Is Being Rewritten */}
        <ScrollReveal direction="scale" distance={44} duration={0.65}>
          <motion.article
            whileHover={{
              y: -6,
              borderColor: '#9CA3AF',
              boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.09), 0 10px 15px -5px rgba(0, 0, 0, 0.04)',
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-4 text-xs font-mono text-gray-500">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gray-700" />
                <span>BOOK · OVER 100 PAGES</span>
                <span>·</span>
                <span className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">PUBLISHED</span>
              </div>
              <Link
                to="/writing/the-system"
                className="text-gray-900 hover:text-black font-medium inline-flex items-center gap-1 group"
              >
                <span>Read Excerpts</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full max-w-[220px]">
                  <ScrollParallax offset={28} direction="up">
                    <BookMockupTheSystem />
                  </ScrollParallax>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">
                  The System Is Being Rewritten
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  How energy limits, computing infrastructure, and economic systems are changing the next decade of technology. Over the past century, systems were built on assumptions that no longer hold today.
                </p>

                <ScrollStagger staggerDelay={0.06} className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-gray-600">
                  {['6 Chapters', 'Compute Scaling', 'Energy Realism', 'Physical Reality'].map((tag) => (
                    <ScrollItem key={tag} direction="scale" duration={0.3}>
                      <motion.span
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.15 }}
                        className="px-2.5 py-1 rounded bg-gray-100 cursor-default inline-block"
                      >
                        {tag}
                      </motion.span>
                    </ScrollItem>
                  ))}
                </ScrollStagger>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={SITE_LINKS.writing.theSystem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Amazon Kindle Edition</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </motion.a>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/writing/the-system"
                      className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-800 text-xs font-medium transition-all inline-flex items-center gap-1.5"
                    >
                      <span>Explore Outline & Chapters</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.article>
        </ScrollReveal>

        {/* Book 2: Building Distribution */}
        <ScrollReveal direction="scale" distance={44} duration={0.65}>
          <motion.article
            whileHover={{
              y: -6,
              borderColor: '#9CA3AF',
              boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.09), 0 10px 15px -5px rgba(0, 0, 0, 0.04)',
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-4 text-xs font-mono text-gray-500">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gray-700" />
                <span>ESSAY COLLECTION</span>
                <span>·</span>
                <span className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">IN PROGRESS</span>
              </div>
              <Link
                to="/writing/building-distribution"
                className="text-gray-900 hover:text-black font-medium inline-flex items-center gap-1 group"
              >
                <span>View Structure</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full max-w-[220px]">
                  <ScrollParallax offset={28} direction="up">
                    <BookMockupDistribution />
                  </ScrollParallax>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif text-gray-900">
                  Building Distribution
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  Why having social media followers is not the same as having real distribution. A practical breakdown of how products build direct, compounding distribution loops that survive algorithm changes.
                </p>

                <ScrollStagger staggerDelay={0.06} className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-gray-600">
                  {['Audience vs Distribution', 'Inherent Virality', 'Compounding Pipes'].map((tag) => (
                    <ScrollItem key={tag} direction="scale" duration={0.3}>
                      <motion.span
                        whileHover={{ scale: 1.05, y: -1 }}
                        transition={{ duration: 0.15 }}
                        className="px-2.5 py-1 rounded bg-gray-100 cursor-default inline-block"
                      >
                        {tag}
                      </motion.span>
                    </ScrollItem>
                  ))}
                </ScrollStagger>

                <div className="pt-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                    <Link
                      to="/writing/building-distribution"
                      className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Read Working Outline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.article>
        </ScrollReveal>
      </div>
    </div>
  );
};
