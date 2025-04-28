/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        darkAccent: '#111111',
        darkLight: '#1A1A1A',
        neonTeal: {
          500: 'rgb(60, 255, 236)',
          400: 'rgba(60, 255, 236, 0.8)',
          300: 'rgba(60, 255, 236, 0.6)',
        },
        neonBlue: {
          500: 'rgb(23, 168, 255)',
          400: 'rgba(23, 168, 255, 0.8)',
          300: 'rgba(23, 168, 255, 0.6)',
        },
        neonMagenta: {
          500: 'rgb(255, 0, 255)',
          400: 'rgba(255, 0, 255, 0.8)',
          300: 'rgba(255, 0, 255, 0.6)',
        },
        neonGreen: {
          500: 'rgb(57, 255, 176)',
          400: 'rgba(57, 255, 176, 0.8)',
          300: 'rgba(57, 255, 176, 0.6)',
        },
        success: {
          500: '#10B981',
          400: 'rgba(16, 185, 129, 0.8)',
        },
        warning: {
          500: '#F59E0B',
          400: 'rgba(245, 158, 11, 0.8)',
        },
        error: {
          500: '#EF4444',
          400: 'rgba(239, 68, 68, 0.8)',
        },
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(60, 255, 236, 0.5)',
        'glow-blue': '0 0 20px rgba(23, 168, 255, 0.5)',
        'glow-magenta': '0 0 20px rgba(255, 0, 255, 0.5)',
        'glow-green': '0 0 20px rgba(57, 255, 176, 0.5)',
      },
      backgroundImage: {
        'cyberpunk-hero': "url('/images/cyberpunk-hero.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};