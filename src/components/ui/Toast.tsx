import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info } from 'lucide-react';

interface ToastOptions {
  message: string;
  type?: 'success' | 'info';
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, type?: 'success' | 'info', duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastOptions | null>(null);

  const showToast = useCallback((message: string, type: 'success' | 'info' = 'success', duration = 2500) => {
    setToast({ message, type, duration });
    setTimeout(() => {
      setToast((current) => (current?.message === message ? null : current));
    }, duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="px-4 py-3 rounded-2xl bg-neutral-900/95 dark:bg-neutral-100/95 text-white dark:text-neutral-900 shadow-glass-xl border border-white/10 dark:border-black/10 backdrop-blur-md flex items-center gap-3 text-xs font-mono"
            >
              {toast.type === 'success' ? (
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 dark:text-emerald-700 flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 dark:text-amber-700 flex items-center justify-center">
                  <Info className="w-3 h-3" />
                </div>
              )}
              <span className="font-sans font-medium">{toast.message}</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
