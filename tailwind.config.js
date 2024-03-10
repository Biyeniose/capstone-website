/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Space Mono'],
        inter: ['Inter'],
        inter_t: ['Inter Tight'],
        andika: ['Andika'],
        sulphur: ['Sulphur Point']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

