import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";
import Sign from "../Sign/Sign";

const DetailsHome = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Details">
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="SignIn" component={Sign} />
    </Stack.Navigator>
  );
};

export default DetailsHome;
