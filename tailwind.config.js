/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0079ff",
        bg_dark: "#1c274b",
        bg_light: "#f3f4f5",
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
