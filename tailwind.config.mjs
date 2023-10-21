/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"], // añade otras fuentes de reserva aquí, como 'sans-serif'
      },
      aspectRatio: {
        "16:9": [16, 9],
      },
      colors: {
        secondary: {
          // 50: "#F1F8FE",
          // 100: "#E3F0FB",
          // 200: "#C0E1F7",
          // 300: "#88CAF1",
          // 400: "#49AEE7",
          // DEFAULT: "#208DCB", // Default color for primary
          // 600: "#1476B5",
          // 700: "#115E93",
          // 800: "#12517A",
          // 900: "#154465",
          // 950: "#0E2B43",
          50: "#f1f9fe",
          100: "#e3f1fb",
          200: "#c0e4f7",
          300: "#88d0f1",
          400: "#49b7e7",
          500: "#27a6dd",
          600: "#147fb5",
          700: "#116693",
          800: "#12577a",
          900: "#154965",
          DEFAULT: "#0e2e43",
        },
        primary: {
          // 50: "#EEF2FF",
          // 100: "#DFE7FF",
          // 200: "#C6D1FF",
          // 300: "#A3B2FE",
          // 400: "#7E89FB",
          // 500: "#5F62F5",
          // 600: "#4B42E9",
          // 700: "#4034CE",
          // 800: "#342DA6",
          // 900: "#2F2C83",
          // DEFAULT: "#252162",
          50: "#efeeff",
          100: "#e2e0ff",
          200: "#cac6ff",
          300: "#aaa4fd",
          400: "#877ffa",
          500: "#6a61f3",
          600: "#4e44e7",
          700: "#3f36cc",
          800: "#352ea5",
          900: "#322d82",
          DEFAULT: "#262262",
        },
        tertiary1: {
          // 50: "#FDF2F8",
          // 100: "#FBE8F3",
          // 200: "#FAD0E8",
          // 300: "#F7AAD5",
          // 400: "#F076B7",
          // 500: "#E74D9A",
          // 600: "#D62C79",
          // DEFAULT: "#B91D5F",
          // 800: "#991B4F",
          // 900: "#801B45",
          // 950: "#4E0925",
          50: "#fdf2f7",
          100: "#fde6f1",
          200: "#fdcde3",
          300: "#fca5cb",
          400: "#f96da8",
          500: "#f24287",
          DEFAULT: "#d61c5c",
          700: "#c4124a",
          800: "#a2123e",
          900: "#871436",
          950: "#53041b",
        },
        tertiary2: {
          // 50: "#FAFAEC",
          // 100: "#F3F4CD",
          // 200: "#EAE99E",
          // 300: "#DDD767",
          // 400: "#D2C43D",
          // DEFAULT: "#BEAA2E", // Default color for tertiary2
          // 600: "#A88C26",
          // 700: "#866722",
          // 800: "#705423",
          // 900: "#614722",
          // 950: "#382510",
          50: "#fff9ed",
          100: "#fef2d6",
          200: "#fce1ac",
          300: "#f9ca78",
          400: "#f6aa41",
          DEFAULT: "#f3901e",
          600: "#e47412",
          700: "#bd5911",
          800: "#964616",
          900: "#793b15",
          950: "#411c09",
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)", // tu sombra de texto personalizada
        },
        ".text-wrap-balance": {
          textWrap: "balance",
        },
        ".flex-basis-15": {
          flexBasis: "33%",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
