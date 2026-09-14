import React, { useState } from 'react';
import { Eye, Layers, Compass, Play, Sparkles, Wind, MicOff, Volume2 } from 'lucide-react';

export const HardwareRenderNullWave: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const [activeView, setActiveView] = useState<'studio' | 'lifestyle' | 'blueprint' | 'video'>('studio');

  return (
    <div className="w-full bg-gradient-to-b from-[#F7F6F2] via-[#F2F0E8] to-[#ECEAE0] rounded-3xl p-4 sm:p-7 border border-ink-border shadow-glass-md overflow-hidden transition-all duration-300 relative group">
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      {/* Top Header & View Tabs */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-ink-border/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-ink-primary font-semibold">
            NullWave // Wearable Voice Isolation
          </span>
        </div>

        {interactive && (
          <div className="flex items-center bg-white/80 backdrop-blur-md p-1 rounded-xl border border-ink-border text-xs">
            <button
              onClick={() => setActiveView('studio')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 font-mono text-[11px] ${
                activeView === 'studio'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              <Compass className="w-3 h-3" />
              Studio Render
            </button>
            <button
              onClick={() => setActiveView('lifestyle')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 font-mono text-[11px] ${
                activeView === 'lifestyle'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              <Eye className="w-3 h-3" />
              In-Situ Fit
            </button>
            <button
              onClick={() => setActiveView('blueprint')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 font-mono text-[11px] ${
                activeView === 'blueprint'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              <Layers className="w-3 h-3" />
              CAD Blueprint
            </button>
            <button
              onClick={() => setActiveView('video')}
              className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 font-mono text-[11px] ${
                activeView === 'video'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-ink-secondary hover:text-ink-primary'
              }`}
            >
              <Play className="w-3 h-3" />
              Hardware Motion
            </button>
          </div>
        )}
      </div>

      {/* Main Visual Display Stage */}
      <div className="relative z-10 my-4 sm:my-6 rounded-2xl overflow-hidden bg-[#18181A] aspect-[16/10] max-h-[360px] flex items-center justify-center border border-ink-border shadow-inner">
        {activeView === 'studio' && (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src="/assets/nullwave/mask-studio.png"
              alt="NullWave Hardware Studio Render"
              className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-stone-300">
              Titanium Matte Chassis · Sound Absorbing Acoustic Chamber
            </div>
          </div>
        )}

        {activeView === 'lifestyle' && (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/assets/nullwave/mask-lifestyle.png"
              alt="NullWave In-Situ Wearable Ergonomics"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-stone-300">
              Zero-Pressure Anatomical Contouring for Public Transit & Office Use
            </div>
          </div>
        )}

        {activeView === 'blueprint' && (
          <div className="relative w-full h-full flex items-center justify-center p-4 bg-[#0F0F12]">
            <img
              src="/assets/nullwave/mask-blueprint.png"
              alt="NullWave CAD Blueprint"
              className="max-h-full max-w-full object-contain filter contrast-125 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-stone-300">
              Internal Micro-Duct Airflow Geometry & Dual-Microphone Array
            </div>
          </div>
        )}

        {activeView === 'video' && (
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <video
              src="/assets/nullwave/nullwave-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-stone-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              Dynamic Silhouette Animation
            </div>
          </div>
        )}
      </div>

      {/* Real Hardware Feature Matrix */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs">
        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <div className="flex items-center gap-1.5 text-ink-primary font-medium text-[11px] mb-1">
            <MicOff className="w-3.5 h-3.5 text-amber-600" />
            <span>Acoustic Isolation</span>
          </div>
          <p className="text-[10px] text-ink-tertiary font-mono">Traps speech sound waves internally</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <div className="flex items-center gap-1.5 text-ink-primary font-medium text-[11px] mb-1">
            <Wind className="w-3.5 h-3.5 text-blue-600" />
            <span>Bladeless Cooling</span>
          </div>
          <p className="text-[10px] text-ink-tertiary font-mono">Whisper-quiet micro airflow</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <div className="flex items-center gap-1.5 text-ink-primary font-medium text-[11px] mb-1">
            <Volume2 className="w-3.5 h-3.5 text-purple-600" />
            <span>Live Translation</span>
          </div>
          <p className="text-[10px] text-ink-tertiary font-mono">Bidirectional ear-to-ear sync</p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border">
          <div className="flex items-center gap-1.5 text-ink-primary font-medium text-[11px] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Aroma Capsule</span>
          </div>
          <p className="text-[10px] text-ink-tertiary font-mono">Modular scent management</p>
        </div>
      </div>
    </div>
  );
};
