import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import Heder from "../../components/Header/Heder";
import Header1 from "../../components/Header1/Header1";

import routes from '../../common/routes';
import Navbar from "../../components/Navbar/Navbar";
import { ScrollView, FlatList ,StatusBar} from "react-native";
import { Image} from "react-native";
import { useState } from "react";
import Home1 from "../../Pages/Home"
const Home = () => {

  const { navigate } = useNavigation();
  return (
    <View>
      <ScrollView>
        <StatusBar backgroundColor={'#9ee4d4'} barStyle={'dark-content'}/>
       <Header1/>
       <Home1/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
