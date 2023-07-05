import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Instance from "../../instanceAxios/instance";
import Products from "../../components/Products";
import Filter from "../../components/Filter";
import { useNavigation, useRoute } from "@react-navigation/native";
const Shirts = () => {
  //store the all product by get api
  const [productsOrginal, setProductsOrginal] = useState([]);
  //store the all product by get api and result filter
  const [products, setProducts] = useState([]);
  const { params } = useRoute();
  // console.warn(params);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    Instance.get("/category/mens-shirts")
      .then((res) => {
        setProductsOrginal(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (params !== undefined) {
      let filterByBrand = productsOrginal.filter((f) => f.brand === params);
      setProducts(filterByBrand);
    } else {
      setProducts(productsOrginal);
    }
  }, [params]);
  console.warn(products);

  return (
    <ScrollView
      style={{ paddingHorizontal: 12, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <Filter products={productsOrginal} route="shirts" />
      <Products products={products} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Shirts;
