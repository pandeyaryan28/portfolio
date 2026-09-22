import React from 'react';
import { Link } from '../context/RouterContext';
import { HardwareRenderNullWave } from '../components/visual/HardwareRenderNullWave';
import { ArrowLeft, Globe, ExternalLink, Lock, Compass, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_LINKS } from '../data/links';
import { ScrollReveal, ScrollStagger, ScrollItem, ScrollParallax } from '../components/ui/ScrollReveal';
import { CaseStudyReadingRail } from '../components/ui/CaseStudyReadingRail';

export const NullWaveDetail: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-16">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO PROJECTS</span>
        </Link>
      </motion.div>

      {/* Case Study Header with Staggered Entrance */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6 border-b border-neutral-200 pb-10"
      >
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wider">
          <span>Acoustic Wearable Hardware</span>
          <span className="text-neutral-300">·</span>
          <span className="text-neutral-800 bg-neutral-100 px-3 py-1 rounded border border-neutral-200 font-medium text-xs sm:text-sm">
            Engineering Case Study
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-neutral-950 tracking-tight leading-[1.12]">
          Null Wave: Engineering Physical Speech Privacy
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed font-normal max-w-3xl">
          An engineering case study on designing an ergonomic acoustic wearable mask that attenuates spoken voice audio by over 40 decibels at the mouth, enabling confidential communication and voice computing anywhere in public.
        </p>

        {/* Primary Call to Action */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <motion.a
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href={SITE_LINKS.projects.nullwave.url}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium transition-all inline-flex items-center gap-2.5 shadow-xs hover:shadow-md"
          >
            <Globe className="w-4 h-4 text-neutral-300" />
            <span>Visit NullWave</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </motion.a>
        </div>

        {/* Executive Meta Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-100 text-sm sm:text-base">
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Role</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Product Inventor & Hardware Architect</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Current Phase</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Functional Working Prototype</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Primary Materials</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">Grade 5 Titanium & Silicone</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-xs sm:text-sm uppercase tracking-wider">Core Metric</span>
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">40+ dB Acoustic Attenuation</span>
          </div>
        </div>
      </motion.header>

      {/* Interactive Case Study Reading Progress Rail */}
      <CaseStudyReadingRail
        title="Null Wave"
        sections={[
          { id: 'specs', label: 'CAD & Specs' },
          { id: 'context', label: 'Privacy Paradox' },
          { id: 'constraints', label: 'Constraints' },
          { id: 'architecture', label: 'Acoustic Architecture' },
          { id: 'outcomes', label: 'Performance' },
        ]}
      />

      {/* Primary Hardware Visual Showcase with Scroll Entrance */}
      <ScrollReveal direction="scale" distance={40} duration={0.65}>
        <section id="specs" className="space-y-3 scroll-mt-24">
          <ScrollParallax offset={20} direction="up">
            <HardwareRenderNullWave />
          </ScrollParallax>
        </section>
      </ScrollReveal>

      {/* Case Study Section 1: The Privacy Paradox */}
      <ScrollReveal direction="up" distance={36} duration={0.6}>
        <section id="context" className="space-y-6 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            1. Context: The Mobile Voice Privacy Paradox
          </h2>
          <div className="space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
            <p>
              Spoken language is the highest-bandwidth human input mechanism, transmitting thoughts at 150 words per minute compared to roughly 40 words per minute on a phone keyboard. As generative AI models, voice assistants, and remote executive calls become primary work tools, speaking aloud is replacing typing.
            </p>
            <p>
              However, voice has a fatal vulnerability: zero privacy in public. When traveling on high-speed trains, waiting in airline lounges, or sitting in open coworking cafes, speaking aloud exposes confidential corporate strategy, financial metrics, and customer information to strangers standing two feet away.
            </p>
            <p>
              Commercial noise-cancelling headphones only protect incoming audio for the listener's own ears; they do nothing to prevent nearby bystanders from hearing every word the user utters. Null Wave was engineered to solve this physical limitation directly at the source — attenuating speech vibrations before sound waves radiate into the environment.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Case Study Section 2: Technical & Physical Bottlenecks */}
      <section id="constraints" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            2. Physical Challenges: Four Fundamental Engineering Constraints
          </h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Constraint 01</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Acoustic Containment vs. Facial Articulation</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                When humans speak, the lower jaw drops and flexes dynamically. Rigid enclosures break perimeter seal during natural speech, causing catastrophic acoustic leakage. The interface must articulate seamlessly with jaw movement while maintaining airtight sound dampening.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Constraint 02</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Thermal Comfort & Airflow Aerodynamics</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Sealing a wearable around the oral cavity traps warm exhaled moisture and carbon dioxide within seconds. If air holes are introduced, sound escapes. The acoustic pathway must allow smooth, silent air exchange without allowing sound waves to leak or creating wind noise on internal mics.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Constraint 03</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Resonant Cavity Distortion on Voice Pick-Up</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Speaking inside an enclosed chamber creates boomy acoustic resonances that render microphone audio muffled and unintelligible to call recipients or AI transcription. Internal acoustic chambers must absorb resonant frequencies while keeping vocal fidelity crisp.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Constraint 04</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Mass, Ergonomics & Travel Durability</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Heavy headgear causes cervical neck strain within minutes. The structure must withstand everyday travel shocks and laptop bag compression while staying under a 300g target weight profile with hypoallergenic skin contact surfaces.
              </p>
            </motion.div>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 3: Architecture & System Engineering */}
      <section id="architecture" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            3. System Architecture & Hardware Engineering Solutions
          </h2>
          <div className="space-y-4 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal mt-2">
            <p>
              Null Wave resolves these trade-offs through an integrated mechanical and acoustic architecture:
            </p>
          </div>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.08} className="space-y-4">
          <ScrollItem direction="up" distance={24}>
            <motion.div
              whileHover={{ y: -3, borderColor: '#9CA3AF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                  01
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                  Multi-Chamber Acoustic Baffle Geometry
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                The internal core features calibrated labyrinth acoustic baffles engineered to trap and dissipate human vocal frequencies between 200 Hz and 4,000 Hz. Sound energy undergoes multiple phase-cancelling reflections before reaching the perimeter, reducing spoken output by more than 40 decibels.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={24}>
            <motion.div
              whileHover={{ y: -3, borderColor: '#9CA3AF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                  02
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                  Whisper-Quiet Perimeter Airflow Ducts
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                Continuous fresh air exchange is driven through passive micro-channel venturi ducts around the mask perimeter. The channels guide airflow along an acoustic dampening path that prevents humid air stagnation without allowing vocal frequencies to escape into the room.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={24}>
            <motion.div
              whileHover={{ y: -3, borderColor: '#9CA3AF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                  03
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                  Grade 5 Titanium Exoskeleton with Dynamic Silicone Gasket
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                A precision-milled Grade 5 titanium outer frame delivers structural rigidity and scratch resistance while weighing mere ounces. Paired with a medical-grade hypoallergenic silicone contact gasket, the perimeter seal flexes dynamically with jaw speech motions without breaking acoustic isolation.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={24}>
            <motion.div
              whileHover={{ y: -3, borderColor: '#9CA3AF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-2xs"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center font-mono text-sm font-semibold text-neutral-900 shrink-0">
                  04
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                  Internal Dual-MEMS Vocal Capture Array
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                A custom directional dual-microphone array captures voice signals directly inside the acoustic cavity. Because the chamber blocks external environment noise, AI voice agents and phone call participants hear clean, studio-grade speech completely free of airport echoes or coffee grinder noise.
              </p>
            </motion.div>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 4: Measurable Performance Outcomes */}
      <section id="outcomes" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            4. Measurable Hardware Performance
          </h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ScrollItem direction="scale" duration={0.5}>
            <ScrollParallax offset={12} direction="up">
              <motion.div
                whileHover={{ y: -5, borderColor: '#9CA3AF', boxShadow: '0 15px 30px -8px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-xs h-full"
              >
                <Lock className="w-7 h-7 text-neutral-700" />
                <h3 className="text-2xl font-semibold text-neutral-900">40+ dB Sound Isolation</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Attenuates speech to an inaudible murmur, so passengers seated right beside you in transit cannot understand your conversation.
                </p>
              </motion.div>
            </ScrollParallax>
          </ScrollItem>

          <ScrollItem direction="scale" duration={0.5}>
            <ScrollParallax offset={24} direction="up">
              <motion.div
                whileHover={{ y: -5, borderColor: '#9CA3AF', boxShadow: '0 15px 30px -8px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-xs h-full"
              >
                <Compass className="w-7 h-7 text-neutral-700" />
                <h3 className="text-2xl font-semibold text-neutral-900">Zero-Booth Mobility</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Take sensitive investor or confidential client calls instantly from airport gates, cafes, or hotel lobbies without seeking private booths.
                </p>
              </motion.div>
            </ScrollParallax>
          </ScrollItem>

          <ScrollItem direction="scale" duration={0.5}>
            <ScrollParallax offset={12} direction="up">
              <motion.div
                whileHover={{ y: -5, borderColor: '#9CA3AF', boxShadow: '0 15px 30px -8px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-xs h-full"
              >
                <Smile className="w-7 h-7 text-neutral-700" />
                <h3 className="text-2xl font-semibold text-neutral-900">Natural Respiration</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Passive micro-ducting permits silent air exchange without heat buildup or acoustic leakage onto sensitive internal microphones.
                </p>
              </motion.div>
            </ScrollParallax>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 5: Operator Reflections */}
      <ScrollReveal direction="scale" distance={36} duration={0.65}>
        <section className="space-y-6 border-t border-neutral-200 pt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            5. Operator Reflections: Bridging Physical Atoms & User Behavior
          </h2>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal shadow-2xs"
          >
            <p className="text-xl sm:text-2xl font-semibold text-neutral-950 leading-snug">
              "Software allows infinite fast iterations; hardware forces you to confront physics on day one."
            </p>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Prototyping Null Wave demanded an obsessive balance between acoustic physics and ergonomic psychology. An acoustic mask that achieves 50 dB attenuation is useless if it looks absurd, feels claustrophobic, or is too heavy to slip into a travel briefcase.
            </p>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              By designing Grade 5 titanium structural ribbing and combining 3D acoustic baffle modeling with rapid silicone casting iterations, we proved that privacy in public does not require bulky industrial apparatus. High-ambiguity hardware engineering requires ruthless discipline: identifying the fundamental physical constraint, designing around natural human anatomy, and building until the prototype works seamlessly in the field.
            </p>
          </motion.div>

          <div className="pt-4 flex items-center justify-between">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-base font-medium text-neutral-600 hover:text-neutral-950 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all projects</span>
            </Link>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={SITE_LINKS.projects.nullwave.url}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium transition-all inline-flex items-center gap-2 shadow-xs"
            >
              <Globe className="w-4 h-4 text-neutral-300" />
              <span>Visit NullWave</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </motion.a>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};
