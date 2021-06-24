import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TodoPage from "./screens/todoPage";

export default function App() {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handlepush = () => {
    setTodoList([...todoList, { task: inputVal, done: false }]);
  };
  const handleDone = (item) => {
    item.done = !item.done;
    // setarr([...arr])
    setTodoList([...todoList]);
  };
  const handleStat = (stat) => {
    switch (stat) {
      case "Active":
        todoFilter = todoList.filter((item) => !item.done);
        let str = "red";
        console.log(todoFilter);
        break;
      case "Done":
        todoFilter = todoList.filter((item) => item.done);
        console.log(todoFilter);
        break;
      default:
        break;
    }
  };

  let todoFilter = todoList;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BABY SHARK TODO</Text>
      <StatusBar style="auto" />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          style={styles.input}
          value={inputVal}
          onChangeText={setInputVal}
        />
        <AntDesign
          onPress={handlepush}
          name="pluscircleo"
          size={40}
          color="#4a707a"
        />
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.Threebutton}
          onPress={() => handleStat("all")}
        >
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Threebutton}
          onPress={() => handleStat("Active")}
        >
          <Text>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Threebutton}
          onPress={() => handleStat("Done")}
        >
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ height: 80, display: "flex", justifyContent: "space-around" }}
      >
        <FlatList
          data={todoFilter}
          keyExtractor={(todo, index) => todo.task}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleDone(item)}>
              <Text
                style={
                  item.done
                    ? { color: "red", textDecorationLine: "line-through" }
                    : { color: "black" }
                }
              >
                {item.done ? (
                  <AntDesign name="checkcircle" size={24} color="red" />
                ) : (
                  <AntDesign name="checkcircleo" size={24} color="black" />
                )}
                {item.task}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
    //  <TodoPage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    margin: 6,
    justifyContent: "space-between",
    width: "30%",
  },
  title: {
    color: "#4a707a",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    flexGrow: 3,
    borderWidth: 2,
    borderColor: "#0BD4C0",
    borderRadius: 6,
    marginRight: 9,
    height: 40,
  },
  button: {
    borderWidth: 1,
    //alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    //margin: 5,
    backgroundColor: "#0BD4C0",
  },
  Threebutton: {
    // alignItems: "center",
    display: "flex",
    backgroundColor: "#DDDDDD",
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#0BD4C0",
    borderRadius: 20,
  },
  // Threebutton: {
  //   // alignItems: "center",
  //   display: "flex",
  //   backgroundColor: "#DDDDDD",
  //   padding: 10,
  //   justifyContent: "space-between",
  //   backgroundColor: "#blue",
  //   borderRadius: 20,
  // },
  tasks: {},
});
