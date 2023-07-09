import { View, Text, SafeAreaView, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Box from "./Box";

const DetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Box />
      <Pressable style={{alignItems:"center"}} onPress={() => navigation.navigate("SignIn")}>
      <View style={styles.item}>
        <Text>Sign In</Text>
        <Image
          style={styles.img}
          source={require("../../assets/right-arrow.png")}
        ></Image>
      </View>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
  item: {
    width: "100%",
    justifyContent:"space-between",
    flexDirection:"row-reverse",
    alignItems:"center",
    marginVertical: 15,
    backgroundColor: "white",
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: "#444",
  },
  img: {
    height: 15,
    width: 15,
  },
});
export default DetailsScreen;
