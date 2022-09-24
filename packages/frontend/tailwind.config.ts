/* eslint-disable */
import colors from 'tailwindcss/colors'

module.exports = {
  content: [`./src/pages/**/*.{js,ts,jsx,tsx}`, `./src/components/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      backgroundImage: {
        background: "url('../public/images/landing-background.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
  ],
}
