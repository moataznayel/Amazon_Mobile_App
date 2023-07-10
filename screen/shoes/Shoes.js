import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Products from "../../components/Products";
import Filter from "../../components/Filter";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../customHook/useAxios";
import styleScreenCategory from "../styleScreen/styleScreenCategory";
const Shoes = () => {
  const { params } = useRoute();
  let { productsOrginal, products } = useAxios("/category/mens-shoes", params);
  return (
    <ScrollView
      style={styleScreenCategory.container}
      showsVerticalScrollIndicator={false}
    >
      <Filter products={productsOrginal} route="shoes" />
      <Products products={products} />
    </ScrollView>
  );
};

export default Shoes;
