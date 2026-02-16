import { Tabs } from "expo-router";
import { useTheme, getColors } from "@/lib/theme";
import { House, Settings } from "lucide-react-native";

export default function TabsLayout() {
  const { isDark } = useTheme();
  const themeColors = getColors(isDark);

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: themeColors["tab-inactive"],
        tabBarActiveTintColor: themeColors["tab-active"],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: themeColors["tab-bar"],
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
          height: 60,
          paddingBottom: 20,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Settings color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
