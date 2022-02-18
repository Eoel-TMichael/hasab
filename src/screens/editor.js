import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";

function Editor() {
  const [note, setNote] = useState("");

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={note}
          onChangeText={setNote}
          style={{ color: "#0c020b", fontSize: 22 }}
          multiline={true}
          autoFocus
          selectionColor="papayawhip"
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => setNote((note) => note + "#")}
          style={styles.bottomBtn}
        >
          <Text> # </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setNote((note) => note + "[")}
          style={styles.bottomBtn}
        >
          <Text> '[' </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setNote((note) => note + "]")}
          style={styles.bottomBtn}
        >
          <Text> ']' </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setNote((note) => note + "*")}
          style={styles.bottomBtn}
        >
          <Text> '*' </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "papayawhip",
    color: "white",
    padding: 20,
    width: Dimensions.get("window").width,
  },
  bottomContainer: {
    flexDirection: "row",
    height: "10%",
    backgroundColor: "papayawhip",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
  },
  bottomBtn: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
});

export default Editor;
