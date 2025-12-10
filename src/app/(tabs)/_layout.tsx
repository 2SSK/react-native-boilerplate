import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();

  const isDark = colorScheme === "dark";

  // TokyoNight colors
  const inactiveColor = isDark ? "#787c99" : "#6c757d"; // grey
  const activeColor = isDark ? "#7aa2f7" : "#007acc"; // primary
  const backgroundColor = isDark ? "#32344a" : "#f8f9fa"; // surface

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
