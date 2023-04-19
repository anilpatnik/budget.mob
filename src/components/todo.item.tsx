import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Todo = {
  text: string;
  key: string;
};

type props = {
  item: Todo;
  pressHandler: (key: string) => void;
};

export function TodoItem({ item, pressHandler }: props) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  }
});
