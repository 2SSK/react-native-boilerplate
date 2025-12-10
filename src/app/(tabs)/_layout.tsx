import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();

  const isDark = colorScheme === "dark";

  // Custom colors
  const inactiveColor = isDark ? "hsl(220 35% 73%)" : "hsl(220 26% 31%)"; // muted
  const activeColor = isDark ? "hsl(220 78% 76%)" : "hsl(221 49% 33%)"; // primary
  const backgroundColor = isDark ? "hsl(220 35% 10%)" : "hsl(220 100% 100%)"; // surface

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: inactiveColor,
        tabBarActiveTintColor: activeColor,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: backgroundColor,
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
