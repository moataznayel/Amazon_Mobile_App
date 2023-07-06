import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconDown from "react-native-vector-icons/Entypo";
import filterStyle from "./filterStyle";
const Filter = ({ products, route }) => {
  const { navigate } = useNavigation();

  return (
    <View style={filterStyle.container}>
      <Text style={{ fontWeight: "bold" }}>Over 70,000 result in El...</Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigate("brand", { products, route });
          }}
        >
          <Text style={filterStyle.text}>
            Filter <Icon name="doubleright" size={10} color="#007185" />
          </Text>
        </Pressable>

        <IconDown name="chevron-small-down" size={15} color="#717171" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Filter;
