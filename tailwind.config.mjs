/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        warm: {
          bg: '#F8F7F2',
          card: '#FFFFFF',
          surface: 'rgba(255, 255, 255, 0.85)',
          dark: '#EFECE4',
        },
        forest: {
          DEFAULT: '#527A55',
          dark: '#3E5E41',
          light: '#6B986E',
          muted: '#E6EFE7',
        },
        wood: {
          DEFAULT: '#D6C2A5',
          light: '#F0E8DC',
          dark: '#BBA585',
        },
        ink: {
          DEFAULT: '#1F2922',
          muted: '#4D5E52',
          light: '#76887B',
        },
        gold: {
          DEFAULT: '#B8955A',
          light: '#D4B886',
          dark: '#93743E',
        },
        black: {
          DEFAULT: '#1F2922',
          100: '#F8F7F2',
          200: '#FFFFFF',
          300: '#EFECE4',
          500: '#4D5E52',
          600: '#1F2922',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#1F2922',
          700: '#354339',
          600: '#4D5E52',
          500: '#76887B',
        },
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(31, 41, 34, 0.04)',
        'warm-md': '0 8px 24px rgba(31, 41, 34, 0.06)',
        'warm-lg': '0 16px 40px rgba(31, 41, 34, 0.08)',
        'forest-glow': '0 8px 25px -4px rgba(82, 122, 85, 0.35)',
        'gold-glow': '0 8px 25px -4px rgba(184, 149, 90, 0.35)',
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
        'aurora-gradient': 'linear-gradient(135deg, #00F5D4 0%, #7928CA 50%, #FF007F 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
    },
  },
  plugins: [],
};