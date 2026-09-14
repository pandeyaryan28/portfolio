import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ToastProvider } from './components/ui/Toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { UniCareDetail } from './pages/UniCareDetail';
import { GuildOrbitDetail } from './pages/GuildOrbitDetail';
import { NullWaveDetail } from './pages/NullWaveDetail';
import { WritingPage } from './pages/WritingPage';
import { TheSystemDetail } from './pages/TheSystemDetail';
import { BuildingDistributionDetail } from './pages/BuildingDistributionDetail';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { AnimatePresence, motion } from 'framer-motion';
import { pageVariants } from './components/ui/motionVariants';

const MainContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderRoute = () => {
    switch (currentPath) {
      case '/work':
      case '/projects':
        return <ProjectsPage key="projects" />;
      case '/work/unicare':
        return <UniCareDetail key="unicare" />;
      case '/work/guild-orbit':
        return <GuildOrbitDetail key="guild-orbit" />;
      case '/work/nullwave':
      case '/ongoing/nullwave':
        return <NullWaveDetail key="nullwave" />;
      case '/writing':
      case '/ebooks':
        return <WritingPage key="writing" />;
      case '/writing/the-system':
      case '/ebooks/the-system-is-being-rewritten':
        return <TheSystemDetail key="the-system" />;
      case '/writing/building-distribution':
      case '/ongoing/building-distribution':
        return <BuildingDistributionDetail key="building-distribution" />;
      case '/about':
        return <AboutPage key="about" />;
      case '/contact':
        return <ContactPage key="contact" />;
      case '/':
      default:
        return <HomePage key="home" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#111827] font-sans antialiased selection:bg-neutral-900 selection:text-white">
      {/* Pristine Light Multi-page Navigation */}
      <Navbar />

      {/* Main Routed Content with Smooth Page Transitions */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderRoute()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <RouterProvider>
        <MainContent />
      </RouterProvider>
    </ToastProvider>
  );
};

export default App;
