import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { StatusPill } from '../components/ui/StatusPill';
import { SectionBadge } from '../components/ui/SectionBadge';
import { BookMockupDistribution } from '../components/visual/BookMockupDistribution';
import { DistributionInteractiveMatrix } from '../components/visual/DistributionInteractiveMatrix';
import { useSound } from '../context/SoundContext';
import { useToast } from '../components/ui/Toast';
import { ArrowLeft, Check, Bell, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface BuildingDistributionDetailProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const BuildingDistributionDetail: React.FC<BuildingDistributionDetailProps> = ({ isModal = false, onClose }) => {
  const { navigate } = useRouter();
  const { playClick, playPop } = useSound();
  const { showToast } = useToast();
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleFollow = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      playPop();
      setSubscribed(true);
      showToast('Subscribed to book updates!');
    }
  };

  const tableOfContents = [
    {
      part: 'Part I',
      title: 'The Illusion of Audience',
      desc: 'Why vanity impressions, follower counts, and broadcast feeds fail to translate into durable leverage.',
    },
    {
      part: 'Part II',
      title: 'Mechanisms of Transfer',
      desc: 'How information and value actually move between networks, nodes, and decision-makers.',
    },
    {
      part: 'Part III',
      title: 'Distribution as an Operating Loop',
      desc: 'Embedding distribution hooks directly into the product core and organizational incentives.',
    },
    {
      part: 'Part IV',
      title: 'Defensible Network Gravity',
      desc: 'Building compounding momentum that survives platform algorithmic shifts.',
    },
  ];

  const handleBack = () => {
    playClick();
    if (isModal && onClose) {
      onClose();
    } else {
      navigate('/#ongoing');
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
          <SectionBadge label="PUBLICATION 04" index="DRAFTING" />
          <span className="font-mono text-xs text-ink-tertiary dark:text-ink-dark-tertiary">/</span>
          <span className="font-mono text-xs text-ink-secondary dark:text-ink-dark-secondary uppercase">eBook / In progress</span>
          <StatusPill status="WRITING" type="writing" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-ink-primary dark:text-ink-dark-primary">
          Building Distribution
        </h1>

        <p className="text-lg sm:text-xl text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
          A practical exploration of how distribution is actually built in a world where everyone has access to social media.
        </p>

        <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-ink-border/60 dark:border-white/10 py-4 text-xs font-mono">
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Author</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">Aryan Pandey</span>
          </div>
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Format</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">Essay Collection / Book</span>
          </div>
          <div>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary block text-[10px] uppercase">Status</span>
            <span className="text-ink-primary dark:text-ink-dark-primary font-medium">Writing & Drafting</span>
          </div>
        </div>
      </div>

      {/* Visual Book Cover Stage */}
      <div className="my-10 sm:my-14 max-w-md mx-auto">
        <BookMockupDistribution />
      </div>

      {/* Editorial Content */}
      <div className="space-y-14 max-w-3xl">
        {/* Core Thesis */}
        <section className="space-y-4">
          <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
            The Core Thesis
          </h2>
          <div className="p-8 rounded-3xl bg-stone-100/90 dark:bg-stone-900/70 border-l-4 border-l-neutral-900 dark:border-l-white border-y border-r border-ink-border/80 dark:border-white/10 space-y-4 shadow-glass-sm">
            <Quote className="w-8 h-8 text-neutral-400 dark:text-stone-500" />
            <p className="text-xl sm:text-2xl font-serif italic text-ink-primary dark:text-ink-dark-primary leading-snug">
              “Having an audience is not the same as having distribution.”
            </p>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light pt-2">
              Marketing, audience building and distribution are often conflated as the same thing. They aren't. This book explores how products, companies and individuals can build systems that consistently move ideas and leverage to the people who need them.
            </p>
          </div>
        </section>

        {/* Interactive Matrix */}
        <section className="space-y-4">
          <DistributionInteractiveMatrix />
        </section>

        {/* Table of Contents & Structure */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
              Table of Contents / Working Structure
            </h2>
            <span className="font-mono text-xs text-ink-tertiary dark:text-ink-dark-tertiary">4 SECTIONS</span>
          </div>

          <div className="space-y-3">
            {tableOfContents.map((section) => (
              <div
                key={section.part}
                className="p-5 rounded-2xl bg-white/85 dark:bg-stone-900/80 border border-ink-border/60 dark:border-white/10 hover:border-ink-border dark:hover:border-white/20 transition-all space-y-1 shadow-xs"
              >
                <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400 uppercase tracking-widest block font-semibold">
                  {section.part}
                </span>
                <h3 className="text-base font-medium text-ink-primary dark:text-ink-dark-primary">{section.title}</h3>
                <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light pt-1">
                  {section.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Follow the Book Newsletter Box */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-stone-900/80 border border-ink-border dark:border-white/10 shadow-glass-md space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-lg border border-amber-200/60 dark:border-amber-800/60">
              <Bell className="w-3 h-3 text-amber-600 dark:text-amber-400" /> Early Readers & Updates
            </div>
            <h3 className="text-xl sm:text-2xl font-sans font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
              Follow the writing of this book
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light">
              Receive new draft chapters and systems essays as they are written, prior to final publication.
            </p>
          </div>

          {subscribed ? (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>You're following Building Distribution. New chapter drafts will be sent directly.</span>
            </div>
          ) : (
            <form onSubmit={handleFollow} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="px-4 py-3 rounded-xl bg-stone-50 dark:bg-black/50 border border-ink-border dark:border-white/10 text-xs sm:text-sm text-ink-primary dark:text-ink-dark-primary placeholder:text-ink-tertiary dark:placeholder:text-ink-dark-tertiary focus:outline-none focus:ring-1 focus:ring-amber-500 flex-1 font-sans"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-stone-200 text-white dark:text-neutral-900 text-xs sm:text-sm font-medium transition-all shadow-glass-sm shrink-0"
              >
                Follow the book →
              </button>
            </form>
          )}
        </section>
      </div>
    </motion.div>
  );
};
