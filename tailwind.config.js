/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-image': 'url("/img/bg-desktop-dark.jpg")',
        'light-image': 'url("/img/bg-desktop-light.jpg")',
        'dark-image-mobile': 'url("/img/bg-mobile-dark.jpg")',
        'light-image-mobile': 'url("/img/bg-mobile-light.jpg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
