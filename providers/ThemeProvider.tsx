import React, { createContext, useContext, useState, ReactNode } from 'react';
import { themes } from '@/constants/theme';

type ThemeType = 'dark' | 'light';

interface ThemeContextType {
  theme: typeof themes.dark | typeof themes.light;
  themeType: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>('dark');

  const theme = themeType === 'dark' ? themes.dark : themes.light;

  const toggleTheme = () => {
    setThemeType(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, themeType, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};