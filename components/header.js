import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: "#D61C4E",
    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})
 
export default Header;