/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'neon-purple': '#8B5CF6',
        'neon-blue': '#3B82F6',
        'neon-pink': '#EC4899',
        'dark-purple': '#1E1B3C',
        'glass-bg': 'rgba(17, 24, 39, 0.8)',
        'devpost-blue': '#003E54',
        'devpost-blue-dark': '#002A3A',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit': 'orbit 10s linear infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(139, 92, 246, 0.6)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.6)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.6)',
      },
    },
  },
  plugins: [],
};