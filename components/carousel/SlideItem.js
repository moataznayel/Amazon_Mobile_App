import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
  console.warn(item.img);
  return (
    <View style={styles.container}>
      <Animated.Image source={item.img} resizeMode="contain" />
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
  },
});
