import React from 'react';
import { Link } from '../context/RouterContext';
import { HardwareRenderNullWave } from '../components/visual/HardwareRenderNullWave';
import { ArrowLeft, MicOff, Wind, Volume2, Shield, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const NullWaveDetail: React.FC = () => {
  const corePillars = [
    {
      title: 'Acoustic Voice Containment',
      icon: MicOff,
      desc: 'An internal sound chamber absorbs speech audio waves, allowing users to speak at normal volume without being overheard by people nearby.',
    },
    {
      title: 'Silent Micro-Airflow',
      icon: Wind,
      desc: 'A quiet micro-ducting channel circulates fresh air continuously for comfort without creating wind noise in the microphone.',
    },
    {
      title: 'Crisp Voice Capture for AI & Calls',
      icon: Volume2,
      desc: 'Dual MEMS microphone arrays isolate your voice from loud background noise for reliable transcription and clear phone calls.',
    },
    {
      title: 'Titanium & Silicone Ergonomics',
      icon: Shield,
      desc: 'A lightweight grade-5 titanium shell paired with hypoallergenic silicone creates an airtight yet comfortable facial seal.',
    },
  ];

  const designPhases = [
    {
      phase: 'Phase 1: Ergonomics & Seal Geometry',
      focus: 'Testing facial curves and jaw articulation to maintain an airtight acoustic seal while speaking naturally.',
    },
    {
      phase: 'Phase 2: Acoustic Chamber Modeling',
      focus: 'Designing internal baffle geometry to dampen vocal frequencies by over 40 dB.',
    },
    {
      phase: 'Phase 3: Silent Airflow & Thermal Comfort',
      focus: 'Integrating whisper-quiet micro-ducting along the perimeter to circulate air and prevent heat buildup.',
    },
    {
      phase: 'Phase 4: CMF & Physical Mockups',
      focus: 'Pairing bead-blasted matte titanium with skin-safe silicone for a clean, durable physical product.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Back Button */}
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-gray-900 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>BACK TO PROJECTS</span>
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase">
          <span>Acoustic Wearable Hardware</span>
          <span>·</span>
          <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-medium">Functional Prototype</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Nullware (NullWave)
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          An ergonomic acoustic wearable mask engineered for private voice conversations and voice computing in public spaces.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={SITE_LINKS.projects.nullwave.url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-all inline-flex items-center gap-2 shadow-xs hover:scale-[1.01] active:scale-[0.99]"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Visit nullwave.in</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <a
            href={SITE_LINKS.projects.nullwave.repo}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-800 text-xs font-medium transition-all inline-flex items-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>View Source Code</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-y border-gray-200 py-3 text-xs">
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Role</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Inventor, Hardware & Acoustic Design</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Current Phase</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Prototype Testing & Waitlist</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Materials</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Grade-5 Titanium, Silicone</span>
          </div>
        </div>
      </div>

      {/* Primary Hardware Showcase */}
      <div className="py-2">
        <HardwareRenderNullWave />
      </div>

      {/* The Problem & Vision */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Why I Built This</h2>
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700 space-y-3 leading-relaxed">
          <p className="font-medium text-gray-900">
            Voice is the fastest way to communicate with AI models and teams, but privacy in public is still an unsolved issue.
          </p>
          <p>
            Whether on a train, in an airport lounge, or working in a busy cafe, speaking aloud to take an urgent call or dictating prompts creates noise and exposes confidential information. NullWave solves this at the physical level by containing speech directly at the mouth.
          </p>
        </div>
      </div>

      {/* Subsystems */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Engineering & Subsystems</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {corePillars.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 shadow-xs hover:border-gray-300"
              >
                <div className="flex items-center gap-2 text-gray-900">
                  <Icon className="w-4 h-4 text-gray-700" />
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Development Phases */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Prototyping & Iteration</h2>
        <div className="space-y-2.5">
          {designPhases.map((phase) => (
            <div
              key={phase.phase}
              className="p-4 rounded-xl border border-gray-200 bg-white space-y-1 text-xs sm:text-sm"
            >
              <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
              <p className="text-gray-600 leading-relaxed font-normal">{phase.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
