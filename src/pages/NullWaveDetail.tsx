import React from 'react';
import { Link } from '../context/RouterContext';
import { HardwareRenderNullWave } from '../components/visual/HardwareRenderNullWave';
import { ArrowLeft, MicOff, Wind, Volume2, Shield, Globe, ExternalLink, Lock, Compass, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';

export const NullWaveDetail: React.FC = () => {
  const problemsSolved = [
    {
      problem: 'Confidential business calls are easily overheard in public spaces',
      solution: 'Acoustic Voice Containment',
      icon: MicOff,
      desc: 'An internal acoustic dampening chamber traps sound waves as you speak, reducing vocal output by over 40 decibels. You can talk at normal volume in an airport or train without anyone overhearing.',
      outcome: 'Full vocal privacy in crowded environments.',
    },
    {
      problem: 'Wearable face masks quickly become hot, humid, and stuffy',
      solution: 'Silent Micro Airflow',
      icon: Wind,
      desc: 'Whisper quiet perimeter micro channels keep fresh air circulating continuously, preventing humidity or heat buildup during long working calls.',
      outcome: 'Comfortable for extended voice conversations.',
    },
    {
      problem: 'Loud background ambient noise distorts AI transcription and phone calls',
      solution: 'Targeted Voice Capture',
      icon: Volume2,
      desc: 'Internal dual microphone arrays capture pure voice audio inside the chamber, eliminating airport announcements and cafe chatter from your calls.',
      outcome: 'Crystal clear voice input for calls and AI prompts.',
    },
    {
      problem: 'Heavy or rigid wearable hardware causes facial fatigue during travel',
      solution: 'Ergonomic Titanium and Silicone Fit',
      icon: Shield,
      desc: 'A lightweight Grade 5 titanium structure paired with skin safe hypoallergenic silicone contours to jaw movement while maintaining an airtight acoustic barrier.',
      outcome: 'Durable, lightweight comfort built for daily travel.',
    },
  ];

  const practicalChallengesSolved = [
    {
      challenge: 'Maintaining an airtight seal while speaking naturally',
      solution: 'Dynamic jaw articulation geometry that flexes with normal speech without leaking sound.',
    },
    {
      challenge: 'Absorbing wide vocal frequencies within a compact form factor',
      solution: 'Internal acoustic baffle chambers specifically calibrated to absorb human vocal range.',
    },
    {
      challenge: 'Preventing heat buildup without creating microphone wind noise',
      solution: 'Silent perimeter micro channels that exchange air without turbulent rushing sound.',
    },
    {
      challenge: 'Everyday durability for frequent travelers',
      solution: 'Matte titanium shell that resists scratches and slips easily into a laptop bag or coat pocket.',
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
          Null Wave
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
          An ergonomic acoustic wearable mask engineered for private voice conversations and voice computing in public spaces.
        </p>

        {/* Action Buttons - Source code link removed */}
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
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-y border-gray-200 py-3 text-xs">
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Role</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Product Inventor and Hardware Designer</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Current Phase</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Working Prototype and Waitlist</span>
          </div>
          <div>
            <span className="text-gray-500 block font-mono text-[11px]">Core Materials</span>
            <span className="font-medium text-gray-900 mt-0.5 block">Grade 5 Titanium and Silicone</span>
          </div>
        </div>
      </div>

      {/* Primary Hardware Showcase */}
      <div className="py-2">
        <HardwareRenderNullWave />
      </div>

      {/* The Problem & Vision */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">The Problem Being Solved</h2>
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700 space-y-3 leading-relaxed">
          <p className="font-medium text-gray-900">
            Voice is the fastest way to communicate with teams and AI, but privacy in public is still completely broken.
          </p>
          <p>
            Whether you are on a high speed train, waiting in an airport lounge, or working in a busy coffee shop, speaking aloud to take an urgent call or dictate strategy leaks confidential company information to everyone within earshot.
          </p>
          <p>
            Standard noise cancelling headphones only clean incoming sound for the caller. They do nothing to prevent the people sitting next to you from hearing every word you say. Null Wave solves this at the physical source by trapping speech vibrations directly at the mouth.
          </p>
        </div>
      </div>

      {/* Core Solutions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">User Problems and Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problemsSolved.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.solution}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 shadow-xs hover:border-gray-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-900">
                    <Icon className="w-4 h-4 text-gray-700" />
                    <h3 className="text-sm font-semibold">{item.solution}</h3>
                  </div>
                  <span className="text-[11px] font-mono text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {item.outcome}
                  </span>
                </div>
                <p className="text-xs text-red-700 font-medium">
                  Problem: {item.problem}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Solving Practical Real World Constraints */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Solving Real World Usability Constraints</h2>
        <div className="space-y-2.5">
          {practicalChallengesSolved.map((item) => (
            <div
              key={item.challenge}
              className="p-4 rounded-xl border border-gray-200 bg-white space-y-1 text-xs sm:text-sm"
            >
              <h3 className="font-semibold text-gray-900">Challenge: {item.challenge}</h3>
              <p className="text-gray-600 leading-relaxed font-normal">Solution: {item.solution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tangible Benefits */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Practical User Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
            <Lock className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900 text-sm">40 dB Sound Isolation</h4>
            <p className="text-gray-600 leading-relaxed font-normal">
              Reduces spoken audio volume so people sitting right next to you hear only faint whispers.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
            <Compass className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900 text-sm">Anywhere Productivity</h4>
            <p className="text-gray-600 leading-relaxed font-normal">
              Take sensitive investor or client calls immediately without searching for a private conference booth.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
            <Smile className="w-4 h-4 text-gray-700" />
            <h4 className="font-semibold text-gray-900 text-sm">Natural Breathing</h4>
            <p className="text-gray-600 leading-relaxed font-normal">
              Micro circulation prevents fogging and moisture buildup, allowing hours of uninterrupted voice use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
