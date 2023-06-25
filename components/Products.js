import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconCorrect from "react-native-vector-icons/MaterialIcons";
const Products = ({ products }) => {
  // console.warn(products);
  const { navigate } = useNavigation();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date();
  return (
    <View>
      {products.map((prd) => {
        let price = prd.price.toString().split("");
        price.splice(2, 0, ",");
        return (
          <View key={prd.id} style={styles.container}>
            <View style={{ flex: 2 }}>
              <Image
                source={{ uri: prd.thumbnail }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderBottomLeftRadius: 5,
                  borderTopLeftRadius: 5,
                }}
              />
            </View>
            <View style={styles.content}>
              <Text style={{ fontWeight: 500 }}>{prd.description}</Text>
              <Text>
                <Text style={{ color: "#007185" }}>
                  {prd.rating.toFixed(1)}{" "}
                </Text>
                <Icon name="star" size={20} color="#ffa41c" />
                <Icon name="star" size={20} color="#ffa41c" />
                <Icon name="star" size={20} color="#ffa41c" />
                <Icon name="star" size={20} color="#ffa41c" />
                <Icon name="star-half-empty" size={20} color="#ffa41c" />
                <Text> ({prd.stock}) </Text>
              </Text>
              <View style={{ flexDirection: "row", fontWeight: 500 }}>
                <Text style={{ margin: 0 }}>EGP</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {price}0
                </Text>
                <Text>00</Text>
              </View>
              <Text>
                <IconCorrect name="done" size={20} color="#ffa41c" />

                <Text style={{ fontWeight: "900", color: "#4da7ce" }}>
                  Prime
                </Text>
                <Text style={{ color: "#BDBDBD", fontWeight: 500 }}>
                  Get it as soon as
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    {" "}
                    tomorrow, {date.getDate()} {monthNames[date.getMonth()]}
                  </Text>{" "}
                  Fulfilled by Amazon - FREE Shipping
                </Text>
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // padding: 5,
    backgroundColor: "white",
    marginBottom: 8,
    height: 200,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  content: {
    padding: 5,
    // width: "60%",
    // flexDirection: "column",
    flex: 3,
  },
});

export default Products;
