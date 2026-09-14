import React from 'react';
import { Link } from '../context/RouterContext';
import { HeroBackgroundCanvas } from '../components/visual/HeroBackgroundCanvas';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section with Full-Bleed 3D Background */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-gray-100">
        {/* 3D Kinetic Structure in Background */}
        <HeroBackgroundCanvas />

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-20 relative z-10 space-y-6">
          <div className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
            Aryan Pandey · Innovator & Engineer
          </div>

          <h1 className="text-4xl sm:text-6xl font-sans font-semibold tracking-tight text-gray-950 leading-[1.12] max-w-3xl">
            Building products that solve real problems.
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl">
            I design and build software systems and hardware prototypes—from clinical hospital software to wearable acoustic devices.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/work"
              className="px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-colors inline-flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              className="px-5 py-3 rounded-lg bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-sm font-medium transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Featured Projects</h2>
            <p className="text-sm text-gray-500 mt-1">
              Working systems built from scratch.
            </p>
          </div>
          <Link
            to="/work"
            className="text-sm font-medium text-gray-600 hover:text-gray-950 inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>All projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1: UniCare */}
          <Link
            to="/work/unicare"
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-400 hover:shadow-xs transition-all flex flex-col justify-between"
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

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="font-mono">React · WebSockets · QR</span>
              <span className="font-medium text-gray-900 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                Details <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Project 2: Guild Orbit */}
          <Link
            to="/work/guild-orbit"
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-400 hover:shadow-xs transition-all flex flex-col justify-between"
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

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="font-mono">React · Tasks · Approvals</span>
              <span className="font-medium text-gray-900 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                Details <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Project 3: NullWave */}
          <Link
            to="/work/nullwave"
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-400 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500 uppercase">Hardware Prototype</span>
                <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  Prototype
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black">
                NullWave
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                An acoustic wearable mask made of titanium and silicone that lets you speak privately in public spaces.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="font-mono">Titanium · Acoustics · CAD</span>
              <span className="font-medium text-gray-900 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                Details <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Writing Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Writing & Books</h2>
            <p className="text-sm text-gray-500 mt-1">
              Deep dives into computing, energy, and distribution.
            </p>
          </div>
          <Link
            to="/writing"
            className="text-sm font-medium text-gray-600 hover:text-gray-950 inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>All writing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Book 1 */}
          <Link
            to="/writing/the-system"
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-400 transition-all space-y-3"
          >
            <div className="flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Book · 100+ Pages</span>
              <span className="font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">Published</span>
            </div>
            <h3 className="text-xl font-serif text-gray-900 group-hover:text-black">
              The System Is Being Rewritten
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              How energy limits, computing infrastructure, and economic systems are changing the next decade of technology.
            </p>
            <div className="pt-2 text-xs font-medium text-gray-900 inline-flex items-center gap-1">
              <span>Read outline & excerpts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Book 2 */}
          <Link
            to="/writing/building-distribution"
            className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-400 transition-all space-y-3"
          >
            <div className="flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Essay Collection</span>
              <span className="font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded">In Progress</span>
            </div>
            <h3 className="text-xl font-serif text-gray-900 group-hover:text-black">
              Building Distribution
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Why having an audience is not the same as having distribution. How products build real, lasting channels.
            </p>
            <div className="pt-2 text-xs font-medium text-gray-900 inline-flex items-center gap-1">
              <span>Read working structure</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* Innovator Statement */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 space-y-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Building from the ground up.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              I believe real innovation happens when software architecture, clean design, and physical engineering come together. I build systems that work in the real world.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/about"
              className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-colors"
            >
              More about me
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
