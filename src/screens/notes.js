import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Note from "../components/note";

function Notes() {
  const [view, setView] = useState("list");

  return (
    <View style={styles.container}>
      <ScrollView>
        <Note type={view} />
        <Note type={view} />
        <Note type={view} />
        <Note type={view} />
        <Note type={view} />
      </ScrollView>
      <TouchableOpacity
        onPress={() => alert("pressed")}
        style={styles.floatingButton}
      >
        <Text style={styles.floatingButtonText}> + </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 40,
    right: 40,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "papayawhip",
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default Notes;
