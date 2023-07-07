import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footerStyle}>
      <Text style={{ color: "#4b5563" }}>
        &copy;1996-2023, Amazon.com,Inc. or its affiliates
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  footerStyle: {
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    paddingTop: 20,
    borderTopColor: "#eee",
    borderTopWidth:1,
    flex:.2
  },
});
export default Footer;
