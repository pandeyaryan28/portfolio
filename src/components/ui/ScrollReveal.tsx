import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, Variants } from 'framer-motion';

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  distance?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number | 'some' | 'all';
  viewportMargin?: string;
  once?: boolean;
  blur?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  distance = 48,
  duration = 0.65,
  className = '',
  viewportAmount = 0.1,
  viewportMargin = '0px 0px -40px 0px',
  once = true,
  blur = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialState = () => {
    if (shouldReduceMotion) {
      return { opacity: 0 };
    }

    const blurFilter = blur ? 'blur(6px)' : undefined;

    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, filter: blurFilter };
      case 'down':
        return { opacity: 0, y: -distance, filter: blurFilter };
      case 'left':
        return { opacity: 0, x: -distance, filter: blurFilter };
      case 'right':
        return { opacity: 0, x: distance, filter: blurFilter };
      case 'scale':
        return { opacity: 0, scale: 0.94, y: distance * 0.4, filter: blurFilter };
      case 'fade':
      default:
        return { opacity: 0, filter: blurFilter };
    }
  };

  const getTargetState = () => {
    if (shouldReduceMotion) {
      return { opacity: 1 };
    }

    const blurFilter = blur ? 'blur(0px)' : undefined;

    switch (direction) {
      case 'scale':
        return {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: blurFilter,
          transitionEnd: { filter: 'none' },
        };
      default:
        return {
          opacity: 1,
          x: 0,
          y: 0,
          filter: blurFilter,
          transitionEnd: { filter: 'none' },
        };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={getTargetState()}
      exit={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.96, transition: { duration: 0.2 } }
      }
      viewport={{ once, amount: viewportAmount, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface ScrollStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewportAmount?: number | 'some' | 'all';
  viewportMargin?: string;
  once?: boolean;
}

export const ScrollStagger: React.FC<ScrollStaggerProps> = ({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.04,
  className = '',
  viewportAmount = 0.1,
  viewportMargin = '0px 0px -30px 0px',
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: viewportAmount, margin: viewportMargin }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface ScrollItemProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  distance?: number;
  duration?: number;
  blur?: boolean;
  className?: string;
}

export const ScrollItem: React.FC<ScrollItemProps> = ({
  children,
  direction = 'up',
  distance = 32,
  duration = 0.55,
  blur = true,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitial = () => {
    if (shouldReduceMotion) return { opacity: 0 };
    const blurFilter = blur ? 'blur(4px)' : undefined;

    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, filter: blurFilter };
      case 'down':
        return { opacity: 0, y: -distance, filter: blurFilter };
      case 'left':
        return { opacity: 0, x: -distance, filter: blurFilter };
      case 'right':
        return { opacity: 0, x: distance, filter: blurFilter };
      case 'scale':
        return { opacity: 0, scale: 0.92, filter: blurFilter };
      case 'fade':
      default:
        return { opacity: 0, filter: blurFilter };
    }
  };

  const itemVariants: Variants = {
    hidden: getInitial(),
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: blur ? 'blur(0px)' : undefined,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
      transitionEnd: {
        filter: 'none',
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export interface ScrollParallaxProps {
  children: React.ReactNode;
  offset?: number;
  direction?: 'up' | 'down';
  rotateEffect?: boolean;
  scaleEffect?: boolean;
  className?: string;
}

export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  offset = 35,
  direction = 'up',
  rotateEffect = false,
  scaleEffect = false,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 28,
    mass: 0.25,
  });

  const yRange = direction === 'up' ? [offset, -offset] : [-offset, offset];
  const y = useTransform(smoothProgress, [0, 1], yRange);
  const rotate = useTransform(smoothProgress, [0, 1], [-2.5, 2.5]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.97, 1.02, 0.97]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        className={className.includes('h-full') ? 'h-full' : undefined}
        style={{
          y,
          ...(rotateEffect ? { rotate } : {}),
          ...(scaleEffect ? { scale } : {}),
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
