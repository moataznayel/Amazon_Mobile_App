import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable } from "react-native";
const FilterByBrand = () => {
  let [brands, setBrands] = useState([]);
  const { params } = useRoute();
  const { navigate } = useNavigation();
  console.warn(params);
  useEffect(() => {
    //filter return brandes by api
    let brandByApi = params.products.map((e, i) => e.brand);
    //result not repetition in brands
    let newBrand = [...new Set(brandByApi)];
    setBrands(newBrand);
  }, []);

  let handleFilter = (brand) => {
    navigate(params.route, brand);
  };
  return (
    <View style={styles.container}>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Brand</Text>
        <View>
          {brands.length > 0 &&
            brands.map((brand, index) => (
              <View
                style={{
                  backgroundColor: "#ffffff",
                  padding: 15,
                  marginVertical: 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={index}
              >
                <Text>{brand}</Text>
                <Pressable
                  style={({ pressed }) => [
                    styles.checkbox,
                    {
                      backgroundColor: pressed ? "#007185" : "white",
                      borderColor: pressed ? "transparent" : "#ddd",
                    },
                  ]}
                  value={brand}
                  onPress={() => {
                    handleFilter(brand);
                  }}
                >
                  <Text style={styles.text}></Text>
                </Pressable>
              </View>
            ))}
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    height: "100%",
  },
  checkbox: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderRadius: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "white",
  },
});

export default FilterByBrand;
