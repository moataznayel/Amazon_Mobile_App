import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Sign from "./../Sign/Sign";
import SignComponent from "../SignComponent/SignComponent";
import LoginHome from "./../LoginHome/LoginHome";
import SignUpComponent from "../Signup/SignUpComponent";
import SignOut from "../SignOut/SignOut";
import { auth } from "../Firebase/Firebase";

const UserScreen = () => {
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? true : false);
    });
    return unsubscribe;
  }, [isLoggedIn]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Login" : "SignOut"}>
        <Stack.Screen name="Login" component={LoginHome} />
        <Stack.Screen name="SignIn" component={Sign} />
        <Stack.Screen name="SignUp" component={SignUpComponent} />
        <Stack.Screen name="SignOut" component={SignOut} />
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
