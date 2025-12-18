import { Button } from "@/components/ui/button";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Text className="text-foreground text-2xl mb-5 font-heading">
        Settings
      </Text>
      <Button
        className="text-foreground bg-[#32344a] font-mono"
        onPress={() => router.push("/")}
      >
        <Text className="text-foreground">Home</Text>
      </Button>
    </View>
  );
}
