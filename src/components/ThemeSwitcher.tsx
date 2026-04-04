import { View, Text, Pressable } from "react-native";
import { useTheme, type ThemeMode } from "@/lib/theme";
import { Moon, Sun, Monitor } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

/**
 * Production-grade theme switcher component
 * Features:
 * - Light, Dark, and System theme modes
 * - Visual feedback for active mode
 * - Smooth transitions
 * - Accessible design
 */
export function ThemeSwitcher() {
  const { isDark, themeMode, setThemeMode } = useTheme();

  const themes: Array<{
    mode: ThemeMode;
    label: string;
    icon: typeof Sun;
    description: string;
  }> = [
    {
      mode: "light",
      label: "Light",
      icon: Sun,
      description: "Always use light theme",
    },
    {
      mode: "dark",
      label: "Dark",
      icon: Moon,
      description: "Always use dark theme",
    },
    {
      mode: "system",
      label: "System",
      icon: Monitor,
      description: "Follow system preference",
    },
  ];

  return (
    <View className="gap-2">
      {themes.map(({ mode, label, icon, description }) => {
        const isActive = themeMode === mode;

        return (
          <Pressable
            key={mode}
            onPress={() => setThemeMode(mode)}
            className={cn(
              "flex-row items-center justify-between p-4 rounded-xl border transition-all",
              isActive
                ? "bg-primary/10 border-primary"
                : "bg-card border-border",
            )}
          >
            <View className="flex-row items-center gap-3">
              <View
                className={cn(
                  "w-10 h-10 rounded-full items-center justify-center",
                  isActive ? "bg-primary" : "bg-secondary",
                )}
              >
                <Icon
                  as={icon}
                  className={
                    isActive
                      ? "text-primary-foreground"
                      : "text-secondary-foreground"
                  }
                  size={20}
                />
              </View>
              <View>
                <Text
                  className={cn(
                    "font-medium",
                    isActive ? "text-primary" : "text-foreground",
                  )}
                >
                  {label}
                </Text>
                <Text className="text-muted-foreground text-xs">
                  {description}
                </Text>
              </View>
            </View>

            {isActive && <View className="w-2 h-2 rounded-full bg-primary" />}
          </Pressable>
        );
      })}
    </View>
  );
}
