import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/lib/theme";

export default function HomeScreen() {
  const { isDark, themeMode } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      <View className="flex-1 justify-center items-center">
        <Text className="text-foreground text-2xl font-heading mb-2">Home</Text>
        <Text className="text-muted-foreground text-sm">
          Theme: {themeMode} ({isDark ? "dark" : "light"})
        </Text>
      </View>
    </SafeAreaView>
  );
}
