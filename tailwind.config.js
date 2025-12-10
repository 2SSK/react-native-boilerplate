/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        backgroundDark: "#1a1b26",
        foreground: "#000000",
        foregroundDark: "#a9b1d6",
        primary: "#007acc",
        primaryDark: "#7aa2f7",
        secondary: "#6b46c1",
        secondaryDark: "#ad8ee6",
        surface: "#f8f9fa",
        surfaceDark: "#32344a",
      },
    },
  },
  plugins: [],
};
