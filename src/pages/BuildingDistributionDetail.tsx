import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { BookMockupDistribution } from '../components/visual/BookMockupDistribution';
import { useToast } from '../components/ui/Toast';
import { ArrowLeft, BookOpen, Quote, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, ScrollStagger, ScrollItem, ScrollParallax } from '../components/ui/ScrollReveal';
import { CaseStudyReadingRail } from '../components/ui/CaseStudyReadingRail';

export const BuildingDistributionDetail: React.FC = () => {
  const { showToast } = useToast();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleFollow = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      showToast('Subscribed to book updates!');
    }
  };

  const tableOfContents = [
    {
      part: 'Part I',
      title: 'The Illusion of Audience',
      desc: 'Why follower counts and social media impressions often fail to translate into durable business leverage.',
    },
    {
      part: 'Part II',
      title: 'Mechanisms of Transfer',
      desc: 'How information, trust, and adoption actually move between peer networks and decision makers.',
    },
    {
      part: 'Part III',
      title: 'Distribution Built into the Product',
      desc: 'Designing product mechanics where everyday usage naturally brings new users into the system.',
    },
    {
      part: 'Part IV',
      title: 'Durable Network Compounding',
      desc: 'Building direct distribution pipes that survive changing search algorithms and platform fee hikes.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-14">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase">
          <BookOpen className="w-3.5 h-3.5 text-gray-700" />
          <span className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">In Progress</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-gray-950 tracking-tight leading-[1.15]">
          Building Distribution
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          A practical guide on how modern products build lasting distribution channels without relying on social media algorithms.
        </p>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-y border-gray-200 py-3 text-xs">
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Author</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Aryan Pandey</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Format</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Essays and Book</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Status</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Drafting & Writing</span>
          </div>
        </div>
      </motion.div>

      {/* Reading Navigation Rail */}
      <CaseStudyReadingRail
        title="Building Distribution"
        sections={[
          { id: 'thesis', label: 'Core Idea' },
          { id: 'structure', label: 'Working Structure' },
          { id: 'subscribe', label: 'Follow Updates' },
        ]}
      />

      {/* Book Mockup with Scroll Parallax */}
      <ScrollReveal direction="scale" distance={36} duration={0.65}>
        <div className="py-2 max-w-xs mx-auto">
          <ScrollParallax offset={26} direction="up">
            <BookMockupDistribution />
          </ScrollParallax>
        </div>
      </ScrollReveal>

      {/* Core Thesis */}
      <ScrollReveal direction="up" distance={36} duration={0.6}>
        <section id="thesis" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-900">The Core Idea</h2>
          <motion.div
            whileHover={{ y: -3, borderColor: '#9CA3AF' }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-gray-50 space-y-4 shadow-xs transition-colors"
          >
            <Quote className="w-6 h-6 text-gray-400" />
            <p className="font-serif italic text-xl text-gray-900 leading-snug">
              “Having an audience is not the same as having distribution.”
            </p>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              Broadcasting posts on social media feels like distribution, but the reach is rented from algorithmic platforms. When algorithms change, your reach drops. Real distribution is built directly into product mechanics, user workflows, and direct relationships that you control.
            </p>
          </motion.div>
        </section>
      </ScrollReveal>

      {/* Table of Contents */}
      <section id="structure" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl font-semibold text-gray-900">Working Structure</h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.08} className="space-y-3">
          {tableOfContents.map((section) => (
            <ScrollItem key={section.part} direction="up" distance={20} duration={0.4}>
              <motion.div
                whileHover={{ y: -3, borderColor: '#9CA3AF' }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl border border-gray-200 bg-white space-y-1.5 shadow-xs transition-colors cursor-default"
              >
                <span className="text-[11px] font-mono font-medium text-gray-500 uppercase">
                  {section.part}
                </span>
                <h3 className="text-base font-semibold text-gray-900">{section.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {section.desc}
                </p>
              </motion.div>
            </ScrollItem>
          ))}
        </ScrollStagger>
      </section>

      {/* Follow Drafts */}
      <section id="subscribe" className="scroll-mt-24">
        <ScrollReveal direction="up" distance={36} duration={0.6}>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs"
          >
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900">Follow the writing</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Sign up to receive draft chapters and essays as they are completed.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.div
                key="subscribed"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-3 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-900 text-xs flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-neutral-700" />
                <span>You're subscribed! Draft chapters will be sent to your inbox.</span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleFollow}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address"
                  className="px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-colors shadow-xs hover:shadow-md"
                >
                  Follow updates
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </ScrollReveal>
    </section>
  </div>
  );
};
