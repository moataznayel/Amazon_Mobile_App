import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SignComponent from "../SignComponent/SignComponent";
const Sign = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
        <SignComponent />
      <Footer />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Sign;
