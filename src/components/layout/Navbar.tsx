import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate, activeSection } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', target: '#work', id: 'work' },
    { label: 'Ongoing', target: '#ongoing', id: 'ongoing' },
    { label: 'Ebooks', target: '#ebooks', id: 'ebooks' },
    { label: 'About', target: '#about', id: 'about' },
    { label: 'Contact', target: '#contact', id: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    navigate(target);
  };

  const handleBrandClick = () => {
    setMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
        <div
          className={`w-full max-w-5xl rounded-2xl pointer-events-auto transition-all duration-300 px-5 py-3 sm:py-3.5 flex items-center justify-between ${
            isScrolled
              ? 'bg-[#FAF9F5]/90 backdrop-blur-md shadow-glass-md border border-ink-border'
              : 'bg-[#FAF9F5]/70 backdrop-blur-sm border border-ink-border/60'
          }`}
        >
          {/* Brand Logo */}
          <button
            onClick={handleBrandClick}
            className="group flex items-center gap-2 text-left focus:outline-none"
            aria-label="Aryan Pandey - Home"
          >
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-ink-primary group-hover:text-neutral-600 transition-colors uppercase">
              Aryan Pandey
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === '/' && activeSection === link.id;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.target)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all relative ${
                    isActive
                      ? 'text-ink-primary bg-neutral-900/5'
                      : 'text-ink-secondary hover:text-ink-primary hover:bg-neutral-900/[0.03]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-ink-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-ink-primary hover:bg-neutral-900/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-fade-in">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-tertiary">Navigation</p>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.target)}
                  className="w-full text-left py-3 text-2xl font-serif font-normal text-ink-primary hover:text-neutral-600 flex items-center justify-between border-b border-ink-border/40"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-ink-tertiary" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-ink-border text-xs font-mono text-ink-tertiary flex justify-between items-center">
            <span>ARYAN PANDEY</span>
            <span>SYSTEMS OPERATOR</span>
          </div>
        </div>
      )}
    </>
  );
};
