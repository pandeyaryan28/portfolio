import React from 'react';
import { Link } from '../context/RouterContext';
import { HeroBackgroundCanvas } from '../components/visual/HeroBackgroundCanvas';
import { ArrowRight, ArrowUpRight, Globe, ExternalLink, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section with Full-Bleed 3D Background */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-gray-100">
        {/* 3D Kinetic Structure in Background */}
        <HeroBackgroundCanvas />

        {/* Hero Content with Subtle Entrance Animation */}
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-20 relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Aryan Pandey · Innovator & Builder</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl font-sans font-semibold tracking-tight text-gray-950 leading-[1.12] max-w-3xl"
          >
            Building products that solve real problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl"
          >
            I conceive, design, and build end-to-end systems and physical-digital products—from clinical hospital operating software to wearable acoustic hardware.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/work"
              className="px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-all inline-flex items-center gap-2 shadow-xs hover:shadow-sm hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              className="px-5 py-3 rounded-lg bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-sm font-medium transition-all shadow-xs hover:shadow-sm hover:scale-[1.01] active:scale-[0.99]"
            >
              About Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Featured Ventures & Projects</h2>
            <p className="text-sm text-gray-500 mt-1">
              Working systems, operating platforms, and hardware built from scratch.
            </p>
          </div>
          <Link
            to="/work"
            className="text-sm font-medium text-gray-600 hover:text-gray-950 inline-flex items-center gap-1 self-start sm:self-auto group transition-colors"
          >
            <span>All projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1: UniCare */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500 uppercase">Healthcare OS</span>
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Live MVP
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black">
                UniCare
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Connects patient check-in, doctor charting, and pharmacy stock into one instant system with QR codes.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs">
              <a
                href={SITE_LINKS.projects.unicare.url}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-900 font-medium inline-flex items-center gap-1 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>unicare.space</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <Link
                to="/work/unicare"
                className="font-medium text-gray-900 hover:text-black group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
              >
                Details <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Project 2: Guild Orbit */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500 uppercase">Team Workspace</span>
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Live MVP
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black">
                Guild Orbit
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A workspace bringing team chat, sprint Kanban boards, and multi-tier approval gates together.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs">
              <a
                href={SITE_LINKS.projects.guildOrbit.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:text-blue-900 font-medium inline-flex items-center gap-1 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>guildorbit.com</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <Link
                to="/work/guild-orbit"
                className="font-medium text-gray-900 hover:text-black group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
              >
                Details <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Project 3: Nullware / NullWave */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500 uppercase">Hardware Prototype</span>
                <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  Prototype
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black">
                Nullware (NullWave)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                An acoustic wearable mask made of titanium and silicone that lets you speak privately in public spaces.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs">
              <a
                href={SITE_LINKS.projects.nullwave.url}
                target="_blank"
                rel="noreferrer"
                className="text-amber-700 hover:text-amber-900 font-medium inline-flex items-center gap-1 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>nullwave.in</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <Link
                to="/work/nullwave"
                className="font-medium text-gray-900 hover:text-black group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
              >
                Details <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Writing Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Writing & Books</h2>
            <p className="text-sm text-gray-500 mt-1">
              Deep dives into computing, energy realism, and distribution.
            </p>
          </div>
          <Link
            to="/writing"
            className="text-sm font-medium text-gray-600 hover:text-gray-950 inline-flex items-center gap-1 self-start sm:self-auto group transition-colors"
          >
            <span>All writing</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Book 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-gray-600" />
                  <span>Book · 100+ Pages</span>
                </span>
                <span className="font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">Published</span>
              </div>
              <h3 className="text-xl font-serif text-gray-900 group-hover:text-black">
                The System Is Being Rewritten
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                How energy limits, computing infrastructure, and economic systems are changing the next decade of technology.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <a
                href={SITE_LINKS.writing.theSystem.url}
                target="_blank"
                rel="noreferrer"
                className="text-amber-800 hover:text-amber-950 font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>Amazon Ebook</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <Link
                to="/writing/the-system"
                className="font-medium text-gray-900 hover:text-black group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
              >
                <span>Read outline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Book 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-gray-600" />
                  <span>Essay Collection</span>
                </span>
                <span className="font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded">In Progress</span>
              </div>
              <h3 className="text-xl font-serif text-gray-900 group-hover:text-black">
                Building Distribution
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Why having an audience is not the same as having distribution. How products build real, lasting channels.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-400 font-mono text-[11px]">Writing in Progress</span>

              <Link
                to="/writing/building-distribution"
                className="font-medium text-gray-900 hover:text-black group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
              >
                <span>Read structure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovator Statement */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 space-y-6 shadow-xs"
        >
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Building from first principles.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              I believe real innovation happens when product architecture, intuitive design, and physical engineering converge. I build systems that work reliably in the real world.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-all shadow-xs hover:scale-[1.01] active:scale-[0.99]"
            >
              More about me
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
