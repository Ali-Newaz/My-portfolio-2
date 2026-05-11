module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'light-bg': '#ffffff',
        'accent': '#00ffcc',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      spacing: {
        'bento': 'calc(100% / 3 - 1rem)', // Adjust for Bento Box layout
      },
    },
  },
  plugins: [],
}