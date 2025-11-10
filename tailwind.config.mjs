/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#00796B',
        accent: '#A7D129',
        'text-light': '#FFFFFF',
        'text-dark': '#00796B',
        'bg-header': '#00796B',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'menu': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'hero-title': ['24px', { lineHeight: '1.2', letterSpacing: '0.5px' }],
        'hero-slogan': ['72px', { lineHeight: '1.1', letterSpacing: '2px' }],
      },
      spacing: {
        'header-height': '80px',
      },
    },
  },
  plugins: [],
};

