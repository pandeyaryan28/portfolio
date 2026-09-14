import React, { useState } from 'react';
import { Eye, Layers, Compass, Play, Sparkles, Wind, MicOff, Volume2, Gauge } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export const HardwareRenderNullWave: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const [activeView, setActiveView] = useState<'studio' | 'lifestyle' | 'blueprint' | 'video'>('studio');
  const [ambientDb, setAmbientDb] = useState<number>(75); // 75 dB busy cafe / transit
  const { playTick } = useSound();

  const handleViewChange = (view: 'studio' | 'lifestyle' | 'blueprint' | 'video') => {
    playTick();
    setActiveView(view);
  };

  // Attenuated escape volume calculation (-42 dB internal absorption)
  const escapedDb = Math.max(12, ambientDb - 42);

  return (
    <div className="w-full bg-[#F5F4EE] dark:bg-[#121217] rounded-3xl p-4 sm:p-7 border border-ink-border dark:border-white/10 shadow-glass-md overflow-hidden transition-all duration-300 relative group">
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Top Header & View Tabs */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-ink-border/60 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-ink-primary dark:text-ink-dark-primary font-semibold">
            NullWave // Acoustic Hardware
          </span>
        </div>

        {interactive && (
          <div className="flex items-center bg-white/80 dark:bg-black/60 backdrop-blur-md p-1 rounded-xl border border-ink-border dark:border-white/10 text-xs">
            <button
              onClick={() => handleViewChange('studio')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 font-mono text-[11px] ${
                activeView === 'studio'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              <Compass className="w-3 h-3" />
              Studio
            </button>
            <button
              onClick={() => handleViewChange('lifestyle')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 font-mono text-[11px] ${
                activeView === 'lifestyle'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              <Eye className="w-3 h-3" />
              In-Situ Fit
            </button>
            <button
              onClick={() => handleViewChange('blueprint')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 font-mono text-[11px] ${
                activeView === 'blueprint'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              <Layers className="w-3 h-3" />
              CAD Spec
            </button>
            <button
              onClick={() => handleViewChange('video')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 font-mono text-[11px] ${
                activeView === 'video'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary'
              }`}
            >
              <Play className="w-3 h-3" />
              Motion Video
            </button>
          </div>
        )}
      </div>

      {/* Main Visual Display Stage */}
      <div className="relative z-10 my-4 sm:my-5 rounded-2xl overflow-hidden bg-[#18181C] aspect-[16/10] max-h-[350px] flex items-center justify-center border border-ink-border dark:border-white/10 shadow-inner">
        {activeView === 'studio' && (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src="/assets/nullwave/mask-studio.png"
              alt="NullWave Hardware Studio Render"
              className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-neutral-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-stone-200">
              Grade-5 Titanium Matte Chassis · Dual Acoustic Baffle Chamber
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
            <div className="absolute bottom-3 left-3 bg-neutral-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-stone-200">
              Zero-Pressure Anatomical Seal for Crowded Transit & Flight Cabins
            </div>
          </div>
        )}

        {activeView === 'blueprint' && (
          <div className="relative w-full h-full flex items-center justify-center p-4 bg-[#0F0F13]">
            <img
              src="/assets/nullwave/mask-blueprint.png"
              alt="NullWave CAD Blueprint"
              className="max-h-full max-w-full object-contain filter contrast-125 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-neutral-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-stone-200">
              Internal Micro-Duct Airflow Geometry & Integrated MEMS Microphone Array
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
            <div className="absolute bottom-3 left-3 bg-neutral-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-stone-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              Dynamic Hardware Kinematics
            </div>
          </div>
        )}
      </div>

      {/* Interactive Acoustic Isolation Simulation */}
      <div className="relative z-10 mb-3 p-3 rounded-xl bg-white dark:bg-stone-900/80 border border-ink-border dark:border-white/10 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Gauge className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-semibold text-ink-primary dark:text-ink-dark-primary">
              Acoustic Attenuation Simulator
            </span>
          </div>
          <span className="text-ink-secondary dark:text-ink-dark-secondary">
            Spoken: <strong className="text-ink-primary dark:text-ink-dark-primary">{ambientDb} dB</strong> → Leak Outside:{' '}
            <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{escapedDb} dB (Imperceptible)</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary shrink-0">
            40 dB (Whisper)
          </span>
          <input
            type="range"
            min="45"
            max="90"
            step="1"
            value={ambientDb}
            onChange={(e) => {
              playTick();
              setAmbientDb(Number(e.target.value));
            }}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <span className="text-[10px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary shrink-0">
            90 dB (Loud Shout)
          </span>
        </div>
      </div>

      {/* Hardware Feature Matrix */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <div className="flex items-center gap-1.5 text-ink-primary dark:text-ink-dark-primary font-medium text-[11px] mb-1">
            <MicOff className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Sound Chamber</span>
          </div>
          <p className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">-42 dB acoustic absorption</p>
        </div>

        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <div className="flex items-center gap-1.5 text-ink-primary dark:text-ink-dark-primary font-medium text-[11px] mb-1">
            <Wind className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Bladeless Flow</span>
          </div>
          <p className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">Silent micro-air circulation</p>
        </div>

        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <div className="flex items-center gap-1.5 text-ink-primary dark:text-ink-dark-primary font-medium text-[11px] mb-1">
            <Volume2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Voice AI Sync</span>
          </div>
          <p className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">Private LLM prompt interface</p>
        </div>

        <div className="bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm p-2.5 rounded-xl border border-ink-border dark:border-white/10">
          <div className="flex items-center gap-1.5 text-ink-primary dark:text-ink-dark-primary font-medium text-[11px] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Ergonomics</span>
          </div>
          <p className="text-[10px] text-ink-tertiary dark:text-ink-dark-tertiary">Grade-5 titanium + silicone</p>
        </div>
      </div>
    </div>
  );
};
