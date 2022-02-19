import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  NavigationContainer,
  HeaderBackButton,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notes from "./notes";
import Editor from "./editor";

import { EditorContext } from "../context/editorContext";

const Stack = createNativeStackNavigator();

function Navigation() {
  const { toggleMarked } = useContext(EditorContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Notes"
        screenOptions={{
          headerStyle: { backgroundColor: "papayawhip" },
          headerTitleAlign: "center",
        }}
        headerLeft={() => <HeaderBackButton label="Back" />}
      >
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert("Settings Page Comming Soon")}
              >
                <Text>Settings</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Editor"
          component={Editor}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={toggleMarked}>
                <Text>Markdown</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
