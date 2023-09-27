import React from "react";
import { View, StyleSheet, Image, Text, ScrollView,Pressable } from "react-native";
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
        <CategoryCard img={require(mobileImg)} route={"smartphones"} />
        <CategoryCard img={require(watchImg)} route={"mens-watches"} />
        <CategoryCard img={require(lightingImg)} route={"lighting"} />
        <CategoryCard img={require(dressesImg)} route={"womens-dresses"} />
        <CategoryCard img={require(shoesImg)} route={"mens-shoes"} />
        <CategoryCard img={require(JewelleryImg)} route={"womens-jewellery"} />
        <CategoryCard img={require(shirtImg)} route={"mens-shirts"} />

        <Pressable style={styles.btn}>
          <View style={styles.txtBtn}>
            <Text>language</Text>
          </View>
        </Pressable>
        <Pressable style={styles.btn}>
          <View style={styles.txtBtn}>
            <Text> location</Text>
          </View>
        </Pressable>
        <Pressable style={styles.btn}>
          <View style={styles.txtBtn}>
               <Text>settings</Text>
          </View>
        </Pressable>

      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  btn:{width:'95%',
  backgroundColor: "white",
   margin: 5 ,
   borderColor:'black' ,
   borderWidth:1,
   borderRadius:10,

  },
  txtBtn:{
    padding: 10,
    paddingLeft:20
  },
  
});


export default Category;
