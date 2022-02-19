import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import { WebView } from "react-native-webview";
import Markdown from "react-native-markdown-renderer";
import { EditorContext } from "../context/editorContext";

function Editor() {
  const [note, setNote] = useState(`# h1 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`);
  const inputRef = useRef();
  const { marked } = useContext(EditorContext);

  return (
    <>
      <View style={styles.container}>
        {marked === false ? (
          <TextInput
            value={note}
            onChangeText={setNote}
            //   onSelectionChange={({ nativeEvent: { selection } }) =>
            //     selectionValue(selection)
            //   }
            ref={inputRef}
            style={{ color: "#0c020b", fontSize: 22 }}
            multiline={true}
            selectionColor="#ccc"
            autoFocus
            //   selectionColor="papayawhip"
          />
        ) : (
          <Markdown>{note}</Markdown>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => addAttributes(inputRef.current, "#")}
          style={styles.bottomBtn}
        >
          <Text> # </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => addAttributes(inputRef.current, "[")}
          style={styles.bottomBtn}
        >
          <Text> '[' </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => addAttributes(inputRef.current, "]")}
          style={styles.bottomBtn}
        >
          <Text> ']' </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => addAttributes(inputRef.current, "*")}
          style={styles.bottomBtn}
        >
          <Text> '*' </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const markdownStyles = {
  heading1: {
    fontSize: 24,
    color: "purple",
  },
  link: {
    color: "pink",
  },
  mailTo: {
    color: "orange",
  },
  text: {
    color: "#0c020b",
  },
};

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
