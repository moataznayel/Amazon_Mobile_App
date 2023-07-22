import { Text, StyleSheet, View ,TextInput,Image,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import SearchInput from './SearchInput'
export default function Header1()  {


    return (
      <View style={styles.cont}>
        {/* <LinearGradient  colors={['#88dar0','#98e1d6','#9ee4d4']} style={styles.cont}> */}
        <SearchInput/>
     

       <Pressable style={{ backgroundColor:'rgba(210, 210, 210,0.4)', marginTop: 1 }}>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Image
              style={{width:25,height:25,marginLeft: 10 }}
              source={require("../../assets/images-header/location.png")}
            ></Image>

            <Text>Deliver to Egypt</Text>
          </View>
        </Pressable>
        {/* </LinearGradient> */}
      </View>
    )
  }


const styles = StyleSheet.create({
  cont: {
    backgroundColor:'#98e1d6',
    paddingTop:10,
  },
    searchinput: { 
      marginLeft:25,
      // borderWidth:1,
      borderRadius:5,
      marginBottom:8,
        paddingLeft: 20,
        height: 40,
        borderColor: "gray",
        width: "85%",
        backgroundColor: "white",
      },
      shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 3,
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