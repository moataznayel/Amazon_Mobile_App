import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Products from "../../components/Products";
import Filter from "../../components/Filter";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../customHook/useAxios";
import styleScreenCategory from "../styleScreen/styleScreenCategory";
const Jewellery = () => {
  const { params } = useRoute();
  let { productsOrginal, products } = useAxios(
    "/category/womens-jewellery",
    params
  );
  return (
    <ScrollView
      style={styleScreenCategory.container}
      showsVerticalScrollIndicator={false}
    >
      <Filter products={productsOrginal} route="jewellery" />
      <Products products={products} />
    </ScrollView>
  );
};

export default Jewellery;
