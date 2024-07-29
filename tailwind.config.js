/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'product-card-shadow': '0 5px 15px rgba(0, 0, 0, 0.35)',
        'product-card-shadow-hover': '0 1px 4px rgba(0, 0, 0, 0.16), 0 0 0 2px #333',
      },
    },
  },
  plugins: [],
}

