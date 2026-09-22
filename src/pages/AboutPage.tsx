import React from 'react';
import { Link } from '../context/RouterContext';
import { ArrowRight, Compass, Cpu, BookOpen, Layers, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';
import { ScrollReveal, ScrollStagger, ScrollItem } from '../components/ui/ScrollReveal';

export const AboutPage: React.FC = () => {
  const areas = [
    {
      title: 'Strategic Systems and Product Architecture',
      icon: Compass,
      desc: 'Designing complete software platforms that eliminate operational bottlenecks, speed up team execution, and deliver clear business results.',
    },
    {
      title: 'Operational Workflows and Systems Design',
      icon: Layers,
      desc: 'Building clear pipelines, from hospital check-in queues and pharmacy inventory management to multi-stage project approval gates.',
    },
    {
      title: 'Physical Systems and Hardware Prototyping',
      icon: Cpu,
      desc: 'Engineering physical wearables and acoustic prototypes using 3D modeling, sound isolation chambers, and titanium fabrication.',
    },
    {
      title: 'First Principles Research and Writing',
      icon: BookOpen,
      desc: 'Author of The System Is Being Rewritten (over 100 pages), exploring computing scaling, physical energy limits, and product distribution mechanics.',
    },
  ];

  const coreStrengths = [
    'Strategic Operations',
    'High-Leverage Execution',
    'Product Strategy',
    'Operational Velocity',
    'Systems Architecture',
    'Zero-to-One Ownership',
    'Physical Prototyping',
    'Workflow Optimization',
    'Acoustic Containment',
    'Distribution Mechanics',
    'Cross-Functional Alignment',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4"
      >
        <div className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider inline-flex items-center gap-2">
          <span>About</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Hi, I'm Aryan Pandey.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
          I operate as a high-leverage product operator and systems builder. I turn ambitious strategic objectives and complex operational friction into simple, scalable, working systems.
        </p>
      </motion.div>

      {/* Main Narrative - Subconsciously relaying strategic operator leverage */}
      <ScrollReveal direction="scale" distance={36} duration={0.65}>
        <motion.div
          whileHover={{
            y: -4,
            borderColor: '#9CA3AF',
            boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.08), 0 10px 15px -5px rgba(0, 0, 0, 0.03)',
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed shadow-xs"
        >
          <p>
            I focus on solving real operational problems from first principles. Instead of staying confined inside narrow technical silos, I take ownership across the complete lifecycle — diagnosing the core operational friction, aligning priorities across business and technical domains, and building working systems end-to-end.
          </p>
          <p>
            Whether that means cutting hospital intake and check-in times to under 10 seconds in{' '}
            <a
              href={SITE_LINKS.projects.unicare.url}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gray-950 underline decoration-gray-300 hover:decoration-black inline-flex items-center gap-0.5"
            >
              UniCare <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 inline" />
            </a>
            , aligning team discussions with deliverables in{' '}
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
              Null Wave <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 inline" />
            </a>
            , my priority is always to build clean, durable solutions that deliver measurable real-world value.
          </p>
        </motion.div>
      </ScrollReveal>

      {/* What I Focus On */}
      <section className="space-y-6">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl font-semibold text-gray-900">What I Do</h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.09} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <ScrollItem
                key={area.title}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                distance={32}
                duration={0.55}
                className="h-full"
              >
                <motion.div
                  whileHover={{
                    y: -4,
                    borderColor: '#9CA3AF',
                    boxShadow: '0 12px 25px -8px rgba(0,0,0,0.08)',
                  }}
                  transition={{ duration: 0.2 }}
                  className="p-5 sm:p-6 rounded-xl border border-gray-200 bg-white space-y-2.5 shadow-xs transition-colors cursor-default h-full"
                >
                  <div className="flex items-center gap-2.5 text-gray-900">
                    <Icon className="w-4 h-4 text-gray-700" />
                    <h3 className="text-sm font-semibold">{area.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {area.desc}
                  </p>
                </motion.div>
              </ScrollItem>
            );
          })}
        </ScrollStagger>
      </section>

      {/* Core Competencies & Execution */}
      <section className="space-y-6">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl font-semibold text-gray-900">Capabilities and Focus Areas</h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.035} className="flex flex-wrap gap-2">
          {coreStrengths.map((strength) => (
            <ScrollItem key={strength} direction="scale" duration={0.35}>
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 rounded-md border border-gray-200 bg-white text-xs font-mono text-gray-700 shadow-2xs cursor-default transition-colors hover:border-gray-400 inline-block"
              >
                {strength}
              </motion.span>
            </ScrollItem>
          ))}
        </ScrollStagger>
      </section>

      {/* CTA Box */}
      <ScrollReveal direction="up" distance={36} duration={0.6}>
        <motion.div
          whileHover={{
            y: -4,
            boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.08), 0 10px 15px -5px rgba(0, 0, 0, 0.03)',
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
        >
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900">Have an ambitious venture or product?</h3>
            <p className="text-sm text-gray-600 font-normal">
              I am always open to discussing high-impact products, operational challenges, and strategic partnerships.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-colors shrink-0 inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </ScrollReveal>
    </div>
  );
};
