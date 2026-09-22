import React, { useState } from 'react';
import { useRouter, Link } from '../../context/RouterContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { springSmooth } from '../ui/motionVariants';

export const Navbar: React.FC = () => {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/work' },
    { label: 'Writing', path: '/writing' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    if (path === '/work') {
      return (
        currentPath === '/work' ||
        currentPath.startsWith('/work/') ||
        currentPath === '/projects' ||
        currentPath.startsWith('/projects/') ||
        currentPath === '/ongoing/nullwave'
      );
    }
    if (path === '/writing') {
      return (
        currentPath === '/writing' ||
        currentPath.startsWith('/writing/') ||
        currentPath === '/ebooks' ||
        currentPath.startsWith('/ebooks/') ||
        currentPath === '/ongoing/building-distribution'
      );
    }
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-gray-200 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-left font-sans font-semibold text-gray-900 hover:text-black transition-colors"
        >
          <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-base tracking-tight inline-block"
          >
            Aryan Pandey
          </motion.span>
        </Link>

        {/* Desktop Navigation with Animated Sliding Active Indicator */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 relative">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1.5 rounded-md text-sm transition-colors ${
                  active
                    ? 'text-gray-950 font-semibold'
                    : 'text-gray-600 hover:text-gray-950 font-normal'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute inset-0 bg-gray-200/75 rounded-md -z-10"
                    transition={springSmooth}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-gray-950 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Smooth Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-gray-200 bg-[#FAFAF9] overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link, idx) => {
                const active = isActive(link.path);
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.18 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        active
                          ? 'text-gray-950 font-semibold bg-gray-200/70'
                          : 'text-gray-600 hover:text-gray-950 hover:bg-gray-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
