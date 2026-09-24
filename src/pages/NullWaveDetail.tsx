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
          Null Wave: Engineering Voice Privacy for Public Work
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed font-normal max-w-3xl">
          An engineering case study on designing an acoustic wearable mask that muffles voice audio by over 40 decibels at the mouth, making confidential phone calls possible anywhere in public.
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
            <span className="font-medium text-neutral-900 mt-1.5 block text-sm sm:text-base">40+ dB Voice Sound Reduction</span>
          </div>
        </div>
      </motion.header>

      {/* Interactive Case Study Reading Progress Rail */}
      <CaseStudyReadingRail
        title="Null Wave"
        sections={[
          { id: 'specs', label: 'Prototype' },
          { id: 'context', label: 'Context' },
          { id: 'constraints', label: 'Challenges' },
          { id: 'architecture', label: 'What I Built' },
          { id: 'outcomes', label: 'Results' },
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
            1. The Real Problem with Speaking in Public
          </h2>
          <div className="space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
            <p>
              Speaking aloud is the fastest way we communicate, but it has a major limitation in public spaces: zero privacy. When you are sitting in a crowded cafe, waiting at an airport gate, or riding a train, taking a confidential business call leaks sensitive numbers, strategy, and private client names to anyone sitting nearby.
            </p>
            <p>
              Standard noise cancelling headphones protect your own ears from background noise, but they do nothing to prevent your own voice from traveling into the room. If you need to discuss private matters, your only options have been whispering awkwardly or walking away to hunt for an empty room.
            </p>
            <p>
              Null Wave was engineered to solve this physical problem right at the mouth. By trapping acoustic energy as you speak, it muffles your voice before sound waves ever radiate into the room.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Case Study Section 2: Technical & Physical Bottlenecks */}
      <section id="constraints" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            2. The Key Engineering Challenges
          </h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Challenge 01</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Moving Jaw vs. Airtight Seal</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                When people speak, the jaw drops and flexes constantly. A rigid enclosure breaks its seal immediately, letting sound leak out. The seal had to flex naturally with facial movements while staying completely soundproof.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Challenge 02</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Heat and Moisture Buildup</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Covering your mouth traps warm exhaled breath within seconds. But if you add open air vents, sound escapes. The airflow design had to circulate fresh air silently without letting voice audio escape.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Challenge 03</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Clear Microphone Sound</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Speaking inside a small enclosure causes boomy echoes that make your voice sound muffled on calls. The interior chambers had to absorb echoes so the person on the other end hears crisp, natural speech.
              </p>
            </motion.div>
          </ScrollItem>

          <ScrollItem direction="up" distance={28}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#9CA3AF', backgroundColor: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 transition-colors shadow-2xs hover:shadow-sm h-full"
            >
              <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-wider block">Challenge 04</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">Lightweight Travel Ergonomics</h3>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Heavy gear strains your neck after a few minutes. The mask needed to be tough enough for travel in a backpack while weighing under 300 grams with soft skin contact materials.
              </p>
            </motion.div>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 3: What I Built */}
      <section id="architecture" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            3. What I Built: The Acoustic Privacy Mask
          </h2>
          <div className="space-y-4 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal mt-2">
            <p>
              Null Wave solves these trade offs with a custom mechanical and acoustic design:
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
                  Internal Acoustic Sound Trap
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                Inside the mask, voice sound waves travel through an acoustic maze engineered to trap speech frequencies. The acoustic energy is absorbed before it can escape into the room, reducing voice volume by over 40 decibels.
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
                  Quiet Fresh Air Channels
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                Curved perimeter airflow ducts circulate fresh air continuously across your face without letting voice sound leak out or creating breathing wind noise on internal microphones.
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
                  Titanium Frame & Flexible Silicone Seal
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                A lightweight Grade 5 titanium exoskeleton provides rigidity and durability. Soft medical grade silicone cushions the face and articulates naturally with jaw movements without breaking the sound seal.
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
                  Clean Internal Microphone Capture
                </h3>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-12 font-normal">
                Custom directional microphones pick up your voice clearly inside the quiet chamber. Because external noise is blocked, people on your call hear clear, crisp speech free from loud cafe or airport background sounds.
              </p>
            </motion.div>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 4: Measurable Performance Outcomes */}
      <section id="outcomes" className="space-y-6 scroll-mt-24">
        <ScrollReveal direction="up" distance={32}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            4. The Measurable Results
          </h2>
        </ScrollReveal>

        <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ScrollItem direction="scale" duration={0.5} className="h-full">
            <ScrollParallax offset={12} direction="up" className="h-full">
              <motion.div
                whileHover={{ y: -5, borderColor: '#9CA3AF', boxShadow: '0 15px 30px -8px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-xs h-full"
              >
                <Lock className="w-7 h-7 text-neutral-700" />
                <h3 className="text-2xl font-semibold text-neutral-900">40+ dB Sound Isolation</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Reduces normal conversation to an inaudible murmur so people sitting next to you cannot understand your private words.
                </p>
              </motion.div>
            </ScrollParallax>
          </ScrollItem>

          <ScrollItem direction="scale" duration={0.5} className="h-full">
            <ScrollParallax offset={24} direction="up" className="h-full">
              <motion.div
                whileHover={{ y: -5, borderColor: '#9CA3AF', boxShadow: '0 15px 30px -8px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-xs h-full"
              >
                <Compass className="w-7 h-7 text-neutral-700" />
                <h3 className="text-2xl font-semibold text-neutral-900">No Phone Booth Needed</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Take sensitive client calls right from airport gates, hotel lobbies, or crowded cafes without hunting for an empty room.
                </p>
              </motion.div>
            </ScrollParallax>
          </ScrollItem>

          <ScrollItem direction="scale" duration={0.5} className="h-full">
            <ScrollParallax offset={12} direction="up" className="h-full">
              <motion.div
                whileHover={{ y: -5, borderColor: '#9CA3AF', boxShadow: '0 15px 30px -8px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-white space-y-3 shadow-xs h-full"
              >
                <Smile className="w-7 h-7 text-neutral-700" />
                <h3 className="text-2xl font-semibold text-neutral-900">Natural Respiration</h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                  Quiet air ducts allow fresh air exchange without heat buildup or noise leaking onto sensitive microphones.
                </p>
              </motion.div>
            </ScrollParallax>
          </ScrollItem>
        </ScrollStagger>
      </section>

      {/* Case Study Section 5: Key Lessons */}
      <ScrollReveal direction="scale" distance={36} duration={0.65}>
        <section className="space-y-6 border-t border-neutral-200 pt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
            5. Key Takeaways
          </h2>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-5 text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal shadow-2xs"
          >
            <p className="text-xl sm:text-2xl font-semibold text-neutral-950 leading-snug">
              "Software lets you iterate quickly on screen. Hardware forces you to deal with physics and human comfort on day one."
            </p>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              A device that achieves high sound reduction is useless if people feel embarrassed wearing it or cannot breathe comfortably. Making Null Wave work required testing physical prototypes by hand until we found the sweet spot between acoustic performance, fresh airflow, and lightweight comfort.
            </p>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              By combining Grade 5 titanium structural framing with rapid silicone casting iterations, we proved that privacy in public spaces does not require bulky industrial equipment. Building hardware requires finding the fundamental physical limit and building until the solution feels effortless.
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
