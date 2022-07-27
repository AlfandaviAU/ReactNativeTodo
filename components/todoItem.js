import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const TodoItem = ({ item,pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#D61C4E" />
                <Text style={styles.itemText} key={item.key}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: "row",

    },
    itemText: {
        marginLeft: 10,
    }

})
 
export default TodoItem;