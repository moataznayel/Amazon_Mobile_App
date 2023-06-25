import React, { useState } from "react";
// import { View, StyleSheet } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import { CheckBox } from "@rneui/themed";
const FilterMobiles = () => {
  // let [products, setProducts] = useState([]);
  // let [brands, setBrands] = useState([]);
  let [checked, setChecked] = useState(false);
  // useEffect(() => {
  //   setProducts(props.products);
  //   //filter return brandes by api
  //   let brandByApi = props.products.map((e, i) => e.brand);
  //   //result not repetition in brands
  //   let newBrand = [...new Set(brandByApi)];
  //   setBrands(newBrand);
  // }, [props.products]);

  // let productFilter = props.fillterProducts;

  let handleFilter = async (event) => {
    // if (event.target.checked) {
    //   let newProduct = products.filter((f) => f.brand === event.target.value);
    //   props.setFillterProducts([...props.fillterProducts, ...newProduct]);
    // } else {
    //   let newProduct = productFilter.filter(
    //     (prd) => prd.brand !== event.target.value
    //   );
    //   props.setFillterProducts(newProduct);
    // }
    // setCheck1(!check1);
    // setCheck1(!check1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Text>Brand</Text>
        <CheckBox
          center
          title="Click Here"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          value="kk"
          //checked={check1}
          status={checked ? "checked" : "unchecked"}
          onPress={(e) => handleFilter(e)}
        />
        {/* <Text style={styles.label}>{brands}</Text> */}
      </View>
      {/* <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default FilterMobiles;
