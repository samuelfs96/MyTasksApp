import tailwindScrollbar from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        'igreen': '#B5F587',
        'iyellow': '#F2F080',
        'ired': '#F09294',
        'iblue': '#90CBF0',
        'ipurple': '#D2A4DB',
      },
    },
  },
  plugins: [tailwindScrollbar],
}

