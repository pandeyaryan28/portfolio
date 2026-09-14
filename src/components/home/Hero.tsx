import React, { useRef } from 'react';
import { useRouter } from '../../context/RouterContext';
import { useSound } from '../../context/SoundContext';
import { Hero3DCanvas } from '../visual/Hero3DCanvas';
import { ArrowRight, Terminal, Compass } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { navigate } = useRouter();
  const { playClick } = useSound();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const yCanvas = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);

  const metrics = [
    { value: '05', label: 'Systems & Ventures', sub: 'From 0 to 1 tangible execution' },
    { value: '100+', label: 'Pages Published', sub: 'Macro technological & systemic shifts' },
    { value: 'Hardware + Cloud', label: 'Full-Stack Architecture', sub: 'Acoustic wearables & clinical operating systems' },
    { value: '<10s', label: 'Clinical Flow', sub: 'Self-sovereign health telemetry speed' },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[95vh] flex flex-col justify-between pt-24 sm:pt-32 pb-8 px-4 sm:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-amber-200/25 via-stone-200/20 to-transparent dark:from-amber-950/20 dark:via-stone-900/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Content Grid */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Left Column: Editorial Statement */}
        <motion.div style={{ y: yText }} className="lg:col-span-7 space-y-6 sm:space-y-7">
          {/* Position Marker & Telemetry Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 dark:bg-stone-900/85 border border-ink-border dark:border-white/10 backdrop-blur-md font-mono text-[11px] text-ink-secondary dark:text-ink-dark-secondary shadow-glass-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-ink-primary dark:text-ink-dark-primary uppercase tracking-wider">
              Aryan Pandey
            </span>
            <span className="text-ink-tertiary dark:text-ink-dark-tertiary">/</span>
            <span className="tracking-widest">SYSTEMS ARCHITECT & OPERATOR</span>
          </motion.div>

          {/* Primary Statement with Editorial Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[68px] font-sans font-medium tracking-tight text-ink-primary dark:text-ink-dark-primary leading-[1.06] text-balance"
          >
            I architect, research and execute systems{' '}
            <span className="font-serif italic font-light text-stone-600 dark:text-stone-300">from 0 to 1.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-ink-secondary dark:text-ink-dark-secondary leading-relaxed font-light max-w-xl text-balance"
          >
            Working across healthcare infrastructure, collaborative operating systems, wearable hardware acoustics, and distribution economics to transform complex problems into coherent products.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3.5 pt-1"
          >
            <button
              onClick={() => {
                playClick();
                navigate('#work');
              }}
              data-cursor-text="EXPLORE"
              className="group px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-stone-200 text-white dark:text-neutral-900 text-xs sm:text-sm font-medium transition-all duration-300 shadow-glass-md flex items-center gap-2.5"
            >
              <span>Explore Live Systems</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                playClick();
                navigate('#manifesto');
              }}
              className="group px-5 py-3.5 rounded-xl bg-white/80 dark:bg-stone-900/80 hover:bg-white dark:hover:bg-stone-800 text-ink-primary dark:text-ink-dark-primary text-xs sm:text-sm font-medium border border-ink-border dark:border-white/10 transition-all duration-300 shadow-xs flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-amber-500" />
              <span>Systems Manifesto</span>
            </button>

            <button
              onClick={() => {
                playClick();
                navigate('#capabilities');
              }}
              className="group px-4 py-3.5 rounded-xl text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary text-xs sm:text-sm font-mono transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Tech Matrix</span>
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
          <div
            data-cursor-text="ORBIT"
            className="w-full h-[370px] sm:h-[450px] rounded-3xl bg-white/50 dark:bg-stone-950/60 backdrop-blur-md border border-ink-border dark:border-white/10 relative shadow-glass-lg overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-amber-500/40"
          >
            <Hero3DCanvas />
          </div>
        </motion.div>
      </motion.div>

      {/* Metrics Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mt-10 sm:mt-14 pt-6 border-t border-ink-border/60 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {metrics.map((item) => (
          <div key={item.label} className="p-3 rounded-xl bg-stone-50/70 dark:bg-stone-900/40 border border-ink-border/40 dark:border-white/5">
            <span className="font-mono text-xl sm:text-2xl font-bold text-ink-primary dark:text-ink-dark-primary block">
              {item.value}
            </span>
            <span className="text-xs font-semibold text-ink-primary dark:text-ink-dark-primary block mt-0.5">
              {item.label}
            </span>
            <span className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary font-light block">
              {item.sub}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
