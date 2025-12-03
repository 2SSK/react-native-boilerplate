// Custom OKLCH-based Color Theme
export const themes = {
  dark: {
    primary: "#90b0f1",
    secondary: "#cfab63",
    background: "#01030a",
    surface: "#060a15",
    surfaceLight: "#101521",
    white: "#e0f2ff",
    grey: "#a1b1d1",
    border: "#394763",
    borderMuted: "#202d47",
    highlight: "#546380",
    danger: "#bb938c",
    warning: "#a59f7b",
    success: "#83a893",
    info: "#8c9fbe",
  },

  light: {
    primary: "#2b447d",
    secondary: "#604100",
    background: "#e9f2ff",
    surface: "#dce4f5",
    surfaceLight: "#f6ffff",
    white: "#02091f",
    grey: "#394763",
    border: "#71809e",
    borderMuted: "#8e9ebe",
    highlight: "#eeffff",
    danger: "#7d5852",
    warning: "#696442",
    success: "#496c59",
    info: "#526380",
  },
} as const;

// Legacy export for backward compatibility
export const COLORS = themes.dark;
