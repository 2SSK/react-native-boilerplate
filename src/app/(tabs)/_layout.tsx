import { Tabs } from "expo-router";
import { useTheme, getColors } from "@/lib/theme";
import { TabIcon } from "@/components/ui/tab-icon";
import { House, Settings } from "lucide-react-native";

const tabs = [
  { name: "index", icon: House },
  { name: "settings", icon: Settings },
] as const;

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
      {tabs.map(({ name, icon: Icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                focused={focused}
                icon={Icon}
                color={color}
                size={size}
              />
            ),
            headerShown: false,
          }}
        />
      ))}
    </Tabs>
  );
}
