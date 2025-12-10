import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-background dark:bg-backgroundDark">
      <Text className="text-foreground dark:text-foregroundDark text-2xl">Home</Text>
    </View>
  );
}
