import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [number1, onChangeNumber1] = React.useState("");
  const [number2, onChangeNumber2] = React.useState("");
  const [total, addition] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <SafeAreaView> */}
      <Text style={{ fontWeight: "bold" }}>Adding Two Numbers</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        keyboardType="numeric"
        placeholder="First Number"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        keyboardType="numeric"
        placeholder="Second Number"
      />
      {/* </SafeAreaView> */}
      <Button
        title="Add Two Numbers"
        color="#f194ff"
        onPress={() => addition(parseFloat(number1) + parseFloat(number2))}
      />
      <Text>Total - {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
