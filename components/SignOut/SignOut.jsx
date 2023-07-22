import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { auth } from "../Firebase/Firebase";
const SignOut = ({ navigation }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
        console.log("User Sign out");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/user.png")}
        style={styles.img}
      ></Image>
      <Text>{auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    
  },
  buttonText: {
    color: "white",
    fontWeight: 700,
    fontSize: 16,
  },
  img: {
    width: 70,
    height: 70,
    marginBottom: 30,
  },
});
export default SignOut;
