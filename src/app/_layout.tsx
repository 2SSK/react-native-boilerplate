import InitialLayout from "@/components/InitialLayout";
import { Loader } from "@/components/Loader";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { cssInterop } from "nativewind";
import { Text, View, ActivityIndicator } from "react-native";
import { PortalHost } from "@rn-primitives/portal";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";

import "../../global.css";

cssInterop(Text, { className: "style" });
cssInterop(ActivityIndicator, { className: "style" });

const RootLayoutContent = React.memo(() => {
  return (
    <>
      <View className="dark flex-1">
        <SafeAreaView className="flex-1 bg-background">
          <InitialLayout />
        </SafeAreaView>
      </View>
      <StatusBar style="light" />
    </>
  );
});

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    JetBrainsMono: require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <SafeAreaProvider>
      <ErrorBoundary fallback={<Text className="text-red-500">Something went wrong.</Text>}>
        <RootLayoutContent />
      </ErrorBoundary>
      <PortalHost />
    </SafeAreaProvider>
  );
}
