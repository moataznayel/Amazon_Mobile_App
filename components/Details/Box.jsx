import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Box = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Prime</Text>
      <View style={styles.circle}></View>
      <Image
        style={styles.img}
        source={require("../../assets/logistics.png")}
      ></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 200,
    width: 200,
    overflow: "hidden",
    borderRadius: 5,
  },
  circle: {
    backgroundColor: "#afe2e0",
    height: 200,
    width: 200,
    position: "absolute",
    bottom: -100,
    borderRadius: 100,
  },
  text: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 14,
  },
  img: {
    height: 100,
    width: 100,
    position: "absolute",
    left: "25%",
    top: "40%",
  },
});
export default Box;
