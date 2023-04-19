import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type props = {
  submitHandler: (key: string) => void;
};

export function AddTodo({ submitHandler }: props) {
  const [text, setText] = useState("");
  const changeHander = (val: string) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHander}
        value={text}
      />
      <Button
        onPress={() => {
          submitHandler(text);
          setText("");
        }}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  }
});
