/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx}",
    "./node_modules/preline/dist/*.{js,jsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#273f44",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("preline/plugin"),
    flowbite.plugin(),
  ],
};
