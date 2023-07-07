import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Sign from "./../Sign/Sign";
import SignComponent from "../SignComponent/SignComponent";
import LoginHome from "./../LoginHome/LoginHome";
import SignUpComponent from "../Signup/SignUpComponent";

const UserScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Login" component={LoginHome} />
        <Stack.Screen name="SignIn" component={Sign} />
        <Stack.Screen name="SignUp" component={SignUpComponent} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default UserScreen;
