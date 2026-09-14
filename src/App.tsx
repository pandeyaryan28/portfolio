import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import { ToastProvider } from './components/ui/Toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { HomePage } from './pages/HomePage';
import { UniCareDetail } from './pages/UniCareDetail';
import { GuildOrbitDetail } from './pages/GuildOrbitDetail';
import { NullWaveDetail } from './pages/NullWaveDetail';
import { BuildingDistributionDetail } from './pages/BuildingDistributionDetail';
import { TheSystemDetail } from './pages/TheSystemDetail';
import { AnimatePresence } from 'framer-motion';

const MainContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderRoute = () => {
    switch (currentPath) {
      case '/work/unicare':
        return <UniCareDetail key="unicare" />;
      case '/work/guild-orbit':
        return <GuildOrbitDetail key="guild-orbit" />;
      case '/ongoing/nullwave':
        return <NullWaveDetail key="nullwave" />;
      case '/ongoing/building-distribution':
        return <BuildingDistributionDetail key="building-distribution" />;
      case '/ebooks/the-system-is-being-rewritten':
        return <TheSystemDetail key="the-system" />;
      case '/':
      default:
        return <HomePage key="home" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas dark:bg-canvas-dark text-ink-primary dark:text-ink-dark-primary relative selection:bg-amber-500 selection:text-black transition-colors duration-400">
      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Background subtle noise and fine atmospheric mesh */}
      <div className="fixed inset-0 bg-noise opacity-40 pointer-events-none -z-20" />
      <div className="fixed inset-0 subtle-grid opacity-30 pointer-events-none -z-20" />

      {/* Floating Glass Navigation Bar with Command Menu */}
      <Navbar />

      {/* Main Routed Content Stage */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {renderRoute()}
        </AnimatePresence>
      </main>

      {/* Architectural Colophon Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SoundProvider>
        <ToastProvider>
          <RouterProvider>
            <MainContent />
          </RouterProvider>
        </ToastProvider>
      </SoundProvider>
    </ThemeProvider>
  );
};

export default App;
