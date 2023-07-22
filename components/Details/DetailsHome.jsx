import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sign from "../Sign/Sign";
import Details from "./Details";
import Category from "../category/Category";

const DetailsHome = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Details">
      <Stack.Screen name="Details" component={Category} />
      <Stack.Screen name="SignIn" component={Sign} />
    </Stack.Navigator>
  );
};

export default DetailsHome;
