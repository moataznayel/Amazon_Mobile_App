import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SignComponent from "../SignComponent/SignComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpComponent from "../Signup/SignUpComponent";

const Sign = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignComponent} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpComponent} options={{ headerShown: false }}/>
      </Stack.Navigator>
      <Footer />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Sign;
