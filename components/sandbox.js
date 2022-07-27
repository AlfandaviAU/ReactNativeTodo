import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Button, TextInput, ScrollView, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        paddingTop: 80,
        backgroundColor: "#D61C4E"
    },
    boxOne: {
        flex: 1,
        backgroundColor: "violet",
        padding: 10,
    },
    boxTwo: {
        flex: 2,
        backgroundColor: "gold",
        padding: 20,
    },
    boxThree: {
        flex: 1,
        backgroundColor: "coral",
        padding: 30,
    },
    boxFour: {
        flex: 3,
        backgroundColor: "skyblue",
        padding: 40,
    }
})
export default Sandbox
