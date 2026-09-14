import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useSound } from '../../context/SoundContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const { playSwitch } = useSound();

  const handleToggle = () => {
    playSwitch();
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-xl text-ink-secondary hover:text-ink-primary dark:text-ink-dark-secondary dark:hover:text-ink-dark-primary hover:bg-neutral-900/5 dark:hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-ink-border dark:hover:border-ink-dark-border focus:outline-none ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'Dark Obsidian' : 'Light Paper'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-4 h-4 flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 text-amber-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-600" />
        )}
      </motion.div>
    </button>
  );
};
