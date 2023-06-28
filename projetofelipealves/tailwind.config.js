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
        primary: {
          '100': '#ff5ea5',
          '200': '#ffb2d5'
        },
        secondary: {
          '100': '#0896ff',
          '200': '#ffb2d5'
        }
        },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      Montserrant:["Montserrat"],
      OpenSans: ["Open Sans"],
      Roboto: ["Roboto"],
      LeagueSpartan: ["League Spartan"]
    },
    fontSize: {
      
    }
  },
  plugins: [],
}
