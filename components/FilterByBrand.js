import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable } from "react-native";
import filterByBrandStyle from "./filterByBrandStyle";
const FilterByBrand = () => {
  let [brands, setBrands] = useState([]);
  const { params } = useRoute();
  const { navigate } = useNavigation();
  // console.warn(params);
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
    <View style={filterByBrandStyle.container}>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Brand</Text>
        <View>
          {brands.length > 0 &&
            brands.map((brand, index) => (
              <View style={filterByBrandStyle.card} key={index}>
                <Text>{brand}</Text>
                <Pressable
                  style={({ pressed }) => [
                    filterByBrandStyle.checkbox,
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
                  <Text style={filterByBrandStyle.text}></Text>
                </Pressable>
              </View>
            ))}
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default FilterByBrand;
