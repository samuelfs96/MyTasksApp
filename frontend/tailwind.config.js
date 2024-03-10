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
          DEFAULT: '2rem',
        },
      },
      colors: {
        'igreen': '#e9ffea',
        'iyellow': '#faffe0',
        'ired': '#fde6f7',
        'iblue': '#d7e7fd',
        'ipeach': '#ffece3',
      },
    },
  },
  plugins: [tailwindScrollbar],
}

