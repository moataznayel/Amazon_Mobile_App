import React from "react";
import { ScrollView } from "react-native";
import Products from "../../components/Products";
import Filter from "../../components/Filter";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../customHook/useAxios";
import styleScreenCategory from "../styleScreen/styleScreenCategory";
const Dresses = () => {
  const { params } = useRoute();
  let { productsOrginal, products } = useAxios(
    "/category/womens-dresses",
    params
  );
  return (
    <ScrollView
      style={styleScreenCategory.container}
      showsVerticalScrollIndicator={false}
    >
      <Filter products={productsOrginal} route="dresses" />
      <Products products={products} />
    </ScrollView>
  );
};

export default Dresses;
