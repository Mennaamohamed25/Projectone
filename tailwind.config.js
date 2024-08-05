/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        main: 'var(--color-main)',
        base: 'var(--color-base)',
        important: 'var(--color-important)',
        span: 'var(--color-span)',
        dropdown: 'var(--color-dropdown)',
        bg: 'var(--color-bg)',
        textspan: 'var(--color-textspan)',
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
      screens: {
        xsmall: '480px', // or your desired breakpoint value
      },
    },
  },
  plugins: [],
};

