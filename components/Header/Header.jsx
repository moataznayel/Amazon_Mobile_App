import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyle}>
        <View style={{width:170}}>
        <Image source={require("../../assets/Amazon_log2o.svg.png")} style={styles.imgStyle}></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems:"center",
    borderBottomColor:"#eee",
    borderBottomWidth:1,
  },
  imgStyle: {
    width:"100%",
    height:50,
    marginTop:5
  },
  headerStyle: {
    backgroundColor:"#f8f8f8",
    alignItems:"center",
    paddingVertical: 5,
    width:"100%",
  },

});
export default Header;
