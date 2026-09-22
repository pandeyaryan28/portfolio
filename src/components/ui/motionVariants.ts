import { Variants } from 'framer-motion';

// Premium Page Transitions with Noticeable Velocity & Depth
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: 'blur(3px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
    transitionEnd: {
      filter: 'none',
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(2px)',
    transition: {
      duration: 0.22,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Container Stagger Variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
};

// Noticeable Scroll Entrance Variants
export const scrollCardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 44,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scrollFadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 38,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scrollSlideLeftVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scrollSlideRightVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scrollScaleVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.93,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Legacy aliases for backwards compatibility
export const fadeUpVariant: Variants = scrollFadeUpVariant;
export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
export const scaleInVariant: Variants = scrollScaleVariant;

// Rich Card Hover Physics
export const cardHoverVariant = {
  rest: {
    y: 0,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hover: {
    y: -6,
    boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.09), 0 10px 15px -5px rgba(0, 0, 0, 0.04)',
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

// Spring configurations
export const springSmooth = {
  type: 'spring' as const,
  stiffness: 320,
  damping: 26,
};

export const springSnappy = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 28,
};

export const springGentle = {
  type: 'spring' as const,
  stiffness: 220,
  damping: 22,
};
