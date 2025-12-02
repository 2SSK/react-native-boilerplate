import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.grey,
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
    minWidth: 150,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: "600",
  },
  link: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: COLORS.secondary,
    marginTop: 10,
  },
  linkText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
