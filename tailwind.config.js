module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#FFDBAA',
        'brand-yellow': '#FFC139',
        'brand-grey': '#A49F9A',
        'brand-brown': '#61544A',
        'brand-light-teal': '#92A9A5',
        'brand-teal': '#416B6B',
        'brand-baby-blue': '#BDCBD4',
        'brand-blue': '#5F6576',
      },
      rotate: {
        '315': '315deg',
      },
      fontFamily: {
        'alice': ['Alice', 'serif'],
        'arimo': ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}