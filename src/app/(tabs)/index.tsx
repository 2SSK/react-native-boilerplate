import { View, Text } from "react-native";
import { Screen } from "@/components/ui/screen";

export default function HomeScreen() {
  return (
    <Screen>
      <View className="flex-1 justify-center items-center">
        <Text className="text-foreground text-2xl font-heading mb-2">Home</Text>
        <Text className="text-muted-foreground text-sm">
          Welcome to ReactNative.
        </Text>
      </View>
    </Screen>
  );
}
