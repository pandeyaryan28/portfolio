import React, { useState } from 'react';
import { SectionBadge } from '../ui/SectionBadge';
import { useSound } from '../../context/SoundContext';
import { CornerDownLeft, Layers, Shield, Cpu, Network } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const { playTick } = useSound();
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: 'whoami',
      output: 'Aryan Pandey — Systems Architect, Product Builder & 0→1 Operator. Operating at the interface of software infrastructure, hardware ergonomics, and distribution mechanics.',
    },
    {
      cmd: 'status',
      output: 'Active ventures: UniCare (MVP live), Guild Orbit (MVP live), NullWave (Hardware prototype), 2 Books in progress.',
    },
  ]);

  const quickCommands = [
    { label: 'whoami', cmd: 'whoami' },
    { label: 'status', cmd: 'status' },
    { label: 'stack', cmd: 'stack' },
    { label: 'hardware', cmd: 'hardware' },
    { label: 'contact', cmd: 'contact' },
    { label: 'clear', cmd: 'clear' },
  ];

  const handleCommandRun = (commandStr: string) => {
    playTick();
    const cleanCmd = commandStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    }

    let resultOutput: string | React.ReactNode = '';
    switch (cleanCmd) {
      case 'whoami':
        resultOutput = 'Aryan Pandey — Systems Architect, Product Builder & 0→1 Operator based in New Delhi, India.';
        break;
      case 'status':
        resultOutput = 'System Status: All nodes green. UniCare MVP live, Guild Orbit MVP live, NullWave acoustic isolation mask prototype active.';
        break;
      case 'stack':
        resultOutput = 'Core Stack: React 19, TypeScript, Three.js / WebGL, Web Audio API, Tailwind CSS, Node.js, WebSockets, PostgreSQL, Hardware CAD prototyping.';
        break;
      case 'hardware':
        resultOutput = 'Hardware Engineering: NullWave acoustic chamber mask, grade-5 titanium chassis, whisper-quiet micro-ducting airflow, zero-leak voice containment (-42 dB).';
        break;
      case 'contact':
        resultOutput = 'Direct Correspondence: aryanpandey.build@gmail.com | LinkedIn: linkedin.com | GitHub: github.com/aryanpandey28';
        break;
      case 'help':
        resultOutput = 'Available commands: whoami, status, stack, hardware, contact, clear';
        break;
      default:
        resultOutput = `Command not recognized: "${cleanCmd}". Type "help" or click one of the quick command buttons above.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: cleanCmd, output: resultOutput }]);
    setTerminalInput('');
  };

  const domainPillars = [
    {
      title: 'Full-Stack & Cloud Architecture',
      icon: Layers,
      items: ['React 19 & TypeScript', 'Three.js & WebGL Shaders', 'WebSockets & Live Telemetry', 'Distributed State Sync', 'Web Audio API Synthesis'],
    },
    {
      title: 'Systems Design & Governance',
      icon: Shield,
      items: ['Patient Self-Sovereign Identity', 'FEFO Inventory Algorithms', 'Multi-Tier Approval Gates', 'Cryptographic Document Provenance', 'Granular RBAC Security'],
    },
    {
      title: 'Hardware & Ergonomic Design',
      icon: Cpu,
      items: ['Acoustic Sound Chamber Modeling', 'CAD Blueprinting & Rapid Prototyping', 'CMF: Titanium & Medical Silicone', 'Whisper-Quiet Micro-Airflow', 'MEMS Dual-Mic Arrays'],
    },
    {
      title: 'Venture & Distribution Mechanics',
      icon: Network,
      items: ['0→1 Venture Product Strategy', 'Embedded Distribution Loops', 'Unit Economics & Pricing Loops', 'Zero-to-One Tangible Execution', 'Published Systems Research'],
    },
  ];

  return (
    <section id="capabilities" className="py-20 sm:py-28 px-4 sm:px-8 max-w-6xl mx-auto border-t border-ink-border/60 dark:border-white/10">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16 max-w-2xl">
        <SectionBadge label="CAPABILITIES MATRIX" index="04" />
        <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-medium tracking-tight text-ink-primary dark:text-ink-dark-primary leading-[1.1] text-balance">
          Technical domains, architecture stack, and interactive console.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-ink-secondary dark:text-ink-dark-secondary font-light leading-relaxed">
          From high-performance distributed frontend architecture and cryptographic provenance to physical acoustic hardware engineering.
        </p>
      </div>

      {/* Grid: 4 Domain Cards on Top, Interactive Terminal Below */}
      <div className="space-y-8">
        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domainPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl bg-white/80 dark:bg-stone-900/60 border border-ink-border dark:border-white/10 shadow-glass-sm hover:shadow-glass-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-ink-primary dark:text-ink-dark-primary leading-snug">
                    {pillar.title}
                  </h4>
                </div>

                <div className="pt-4 space-y-1.5 border-t border-ink-border/50 dark:border-white/5 mt-4">
                  {pillar.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-mono text-ink-secondary dark:text-ink-dark-secondary"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Systems Terminal Console */}
        <div className="rounded-3xl bg-[#0F0F14] text-white p-5 sm:p-8 border border-white/10 shadow-glass-xl font-mono text-xs overflow-hidden">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] text-stone-400 font-mono">
                aryan@systems-console ~ zsh
              </span>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {quickCommands.map((qc) => (
                <button
                  key={qc.label}
                  onClick={() => handleCommandRun(qc.cmd)}
                  className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-stone-300 text-[10px] transition-colors border border-white/5"
                >
                  {qc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Output Log */}
          <div className="py-4 space-y-3 max-h-60 overflow-y-auto pr-2">
            {terminalHistory.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-amber-400">
                  <span>❯</span>
                  <span>{entry.cmd}</span>
                </div>
                <div className="text-stone-300 pl-4 leading-relaxed font-light">
                  {entry.output}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommandRun(terminalInput);
            }}
            className="flex items-center gap-2 pt-3 border-t border-white/10"
          >
            <span className="text-amber-400">❯</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Type command ('whoami', 'stack', 'status', 'hardware') and press enter..."
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-stone-600 font-mono text-xs"
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 text-[10px] flex items-center gap-1 transition-colors"
            >
              <span>RUN</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
