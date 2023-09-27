import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Products from "../../Components/Products";
import Filter from "../../Components/Filter";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../customHook/useAxios";
import styleScreenCategory from "../styleScreen/styleScreenCategory";
const Watches = () => {
  const { params } = useRoute();
  let { productsOrginal, products } = useAxios(
    "/category/mens-watches",
    params
  );
  return (
    <ScrollView
      style={styleScreenCategory.container}
      showsVerticalScrollIndicator={false}
    >
      <Filter products={productsOrginal} route="watches" />
      <Products products={products} />
    </ScrollView>
  );
};

export default Watches;
