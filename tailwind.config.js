/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  important: true, // Add this in config file to give higher specificity for tailwind classes
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontfamily: { sans: ['"Inter"', "sans-serif"] },

    extend: {
      colors: {
        primary: "#0079ff",
        bg_dark: "#1c274b",
        bg_light: "#f3f4f5",
        bg_linkedIn: "#f4f2ee",
        textDark: "#2b2a4c",
        btnLogin: "rgb(177 58 50)",
        bg_card: "#1c2534",
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "dracula"],
  },
};
