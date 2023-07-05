import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Products from "../../components/Products";
import Filter from "../../components/Filter";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../customHook/useAxios";
const Dresses = () => {
  const { params } = useRoute();
  let { productsOrginal, products } = useAxios(
    "/category/womens-dresses",
    params
  );
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Filter products={productsOrginal} route="dresses" />
      <Products products={products} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
});

export default Dresses;
