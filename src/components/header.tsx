import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Header() {
  return (
    <View style={styles.header}>
      <Ionicons
        name="airplane"
        size={32}
        color="green"
        style={{ flex: 1, backgroundColor: "green" }}
      />
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "pink"
  }
});
