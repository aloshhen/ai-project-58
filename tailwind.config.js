import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'coffee-brown': '#6F4E37',
        'coffee-dark': '#5D4037',
        'coffee-beige': '#D2B48C',
        'coffee-cream': '#F5F5DC'
      }
    }
  },
  plugins: [
    require('tailwindcss/plugin')(
      function ({ addUtilities }) {
        addUtilities({
          '.glass': 'backdrop-blur-xl bg-white/80 border-b border-slate-200/50',
          '.coffee-shadow': 'shadow-xl shadow-coffee-brown/10'
        })
      }
    )
  ]
})