import React from 'react';
import { Link } from '../context/RouterContext';
import { HeroBackgroundCanvas } from '../components/visual/HeroBackgroundCanvas';
import { BookMockupTheSystem } from '../components/visual/BookMockupTheSystem';
import { BookMockupDistribution } from '../components/visual/BookMockupDistribution';
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
            <span>Aryan Pandey · Product Operator & Systems Builder</span>
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
            I operate at the intersection of product strategy, operational architecture, and rapid execution. I step into high-ambiguity environments to diagnose broken workflows, build lean systems, and ship working zero-to-one products — from clinical healthcare infrastructure to custom voice hardware.
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
                <span className="text-xs font-mono text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                  Live Production
                </span>
              </div>
              <span className="text-xs font-mono text-gray-400">01 of 03</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950 group-hover:text-black">
                UniCare
              </h3>
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                A unified clinical operating system connecting patient intake, doctor consultations, and pharmacy inventory. Built to eliminate 45-minute lobby queues, prevent expensive medicine expiration write-offs with First-Expired, First-Out routing, and reduce prescription costs by up to 90% via real-time generic substitution.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase block">Intake Protocol</span>
                  <span className="text-sm font-semibold text-neutral-900 block">Under 10 Seconds</span>
                  <p className="text-xs text-neutral-600 font-normal">Contactless QR token check-in replaces paper logs</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase block">Prescription Cost</span>
                  <span className="text-sm font-semibold text-neutral-900 block">Up to 90% Savings</span>
                  <p className="text-xs text-neutral-600 font-normal">Direct bioequivalent generic substitution</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase block">Dispensary Waste</span>
                  <span className="text-sm font-semibold text-neutral-900 block">Zero Expired Losses</span>
                  <p className="text-xs text-neutral-600 font-normal">Automated FEFO inventory batch allocation</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <a
                  href={SITE_LINKS.projects.unicare.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium inline-flex items-center gap-1.5 transition-colors border border-neutral-200"
                >
                  <Globe className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Visit UniCare</span>
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
                <span className="text-xs font-mono text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                  Live Production
                </span>
              </div>
              <span className="text-xs font-mono text-gray-400">02 of 03</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950 group-hover:text-black">
                Guild Orbit
              </h3>
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                An integrated team execution platform uniting sprint deliverables, contextual discussion threads, and formal approval gates into one clear system. Designed to stop decisions from vanishing in chat streams, eliminate recurring status update meetings, and ensure transparent governance before launch.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase block">Context Retention</span>
                  <span className="text-sm font-semibold text-neutral-900 block">Deliverable-Tied Threads</span>
                  <p className="text-xs text-neutral-600 font-normal">Discussions remain anchored to work items permanently</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase block">Meeting Reduction</span>
                  <span className="text-sm font-semibold text-neutral-900 block">50% Fewer Sync Calls</span>
                  <p className="text-xs text-neutral-600 font-normal">Live board telemetry replaces manual check-in pings</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase block">Release Governance</span>
                  <span className="text-sm font-semibold text-neutral-900 block">Multi-Stage Sign-Offs</span>
                  <p className="text-xs text-neutral-600 font-normal">Mandatory stakeholder review gates before deployment</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <a
                  href={SITE_LINKS.projects.guildOrbit.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium inline-flex items-center gap-1.5 transition-colors border border-neutral-200"
                >
                  <Globe className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Visit Guild Orbit</span>
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
                <span className="text-xs font-mono text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                  Functional Prototype
                </span>
              </div>
              <span className="text-xs font-mono text-gray-400">03 of 03</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-950 group-hover:text-black">
                Null Wave
              </h3>
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                An ergonomic acoustic wearable engineered to contain voice audio at the mouth for confidential business calls and voice computing in public environments. Traps speech acoustic waves to drop vocal volume by over 40 decibels while silent perimeter micro-channels maintain continuous fresh air circulation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase block">Acoustic Shield</span>
                  <span className="text-sm font-semibold text-neutral-900 block">40+ dB Reduction</span>
                  <p className="text-xs text-neutral-600 font-normal">Converts conversational speech to an inaudible murmur</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase block">Micro-Airflow</span>
                  <span className="text-sm font-semibold text-neutral-900 block">Silent Circulation</span>
                  <p className="text-xs text-neutral-600 font-normal">Zero heat or humidity buildup without mic noise</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <span className="text-xs font-mono text-neutral-500 uppercase block">Materials</span>
                  <span className="text-sm font-semibold text-neutral-900 block">Titanium & Silicone</span>
                  <p className="text-xs text-neutral-600 font-normal">Articulating jaw seal under 300g travel weight</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <a
                  href={SITE_LINKS.projects.nullwave.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium inline-flex items-center gap-1.5 transition-colors border border-neutral-200"
                >
                  <Globe className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Visit NullWave</span>
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
                <span className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">Published</span>
              </div>
              <span className="text-xs font-mono text-gray-400">01 of 02</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[260px]">
                  <BookMockupTheSystem />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                    Focus: Computing Physics & Energy Constraints
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 group-hover:text-black">
                    The System Is Being Rewritten
                  </h3>
                </div>

                <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                  <span className="text-xs font-mono font-medium text-neutral-600 uppercase tracking-wider block">
                    Core Idea Behind the Book
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed font-normal">
                    Modern technology was built on the silent premise of infinite cheap energy, predictable semiconductor scaling, and frictionless supply chains. As physical power limits, thermal bottlenecks, and geopolitical realignments collide, those assumptions are breaking down. This book provides a strategic blueprint for how computing infrastructure, power availability, and architectural decisions will reshape technology over the next decade.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={SITE_LINKS.writing.theSystem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium inline-flex items-center gap-1.5 transition-colors border border-neutral-200"
                  >
                    <span>Amazon Kindle Edition</span>
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
              </div>
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
                <span>Essay Collection & Framework</span>
                <span className="text-gray-300">·</span>
                <span className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">Drafting</span>
              </div>
              <span className="text-xs font-mono text-gray-400">02 of 02</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[260px]">
                  <BookMockupDistribution />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                    Focus: Organic Distribution & Compounding Product Loops
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 group-hover:text-black">
                    Building Distribution
                  </h3>
                </div>

                <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                  <span className="text-xs font-mono font-medium text-neutral-600 uppercase tracking-wider block">
                    Core Idea Behind the Book
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed font-normal">
                    Having an audience is not the same as owning distribution. Relying on social media algorithms means renting attention from platforms that can slash reach overnight. This work outlines how durable products build organic distribution directly into product mechanics, user workflows, and structural referral loops that compound sustainably without continuous ad spend.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-gray-500 font-mono text-xs">Research in progress</span>

                  <Link
                    to="/writing/building-distribution"
                    className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-medium inline-flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <span>Read Working Structure</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Execution Statement */}
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
              Durable value is created when clear problem diagnosis, rigorous systems architecture, and rapid execution unite. From navigating operational chaos on the ground to shipping resilient software and hardware, I focus on building systems that solve root problems and scale with clarity.
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

