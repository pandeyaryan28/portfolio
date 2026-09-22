import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { BookMockupTheSystem } from '../components/visual/BookMockupTheSystem';
import { ArrowLeft, BookOpen, Quote, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const TheSystemDetail: React.FC = () => {
  const [selectedExcerpt, setSelectedExcerpt] = useState<number>(0);

  const excerpts = [
    {
      title: 'Hidden Fragility in Modern Systems',
      chapter: 'Chapter 2 · Systemic Dependencies',
      content:
        'When systems become complex, the people operating inside them often stop understanding the fundamental layers their routines depend on. We stack layers of software and abstractions until true risk is obscured. Realignment with physical reality is unavoidable.',
    },
    {
      title: 'Institutional Drift and Trust',
      chapter: 'Chapter 5 · Trust & Verification',
      content:
        'Institutions breakdown not because their original goals were flawed, but because the daily cost of upholding standards exceeds the short term incentives of participants. Algorithmic verification simply shrinks the surface where blind trust is required.',
    },
    {
      title: 'The Physical Limits of Computing',
      chapter: 'Chapter 6 · Energy & Silicon',
      content:
        'Compute over the coming decade will not be decided solely by algorithms or venture funding. It will be governed by access to electrical power, thermal dissipation, and semiconductor fabrication. Physics sets the real boundaries.',
    },
  ];

  const chapters = [
    { num: '01', title: 'The Inertia of Modern Institutions', pages: 'Pages 12 to 34' },
    { num: '02', title: 'Layered Abstractions and Hidden Fragility', pages: 'Pages 35 to 62' },
    { num: '03', title: 'The Economics of Continuous Bandwidth', pages: 'Pages 63 to 88' },
    { num: '04', title: 'Data Gravity and Global Infrastructure', pages: 'Pages 89 to 114' },
    { num: '05', title: 'Trust Substrates and Verification', pages: 'Pages 115 to 142' },
    { num: '06', title: 'Energy, Compute, and Physical Realism', pages: 'Pages 143 to 178' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/writing"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-gray-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO WRITING</span>
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase">
          <BookOpen className="w-3.5 h-3.5 text-gray-700" />
          <span>Published Book</span>
          <span>·</span>
          <span>Over 100 Pages</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-gray-950 tracking-tight leading-[1.15]">
          The System Is Being Rewritten
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          An examination of the technological, economic, and geopolitical forces reshaping computing and modern institutions.
        </p>

        {/* Action Buttons */}
        <div className="pt-2">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={SITE_LINKS.writing.theSystem.url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all inline-flex items-center gap-2 shadow-xs"
          >
            <span>Get Amazon Kindle Edition</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </motion.a>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-y border-gray-200 py-3 text-xs">
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Author</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Aryan Pandey</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Length</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Over 100 Pages</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Status</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Published</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Format</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Kindle & Archive</span>
          </div>
        </div>
      </motion.div>

      {/* Book Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="py-4 max-w-xs mx-auto"
      >
        <BookMockupTheSystem />
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
        <div className="text-base text-gray-600 space-y-4 leading-relaxed font-normal">
          <p>
            For decades, digital technology evolved under assumptions of endless energy, predictable chip scaling, and uninterrupted supply chains. Today, those foundational assumptions are being tested simultaneously.
          </p>
          <p>
            This book breaks down what these structural shifts mean for developers, engineers, and founders building next generation technology.
          </p>
        </div>
      </motion.div>

      {/* Excerpts Reader */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <h2 className="text-2xl font-semibold text-gray-900">Selected Excerpts</h2>
          <span className="text-xs font-mono text-gray-500">3 Passages</span>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {excerpts.map((excerpt, idx) => {
            const isSelected = selectedExcerpt === idx;
            return (
              <button
                key={excerpt.title}
                onClick={() => setSelectedExcerpt(idx)}
                className={`relative px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                  isSelected ? 'text-white' : 'text-gray-700 hover:text-gray-950 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-excerpt-tab"
                    className="absolute inset-0 bg-neutral-900 rounded-md z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">Excerpt 0{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Excerpt Card with crossfade */}
        <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-xs min-h-[220px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedExcerpt}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                <Quote className="w-4 h-4 text-gray-400" />
                <span>{excerpts[selectedExcerpt].chapter}</span>
              </div>

              <h3 className="text-lg font-serif text-gray-900 font-medium">
                {excerpts[selectedExcerpt].title}
              </h3>

              <p className="font-serif italic text-base sm:text-lg text-gray-700 leading-relaxed">
                "{excerpts[selectedExcerpt].content}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Table of Contents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-900">Table of Contents</h2>
        <div className="space-y-2">
          {chapters.map((chap, idx) => (
            <motion.div
              key={chap.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ x: 4, borderColor: '#9CA3AF' }}
              className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 bg-white text-sm transition-colors cursor-default"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gray-400">{chap.num}</span>
                <span className="font-medium text-gray-800">{chap.title}</span>
              </div>
              <span className="font-mono text-xs text-gray-400">{chap.pages}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
