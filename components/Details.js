import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Iconlocation from "react-native-vector-icons/EvilIcons";
import IconArrow from "react-native-vector-icons/MaterialIcons";
import SelectDropdown from "react-native-select-dropdown";
import { Pressable } from "react-native";
import { Table, Rows } from "react-native-table-component";
import { useState } from "react";

const Details = () => {
  const { params } = useRoute();
  //   console.warn(x);
  let price = params.price.toString().split("");
  price.splice(1, 0, ",");
  //   console.warn(price.join(""));
  let dropDown = [];
  for (var i = 1; i <= params.stock; i++) {
    dropDown.push(i);
  }
  const countries = [
    "Egypt",
    "Canada",
    "Australia",
    "Ireland",
    "Egypt",
    "Canada",
    "Australia",
    "Ireland",
  ];
  let [tableData, setTableData] = useState([
    ["Payment", "Secure transaction"],
    ["Ships from", "Amazon.eg"],
    ["Sold by", "Amazon.eg"],
  ]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#007185" }}>
          Visit the {params.brand.toUpperCase()} Store
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Icon name="star" size={20} color="#ffa41c" />
          <Icon name="star" size={20} color="#ffa41c" />
          <Icon name="star" size={20} color="#ffa41c" />
          <Icon name="star" size={20} color="#ffa41c" />
          <Icon name="star-half-empty" size={20} color="#ffa41c" />
          <Text style={{ color: "#007185", marginLeft: 3 }}>
            {" "}
            {params.rating.toFixed(1)}
          </Text>
        </View>
      </View>
      <>
        <Text>{params.description}</Text>
        <Image
          source={{
            uri: params.images[0],
          }}
          style={{
            resizeMode: "stretch",
            height: 500,
            width: "100%",
          }}
        />
      </>

      <View
        style={{
          flexDirection: "row",
          fontWeight: 500,
          borderTopWidth: 1,
          borderColor: "#ddd",
          marginTop: 10,
          paddingTop: 20,
        }}
      >
        <Text style={{ fontSize: 20 }}>EGP</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>{price}0</Text>
        <Text style={{ fontSize: 20 }}>00</Text>
      </View>
      <>
        <Text style={styles.mainColor}>FREE Returns</Text>
        <Text>All prices include VAT.</Text>
        <Text style={{ fontWeight: "bold" }}>
          Buy with installments and pay EGP 534.77 for 60 months with select
          banks.
        </Text>
        <Text>
          EGP 28 delivery{" "}
          <Text style={{ fontWeight: "bold" }}>Friday,30 June.</Text>
          Order within 5 hrs 9 mins
        </Text>
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
          }}
        >
          <Iconlocation name="location" size={30} color={"black"} />
          <Text style={[styles.mainColor, { fontSize: 20 }]}>
            Deliver to Egypt
          </Text>
        </View>
        <Text style={{ color: "#007600", fontSize: 22 }}>In Stock</Text>
        <SelectDropdown
          defaultValue="dd"
          buttonStyle={{
            backgroundColor: "#f0f2f2",
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 10,
            alignContent: "center",
            justifyContent: "center",
            color: "red",
            width: 120,
            height: 45,
          }}
          defaultButtonText={"Qty: 1"}
          renderDropdownIcon={(isOpened) => {
            return (
              <IconArrow
                name={isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                color={"black"}
                size={30}
              />
            );
          }}
          data={dropDown}
          onSelect={(selectedItem, index) => {
            console.warn(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return `Qty:${selectedItem}`;
          }}
        />
      </>
      <View style={{ marginTop: 20 }}>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            {
              backgroundColor: "#FBC02D",
              opacity: pressed ? 0.7 : 1,
              borderColor: pressed ? "#007600" : "white",
            },
          ]}
        >
          <Text style={styles.btnText}>Add to Cart</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            {
              backgroundColor: "#ffa41c",
              opacity: pressed ? 0.7 : 1,
              borderColor: pressed ? "#007600" : "white",
            },
          ]}
        >
          <Text style={styles.btnText}>Buy Now</Text>
        </Pressable>
      </View>
      <Table>
        <Rows data={tableData} />
      </Table>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 10,
          borderRadius: 8,
          marginVertical: 20,
        }}
      >
        <Text style={{ fontSize: 17, textAlign: "center" }}>
          Yes,I want FREE Shopping with Amation Prime
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  mainColor: {
    color: "#007185",
  },
  btn: {
    height: 60,
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: "center",
  },
});

export default Details;
