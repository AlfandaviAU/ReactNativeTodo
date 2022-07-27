import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Button, TextInput, ScrollView, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

import Sandbox from "./components/sandbox";


export default function App() {
  const [todos, setTodos] = useState([
    {text: "buy coffee", key: "1"},
    {text: "create an app", key: "2"},
    {text: "play on the switch", key: "3"},
  ])
  const [todos2, setTodos2] = useState([
    {text: "buy coffee", key: "1"},
    {text: "create an app", key: "2"},
    {text: "play on the switch", key: "3"},
  ])

  const pressHandler = (key) => {
    setTodos(todos.filter(elem => elem.key !== key))
  }

  const submitHandler = (text) => {
    if (text.length > 3){
      setTodos((prevTodos) => {
        return [{text: text, key: (prevTodos.length+1).toString()},...prevTodos]
      })
    }else{
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        {text: "Cancel", onPress: () => console.log("alert closed")},
        {text: "Ok", onPress: () => console.log("alert closed")},
      ])
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log("Dismissed Keyboard")
      }}>
      <View style={styles.container}>
        {/* HEADER */}
        <Header />
        <View style={styles.content}>
          {/* TODO FORM */}
          <AddTodo submitHandler={submitHandler}/>
          <View>
            <TouchableOpacity onPress={() => setTodos(todos2)}>
              <Text style={styles.reset}>Reset Data </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={
                ({item}) => (
                  <TodoItem item={item} pressHandler={pressHandler}/>
                  // <Text>{item.text}</Text>
                )
              }
            />
          </View>
          
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20
  },
  reset: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

