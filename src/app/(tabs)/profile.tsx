import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@/providers/ThemeProvider";

export default function Profile() {
  const { theme, themeType, toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: theme.background }}>
      <Text style={{ color: theme.white, fontSize: 24, marginBottom: 20 }}>Profile</Text>
      <TouchableOpacity
        style={{ backgroundColor: theme.primary, padding: 10, borderRadius: 5 }}
        onPress={toggleTheme}
      >
        <Text style={{ color: theme.background, fontSize: 16 }}>
          Switch to {themeType === 'dark' ? 'Light' : 'Dark'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
