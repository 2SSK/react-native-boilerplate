/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--foreground)",
        blue: "var(--blu)",
        green: "var(--grn)",
        black: "var(--blk)",
        magenta: "var(--mag)",
        text: "var(--fg)",
        textMuted: "var(--comment)",
        red: "var(--red)",
        yellow: "var(--ylw)",
        cyan: "var(--cyn)",
      },
    },
  },
  plugins: [],
};
