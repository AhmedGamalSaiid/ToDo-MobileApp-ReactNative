import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Image
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// import TodoPage from "./screens/todoPage";
const image = { uri: "https://preview.redd.it/hnci2nqjgj151.png?width=1125&format=png&auto=webp&s=9278a54d731a8695970d7512457786c3a275a064" };
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
        // console.log(todoFilter);
        break;
      case "Done":
        todoFilter = todoList.filter((item) => item.done);
        // console.log(todoFilter);
        break;
      default:
        break;
    }
  };

  let todoFilter = todoList;
 
  


  return (
    <SafeAreaView   behavior="height"  style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF00"
        hidden={false} />
      <ImageBackground source={image} style={styles.image}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingTop:50}}>
          
          {/* <Image style={styles.img} source={require("./assets/43029.svg")} /> */}
          <Text style={styles.title}>Todo dddList</Text>
        </View>
        <StatusBar style="auto" />
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TextInput
            style={styles.input}
            value={inputVal}
            onChangeText={setInputVal}
            placeholder="Add your task here"
            placeholderStyle={{ fontFamily: "AnotherFont", color: 'red' }}
          />
        </View>
        {/* <View style={styles.row}>
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
        </View> */}
        <View
          style={{ height: 200 }}
        >
          <FlatList
            data={todoFilter}
            style={{ flex:1}}
            keyExtractor={(todo, index) => todo.task}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => handleDone(item)} >
                <View style={styles.taskCard}>
                  <Text
                    style={
                      
                      item.done
                        ? { color: "#65c9ef", textDecorationLine: "line-through", fontSize:22,fontWeight:'300'}
                        : { color: "#ffffff", fontSize:22,fontWeight:'300' }
                    }
                  >
                    
                    {item.task}
                  </Text>
                  {item.done ? (
                      <AntDesign name="checkcircle" size={25} color="#65c9ef" />
                    ) : (
                      <AntDesign name="checkcircleo" size={25} color="#FFFFFF" />
                    )}
              
                </View>
               
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.footer}>
         
          <AntDesign
          onPress={handlepush}
           name="pluscircle" 
           color="#4a5059" 
           size={80}
          />
        </View>  
      </ImageBackground>
               
    </SafeAreaView>
    //  <TodoPage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
     justifyContent: "space-around"
  },
  tinyLogo: {
    width: 70,
    height: 70,
    padding:20,
    
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#65c9ef",
    borderRadius: 70,
    position: "relative",
    top: 30,
    zIndex: 1,
    
  },
  row: {
    display: "flex",
    flexDirection: "row",
    margin: 6,
    justifyContent: "space-around",
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: "bold",
    fontFamily:'',
  },
  taskCard:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    margin: 9,
    height: 50,
    backgroundColor:'#4a5059',
    borderRadius:32,
    padding:10,
    shadowColor: "#3D3D3D",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,

  },
  footer: {
    height: 100,
    alignItems:'center',
},
  input: {
    flexGrow: 1,
    borderWidth: 2,
    borderColor: "#E2E3E4",
    borderRadius: 32,
    margin: 9,
    height: 60,
    backgroundColor:'#ffff',
    padding:20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,
elevation: 7,

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
  tasks: {},
});
