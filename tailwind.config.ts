import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx, html}",
  ],
  safelist: [
    'swiper-button-prev',
    'swiper-button-next',
  ],
  theme: {
    extend: {
      fontFamily: {
        feature: ['Feature', 'Times', 'serif'],
        inter: ['Inter', 'serif'],
        roboto: ['Roboto Mono','serif'],
        gotham: ['Gotham'],
      },
      boxShadow: {
        "header-shadow": "0 10px 15px rgba(25, 25, 25, .1)",
        'nav-shadow': "0 3px 8px rgba(4,23,53,.04)",
        'menu-icon-shadow': "0 1px 0 rgba(0, 0, 0, .25)",
        'menu-list-shadow': "rgba(0, 0, 0, .35) 0 5px 15px;",
        'title-shadow': "0 4px 6px -2px #f8888e14",
        'break-shadow': "0 0 8px #b34cef",
        'item-shadow': "0 2px 0 0 #fff inset, 0 -4px 1px 0 #f8888e29 inset, 0 0 0 0.6px #f8888e52, 0 4px 6px -4px #c34e5f29"
      },
      screens: {
        'screen-1760': "1760px",
        'screen-1650': "1650px",
        'screen-1600': "1600px",
        'screen-1570': "1570px",
        'screen-1550': "1550px",
        'screen-1400': "1400px",
        'screen-1325': "1325px",
        'screen-1283': "1283px",
        'screen-1200': "1200px",
        'screen-1140': "1140px",
        'screen-1120': "1120px",
        'screen-992': "992px",
        'screen-600': "600px",
        'screen-576': "576px",
        'screen-425': "425px",
        'screen-320': "320px",
      },
      width: {
        'custom-18': "1.125rem", 
      },
      height: {
        'custom-1': "0.0625rem",
        'custom-1.5': "0.09375rem",
        'custom-2': "0.125rem",
        'custom-14': "0.875rem", 
        'custom-22': "1.375rem",
        'custom-50': "3.125rem",
        'custom-60': "3.75rem",
      },
      padding: {
        'custom-1': "0.0625rem",
        'custom-1.5': "0.09375rem",
        'custom-2': "0.125rem",
        'custom-3': "0.1875rem",
        'custom-4.8': "0.3rem",
        'custom-5': "0.3125rem",
        'custom-6': "0.375rem",
        'custom-7': "0.4375rem",
        'custom-9': "0.5625rem",
        'custom-10': "0.625rem",
        'custom-13': "0.8125rem",
        'custom-14': "0.875rem",
        'custom-15': "0.9375rem",
        'custom-18': "1.125rem", 
        'custom-22': "1.375rem",
        'custom-25': "1.5625rem", 
        'custom-26': "1.625rem", 
        'custom-30': "1.875rem", 
        'custom-31': "1.9375rem", 
        'custom-52': "3.25rem", 
        'custom-88': "5.5rem", 
      },
      margin: {
        'custom-1': "0.0625rem", 
        'custom-1.5': "0.09375rem", 
        'custom-2': "0.125rem", 
        'custom-3': "0.1875rem", 
        'custom-5': "0.3125rem", 
        'custom-6': "0.375rem", 
        'custom-10': "0.625rem", 
        'custom-14': "0.875rem",
        'custom-15': "0.9375rem",
        'custom-24': "1.5rem",
        'custom-30': "1.875rem",
        'custom-56': "3.5rem",
      },
      lineHeight: {
        'custom-15': "0.9375rem",
        'custom-18': "1.125rem", 
        'custom-21': "1.3125rem",
        'custom-24': "1.5rem",
        'custom-26': "1.625rem",
        'custom-27': "1.6875rem",
        'custom-38': "2.375rem",
        'custom-46': "2.875rem",
        'custom-48': "3rem",
        'custom-52': "3.25rem",
        'custom-56': "3.5rem",
        'custom-64': "4rem",
      },
      fontSize: {
        'custom-10': "0.625rem", 
        'custom-13': "0.8125rem", 
        'custom-14': "0.875rem", 
        'custom-22': "1.375rem", 
        'custom-24': "1.5rem", 
        'custom-28': "1.75rem", 
        'custom-26': "1.625rem", 
        'custom-30': "1.875rem", 
        'custom-32': "2rem", 
        'custom-34': "2.125rem", 
        'custom-40': "2.5rem",
        'custom-45': "2.8125rem", 
        'custom-48': "3rem",
        'custom-50': "3.125rem", 
        'custom-64': "4rem", 
      },
      letterSpacing: {
        'custom-0.35': "0.021875rem",
        'custom-0.75': "0.046875rem"
      }, 
      transitionDuration: {
        'custom-400': '400ms'
      }
    },
  },
  variants: {
    extend: {
      content: ['before', 'after'],
      position: ['before', 'after'],
      width: ['before', 'after'],
      height: ['before', 'after'],
      backgroundColor: ['before', 'after'],
      left: ['before', 'after'],
      transform: ['before', 'after'],
      transitionProperty: ['before', 'after'],
      transitionDuration: ['before', 'after'],
      opacity: ['before', 'after'],
    },
  },
  plugins: [],
};

export default config;