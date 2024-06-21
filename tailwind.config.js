module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'leveraging': "url('/src/assets/images/leveraging.png')",
      }
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: '#9CA3AF',
      purple: '#CE10FA',
      green: '#14F195',
    }
  },
  plugins: [],
}