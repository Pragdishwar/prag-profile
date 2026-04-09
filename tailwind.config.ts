import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00ff9d',
        'cyber-blue':  '#0ea5e9',
        'cyber-red':   '#ff3366',
        'surface':     '#0a0f1e',
        'elevated':    '#0d1528',
      },
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        mono:    ['IBM Plex Mono', 'monospace'],
        sans:    ['IBM Plex Sans', 'sans-serif'],
        jp:      ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
