import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";

import { ScrollView, FlatList ,StatusBar} from "react-native";
import Home1 from "../../Pages/Home"
import Header1 from "../../Components/Header1/Header1";
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
