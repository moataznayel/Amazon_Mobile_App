import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Image,
  Icon
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Heder() {
  const { navigate } = useNavigation();
   const size=30;
  return (
    <View style={styles.cont}>
      <View style={{ backgroundColor: "black"}}>
        <View
          style={styles.firstsection}
        >
          <Image
            style={{ justifyContent: "flex-start", width: 100, height: 40 }}
            source={require("../../assets/images-header/Amazon-Emblem33.jpg")}
          ></Image>
           <View style={{flexDirection:'row',alignItems:'baseline'}}>
           <Text style={{color:'white'}}>sign in</Text>
          <Ionicons name="ios-person" size={25}  color="white"/>
           </View>

          <Image
            style={{ width: 40, height: 35 }}
            source={require("../../assets/images-header/cart33.png")}
          ></Image>
        </View>
        <View style={styles.searchSection}>
          <Pressable
            style={styles.btnAll}
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>all</Text>
          </Pressable>
          <TextInput
            placeholder="Search"
            onFocus={() => {
              navigate("search");
            }}
            style={styles.searchinput}
          />

          <Pressable
        
            style={{
              backgroundColor: "#febd69",
              borderRadius: 2,
              padding: 10,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
            }}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../../assets/images-header/search.png")}
            ></Image>
          </Pressable>
        </View>

        <Pressable style={{ backgroundColor: "gray", margin: 5 }}>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Image
              style={{width:25,height:25,marginLeft: 10 }}
              source={require("../../assets/images-header/location.png")}
            ></Image>

            <Text>Deliver to Egypt</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    marginTop:40
  },
  firstsection:{
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems:'center',
    padding:10


  },
  searchSection:{
     flexDirection: "row-reverse",
      alignItems: "stretch",
      justifyContent:'center' },
  searchinput: {
    paddingRight: 30,
    height: 50,
    borderColor: "gray",
    width: "75%",
    backgroundColor: "white",
  },
  btnAll:{
    backgroundColor: "#D3D3D3",
    borderRadius: 2,
    padding: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  }
});
