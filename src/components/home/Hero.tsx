import React, { useRef } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Hero3DCanvas } from '../visual/Hero3DCanvas';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { navigate } = useRouter();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yCanvas = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-10 px-6 sm:px-10 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting and coordinate grid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-stone-200/40 via-amber-100/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Grid: Headline Left + 3D Canvas Right */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Column: Editorial Statement */}
        <motion.div style={{ y: yText }} className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Position Marker */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-ink-border backdrop-blur-md font-mono text-[11px] text-ink-tertiary tracking-editorial uppercase shadow-glass-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Aryan Pandey · Systems Architect</span>
          </motion.div>

          {/* Primary Statement */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-ink-primary leading-[1.08] text-balance"
          >
            I build, research and execute systems from 0 to 1.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-ink-secondary leading-relaxed font-light max-w-xl text-balance"
          >
            I work across products, technology and business, taking ideas from an initial problem to something tangible.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => navigate('#work')}
              className="group px-6 py-3.5 rounded-xl bg-neutral-900 text-[#FAF9F5] text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-all duration-300 shadow-glass-md flex items-center gap-2"
            >
              <span>Explore my work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate('#about')}
              className="group px-6 py-3.5 rounded-xl bg-white/80 hover:bg-white text-ink-primary text-xs sm:text-sm font-medium border border-ink-border transition-all duration-300 hover:shadow-glass-sm flex items-center gap-2"
            >
              <span>About me</span>
              <ArrowRight className="w-4 h-4 text-ink-tertiary group-hover:text-ink-primary group-hover:translate-x-1 transition-all" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Kinetic Canvas Stage */}
        <motion.div
          style={{ y: yCanvas }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="w-full h-[360px] sm:h-[440px] rounded-3xl bg-white/40 backdrop-blur-xs border border-ink-border/40 relative shadow-inner overflow-hidden flex items-center justify-center">
            <Hero3DCanvas />
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="pt-6 sm:pt-8 flex items-center justify-between border-t border-ink-border/50 text-[11px] font-mono text-ink-tertiary"
      >
        <span className="hidden sm:inline">BODY OF WORK · 2024—2026</span>
        <div
          onClick={() => navigate('#work')}
          className="cursor-pointer inline-flex items-center gap-2 hover:text-ink-primary transition-colors mx-auto sm:mx-0"
        >
          <span>SCROLL TO EXPLORE ARCHIVE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-ink-secondary" />
        </div>
        <span className="hidden sm:inline">01 / LIVE SYSTEMS</span>
      </motion.div>
    </section>
  );
};
