import InitialLayout from "@/components/InitialLayout";
import { Loader } from "@/components/Loader";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { cssInterop } from "nativewind";
import { Text, View } from "react-native";
import { useColorScheme } from "nativewind";

import "../../global.css";

cssInterop(Text, { className: "style" });

function RootLayoutContent() {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <View className={colorScheme === "dark" ? "dark flex-1" : "flex-1"}>
        <SafeAreaView className="flex-1 bg-background dark:bg-backgroundDark">
          <InitialLayout />
        </SafeAreaView>
      </View>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    JetBrainsMono: require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <SafeAreaProvider>
      <RootLayoutContent />
    </SafeAreaProvider>
  );
}
