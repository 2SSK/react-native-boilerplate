import { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps extends ViewProps {
  children: ReactNode;
  edges?: ("top" | "bottom" | "left" | "right")[];
}

export function Screen({
  children,
  className,
  edges = ["top"],
  ...props
}: ScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={edges}>
      <View className={`flex-1 ${className || ""}`} {...props}>
        {children}
      </View>
    </SafeAreaView>
  );
}
