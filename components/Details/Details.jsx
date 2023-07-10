import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Box from "./Box";
import { LinearGradient } from "expo-linear-gradient";

const DetailsScreen = ({ navigation }) => {
  const data = [
    { name: "Prime", img: "../../assets/logistics.png" },
    { name: "Mobiles", img: "../../assets/logistics.png" },
  ];
  return (
    <SafeAreaView style={styles.container}>
            <LinearGradient
        // Background Linear Gradient
        colors={["#65c2d1", "transparent"]}
        style={styles.background}
      />
      <View
        style={{
          flexWrap: "wrap",
          gap: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box data={data} />
      </View>
      <Pressable
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("SignIn")}
      >
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
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  item: {
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    alignItems: "center",
    marginVertical: 15,
    backgroundColor: "white",
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.20,
    shadowRadius: 3.05,
    elevation: 5    
  },
  img: {
    height: 15,
    width: 15,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
export default ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <DetailsScreen navigation={navigation} />
    </NativeBaseProvider>
  );
};
