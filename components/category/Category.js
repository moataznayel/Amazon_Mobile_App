import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import categoryStyle from "./categoryStyle";
const Category = () => {
  const laptopImg = "../../assets/images/laptobs.jpg";
  const mobileImg = "../../assets/images/mobile.jpg";
  const shoesImg = "../../assets/images/sheos.jpg";
  const shirtImg = "../../assets/images/shirts.jpg";
  const watchImg = "../../assets/images/watch.jpg";
  const JewelleryImg = "../../assets/images/Jewellery.jpg";
  const lightingImg = "../../assets/images/2.jpg";
  const dressesImg = "../../assets/images/dresses.png";
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={categoryStyle.contiener}>
        <CategoryCard img={require(laptopImg)} route={"laptops"} />
        <CategoryCard img={require(mobileImg)} route={"mobiles"} />
        <CategoryCard img={require(watchImg)} route={"watches"} />
        <CategoryCard img={require(lightingImg)} route={"lighting"} />
        <CategoryCard img={require(dressesImg)} route={"dresses"} />
        <CategoryCard img={require(shoesImg)} route={"shoes"} />
        <CategoryCard img={require(JewelleryImg)} route={"jewellery"} />
        <CategoryCard img={require(shirtImg)} route={"shirts"} />
      </View>
    </ScrollView>
  );
};

export default Category;
