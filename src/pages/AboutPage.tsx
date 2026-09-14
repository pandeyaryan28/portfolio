import React from 'react';
import { Link } from '../context/RouterContext';
import { ArrowRight, Sparkles, Cpu, BookOpen, Layers, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const AboutPage: React.FC = () => {
  const areas = [
    {
      title: 'Digital Systems & Product Architecture',
      icon: Sparkles,
      desc: 'Architecting complete products and real-time platforms with high operational velocity, clean ergonomics, and resilient infrastructure.',
    },
    {
      title: 'Physical Systems & Hardware Prototyping',
      icon: Cpu,
      desc: 'Engineering physical wearables and acoustic prototypes using 3D CAD modeling, sound isolation chambers, and titanium fabrication.',
    },
    {
      title: 'Operational Workflows & Systems Design',
      icon: Layers,
      desc: 'Designing end-to-end operational pipelines—from hospital FEFO medication queues to multi-tier enterprise approval systems.',
    },
    {
      title: 'First-Principles Research & Writing',
      icon: BookOpen,
      desc: 'Author of "The System Is Being Rewritten" (100+ pages), investigating compute scaling, physical energy limits, and distribution mechanics.',
    },
  ];

  const coreStrengths = [
    'Product Strategy',
    'Systems Architecture',
    'Physical Prototyping',
    'CAD & Acoustics',
    'Rapid 0-to-1 Execution',
    'Real-Time Platforms',
    'React 19 & TypeScript',
    'Hardware Ergonomics',
    'Distribution Mechanics',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>About</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Hi, I'm Aryan Pandey.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
          I'm an innovator and builder. I turn ambitious ideas and complex problems into operating reality.
        </p>
      </div>

      {/* Main Narrative - Focused on Innovator & Builder */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25 }}
        className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white space-y-4 text-base text-gray-700 leading-relaxed shadow-xs"
      >
        <p>
          I focus on building products that solve real problems from first principles. Rather than staying confined within conventional developer or engineering silos, I operate across the complete product lifecycle—from product vision, architectural design, and system workflows to physical hardware prototyping.
        </p>
        <p>
          Whether that means cutting hospital triage and check-in times to under 10 seconds in{' '}
          <a
            href={SITE_LINKS.projects.unicare.url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-gray-950 underline decoration-gray-300 hover:decoration-black inline-flex items-center gap-0.5"
          >
            UniCare <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 inline" />
          </a>
          , unifying team discussions and execution gates in{' '}
          <a
            href={SITE_LINKS.projects.guildOrbit.url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-gray-950 underline decoration-gray-300 hover:decoration-black inline-flex items-center gap-0.5"
          >
            Guild Orbit <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 inline" />
          </a>
          , or engineering acoustic titanium wearables in{' '}
          <a
            href={SITE_LINKS.projects.nullwave.url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-gray-950 underline decoration-gray-300 hover:decoration-black inline-flex items-center gap-0.5"
          >
            Nullware (NullWave) <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 inline" />
          </a>
          , my mission is always to build clean, durable systems that work in the real world.
        </p>
      </motion.div>

      {/* What I Focus On */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 shadow-xs hover:border-gray-300"
              >
                <div className="flex items-center gap-2 text-gray-900">
                  <Icon className="w-4 h-4 text-gray-700" />
                  <h3 className="text-sm font-semibold">{area.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {area.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Core Competencies & Execution */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Capabilities & Focus Areas</h2>
        <div className="flex flex-wrap gap-2">
          {coreStrengths.map((strength) => (
            <motion.span
              key={strength}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.15 }}
              className="px-3 py-1.5 rounded-md border border-gray-200 bg-white text-xs font-mono text-gray-700 shadow-2xs cursor-default"
            >
              {strength}
            </motion.span>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
      >
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">Have an ambitious venture or product?</h3>
          <p className="text-sm text-gray-600">
            I'm always open to discussing high-impact products, physical computing, and technical partnerships.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-all shrink-0 inline-flex items-center gap-1.5 shadow-xs hover:scale-[1.01] active:scale-[0.99]"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
};
