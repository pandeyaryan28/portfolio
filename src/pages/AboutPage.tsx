import React from 'react';
import { Link } from '../context/RouterContext';
import { ArrowRight, Code2, Cpu, BookOpen, Layers } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const areas = [
    {
      title: 'Full-Stack Software',
      icon: Code2,
      desc: 'Building responsive, real-time web applications with React 19, TypeScript, and clean backend services.',
    },
    {
      title: 'Hardware & Ergonomics',
      icon: Cpu,
      desc: 'Prototyping physical wearables with 3D CAD modeling, acoustic dampening, and titanium machining.',
    },
    {
      title: 'Systems & Architecture',
      icon: Layers,
      desc: 'Designing operational workflows, from hospital FEFO medicine tracking to team approval pipelines.',
    },
    {
      title: 'Writing & Research',
      icon: BookOpen,
      desc: 'Author of "The System Is Being Rewritten" (100+ pages), exploring compute scaling and energy constraints.',
    },
  ];

  const tools = [
    'TypeScript',
    'React 19',
    'Node.js',
    'Tailwind CSS',
    'WebSockets',
    'Three.js',
    'PostgreSQL',
    'CAD Modeling',
    'Acoustics',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider">
          About
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-semibold text-gray-950 tracking-tight">
          Hi, I'm Aryan Pandey.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
          I'm an innovator and builder. I engineer complete products from initial problem to working reality.
        </p>
      </div>

      {/* Main Narrative - Concise & Simple */}
      <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white space-y-4 text-base text-gray-700 leading-relaxed">
        <p>
          I focus on building products that solve real problems. Rather than staying confined to one narrow role, I work across the full stack—from interface design and backend architecture to physical hardware prototyping.
        </p>
        <p>
          Whether that means cutting hospital check-in times to under 10 seconds in <strong className="font-semibold text-gray-950">UniCare</strong>, unifying team chat and task management in <strong className="font-semibold text-gray-950">Guild Orbit</strong>, or engineering acoustic titanium wearables in <strong className="font-semibold text-gray-950">NullWave</strong>, my goal is always to build things that work cleanly in the real world.
        </p>
      </div>

      {/* What I Focus On */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="p-5 rounded-xl border border-gray-200 bg-white space-y-2 shadow-xs"
              >
                <div className="flex items-center gap-2 text-gray-900">
                  <Icon className="w-4 h-4 text-gray-700" />
                  <h3 className="text-sm font-semibold">{area.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {area.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technologies & Tools */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Skills & Tools</h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1.5 rounded-md border border-gray-200 bg-white text-xs font-mono text-gray-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">Have an ambitious project?</h3>
          <p className="text-sm text-gray-600">
            I'm always open to discussing new products and technical collaborations.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-colors shrink-0 inline-flex items-center gap-1.5"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
