import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Box = ({ data }) => {
  return data.map((item, index) => {
    return (
      <View style={styles.container} key={index}>
        <Text style={styles.text}>{item.name}</Text>
        <View style={styles.circle}></View>
        <Image style={styles.img} source={{ uri: item.img }}></Image>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 180,
    width: "48%",
    overflow: "hidden",
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.20,
    shadowRadius: 3.05,
    elevation: 5
  },
  circle: {
    backgroundColor: "#a5e3e1",
    height: 200,
    width: "100%",
    position: "absolute",
    bottom: -100,
    borderRadius: 200,
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
    left: "22%",
    top: "40%",
  },
});
export default Box;
