import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Collabara Test Done by Satheesan </Text>
      <StatusBar style="auto" />
      <Link href="/test1">
        <View
          style={[
            styles.buttonContainer,
            { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
          ]}
        >
          <Pressable style={[styles.button, { backgroundColor: "#fff" }]}>
            <Text>Adding two numbers</Text>
          </Pressable>
        </View>
      </Link>

      <Link href="/test3">
        <View
          style={[
            styles.buttonContainer,
            { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
          ]}
        >
          <Pressable style={[styles.button, { backgroundColor: "#fff" }]}>
            <Text>Navigation</Text>
          </Pressable>
        </View>
      </Link>

      <Link href="/test2">
        <View
          style={[
            styles.buttonContainer,
            { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
          ]}
        >
          <Pressable style={[styles.button, { backgroundColor: "#fff" }]}>
            <Text>Array Solution</Text>
          </Pressable>
        </View>
      </Link>
     
      {/* <Link href="/test1">test1</Link> */}
      
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
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    margin: 5,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
