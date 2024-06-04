/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage:  ({
        'gradient-blue': 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
        'gradient-pink': 'linear-gradient(135deg, #ec4899, #fbcfe8)',
        'gradient-orange': 'linear-gradient(135deg, #f97316, #fde68a)',
        'gradient-green': 'linear-gradient(135deg, #10b981, #6ee7b7)',
      }),
    },
  },
  plugins: [],
}

