import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Slider from "../../components/carousel/Slider";
import Carousel from "../../components/carousel/tast";

const Home = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>home</Text>
      <Pressable
        style={{
          backgroundColor: "#ddd",
          padding: 50,
          marginTop: 50,
          borderRadius: 20,
          marginHorizontal: 15,
        }}
        onPress={() => {
          navigate("laptops");
        }}
      >
        <Text>ss</Text>
        <Text style={{ textAlign: "center" }}>category</Text>
      </Pressable>
      {/* <Slider /> */}
      {/* <Carousel /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
