/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(220 100% 97%)", // Light bg
        backgroundDark: "hsl(222 55% 5%)", // Dark bg
        foreground: "hsl(226 85% 7%)", // Light text
        foregroundDark: "hsl(220 100% 98%)", // Dark text
        primary: "hsl(221 49% 33%)", // Light primary
        primaryDark: "hsl(220 78% 76%)", // Dark primary
        secondary: "hsl(44 100% 14%)", // Light secondary
        secondaryDark: "hsl(40 53% 60%)", // Dark secondary
        surface: "hsl(220 100% 100%)", // Light surface
        surfaceDark: "hsl(220 35% 10%)", // Dark surface
        accent: "hsl(220 100% 100%)", // Light highlight
        accentDark: "hsl(220 20% 42%)", // Dark highlight
        muted: "hsl(220 26% 31%)", // Light muted
        mutedDark: "hsl(220 35% 73%)", // Dark muted
        border: "hsl(220 19% 53%)", // Light border
        borderDark: "hsl(220 26% 31%)", // Dark border
        danger: "hsl(9 21% 41%)", // Light danger
        dangerDark: "hsl(9 26% 64%)", // Dark danger
        warning: "hsl(52 23% 34%)", // Light warning
        warningDark: "hsl(52 19% 57%)", // Dark warning
        success: "hsl(147 19% 36%)", // Light success
        successDark: "hsl(146 17% 59%)", // Dark success
        info: "hsl(217 22% 41%)", // Light info
        infoDark: "hsl(217 28% 65%)", // Dark info
      },
    },
  },
  plugins: [],
};
