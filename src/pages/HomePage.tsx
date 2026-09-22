import React from 'react';
import { Link } from '../context/RouterContext';
import { HeroBackgroundCanvas } from '../components/visual/HeroBackgroundCanvas';
import { ArrowRight, Globe, ExternalLink, BookOpen } from 'lucide-react';
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
            <span>Aryan Pandey · Founder's Office and Product Builder</span>
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
            I operate with a founder's office mindset. I find broken workflows, design simple solutions, and build working products from the ground up, from clinical healthcare operations to private voice hardware.
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

      {/* Featured Projects - Single project revealed one at a time with downward slide on scroll */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Featured Projects</h2>
            <p className="text-sm text-gray-500 mt-1">
              Working systems, operating platforms, and physical products built from the ground up.
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

        {/* Vertical Stack: One project revealed at a time as you scroll */}
        <div className="space-y-16">
          {/* Project 1: UniCare */}
          <motion.div
            initial={{ opacity: 0, y: -48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 hover:border-gray-400 hover:shadow-md transition-all space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-500 uppercase">Healthcare Operations</span>
                <span className="text-gray-300">·</span>
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Live MVP
                </span>
              </div>
              <span className="text-xs font-mono text-gray-400">01 of 03</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950 group-hover:text-black">
                UniCare
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 text-sm">
                <div className="space-y-1.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-mono font-medium text-red-700 uppercase block">The Problem</span>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    Outpatient clinics suffer from chaotic paper registrations, 45 minute waiting times, lost medical histories, and heavy financial losses from expired pharmacy medicines.
                  </p>
                </div>
                <div className="space-y-1.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-mono font-medium text-emerald-800 uppercase block">The Solution and Impact</span>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    Connects patient intake, doctor notes, and pharmacy stock into one live screen. Patients check in within 10 seconds via QR code, while generic medicine matching cuts drug bills by up to 90 percent.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <a
                  href={SITE_LINKS.projects.unicare.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium inline-flex items-center gap-1.5 transition-colors border border-emerald-200"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visit unicare.space</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              <Link
                to="/work/unicare"
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium inline-flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Project 2: Guild Orbit */}
          <motion.div
            initial={{ opacity: 0, y: -48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 hover:border-gray-400 hover:shadow-md transition-all space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-500 uppercase">Team Execution Workspace</span>
                <span className="text-gray-300">·</span>
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Live MVP
                </span>
              </div>
              <span className="text-xs font-mono text-gray-400">02 of 03</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950 group-hover:text-black">
                Guild Orbit
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 text-sm">
                <div className="space-y-1.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-mono font-medium text-red-700 uppercase block">The Problem</span>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    Growing teams lose momentum when project conversations happen in chat apps, tasks live in ticket trackers, and approval decisions get buried across long email threads.
                  </p>
                </div>
                <div className="space-y-1.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-mono font-medium text-emerald-800 uppercase block">The Solution and Impact</span>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    Combines team conversations, sprint task boards, and formal approval gates into a single workspace. Every chat thread is tied directly to a deliverable, ending pointless status check meetings.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <a
                  href={SITE_LINKS.projects.guildOrbit.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium inline-flex items-center gap-1.5 transition-colors border border-blue-200"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visit guildorbit.com</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              <Link
                to="/work/guild-orbit"
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium inline-flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Project 3: Null Wave */}
          <motion.div
            initial={{ opacity: 0, y: -48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 hover:border-gray-400 hover:shadow-md transition-all space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-500 uppercase">Acoustic Wearable Hardware</span>
                <span className="text-gray-300">·</span>
                <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  Prototype Testing
                </span>
              </div>
              <span className="text-xs font-mono text-gray-400">03 of 03</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950 group-hover:text-black">
                Null Wave
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 text-sm">
                <div className="space-y-1.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-mono font-medium text-red-700 uppercase block">The Problem</span>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    Taking confidential calls or dictating thoughts to AI in public places like airports, cafes, or trains is awkward and leaks sensitive company data to strangers standing nearby.
                  </p>
                </div>
                <div className="space-y-1.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-mono font-medium text-emerald-800 uppercase block">The Solution and Impact</span>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    An ergonomic wearable mask made of titanium and soft silicone that captures and contains sound at the mouth. It drops speech volume by over 40 decibels, while silent airflow keeps breathing completely natural.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <a
                  href={SITE_LINKS.projects.nullwave.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-medium inline-flex items-center gap-1.5 transition-colors border border-amber-200"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visit nullwave.in</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              <Link
                to="/work/nullwave"
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium inline-flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Writing & Books - Single book revealed one at a time with downward slide on scroll */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Writing and Books</h2>
            <p className="text-sm text-gray-500 mt-1">
              Deep research into computing limits, energy reality, and product distribution.
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

        {/* Vertical Stack: One book revealed at a time as you scroll */}
        <div className="space-y-16">
          {/* Book 1: The System Is Being Rewritten */}
          <motion.div
            initial={{ opacity: 0, y: -48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 hover:border-gray-400 hover:shadow-md transition-all space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                <BookOpen className="w-3.5 h-3.5 text-gray-600" />
                <span>Book · Over 100 Pages</span>
                <span className="text-gray-300">·</span>
                <span className="font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">Published</span>
              </div>
              <span className="text-xs font-mono text-gray-400">01 of 02</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 group-hover:text-black">
                The System Is Being Rewritten
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 text-sm">
                <div className="space-y-1.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-mono font-medium text-gray-700 uppercase block">The Core Problem</span>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    Modern tech businesses were built assuming endless cheap electrical power, predictable microchip scaling, and unbroken supply chains. Those assumptions are reaching their physical limits.
                  </p>
                </div>
                <div className="space-y-1.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-mono font-medium text-gray-700 uppercase block">The Practical Takeaway</span>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    A clear strategic guide for builders and founders on how computing infrastructure, physical power constraints, and economic incentives will shape technology over the next decade.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <a
                href={SITE_LINKS.writing.theSystem.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 font-medium inline-flex items-center gap-1.5 transition-colors border border-amber-200"
              >
                <span>Amazon Ebook</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <Link
                to="/writing/the-system"
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium inline-flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Read Full Outline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Book 2: Building Distribution */}
          <motion.div
            initial={{ opacity: 0, y: -48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 hover:border-gray-400 hover:shadow-md transition-all space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                <BookOpen className="w-3.5 h-3.5 text-gray-600" />
                <span>Essay Collection and Book</span>
                <span className="text-gray-300">·</span>
                <span className="font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded">In Progress</span>
              </div>
              <span className="text-xs font-mono text-gray-400">02 of 02</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 group-hover:text-black">
                Building Distribution
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 text-sm">
                <div className="space-y-1.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-mono font-medium text-gray-700 uppercase block">The Core Problem</span>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    Most new companies fail because founders confuse having an online audience with owning distribution. Renting attention from social media algorithms leaves products vulnerable to sudden traffic collapses.
                  </p>
                </div>
                <div className="space-y-1.5 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="text-xs font-mono font-medium text-gray-700 uppercase block">The Practical Takeaway</span>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    How to engineer distribution loops directly into product usage, customer referral mechanics, and lasting direct channels that compound automatically over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <span className="text-gray-500 font-mono text-xs">Writing in progress</span>

              <Link
                to="/writing/building-distribution"
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium inline-flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Read Working Structure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder's Office Mindset Statement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 space-y-6 shadow-xs"
        >
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Building from first principles.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              I believe real value is created when clear problem definition, intuitive design, and practical engineering come together. I focus on creating systems that work reliably and drive measurable results.
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
