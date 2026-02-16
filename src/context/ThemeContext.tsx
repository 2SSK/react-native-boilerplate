import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useColorScheme } from "nativewind";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SystemUI from "expo-system-ui";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  isDark: boolean;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "@app_theme_preference";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>("system");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved theme preference
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
          setThemeModeState(savedTheme as ThemeMode);
          setColorScheme(savedTheme as any);
        } else {
          setThemeModeState("system");
          setColorScheme("system");
        }
      } catch (error) {
        console.error("Failed to load theme preference:", error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadTheme();
  }, [setColorScheme]);

  // Determine if dark mode is active based on resolved color scheme
  const isDark = colorScheme === "dark";

  // Sync system UI colors when theme changes
  useEffect(() => {
    if (!isLoaded) return;
    SystemUI.setBackgroundColorAsync(isDark ? "#14161f" : "#f0f2f5");
  }, [isDark, isLoaded]);

  const setThemeMode = useCallback(
    async (mode: ThemeMode) => {
      try {
        setThemeModeState(mode);
        setColorScheme(mode as any);
        await AsyncStorage.setItem(STORAGE_KEY, mode);
      } catch (error) {
        console.error("Failed to save theme preference:", error);
      }
    },
    [setColorScheme],
  );

  const toggleTheme = useCallback(() => {
    const newMode = isDark ? "light" : "dark";
    setThemeMode(newMode);
  }, [isDark, setThemeMode]);

  const contextValue = useMemo(
    () => ({ isDark, themeMode, toggleTheme, setThemeMode }),
    [isDark, themeMode, toggleTheme, setThemeMode],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
