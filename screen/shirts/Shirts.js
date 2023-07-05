import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Products from "../../components/Products";
import Filter from "../../components/Filter";
import { useRoute } from "@react-navigation/native";
import useAxios from "../../customHook/useAxios";
const Shirts = () => {
  const { params } = useRoute();
  let { productsOrginal, products } = useAxios("/category/mens-shirts", params);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Filter products={productsOrginal} route="shirts" />
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

export default Shirts;
