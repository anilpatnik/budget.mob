import { useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { AddTodo, Header, TodoItem } from "./components";
import { StoreProvider } from "./contexts";
import { NavigationContainer } from "@react-navigation/native";

type Todo = {
  text: string;
  key: string;
};

export function Main() {
  const [todos, setTodos] = useState<Todo[]>([
    { text: "buy coffee", key: "1" },
    { text: "create ap app", key: "2" },
    { text: "play on the switch", key: "3" }
  ]);

  const pressHandler = (key: string) => {
    setTodos(prev => {
      return prev.filter(todo => todo.key !== key);
    });
  };

  const submitHandler = (text: string) => {
    if (text.length > 3) {
      setTodos(prev => {
        return [...prev, { key: Math.random().toString(), text }];
      });
    } else {
      Alert.alert("Oops!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") }
      ]);
    }
  };

  return (
    <StoreProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />}
                keyExtractor={item => item.key}
              />
            </View>
          </View>
        </View>
      </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
