import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import Heder from "../../components/Header/Heder";
import routes from '../../common/routes';
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const { navigate } = useNavigation();
  return (
    <View>
       <Heder/>
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
          navigate('mobiles');
        }}
      >
        <Text style={{ textAlign: "center" }}>category</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
