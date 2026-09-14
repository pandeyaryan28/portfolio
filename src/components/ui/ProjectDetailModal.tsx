import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  children: React.ReactNode;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-end sm:items-center overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md transition-opacity"
          />

          {/* Modal / Sheet Container */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="relative w-full max-w-5xl h-[92vh] bg-[#FAF9F5] rounded-t-3xl sm:rounded-3xl border border-ink-border shadow-2xl overflow-y-auto flex flex-col z-10 mx-auto"
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-30 bg-[#FAF9F5]/90 backdrop-blur-md px-6 sm:px-10 py-4 border-b border-ink-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-stone-200/60 text-ink-secondary hover:text-ink-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
                  aria-label="Close modal"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">ESC TO CLOSE</span>
                </button>
                <div className="h-4 w-[1px] bg-ink-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-ink-tertiary uppercase">{category}</span>
                  <span className="text-ink-tertiary">/</span>
                  <span className="text-xs font-semibold text-ink-primary">{title}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-ink-secondary hover:text-ink-primary transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 p-6 sm:p-12">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
