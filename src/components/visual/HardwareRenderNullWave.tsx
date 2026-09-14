import React, { useState } from 'react';

export const HardwareRenderNullWave: React.FC = () => {
  const [activeView, setActiveView] = useState<'studio' | 'lifestyle' | 'blueprint' | 'video'>('studio');

  const views: Array<{ id: 'studio' | 'lifestyle' | 'blueprint' | 'video'; label: string }> = [
    { id: 'studio', label: 'Studio Render' },
    { id: 'lifestyle', label: 'Wearable Fit' },
    { id: 'blueprint', label: 'CAD Blueprint' },
    { id: 'video', label: 'Motion Video' },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Header & View Tabs */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50/50">
        <span className="text-xs font-mono font-medium text-gray-700">
          NullWave Hardware Prototype
        </span>

        <div className="flex items-center gap-1">
          {views.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeView === tab.id
                  ? 'bg-neutral-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="relative aspect-[16/10] max-h-[380px] bg-neutral-900 flex items-center justify-center overflow-hidden">
        {activeView === 'studio' && (
          <img
            src="/assets/nullwave/mask-studio.png"
            alt="NullWave Studio Render"
            className="w-full h-full object-contain p-4"
          />
        )}

        {activeView === 'lifestyle' && (
          <img
            src="/assets/nullwave/mask-lifestyle.png"
            alt="NullWave Wearable Fit"
            className="w-full h-full object-cover"
          />
        )}

        {activeView === 'blueprint' && (
          <img
            src="/assets/nullwave/mask-blueprint.png"
            alt="NullWave CAD Blueprint"
            className="w-full h-full object-contain p-4"
          />
        )}

        {activeView === 'video' && (
          <video
            src="/assets/nullwave/nullwave-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Technical Specifications Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-200 border-t border-gray-200 bg-gray-50/50 text-xs">
        <div className="p-3">
          <span className="text-gray-500 font-mono text-[11px] block">Acoustic Containment</span>
          <span className="font-medium text-gray-900 mt-0.5 block">-42 dB Sound Isolation</span>
        </div>
        <div className="p-3">
          <span className="text-gray-500 font-mono text-[11px] block">Chassis Materials</span>
          <span className="font-medium text-gray-900 mt-0.5 block">Grade-5 Matte Titanium</span>
        </div>
        <div className="p-3">
          <span className="text-gray-500 font-mono text-[11px] block">Air Circulation</span>
          <span className="font-medium text-gray-900 mt-0.5 block">Silent Micro-Ducting</span>
        </div>
        <div className="p-3">
          <span className="text-gray-500 font-mono text-[11px] block">Voice Capture</span>
          <span className="font-medium text-gray-900 mt-0.5 block">Dual MEMS Mic Array</span>
        </div>
      </div>
    </div>
  );
};
