/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Space Mono']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

