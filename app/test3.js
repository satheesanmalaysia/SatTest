import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
export default function Page() {
  const [selectedTab, setSelectedTab] = useState(null);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          height: 70,
          padding: 20,
          borderBottom: "1px solid  #f2f2f2",
        }}
      >
        <View style={styles.tiles}>
          {" "}
          <Pressable onPress={() => setSelectedTab("AEON")}>
            <Text>AEON</Text>
          </Pressable>
        </View>
        <View style={styles.tiles}>
          {" "}
          <Pressable onPress={() => setSelectedTab("Show")}>
            <Text>Showcase</Text>
          </Pressable>
        </View>
        <View style={styles.tiles}>
          {" "}
          <Pressable onPress={() => setSelectedTab("Docs")}>
            <Text>Docs</Text>
          </Pressable>
        </View>
        <View style={styles.tiles}>
          {" "}
          <Pressable onPress={() => setSelectedTab("Blog")}>
            <Text>Blogs</Text>
          </Pressable>
        </View>
        <View style={styles.tiles}>
          {" "}
          <Pressable onPress={() => setSelectedTab("Analytics")}>
            <Text>Analytics</Text>
          </Pressable>
        </View>
        <View style={styles.tiles}>
          {" "}
          <Pressable onPress={() => setSelectedTab("Commerce")}>
            <Text>Commerce</Text>
          </Pressable>
        </View>
        <View style={styles.tiles}>
          {" "}
          <Pressable onPress={() => setSelectedTab("Template")}>
            <Text>Template</Text>
          </Pressable>
        </View>
        <View style={styles.tiles}>
          {" "}
          <Pressable onPress={() => setSelectedTab("Enterprice")}>
            <Text>Enterprice</Text>
          </Pressable>
        </View>

        <View style={styles.tiles}>
          {" "}
          <TextInput style={styles.Text} placeholder="Search Documentation " />
        </View>
      </View>
      {selectedTab && <SelectedComponent selectedTab={selectedTab} />}
    </View>
  );

  function SelectedComponent({ selectedTab }) {
    let component;
    switch (selectedTab) {
      case "AEON":
        component = <Aeon />;
        break;
      case "Show":
        component = <Show />;
        break;
      case "Docs":
        component = <Docs />;
        break;
      case "Blog":
        component = <Blog />;
        break;
      case "Analytics":
        component = <Analytics />;
        break;
      case "Commerce":
        component = <Commerce />;
        break;
      case "Template":
        component = <Template />;
        break;
      case "Enterprice":
        component = <Enterprice />;
        break;
    }
    return <View>{component}</View>;
  }
}

const styles = StyleSheet.create({
  tiles: {
    height: 40,
    margin: 12,
    color: "#f2f2f2",
    padding: 10,
  },
  right: {
    height: 40,
    marginTop: 12,
    right: 20,
    padding: 10,
    position: "fixed",
  },
  Text: {
    borderWidth: 1,
    backgroundColor: "#f2f2f2",
  },
});

function Aeon() {
  return <Text style={{ margin: 20 }}>Aeon Component</Text>;
}

function Show() {
  return <Text style={{ margin: 20 }}>Show Component</Text>;
}
function Docs() {
  return <Text style={{ margin: 20 }}>Docs Component</Text>;
}
function Blog() {
  return <Text style={{ margin: 20 }}>Blog Component</Text>;
}
function Analytics() {
  return <Text style={{ margin: 20 }}>Analytics Component</Text>;
}
function Commerce() {
  return <Text style={{ margin: 20 }}>Commerce Component</Text>;
}
function Template() {
  return <Text style={{ margin: 20 }}>Template Component</Text>;
}
function Enterprice() {
  return <Text style={{ margin: 20 }}>Enterprice Component</Text>;
}
