import { Switch } from "@/components/ui/switch";
import { View, Text, Pressable } from "react-native";
import { useTheme } from "@/lib/theme";
import { Moon, Sun } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";

export default function Settings() {
  const { isDark, themeMode, toggleTheme } = useTheme();

  return (
    <View className="flex-1 bg-background p-6">
      <Text className="text-foreground text-2xl font-heading mb-6">
        Settings
      </Text>

      {/* Theme Toggle Section */}
      <View className="bg-card rounded-xl border border-border p-4 mb-6">
        <Text className="text-card-foreground text-lg font-semibold mb-4">
          Appearance
        </Text>

        <Pressable
          onPress={toggleTheme}
          className="flex-row items-center justify-between py-2"
        >
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-full bg-secondary items-center justify-center">
              <Icon
                as={isDark ? Moon : Sun}
                className="text-secondary-foreground"
                size={20}
              />
            </View>
            <View>
              <Text className="text-foreground font-medium">
                {isDark ? "Dark Mode" : "Light Mode"}
              </Text>
              <Text className="text-muted-foreground text-xs">
                Mode: {themeMode}
              </Text>
            </View>
          </View>
          <Switch checked={isDark} onCheckedChange={toggleTheme} />
        </Pressable>
      </View>
    </View>
  );
}
