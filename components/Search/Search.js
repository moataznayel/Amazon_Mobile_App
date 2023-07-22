import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import axios from "axios";
import SearchInput from '../Header1/SearchInput'


export default function Search() {
  const { navigate } = useNavigation();

  const [query, setquery] = useState("");
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {}, [resultSearch]);
  const search = () => {
    if (query == "") {
      console.log("nothing to show");
      setResultSearch([]);
    } else {
      axios
        .get(`https://dummyjson.com/products/search?q=${query}`)

        .then((res) => {
          setResultSearch(res.data.products);

          console.warn(res.data.products);
        })

        .catch((err) => console.log(err));
    }
  };

  const handlesearch = (text) => {
    setquery(text);
    search();
  };
  
  const navigateToProdcut = (cat) => {
    var arr = [
      "womens-jewellery",
      "laptops",
      "lighting",
      "smartphones",
      "mens-shirts",
      "mens-shoes",
      "sunglasses",
      "womens-watches",
      "womens-dresses",
      "mens-watches"
    ];


    if (arr.includes(cat)) {
      navigate(`${cat}`);

    } else {
      console.log("not found");
    }
  };
  return (
    <View>
  
      <View style={styles.searchview}>
        <View style={styles.inputBox} >
          <View style={styles.row}>
            <Ionicons name="search" size={22} color="#1f1f1f" />
            <TextInput
              placeholder="Search Amazon.in"
              placeholderTextColor="#848484"
              style={styles.textInput}
              onChangeText={(text) => {
                handlesearch(text);
              }}
              autoFocus={true}
              clearButtonMode="always"
              // onFocus={() => {navigate("search")}}
            />
          </View>
          <AntDesign name="scan1" size={22} color="#909594" />
        </View>
        <Feather name="mic" size={20} color="#000000" />
        </View>
   {/* <SearchInput/> */}
      <View>
        {resultSearch.map((item) => {
          if (resultSearch == []) {
            return (
              <View>
                <Text>no match data</Text>
              </View>
            );
          }
          return (
            <View key={item.id}>
              <View>
                <Pressable
                  onPress={() => {
                    navigateToProdcut(item.category);
                  }}
                  style={styles.searchItem}
                >
                  <Text>{item.category}</Text>
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
searchview:{
  flexDirection:'row',
 alignItems:'center',
 justifyContent:'space-around',
  backgroundColor:'#98e1d6',
  paddingTop:6,
  paddingBottom:10
},
  seaechView: {
    flexDirection: "row-reverse",
    alignItems: "stretch",
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#daf0fa",
  },
  searchinput: {
    paddingRight: 15,

    marginRight: "4%",
    height: 50,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 2,
    width: "90%",

    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  searchItem: {
    backgroundColor: "#d6e0e5",
    margin: 0,
    padding: 10,
    borderColor: "white",
    borderWidth: 0.5,
    paddingRight: 30,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a1bcc0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    padding: 8,
  },
});
