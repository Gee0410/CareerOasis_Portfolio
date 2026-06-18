/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oasis: {
          cream:   '#FAF9F6',   // Page background
          primary: '#115E59',   // Deep teal (brand)
          deep:    '#0B3D39',   // Hover state for primary
          light:   '#D1FAE5',   // Mint highlight / soft bg
          accent:  '#10B981',   // Bright emerald accent dot
          text:    '#111827',   // Near-black body text
        },
      },
      fontFamily: {
        sans:      ['Inter', 'system-ui', 'sans-serif'],
        playfair:  ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}