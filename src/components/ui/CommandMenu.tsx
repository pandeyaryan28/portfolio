import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../../context/RouterContext';
import { useTheme } from '../../context/ThemeContext';
import { useSound } from '../../context/SoundContext';
import { useToast } from './Toast';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Copy,
  FolderGit2,
  BookOpen,
  Sparkles,
  Terminal,
} from 'lucide-react';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { isMuted, toggleMute, playClick, playPop } = useSound();
  const { showToast } = useToast();

  const commands = [
    // Projects
    {
      id: 'unicare',
      title: 'UniCare — Healthcare Operating System',
      category: 'Projects',
      icon: Sparkles,
      action: () => {
        navigate('/work/unicare');
        onClose();
      },
    },
    {
      id: 'guild-orbit',
      title: 'Guild Orbit — Unified Execution Workspace',
      category: 'Projects',
      icon: Sparkles,
      action: () => {
        navigate('/work/guild-orbit');
        onClose();
      },
    },
    {
      id: 'nullwave',
      title: 'NullWave — Wearable Voice Isolation Hardware',
      category: 'Projects',
      icon: Sparkles,
      action: () => {
        navigate('/ongoing/nullwave');
        onClose();
      },
    },
    {
      id: 'building-distribution',
      title: 'Building Distribution — Practical Essay Book',
      category: 'Publications',
      icon: BookOpen,
      action: () => {
        navigate('/ongoing/building-distribution');
        onClose();
      },
    },
    {
      id: 'the-system',
      title: 'The System Is Being Rewritten — Macro Systems Book',
      category: 'Publications',
      icon: BookOpen,
      action: () => {
        navigate('/ebooks/the-system-is-being-rewritten');
        onClose();
      },
    },
    // Navigation
    {
      id: 'nav-manifesto',
      title: 'Go to First Principles Manifesto',
      category: 'Sections',
      icon: ArrowRight,
      action: () => {
        navigate('#manifesto');
        onClose();
      },
    },
    {
      id: 'nav-work',
      title: 'Go to Live Systems (Work)',
      category: 'Sections',
      icon: ArrowRight,
      action: () => {
        navigate('#work');
        onClose();
      },
    },
    {
      id: 'nav-ongoing',
      title: 'Go to Active Lab (Ongoing)',
      category: 'Sections',
      icon: ArrowRight,
      action: () => {
        navigate('#ongoing');
        onClose();
      },
    },
    {
      id: 'nav-capabilities',
      title: 'Go to Systems & Tech Matrix',
      category: 'Sections',
      icon: Terminal,
      action: () => {
        navigate('#capabilities');
        onClose();
      },
    },
    {
      id: 'nav-about',
      title: 'Go to About & Living Ledger',
      category: 'Sections',
      icon: ArrowRight,
      action: () => {
        navigate('#about');
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact Hub',
      category: 'Sections',
      icon: ArrowRight,
      action: () => {
        navigate('#contact');
        onClose();
      },
    },
    // Quick Actions
    {
      id: 'copy-email',
      title: 'Copy Email Address (aryanpandey.build@gmail.com)',
      category: 'Actions',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText('aryanpandey.build@gmail.com');
        playPop();
        showToast('Email address copied to clipboard!');
        onClose();
      },
    },
    {
      id: 'toggle-theme',
      title: `Switch Theme to ${theme === 'light' ? 'Dark Obsidian' : 'Light Paper'}`,
      category: 'Actions',
      icon: theme === 'light' ? Moon : Sun,
      action: () => {
        toggleTheme();
        showToast(`Theme switched to ${theme === 'light' ? 'Dark Obsidian' : 'Light Paper'}`);
        onClose();
      },
    },
    {
      id: 'toggle-sound',
      title: isMuted ? 'Enable UI Audio Feedback' : 'Mute UI Audio Feedback',
      category: 'Actions',
      icon: isMuted ? Volume2 : VolumeX,
      action: () => {
        toggleMute();
        showToast(isMuted ? 'Sound FX activated' : 'Sound FX muted');
        onClose();
      },
    },
    {
      id: 'github',
      title: 'View GitHub Profile',
      category: 'External',
      icon: FolderGit2,
      action: () => {
        window.open('https://github.com/aryanpandey28', '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // handeled in parent or trigger
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          playClick();
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose, playClick]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 dark:bg-black/75 backdrop-blur-md transition-opacity"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl bg-[#FAF9F5] dark:bg-[#121216] rounded-2xl border border-ink-border dark:border-white/10 shadow-glass-xl overflow-hidden z-10 flex flex-col"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-ink-border/60 dark:border-white/10 gap-3">
              <Search className="w-4 h-4 text-ink-tertiary dark:text-ink-dark-tertiary shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search systems, publications, actions..."
                className="w-full bg-transparent border-none outline-none text-sm text-ink-primary dark:text-ink-dark-primary placeholder:text-ink-tertiary dark:placeholder:text-ink-dark-tertiary font-sans"
              />
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-200/60 dark:bg-stone-800 text-ink-tertiary dark:text-ink-dark-tertiary shrink-0">
                ESC
              </span>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-transparent space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-ink-tertiary dark:text-ink-dark-tertiary">
                  No matching systems or commands found.
                </div>
              ) : (
                filteredCommands.map((command, idx) => {
                  const Icon = command.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={command.id}
                      onClick={() => {
                        playClick();
                        command.action();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs transition-all ${
                        isSelected
                          ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                          : 'text-ink-primary dark:text-ink-dark-primary hover:bg-stone-200/50 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-inherit' : 'text-ink-tertiary dark:text-ink-dark-tertiary'}`} />
                        <span className="font-medium truncate">{command.title}</span>
                      </div>
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                        isSelected
                          ? 'bg-white/20 dark:bg-black/20 text-inherit'
                          : 'bg-stone-100 dark:bg-stone-800 text-ink-tertiary dark:text-ink-dark-tertiary'
                      }`}>
                        {command.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Command Palette Footer */}
            <div className="px-4 py-2.5 bg-stone-100/60 dark:bg-[#18181F] border-t border-ink-border/50 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <kbd className="bg-white dark:bg-stone-800 px-1 py-0.5 rounded border border-ink-border dark:border-white/10 text-[9px]">↑</kbd>
                  <kbd className="bg-white dark:bg-stone-800 px-1 py-0.5 rounded border border-ink-border dark:border-white/10 text-[9px]">↓</kbd>
                  to navigate
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="bg-white dark:bg-stone-800 px-1 py-0.5 rounded border border-ink-border dark:border-white/10 text-[9px]">↵</kbd>
                  to select
                </span>
              </div>
              <span className="hidden sm:inline">ARYAN PANDEY · ARCHIVE v2.4</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
