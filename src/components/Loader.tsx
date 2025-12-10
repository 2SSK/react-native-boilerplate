import { ActivityIndicator, View } from "react-native";

export function Loader() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff", // Light background
      }}
    >
      <ActivityIndicator size="large" color="#007acc" /> {/* Light primary */}
    </View>
  );
}
