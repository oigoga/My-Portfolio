/** @type {import('tailwindcss').Config} */
const { fontFamily } = import("tailwindcss/defaultTheme")
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'black': '#222831',
      'white': '#FFFFFF',
      'offwhite': '#f2f2f2',
      'gray': '#333333',
      'gray2': '#666666',
      'gray3': '#B8B8B8',
      'gray4': '#EBEBEB',
      'grey': '#393e46',
      'orange-2': '#f96d00',
      'orange': '#c24d2c',
      'orange-3': '#ff5722',
      'purple': '#DCBFFF',
      'transparent': 'transparent'

     

    },
    fontFamily: {
      urbanist: ["var(--font-urbanist)"]
      
    },
    extend: {
      animation: {
        drive: 'drive 3s linear infinite',
      },
      keyframes: {
        drive: {
          '0%': {
            marginLeft: '-364px',
            opacity: 0,
          },
          '33.33%': {
            transform: 'rotate(0deg)',
            marginLeft: '-50px',
            opacity: 1,
          },
          '66.66%': {
            transform: 'rotate(-360deg)',
            marginLeft: '-50px',
            opacity: 1,
          },
          '100%': {
            marginLeft: '264px',
            transform: 'rotate(-360deg)',
            opacity: 0,
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
