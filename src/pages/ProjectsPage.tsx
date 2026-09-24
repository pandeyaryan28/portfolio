import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { ArrowRight, Globe, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_LINKS } from '../data/links';
import { springSmooth } from '../components/ui/motionVariants';
import { ScrollReveal, ScrollParallax } from '../components/ui/ScrollReveal';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'digital' | 'hardware'>('all');

  const projects = [
    {
      id: 'unicare',
      title: 'UniCare',
      category: 'digital' as const,
      categoryLabel: 'Healthcare Operations',
      status: 'Live Production',
      visitLabel: 'Visit UniCare',
      tagline: 'A unified clinic management tool connecting patient registration, doctor notes, and pharmacy inventory in real time.',
      problemSolved: 'Outpatient clinics lose hours every day to manual paperwork, long patient lines, high drug costs, and expired medicine waste.',
      highlights: [
        'Cuts patient check in from 12 minutes to under 10 seconds with digital QR codes',
        'Suggests high quality generic medicines to save patients up to 90% on prescriptions',
        'Tracks expiry dates to dispense oldest stock first, eliminating medicine waste',
      ],
      focusAreas: ['Clinic Workflow', 'Generic Prescriptions', 'Instant QR Check In'],
      path: '/work/unicare',
      liveUrl: SITE_LINKS.projects.unicare.url,
    },
    {
      id: 'guild-orbit',
      title: 'Guild Orbit',
      category: 'digital' as const,
      categoryLabel: 'Team Execution Platform',
      status: 'Live Production',
      visitLabel: 'Visit Guild Orbit',
      tagline: 'An all in one workspace combining sprint tasks, contextual discussion threads, and sign off gates.',
      problemSolved: 'Fast growing teams lose momentum when decisions vanish in chat streams and tasks stall in email inboxes.',
      highlights: [
        'Keeps every discussion permanently tied to the exact task card',
        'Halves time spent in status update meetings with live visual progress boards',
        'Multi person sign off gates prevent incomplete work from launching early',
      ],
      focusAreas: ['Sprint Management', 'Contextual Discussions', 'Approval Gates'],
      path: '/work/guild-orbit',
      liveUrl: SITE_LINKS.projects.guildOrbit.url,
    },
    {
      id: 'nullwave',
      title: 'Null Wave',
      category: 'hardware' as const,
      categoryLabel: 'Hardware Prototype',
      status: 'Working Prototype',
      visitLabel: 'Visit NullWave',
      tagline: 'An ergonomic acoustic wearable mask that muffles your voice at your mouth so you can speak privately in public spaces.',
      problemSolved: 'Working professionals cannot discuss private business or dictate sensitive notes in public without being overheard.',
      highlights: [
        'Reduces spoken voice volume by over 40 decibels at the mouth',
        'Quiet airflow channels prevent heat and moisture buildup without microphone hiss',
        'Durable titanium frame with soft silicone seal weighing under 300 grams',
      ],
      previewImg: '/assets/nullwave/mask-studio.png',
      focusAreas: ['Voice Privacy', 'Acoustic Containment', 'Titanium Wearable'],
      path: '/work/nullwave',
      liveUrl: SITE_LINKS.projects.nullwave.url,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const filterTabs = [
    { id: 'all', label: 'All Work' },
    { id: 'digital', label: 'Digital Platforms' },
    { id: 'hardware', label: 'Hardware Systems' },
  ] as const;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-12">
      {/* Page Header with Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4"
      >
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider inline-flex items-center gap-2">
          <span>Ventures & Systems</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-sans font-semibold text-neutral-950 tracking-tight">
          Projects & Systems
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed font-normal">
          Operating platforms, clinical management tools, and physical hardware prototypes built to resolve real operational friction.
        </p>

        {/* Filter Tabs with Fluid Animated Indicator */}
        <div className="flex items-center gap-2 pt-2 border-b border-neutral-200 pb-4 relative">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.96 }}
                onClick={() => setFilter(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="project-filter-indicator"
                    className="absolute inset-0 bg-neutral-900 rounded-md -z-10"
                    transition={springSmooth}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects List with Smooth Layout and Noticeable Scroll Entrance */}
      <motion.div layout className="space-y-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ScrollReveal
              key={project.id}
              direction="scale"
              distance={40}
              duration={0.65}
              className="w-full"
            >
              <motion.article
                layout
                whileHover={{
                  y: -6,
                  borderColor: '#9CA3AF',
                  boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.09), 0 10px 15px -5px rgba(0, 0, 0, 0.04)',
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs"
              >
                {/* Top metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                      {project.status}
                    </span>
                  </div>

                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-neutral-700 hover:text-neutral-950 inline-flex items-center gap-1 transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{project.visitLabel}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </motion.a>
                  )}
                </div>

                {/* Content & Visual Grid */}
                <div className={project.previewImg ? "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" : "space-y-5"}>
                  {/* Text Info */}
                  <div className={project.previewImg ? "lg:col-span-7 space-y-4" : "space-y-4"}>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-base text-neutral-600 leading-relaxed font-normal">
                      {project.tagline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <motion.div
                        whileHover={{ y: -2, backgroundColor: '#FFFFFF', borderColor: '#D1D5DB' }}
                        transition={{ duration: 0.15 }}
                        className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-700 space-y-1.5"
                      >
                        <span className="font-mono text-xs font-medium text-neutral-500 uppercase tracking-wider block">
                          The Problem
                        </span>
                        <p className="leading-relaxed font-normal text-neutral-700 text-xs sm:text-sm">{project.problemSolved}</p>
                      </motion.div>

                      <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-700 space-y-1.5">
                        <span className="font-mono text-xs font-medium text-neutral-500 uppercase tracking-wider block">
                          Measurable Impact
                        </span>
                        <div className="space-y-1.5">
                          {project.highlights.map((h) => (
                            <div key={h} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                              <span className="text-neutral-400 mt-0.5">•</span>
                              <span className="font-normal leading-relaxed">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.focusAreas.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 text-xs font-mono cursor-default inline-block"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.previewImg ? (
                    <div className="lg:col-span-5">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 flex items-center justify-center p-3 border border-neutral-800">
                        <ScrollParallax offset={18} direction="up">
                          <img
                            src={project.previewImg}
                            alt={`${project.title} Prototype`}
                            className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                          />
                        </ScrollParallax>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-medium transition-all inline-flex items-center gap-1.5 border border-neutral-200"
                      >
                        <Globe className="w-3.5 h-3.5 text-neutral-600" />
                        <span>{project.visitLabel}</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </motion.a>
                    )}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to={project.path}
                      className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
