/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0C0A',
        card: '#1C1612',
        text: '#EAE6E1',
        button: '#D4AF37',
        hover: '#F2D675',
        // legacy colors (if needed elsewhere)
        navy: {
          900: '#050B1F',
          800: '#0A1229',
        },
        accent: '#F5F7FA',
        muted: '#94A3B8',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
