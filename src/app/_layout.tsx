import { Loader } from "@/components/Loader";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { cssInterop } from "nativewind";
import { Text, ActivityIndicator, View, ScrollView } from "react-native";
import { PortalHost } from "@rn-primitives/portal";
import { ErrorBoundary } from "react-error-boundary";

import { ThemeProvider, useTheme } from "@/lib/theme";
import "../../global.css";

// Register NativeWind className support for components
cssInterop(Text, { className: "style" });
cssInterop(ActivityIndicator, { className: "style" });
cssInterop(ScrollView, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});

/**
 * Inner navigation component that uses theme context
 * IMPORTANT: Do NOT wrap Stack in View with dark class - it breaks navigation context
 * NativeWind v4 handles dark mode via useColorScheme hook automatically
 */
function RootLayoutNav() {
  const { isDark, isLoading } = useTheme();

  // Show loader while theme is being loaded to prevent flash
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* 
        Stack must be direct child - no wrapper Views!
        NativeWind applies dark mode via the document/root level
        The bg-background class will automatically use the correct theme
      */}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <StatusBar style={isDark ? "light" : "dark"} />
    </>
  );
}

/**
 * Production-grade root layout with:
 * - Proper provider hierarchy (SafeArea → Theme → Error → Navigation)
 * - Font loading with splash screen handling
 * - Theme persistence and system theme support
 * - No navigation context errors
 */
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    JetBrainsMono: require("../assets/fonts/JetBrainsMono-Medium.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Show loader while fonts are loading
  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <View className="flex-1 bg-background">
          <ErrorBoundary
            fallback={<Text className="text-red-500">Something went wrong.</Text>}
          >
            <RootLayoutNav />
          </ErrorBoundary>
          <PortalHost />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
