import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {

      'xsm': '550px',
      // => @media (min-width: 500px) { ... }

      'sm': '850px',
      // => @media (min-width: 750px) { ... }
      
      'sm-md': '1190px',
      // => @media (min-width: 1160px) { ... }

      'md': '1275px',
      // => @media (min-width: 1275px) { ... }

      'lg': '1700px',
      // => @media (min-width: 1700px) { ... }
    },
    width:{
      '35':'35px',
      '85':'85px',
      '400':'400px',
      '80':'80px',
      '100':'100px',
      '750':'750px',
      'free':'-moz-available',
    }
  },
  plugins: [],
};
export default config;
