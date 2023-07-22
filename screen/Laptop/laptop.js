import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Products from "../../components/Products";
import Filter from "../../components/Filter";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../customHook/useAxios";
import styleScreenCategory from "../styleScreen/styleScreenCategory";
const Laptop = () => {
  const { params } = useRoute();
  let { productsOrginal, products } = useAxios("/category/laptops", params);
  return (
    <ScrollView
      style={styleScreenCategory.container}
      showsVerticalScrollIndicator={false}
    >
      <Filter products={productsOrginal} route="laptops" />
      <Products products={products} />
    </ScrollView>
  );
};

export default Laptop;
