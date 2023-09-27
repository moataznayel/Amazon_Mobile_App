import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../customHook/useAxios";
import styleScreenCategory from "../styleScreen/styleScreenCategory";
import Products from "../../Components/Products";
import Filter from "../../Components/Filter";
const Mobiles = () => {
  const { params } = useRoute();
  let { productsOrginal, products } = useAxios("/category/smartphones", params);
  return (
    <ScrollView
      style={styleScreenCategory.container}
      showsVerticalScrollIndicator={false}
    >
      <Filter products={productsOrginal} route="mobiles" />
      <Products products={products} />
    </ScrollView>
  );
};

export default Mobiles;
