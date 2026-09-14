import React, { useState } from 'react';
import { StatusPill } from '../ui/StatusPill';
import { BookMockupDistribution } from '../visual/BookMockupDistribution';
import { DistributionInteractiveMatrix } from '../visual/DistributionInteractiveMatrix';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { ProjectDetailModal } from '../ui/ProjectDetailModal';
import { BuildingDistributionDetail } from '../../pages/BuildingDistributionDetail';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const BuildingDistributionCard: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ParallaxTiltCard maxTilt={4}>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF9F5]/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-ink-border shadow-glass-sm hover:shadow-glass-md transition-all duration-300 space-y-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-ink-tertiary">04</span>
              <span className="w-1 h-1 rounded-full bg-ink-tertiary"></span>
              <span className="font-mono text-xs text-ink-secondary uppercase tracking-wider">
                eBook / In progress
              </span>
            </div>
            <StatusPill status="WRITING" type="writing" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Info */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-stone-700 bg-stone-100/90 px-2.5 py-0.5 rounded-md border border-stone-200/80 mb-2">
                  <BookOpen className="w-3 h-3" /> Systems & Distribution Framework
                </div>
                <h3 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-ink-primary">
                  Building Distribution
                </h3>
                <p className="mt-2.5 text-base text-ink-secondary leading-relaxed font-light">
                  A practical exploration of how distribution is actually built in a world where everyone has access to social media.
                </p>
              </div>

              {/* Core Thesis */}
              <div className="p-4 rounded-2xl bg-stone-100/80 border-l-2 border-l-neutral-900 border-y border-r border-ink-border/60">
                <span className="font-mono text-[10px] text-ink-tertiary uppercase tracking-wider block mb-1">
                  Core Thesis
                </span>
                <p className="text-sm font-serif italic text-ink-primary">
                  “Having an audience is not the same as having distribution.”
                </p>
              </div>

              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-light">
                Marketing, audience building and distribution are often treated as the same thing. They aren't. This book explores how products, companies and individuals can build systems that consistently move ideas to the people who need them.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-all shadow-glass-sm"
                >
                  <span>Follow the book</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Stage */}
            <div className="lg:col-span-6">
              <BookMockupDistribution />
            </div>
          </div>

          {/* Interactive Distribution Matrix simulation */}
          <div className="pt-4 border-t border-ink-border/50">
            <DistributionInteractiveMatrix />
          </div>
        </motion.article>
      </ParallaxTiltCard>

      {/* Deep-Dive Modal */}
      <ProjectDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Building Distribution"
        category="eBook / In progress"
      >
        <BuildingDistributionDetail isModal={true} onClose={() => setModalOpen(false)} />
      </ProjectDetailModal>
    </>
  );
};
