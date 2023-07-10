import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
// import {
//   NativeBaseProvider,
// } from "native-base";
import React from "react";
import Box from "./Box";

const DetailsScreen = ({ navigation }) => {
  const data = [
    { name: "Prime", img: "../../assets/logistics.png" },
    { name: "Mobiles", img: "../../assets/logistics.png" },
  ];
  return (
    <SafeAreaView style={styles.container}>
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
    backgroundColor: "#eee",
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
    shadowColor: "#444",
  },
  img: {
    height: 15,
    width: 15,
  },
});
// export default ({ navigation }) => {
//   return (
//     <NativeBaseProvider>
//         <DetailsScreen navigation={navigation} />
//     </NativeBaseProvider>
//   );
// };

export default DetailsScreen;