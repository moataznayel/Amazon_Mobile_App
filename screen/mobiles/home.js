import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import Heder from "../../components/Header/Heder";
import routes from '../../common/routes';
import Navbar from "../../components/Navbar/Navbar";
import { ScrollView, FlatList } from "react-native";
import { Image} from "react-native";
import { TouchableOpacity } from "react-native-web";
import { useState } from "react";
import Home1 from "../../Pages/Home"
const Home = () => {

  const { navigate } = useNavigation();
  return (
    <View>
      <ScrollView>
       <Heder/>
       <Home1/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
