import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { LiveSection } from '../components/home/LiveSection';
import { OngoingSection } from '../components/home/OngoingSection';
import { EbooksSection } from '../components/home/EbooksSection';
import { AboutSection } from '../components/home/AboutSection';
import { ContactSection } from '../components/home/ContactSection';
import { useRouter } from '../context/RouterContext';

export const HomePage: React.FC = () => {
  const { setActiveSection } = useRouter();

  useEffect(() => {
    const sectionIds = ['hero', 'work', 'ongoing', 'ebooks', 'about', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - offset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <div className="space-y-4">
      <Hero />
      <LiveSection />
      <OngoingSection />
      <EbooksSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};
