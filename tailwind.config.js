/** @type {import('tailwindcss').Config} */
export default {
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
        },
        surface: {
          light: '#FFFFFF',
          glass: 'rgba(255, 255, 255, 0.72)',
          'glass-elevated': 'rgba(255, 255, 255, 0.88)',
          'glass-card': 'rgba(255, 255, 255, 0.65)',
          'glass-dark': 'rgba(24, 24, 27, 0.04)',
        },
        ink: {
          primary: '#121212',
          secondary: '#52525B',
          tertiary: '#71717A',
          muted: '#A1A1AA',
          border: 'rgba(24, 24, 27, 0.08)',
          'border-subtle': 'rgba(24, 24, 27, 0.05)',
          'border-prominent': 'rgba(24, 24, 27, 0.14)',
        },
        accent: {
          slate: '#27272A',
          olive: '#4A5568',
          sand: '#8C827A',
          amber: '#D97706',
          emerald: '#059669',
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
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.03)',
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
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
          '50%': { opacity: '0.8' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      }
    },
  },
  plugins: [],
}
