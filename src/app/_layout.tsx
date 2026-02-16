import { Loader } from "@/components/Loader";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { cssInterop } from "nativewind";
import { Text, View, ActivityIndicator } from "react-native";
import { PortalHost } from "@rn-primitives/portal";
import { ErrorBoundary } from "react-error-boundary";

import { ThemeProvider, useTheme } from "@/lib/theme";
import "../../global.css";

cssInterop(Text, { className: "style" });
cssInterop(ActivityIndicator, { className: "style" });

function RootLayoutNav() {
  const { isDark } = useTheme();

  return (
    <>
      <View className={isDark ? "dark flex-1" : "flex-1"}>
        <View className="flex-1 bg-background">
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </View>
      <StatusBar style={isDark ? "light" : "dark"} />
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    JetBrainsMono: require("../assets/fonts/JetBrainsMono-Medium.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ErrorBoundary
          fallback={<Text className="text-red-500">Something went wrong.</Text>}
        >
          <RootLayoutNav />
        </ErrorBoundary>
        <PortalHost />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
