import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  NavigationContainer,
  HeaderBackButton,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notes from "./notes";
import Editor from "./editor";

const Stack = createNativeStackNavigator();

function Navigation() {
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
              <TouchableOpacity onPress={() => navigation.navigate("Editor")}>
                <Text>Editor</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Editor" component={Editor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
