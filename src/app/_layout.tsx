import InitialLayout from "@/components/InitialLayout";
import { Loader } from "@/components/Loader";
import { ThemeProvider, useTheme } from "@/providers/ThemeProvider";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function RootLayoutContent() {
  const { theme, themeType } = useTheme();

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
        <InitialLayout />
      </SafeAreaView>
      <StatusBar style={themeType === 'dark' ? 'light' : 'dark'} />
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
    <ThemeProvider>
      <SafeAreaProvider>
        <RootLayoutContent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
