import { Text, StyleSheet, View ,TextInput,Image,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
export default function SearchInput() {
    const { navigate } = useNavigation();

  return (
    <View style={styles.serchView}>
    <View style={styles.inputBox} >
      <View style={styles.row}>
        <Ionicons name="search" size={22} color="#1f1f1f" />
        <TextInput
          placeholder="Search Amazon.in"
          placeholderTextColor="#848484"
          style={styles.textInput}
          onFocus={() => {navigate("search")}}
        />
      </View>
      <AntDesign name="scan1" size={22} color="#909594" />
    </View>
    <Feather name="mic" size={20} color="#000000" />
    </View>
  )
}

const styles = StyleSheet.create({
    serchView:{flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-around',
     backgroundColor:'#98e1d6',
     paddingTop:10,
     paddingBottom:10 
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
  })