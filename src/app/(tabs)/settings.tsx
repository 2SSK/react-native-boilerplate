import { Button } from "@/components/ui/button";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Settings() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Text className="text-foreground text-2xl mb-5 font-heading">Settings</Text>
      <Button className="text-foreground bg-black" onPress={() => router.push('/')}>
        Home
      </Button>
    </View>
  );
}
