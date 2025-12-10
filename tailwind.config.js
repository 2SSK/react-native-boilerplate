/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        surface: "var(--card)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        border: "var(--border)",
        danger: "var(--destructive)",
        warning: "var(--warning)",
        success: "var(--success)",
        info: "var(--info)",
      },
      fontFamily: {
        mono: ['JetBrainsMono'],
        heading: ['SpaceMono'],
      },
    },
  },
  plugins: [],
};
