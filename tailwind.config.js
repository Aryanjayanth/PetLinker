/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add any custom colors here
      },
      minHeight: {
        'screen-minus-nav': 'calc(100vh - 4rem)', // 4rem is the height of your navbar
      },
    },
  },
  plugins: [],
};
