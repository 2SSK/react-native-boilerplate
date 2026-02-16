/**
 * Tokyo Night Light/Dark Color Theme
 * Supports both light and dark mode color schemes
 */

export const colors = {
  light: {
    background: "#f6f7f9",
    "background-secondary": "#edeff2",
    foreground: "#0f1729",
    card: "#ffffff",
    "card-foreground": "#0f1729",
    popover: "#ffffff",
    "popover-foreground": "#0f1729",
    primary: "#3173dd",
    "primary-foreground": "#ffffff",
    secondary: "#e2e4e9",
    "secondary-foreground": "#1b294b",
    muted: "#e8eaed",
    "muted-foreground": "#6b7280",
    accent: "#3173dd",
    "accent-foreground": "#ffffff",
    success: "#25a777",
    "success-foreground": "#ffffff",
    expense: "#d74242",
    "expense-foreground": "#ffffff",
    destructive: "#d74242",
    "destructive-foreground": "#ffffff",
    border: "#dcdfe4",
    input: "#dcdfe4",
    ring: "#3173dd",
    "tab-bar": "#ffffff",
    "tab-inactive": "#858b99",
    "tab-active": "#3173dd",

    // Overlay
    overlay: "rgba(30, 41, 59, 0.4)",
  },
  dark: {
    background: "#161927",
    "background-secondary": "#1c1f31",
    foreground: "#f0f1f5",
    card: "#1e2134",
    "card-foreground": "#f0f1f5",
    popover: "#1a1d2d",
    "popover-foreground": "#f0f1f5",
    primary: "#65c8f6",
    "primary-foreground": "#161927",
    secondary: "#2d3043",
    "secondary-foreground": "#dadee7",
    muted: "#292c3d",
    "muted-foreground": "#7c879c",
    accent: "#65c8f6",
    "accent-foreground": "#161927",
    success: "#36d399",
    "success-foreground": "#161927",
    expense: "#e55d5d",
    "expense-foreground": "#ffffff",
    destructive: "#e55d5d",
    "destructive-foreground": "#ffffff",
    border: "#2d3043",
    input: "#313449",
    ring: "#65c8f6",
    "tab-bar": "#1a1d2d",
    "tab-inactive": "#6e7a91",
    "tab-active": "#65c8f6",
    // Overlay
    overlay: "rgba(0, 0, 0, 0.6)",
  },
};

// Type exports for TypeScript
export type ColorScheme = typeof colors.light;

// Utility to get colors based on color scheme
export const getColors = (isDark: boolean) =>
  isDark ? colors.dark : colors.light;

// Re-export ThemeContext and ThemeProvider
export { ThemeProvider, useTheme } from "@/context/ThemeContext";
export type { ThemeMode } from "@/context/ThemeContext";
