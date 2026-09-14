import React from 'react';
import { useSound } from '../../context/SoundContext';
import { VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export const SoundToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isMuted, toggleMute } = useSound();

  return (
    <button
      onClick={toggleMute}
      className={`px-2.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border flex items-center gap-1.5 focus:outline-none ${
        !isMuted
          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
          : 'text-ink-tertiary dark:text-ink-dark-tertiary hover:text-ink-primary dark:hover:text-ink-dark-primary border-transparent hover:border-ink-border dark:hover:border-ink-dark-border hover:bg-neutral-900/5 dark:hover:bg-white/5'
      } ${className}`}
      aria-label={isMuted ? 'Enable sound feedback' : 'Mute sound feedback'}
      title={isMuted ? 'Enable tactile audio feedback' : 'Mute sound feedback'}
    >
      {!isMuted ? (
        <>
          <div className="flex items-center gap-0.5 h-3.5">
            <motion.span
              animate={{ height: ['4px', '12px', '6px', '14px', '4px'] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="w-0.5 bg-amber-500 dark:bg-amber-400 rounded-full"
            />
            <motion.span
              animate={{ height: ['8px', '4px', '14px', '6px', '8px'] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              className="w-0.5 bg-amber-500 dark:bg-amber-400 rounded-full"
            />
            <motion.span
              animate={{ height: ['12px', '6px', '4px', '12px', '10px'] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
              className="w-0.5 bg-amber-500 dark:bg-amber-400 rounded-full"
            />
          </div>
          <span className="text-[11px] font-mono hidden sm:inline">SFX ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span className="text-[11px] font-mono hidden sm:inline">SFX OFF</span>
        </>
      )}
    </button>
  );
};
