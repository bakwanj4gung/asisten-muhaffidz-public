/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const flowbite = require("flowbite-react/tailwind");


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B5998",
        secondary: "#8B9DC3",
        middleMan: "#DFE3EE",
        reverseSecondary: "#F7F7F7",
        reversePrimary: "#FFFFFF",
        accent: "#2E4053",
      },
      fontSize: {
        heroMain: "32px",
        xxs: "9px",
      },
      transformOrigin: {
        0: "0%",
      },
      spacing : {
        87: "340px",
        100: "675px",
      }
    },
  },
  plugins: [
    nextui(),
    flowbite.plugin(),
  ],
};
