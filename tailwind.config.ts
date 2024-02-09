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
        'background': '#0D0D0D',
        'background-secondary': '#0C0C0C',
        'primary': '#F2F2F2',
        'secondary': '#1B0140',
        'tertiary': '#7648D0',
        'quaternary': '#5D3CA6',
        'quinary': '#2D1E5E',
      }
    },
  },
  plugins: [],
};
export default config;
