import { View, Text } from "react-native";
import { useTheme } from "@/providers/ThemeProvider";

export default function HomeScreen() {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: theme.background }}>
      <Text style={{ color: theme.white, fontSize: 24 }}>Home</Text>
    </View>
  );
}
