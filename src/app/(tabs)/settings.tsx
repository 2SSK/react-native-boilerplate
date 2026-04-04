import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useTheme } from "@/lib/theme";

/**
 * Settings screen with production-grade theme switcher
 * Features:
 * - Proper SafeAreaView from react-native-safe-area-context
 * - ScrollView for overflow content
 * - Enhanced theme switching UI
 */
export default function Settings() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="p-6"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-foreground text-2xl font-heading mb-6">
          Settings
        </Text>

        {/* Theme Section */}
        <View className="bg-card rounded-xl border border-border p-4 mb-6">
          <Text className="text-card-foreground text-lg font-semibold mb-4">
            Appearance
          </Text>

          <ThemeSwitcher />
        </View>

        {/* Additional settings sections can go here */}
      </ScrollView>
    </SafeAreaView>
  );
}
