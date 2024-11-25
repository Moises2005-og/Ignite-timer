/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',  // Pequenas telas
      'md': '768px',  // Médias telas
      'lg': '1024px', // Grandes telas
      'xl': '1280px', // Telas extra grandes
    },
  },
  plugins: [],
}
