import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

const AddTodo = ({submitHandler}) => {
    const [text,setText] = useState("")
    const changeHandler = (value) => {
        setText(value)
    }
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder="new todo ..."
                onChangeText={(value) => changeHandler(value)}
            />
            <Button 
                onPress={() => submitHandler(text)}
                title="add todo"
                color="#D61C4E"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})
 
export default AddTodo;