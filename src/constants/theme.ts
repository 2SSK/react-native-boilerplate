// TokyoNight color palette
const palette = {
  0: "#32344a",
  1: "#f7768e",
  2: "#9ece6a",
  3: "#e0af68",
  4: "#7aa2f7",
  5: "#ad8ee6",
  6: "#449dab",
  7: "#787c99",
  8: "#444b6a",
  9: "#ff7a93",
  10: "#b9f27c",
  11: "#ff9e64",
  12: "#7da6ff",
  13: "#bb9af7",
  14: "#0db9d7",
  15: "#acb0d0",
};

const background = "#1a1b26";
const foreground = "#a9b1d6";

export const themes = {
  dark: {
    primary: palette[4], // blue
    secondary: palette[5], // purple
    background: background,
    surface: palette[0], // dark surface
    surfaceLight: palette[8], // lighter surface
    white: foreground,
    grey: palette[7],
  },
  light: {
    primary: "#007acc", // blue
    secondary: "#6b46c1", // purple
    background: "#ffffff",
    surface: "#f8f9fa",
    surfaceLight: "#e9ecef",
    white: "#000000",
    grey: "#6c757d",
  },
} as const;

// Legacy export for backward compatibility
export const COLORS = themes.dark;
