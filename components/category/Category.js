import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import { Card, Button, Icon } from "@rneui/themed";
const Category = (props) => {
  console.warn(props);
  return (
    <View
      style={styles.cart}
      onPress={() => {
        console.warn("does not work");
      }}
    >
      <Text style={styles.title}>{props.title}</Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: "https://images.samsung.com/is/image/samsung/eg-fhd-t5300-ua43t5300auxeg-frontblack-254763456?$1300_1038_PNG$",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
    // marginRight: 5,

    // borderRadius: 50,
  },
  cart: {
    width: "45%",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "transparent",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "white",
  },
  title: {},
});

export default Category;
