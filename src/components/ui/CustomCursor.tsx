import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for fluid lag
  const mouseX = useSpring(0, { stiffness: 450, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 28 });

  useEffect(() => {
    // Check touch support
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, textarea, [data-cursor], .cursor-pointer');
        if (interactive) {
          setIsHovered(true);
          const customText = interactive.getAttribute('data-cursor-text');
          setCursorText(customText || '');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Lagging Ring */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorText ? 64 : isHovered ? 44 : 24,
          height: cursorText ? 64 : isHovered ? 44 : 24,
          borderColor: isHovered ? 'rgba(217, 119, 6, 0.6)' : 'rgba(120, 113, 108, 0.4)',
          backgroundColor: cursorText ? 'rgba(18, 18, 18, 0.85)' : isHovered ? 'rgba(217, 119, 6, 0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="rounded-full border border-dashed flex items-center justify-center backdrop-blur-[1px] transition-colors"
      >
        {cursorText && (
          <span className="text-[9px] font-mono text-white tracking-widest uppercase font-semibold">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Dot */}
      {!cursorText && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400"
        />
      )}
    </div>
  );
};
