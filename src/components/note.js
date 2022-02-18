import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Note = ({ type }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles(type).container}
      onPress={() => navigation.navigate("Editor", {})}
    >
      <Text>Note</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create((type) => ({
  container: {
    height:
      type == "list" ? 60 : Math.floor(Math.random() * (300 - 100 + 1) + 100),
    padding: 20,
    width:
      type == "list" ? "100%" : Math.floor(Math.random() * (200 - 60 + 1) + 60),
    borderWidth: 1,
    borderColor: "#ccc",
  },
}));

export default Note;
