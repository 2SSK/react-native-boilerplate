import { View, Text, Pressable } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const themes = [
  { mode: "light" as const, icon: Sun, label: "Light" },
  { mode: "dark" as const, icon: Moon, label: "Dark" },
  { mode: "system" as const, icon: Moon, label: "System" },
];

export function Theme() {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <View className="bg-card rounded-xl border border-border p-4">
      <Text className="text-card-foreground text-lg font-semibold mb-4">
        Theme
      </Text>

      <View className="flex-row gap-2">
        {themes.map(({ mode, icon: IconComponent, label }) => {
          const isActive = themeMode === mode;
          return (
            <Pressable
              key={mode}
              onPress={() => setThemeMode(mode)}
              className={cn(
                "flex-1 flex-row items-center justify-center gap-2 py-2 px-3 rounded-lg border",
                isActive
                  ? "bg-primary/10 border-primary"
                  : "bg-secondary/30 border-border",
              )}
            >
              <Icon
                as={IconComponent}
                className={isActive ? "text-primary" : "text-muted-foreground"}
                size={16}
              />
              <Text
                className={cn(
                  "text-xs font-medium",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
