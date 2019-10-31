import React from "react";
import { View, Text, StyleSheet } from "react-native";

import IRList from "./List.js";

const Greeting = () => {
    return (
            <Text style={styles.texty}>Hello!</Text>

    );
}

const styles = StyleSheet.create({
    texty: {
        color: "blue",
        fontSize: 30,
        fontWeight: "bold"
    }
})

export default Greeting;