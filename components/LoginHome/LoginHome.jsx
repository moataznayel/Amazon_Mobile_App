import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import React from "react";
const LoginHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#9de1d8", "transparent"]}
        style={styles.background}
      />
      <Text style={styles.headerStyle}>
        Sign in for the best experience</Text>
      <View>
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.signBtn}>Sign In</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.CreateBtn}>Create Account</Text>
        </Pressable>
      </View>
      <View style={styles.ItemsStyle}>
        <Image
          source={require("../../assets/logistics.png")}
          style={styles.imgStyle}
        ></Image>
        <Text style={styles.ItemsText}>
          Check order status and track,change or return items
        </Text>
      </View>
      <View style={styles.ItemsStyle}>
        <Image
          source={require("../../assets/shopping-bags.png")}
          style={styles.imgStyle}
        ></Image>
        <Text style={styles.ItemsText}>
          Shop past purchases and everyday essentials
        </Text>
      </View>
      <View style={styles.ItemsStyle}>
        <Image
          source={require("../../assets/verified.png")}
          style={styles.imgStyle}
        ></Image>
        <Text style={styles.ItemsText}>
          Create lists with items you want, now or later
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 15,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 80,
  },
  signBtn: {
    color: "#000",
    backgroundColor: "#eed073",
    borderColor: "#636363",
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 2,
    fontSize: 14,
    width: 320,
    textAlign: "center",
    marginTop:80,
  },
  CreateBtn: {
    color: "#000",
    backgroundColor: "#eff0f4",
    borderColor: "#999",
    borderWidth: 1,
    marginTop: 8,
    paddingVertical: 12,
    borderRadius: 2,
    width: 320,
    textAlign: "center",
    fontSize: 14,
  },
  imgStyle: {
    width: 70,
    height: 70,
  },
  ItemsStyle: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 10,
  },
  headerStyle: {
    fontSize: 25,
    zIndex: 10,
    marginTop: 15,
    width: 250,
    textAlign: "center",
  },
  ItemsText: {
    fontSize: 18,
    width: 220,
    marginRight: 30,
    textAlign: "right",
    alignItems:"center",
    color:"#444"
  },
});

export default LoginHome;
