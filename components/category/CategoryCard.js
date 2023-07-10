import React from "react";
import { Pressable } from "react-native";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import categoryStyle from "./categoryStyle";
const CategoryCard = ({ img, route }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [
        categoryStyle.cart,
        {
          borderColor: pressed ? "#056e7b" : "transparent",
          borderWidth: pressed ? 2 : 0,
        },
      ]}
      onPress={() => {
        navigate(route);
      }}
    >
      <View style={categoryStyle.pseudoElement}></View>
      <Text style={categoryStyle.title}>{route}</Text>
      <Image style={categoryStyle.image} source={img} />
    </Pressable>
  );
};

export default CategoryCard;
