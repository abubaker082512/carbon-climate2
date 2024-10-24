import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D4C31",
        gray: "#A4A4A4",
        "primary-light": "#3C6642",
      },
      textColor: {
        light: "#808080",
        primary: "#0B0905",
        secondary: "#2E4C32",
        "btn-primary": "#00401A",
      },
      boxShadow: {
        navbar: "0 4px 8px 0 #0000000D",
      },
    },
  },
  plugins: [],
};
export default config;
