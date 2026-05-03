import type { LucideIcon } from "lucide-react-native";
import { cn } from "@/lib/utils";

type TabIconProps = {
  icon: LucideIcon;
  color: string;
  size: number;
  focused: boolean;
};

export function TabIcon({ icon: Icon, color, size, focused }: TabIconProps) {
  return (
    <Icon
      color={color}
      size={size}
      className={cn(focused && "native:opacity-100")}
      style={{ opacity: focused ? 1 : 0.7 }}
    />
  );
}