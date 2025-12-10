import { View, Text, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <View className="flex-1 justify-center items-center bg-background dark:bg-backgroundDark">
      <Text className="text-foreground dark:text-foregroundDark text-2xl mb-5">
        Settings
      </Text>
      <Button>Hello</Button>
      <TouchableOpacity
        className="bg-primary dark:bg-primaryDark px-4 py-2 rounded"
        onPress={toggleTheme}
      >
        <Text className="text-foregroundDark dark:text-foreground text-base">
          Switch to {colorScheme === "dark" ? "Light" : "Dark"} Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
}
