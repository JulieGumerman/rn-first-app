import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Picker} from 'react-native';

import Greeting from "./components/Greeting";
import List from "./components/List.js";

export default function App() {
  const [outputText, setOutputText] = useState("I am here");

  return (
    <View style={styles.container}>
      <Greeting />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    text: {
      color: "#42a832",
      fontSize: 30 
    }
});
