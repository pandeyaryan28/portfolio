/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAF9F5',
          soft: '#F4F3ED',
          muted: '#EAE8DE',
          subtle: '#F7F6F0',
          dark: '#09090B',
          'dark-soft': '#121215',
          'dark-muted': '#1C1C21',
          'dark-card': '#151518',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#121214',
          glass: 'rgba(255, 255, 255, 0.72)',
          'glass-dark': 'rgba(18, 18, 20, 0.75)',
          'glass-elevated': 'rgba(255, 255, 255, 0.88)',
          'glass-elevated-dark': 'rgba(24, 24, 28, 0.9)',
          'glass-card': 'rgba(255, 255, 255, 0.65)',
          'glass-card-dark': 'rgba(24, 24, 28, 0.65)',
        },
        ink: {
          primary: '#121212',
          secondary: '#52525B',
          tertiary: '#71717A',
          muted: '#A1A1AA',
          border: 'rgba(24, 24, 27, 0.08)',
          'border-subtle': 'rgba(24, 24, 27, 0.05)',
          'border-prominent': 'rgba(24, 24, 27, 0.14)',
          // Dark mode counterparts
          'dark-primary': '#F4F4F5',
          'dark-secondary': '#A1A1AA',
          'dark-tertiary': '#71717A',
          'dark-muted': '#52525B',
          'dark-border': 'rgba(244, 244, 245, 0.08)',
          'dark-border-subtle': 'rgba(244, 244, 245, 0.05)',
          'dark-border-prominent': 'rgba(244, 244, 245, 0.16)',
        },
        accent: {
          slate: '#27272A',
          olive: '#4A5568',
          sand: '#8C827A',
          amber: '#D97706',
          'amber-glow': '#F59E0B',
          emerald: '#059669',
          'emerald-glow': '#10B981',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        snug: '-0.015em',
        editorial: '0.08em',
        widest: '0.15em',
      },
      boxShadow: {
        'glass-sm': '0 2px 10px -2px rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
        'glass-md': '0 8px 30px -4px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'glass-lg': '0 20px 50px -10px rgba(0, 0, 0, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'glass-xl': '0 30px 70px -15px rgba(0, 0, 0, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.03)',
        'dark-glow': '0 0 40px -10px rgba(245, 158, 11, 0.08)',
        'emerald-glow': '0 0 35px -8px rgba(16, 185, 129, 0.12)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.03)',
        'dark-inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
