import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/screens/navigation";
import EditorContextProvider from "./src/context/editorContext";

export default function App() {
  return (
    <EditorContextProvider>
      <Navigation />
    </EditorContextProvider>
  );
}
