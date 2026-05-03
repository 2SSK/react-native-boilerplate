import { View } from "react-native";
import { Screen } from "@/components/ui/screen";
import { Theme } from "@/components/settings/Theme";

export default function Settings() {
  return (
    <Screen>
      <View className="flex-1 p-6 gap-6">
        <Theme />
      </View>
    </Screen>
  );
}
