import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Products from "../../components/Products";
import Filter from "../../components/Filter";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../customHook/useAxios";
import styleScreenCategory from "../styleScreen/styleScreenCategory";
const Shirts = () => {
  const { params } = useRoute();
  let { productsOrginal, products } = useAxios("/category/mens-shirts", params);
  return (
    <ScrollView
      style={styleScreenCategory.container}
      showsVerticalScrollIndicator={false}
    >
      <Filter products={productsOrginal} route="shirts" />
      <Products products={products} />
    </ScrollView>
  );
};

export default Shirts;
