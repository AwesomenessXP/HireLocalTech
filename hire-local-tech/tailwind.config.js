// tailwind.config.js
// ✅ Tailwind v4 correct usage
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // your overrides (optional)
        // gray: { 200: '...' } if needed
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}