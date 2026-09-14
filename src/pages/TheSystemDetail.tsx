import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { StatusPill } from '../components/ui/StatusPill';
import { SectionBadge } from '../components/ui/SectionBadge';
import { BookMockupTheSystem } from '../components/visual/BookMockupTheSystem';
import { useSound } from '../context/SoundContext';
import { ArrowLeft, Type } from 'lucide-react';
import { motion } from 'framer-motion';

interface TheSystemDetailProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const TheSystemDetail: React.FC<TheSystemDetailProps> = ({ isModal = false, onClose }) => {
  const { navigate } = useRouter();
  const { playClick, playTick } = useSound();
  const [selectedExcerpt, setSelectedExcerpt] = useState<number>(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const excerpts = [
    {
      title: 'Excerpt I: The Fragility of Layered Abstractions',
      chapter: 'Chapter 2 · Systemic Dependencies',
      content: `When systems become sufficiently complex, the operators within them cease to comprehend the fundamental substrates upon which their daily routines rely. We construct abstractions upon abstractions—financial clearing layers, cloud virtualization runtimes, energy grid telemetry protocols—until the cost of systemic failure is obfuscated by layers of perceived stability. A rewrite is never merely a technical upgrade; it is the forced realignment of economic realities with physical limits.`,
    },
    {
      title: 'Excerpt II: Decentralized Consensus and Institutional Drift',
      chapter: 'Chapter 5 · Trust Substrates',
      content: `Institutions do not decay because their original mandates were flawed. They decay because the friction required to maintain institutional fidelity exceeds the short-term incentives of the actors operating within them. Cryptographic and algorithmic verification do not eliminate human politics; they merely compress the surface area of trust into deterministic mathematical invariants.`,
    },
    {
      title: 'Excerpt III: The Geography of Next-Generation Compute',
      chapter: 'Chapter 8 · Geopolitical Physics',
      content: `Power in the coming decade will not be denominated purely in capital reserves or sovereign territory. It will be governed by access to unconstrained megawatts, cooling physics, and high-density semiconductor fabrication. The physical constraints of physics and energy are asserting their authority over purely financial narratives.`,
    },
  ];

  const tableOfContents = [
    { num: '01', title: 'The Inertia of Modern Institutions', pages: 'pp. 12–34' },
    { num: '02', title: 'Layered Abstractions & Hidden Fragility', pages: 'pp. 35–62' },
    { num: '03', title: 'The Economics of Continuous Bandwidth', pages: 'pp. 63–88' },
    { num: '04', title: 'Algorithmic Statecraft & Data Gravity', pages: 'pp. 89–114' },
    { num: '05', title: 'Trust Substrates & Cryptographic Invariants', pages: 'pp. 115–142' },
    { num: '06', title: 'Energy, Compute, and Physical Realism', pages: 'pp. 143–178' },
  ];

  const handleBack = () => {
    playClick();
    if (isModal && onClose) {
      onClose();
    } else {
      navigate('/#ebooks');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`max-w-4xl mx-auto ${isModal ? 'py-4' : 'min-h-screen pt-28 pb-24 px-4 sm:px-8'}`}
    >
      {/* Back Button */}
      {!isModal && (
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ARCHIVE</span>
        </button>
      )}

      {/* Header Info */}
      <div className="space-y-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <SectionBadge label="PUBLICATION 05" index="BOOK" />
          <span className="font-mono text-xs text-ink-tertiary dark:text-ink-dark-tertiary">/</span>
          <span className="font-mono text-xs text-ink-secondary dark:text-ink-dark-secondary uppercase">Long-form Essay Collection</span>
          <StatusPill status="PUBLISHED" type="published" />
          <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-900 text-ink-secondary dark:text-ink-dark-secondary border border-ink-border dark:border-white/10">
            100+ PAGES
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-ink-primary dark:text-ink-dark-primary leading-[1.12]">
          The System Is Being Rewritten
        </h1>

        <p className="text-lg sm:text-xl text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
          Understanding the Forces Shaping the Next Global Order.
        </p>

        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-ink-border/60 dark:border-white/10 py-4 text-xs font-mono">
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Author</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">Aryan Pandey</span>
          </div>
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Pages</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">100+ Pages</span>
          </div>
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Status</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">Published</span>
          </div>
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Access</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">Open Archive</span>
          </div>
        </div>
      </div>

      {/* Visual Book Cover Stage */}
      <div className="my-10 sm:my-14 max-w-md mx-auto">
        <BookMockupTheSystem />
      </div>

      {/* Narrative & Reading Experience */}
      <div className="space-y-14 max-w-3xl">
        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
            Introduction
          </h2>
          <div className="text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light space-y-4">
            <p>
              An exploration of the technological, economic, geopolitical and societal forces reshaping the world, and how these forces are changing the systems we rely on.
            </p>
            <p>
              Over the last century, global trade, computation, energy distribution, and institutional governance evolved under specific physical and diplomatic conditions. Today, those foundational assumptions are being actively reconstructed in parallel across multiple fronts.
            </p>
          </div>
        </section>

        {/* Selected Excerpts Interactive Reader */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
                Selected Excerpts
              </h2>
              <span className="font-mono text-xs text-ink-tertiary dark:text-ink-dark-tertiary">3 PASSAGES</span>
            </div>

            <button
              onClick={() => {
                playTick();
                setFontSize(fontSize === 'normal' ? 'large' : 'normal');
              }}
              className="px-2.5 py-1 rounded-lg border border-ink-border dark:border-white/10 bg-white dark:bg-stone-900 text-xs font-mono flex items-center gap-1 hover:bg-stone-50 dark:hover:bg-stone-800"
            >
              <Type className="w-3 h-3" />
              <span>{fontSize === 'normal' ? '1x Text' : '1.2x Text'}</span>
            </button>
          </div>

          {/* Excerpt Switcher Tabs */}
          <div className="flex flex-wrap gap-2">
            {excerpts.map((excerpt, idx) => (
              <button
                key={excerpt.title}
                onClick={() => {
                  playTick();
                  setSelectedExcerpt(idx);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedExcerpt === idx
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                    : 'bg-white/80 dark:bg-stone-900/80 text-ink-secondary dark:text-ink-dark-secondary border border-ink-border dark:border-white/10 hover:text-ink-primary dark:hover:text-white'
                }`}
              >
                0{idx + 1} / {excerpt.chapter.split('·')[0].trim()}
              </button>
            ))}
          </div>

          {/* Selected Excerpt Reading Card */}
          <motion.div
            key={selectedExcerpt}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl bg-stone-100/80 dark:bg-stone-900/60 border border-ink-border/80 dark:border-white/10 space-y-4 shadow-glass-sm"
          >
            <div className="flex items-center justify-between text-xs font-mono text-ink-tertiary dark:text-ink-dark-tertiary border-b border-ink-border/60 dark:border-white/10 pb-3">
              <span>{excerpts[selectedExcerpt].chapter}</span>
              <span>ESSAY EXCERPT</span>
            </div>
            <h3 className="text-lg font-serif font-medium text-ink-primary dark:text-ink-dark-primary">
              {excerpts[selectedExcerpt].title}
            </h3>
            <p
              className={`font-serif italic text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-normal pt-2 ${
                fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              }`}
            >
              "{excerpts[selectedExcerpt].content}"
            </p>
          </motion.div>
        </section>

        {/* Table of Contents */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
              Table of Contents
            </h2>
            <span className="font-mono text-xs text-ink-tertiary dark:text-ink-dark-tertiary">6 CHAPTERS</span>
          </div>

          <div className="space-y-2">
            {tableOfContents.map((chap) => (
              <div
                key={chap.num}
                className="flex items-center justify-between p-4 rounded-xl bg-white/85 dark:bg-stone-900/80 border border-ink-border/60 dark:border-white/10 text-xs sm:text-sm text-ink-primary dark:text-ink-dark-primary shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-ink-tertiary dark:text-ink-dark-tertiary text-xs">{chap.num}</span>
                  <span className="font-medium">{chap.title}</span>
                </div>
                <span className="font-mono text-[11px] text-ink-tertiary dark:text-ink-dark-tertiary">{chap.pages}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};
