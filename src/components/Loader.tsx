import { ActivityIndicator, View } from "react-native";

export function Loader() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "hsl(220 100% 97%)", // Light background
      }}
    >
      <ActivityIndicator size="large" color="hsl(221 49% 33%)" /> {/* Light primary */}
    </View>
  );
}
