import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { useSound } from '../../context/SoundContext';
import { ThemeToggle } from '../ui/ThemeToggle';
import { SoundToggle } from '../ui/SoundToggle';
import { CommandMenu } from '../ui/CommandMenu';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { currentPath, navigate, activeSection } = useRouter();
  const { playClick } = useSound();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cmd+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Work', target: '#work', id: 'work' },
    { label: 'Lab', target: '#ongoing', id: 'ongoing' },
    { label: 'Manifesto', target: '#manifesto', id: 'manifesto' },
    { label: 'Books', target: '#ebooks', id: 'ebooks' },
    { label: 'Matrix', target: '#capabilities', id: 'capabilities' },
    { label: 'About', target: '#about', id: 'about' },
    { label: 'Contact', target: '#contact', id: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    playClick();
    setMobileMenuOpen(false);
    navigate(target);
  };

  const handleBrandClick = () => {
    playClick();
    setMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none transition-all duration-300">
        <div
          className={`w-full max-w-6xl rounded-2xl pointer-events-auto transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 ${
            isScrolled
              ? 'bg-[#FAF9F5]/90 dark:bg-[#09090D]/90 backdrop-blur-xl shadow-glass-lg border border-ink-border dark:border-white/10'
              : 'bg-[#FAF9F5]/75 dark:bg-[#09090D]/75 backdrop-blur-md border border-ink-border/60 dark:border-white/5'
          }`}
        >
          {/* Brand Logo & Telemetry */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleBrandClick}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
              aria-label="Aryan Pandey - Home"
            >
              <div className="w-7 h-7 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-mono text-xs font-bold shadow-xs group-hover:scale-105 transition-transform">
                A
              </div>
              <div className="leading-tight">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-ink-primary dark:text-ink-dark-primary uppercase block">
                  Aryan Pandey
                </span>
                <span className="text-[10px] font-mono text-ink-tertiary dark:text-ink-dark-tertiary hidden md:block">
                  Systems Architect · 0→1
                </span>
              </div>
            </button>

            {/* Live Clock Telemetry */}
            {currentTime && (
              <div className="hidden xl:flex items-center gap-1.5 pl-3 border-l border-ink-border/60 dark:border-white/10 font-mono text-[11px] text-ink-tertiary dark:text-ink-dark-tertiary">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{currentTime}</span>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === '/' && activeSection === link.id;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.target)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all relative ${
                    isActive
                      ? 'text-ink-primary dark:text-ink-dark-primary bg-neutral-900/5 dark:bg-white/10'
                      : 'text-ink-secondary dark:text-ink-dark-secondary hover:text-ink-primary dark:hover:text-ink-dark-primary hover:bg-neutral-900/[0.03] dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-1 left-3 right-3 h-[2px] bg-amber-500 dark:bg-amber-400 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Hub (Cmd+K, Sound, Theme, Mobile toggle) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Spotlight Cmd+K Button */}
            <button
              onClick={() => {
                playClick();
                setCmdOpen(true);
              }}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-stone-100/90 dark:bg-stone-900/90 hover:bg-stone-200/90 dark:hover:bg-stone-800 text-ink-secondary dark:text-ink-dark-secondary border border-ink-border dark:border-white/10 text-xs font-mono transition-all shadow-2xs"
              title="Search and command palette (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline text-[9px] font-mono bg-white dark:bg-stone-800 px-1.5 py-0.5 rounded border border-ink-border/70 dark:border-white/10 text-ink-tertiary dark:text-ink-dark-tertiary">
                ⌘K
              </kbd>
            </button>

            {/* Audio Toggle */}
            <SoundToggle />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl text-ink-primary dark:text-ink-dark-primary hover:bg-neutral-900/5 dark:hover:bg-white/5 focus:outline-none border border-transparent hover:border-ink-border dark:hover:border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Spotlight Command Palette Modal */}
      <CommandMenu isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#FAF9F5]/98 dark:bg-[#09090D]/98 backdrop-blur-2xl lg:hidden pt-24 px-6 flex flex-col justify-between pb-10"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-ink-border/50 dark:border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-tertiary dark:text-ink-dark-tertiary">
                  Navigation Index
                </span>
                {currentTime && (
                  <span className="font-mono text-xs text-ink-tertiary dark:text-ink-dark-tertiary">
                    {currentTime}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.target)}
                    className="w-full text-left py-3 text-2xl font-serif font-normal text-ink-primary dark:text-ink-dark-primary hover:text-amber-600 dark:hover:text-amber-400 flex items-center justify-between border-b border-ink-border/40 dark:border-white/5 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-ink-tertiary dark:text-ink-dark-tertiary" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-ink-border dark:border-white/10 text-xs font-mono text-ink-tertiary dark:text-ink-dark-tertiary flex justify-between items-center">
              <span>ARYAN PANDEY</span>
              <span>SYSTEMS ARCHITECT</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
