/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate-dark': '#34313D',
        'midnight-blue': '#3A3054',
        'plum': '#4B3F6B',
        'lavender-grey': '#9E9AA8',
        'pale-lilac': '#EFF1F7',
        'turquoise': '#2BD0D0',
        'currentColor': '#FFF',
      }, 
      backgroundImage: theme => ({
        'bg-boost': "url('/images/bg-boost-desktop.svg')",
        'bg-boost-mb': "url('/images/bg-boost-mobile.svg')",	
      })
    },
  },
  plugins: [],
}
