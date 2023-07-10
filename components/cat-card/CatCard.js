import { View, Text ,StyleSheet,Image,Pressable} from 'react-native'
import React from 'react'

export default function(){
  return (
    <View style={{backgroundColor:'white'}}>
    <View style={{flexDirection:'row-reverse'}}>
      <View style={styles.imgcard}>
      <Image
            style={{ justifyContent: "flex-start", width:"100%", height: 40 }}
            source={require("../../assets/images-header/Amazon-Emblem33.jpg")}
          ></Image>
        <Text> electronic </Text>
          </View>


          <View style={styles.imgcard}>
      <Image
            style={{ justifyContent: "flex-start", width:"100%", height: 40 }}
            source={require("../../assets/images-header/Amazon-Emblem33.jpg")}
          ></Image>
        <Text> electronic </Text>
          </View>
          <View style={styles.imgcard}>
      <Image
            style={{ justifyContent: "flex-start", width:"100%", height: 40 }}
            source={require("../../assets/images-header/Amazon-Emblem33.jpg")}
          ></Image>
        <Text> electronic </Text>
          </View>
      </View>
      <View style={{flexDirection:'row-reverse'}}>    
          <View style={styles.imgcard}>
      <Image
            style={{ justifyContent: "flex-start", width:"100%", height: 40 }}
            source={require("../../assets/images-header/Amazon-Emblem33.jpg")}
          ></Image>
        <Text> electronic </Text>
          </View>
          <View style={styles.imgcard}>
      <Image
            style={{ justifyContent: "flex-start", width:"100%", height: 40 }}
            source={require("../../assets/images-header/Amazon-Emblem33.jpg")}
          ></Image>
        <Text> electronic </Text>
          </View>
          <View style={styles.imgcard}>
      <Image
            style={{ justifyContent: "flex-start", width:"100%", height: 40 }}
            source={require("../../assets/images-header/Amazon-Emblem33.jpg")}
          ></Image>
        <Text> electronic </Text>
          </View>
        </View>
        <View style={{flexDirection:'row-reverse'}}>  
          <View style={styles.imgcard}>
      <Image
            style={{ justifyContent: "flex-start", width:"100%", height: 40 }}
            source={require("../../assets/images-header/Amazon-Emblem33.jpg")}
          ></Image>
        <Text> electronic </Text>
          </View>
          </View>
 

          <Pressable style={{ backgroundColor: "#d6e0e5", margin: 5 ,borderColor:'#d6e0e5' ,borderWidth:2,borderRadius:10}}>
          <View style={{ flexDirection: "row-reverse", padding: 10 }}>
         

            <Text>language</Text>
          </View>
        </Pressable>
        <Pressable style={{ backgroundColor: "#d6e0e5", margin: 5 ,borderColor:'#d6e0e5' ,borderWidth:2,borderRadius:10}}>
          <View style={{ flexDirection: "row-reverse", padding: 10 }}>
         

            <Text> location</Text>
          </View>
        </Pressable>
        <Pressable style={{ backgroundColor: "#d6e0e5", margin: 5 ,borderColor:'#d6e0e5' ,borderWidth:2,borderRadius:10}}>
          <View style={{ flexDirection: "row-reverse", padding: 10 }}>
         

            <Text>settings</Text>
          </View>
        </Pressable>

          </View>     
  )
}

const styles = StyleSheet.create({
    imgcard:{
        margin:"2%",
        width:"30%",
        height:100,
        backgroundColor: "#d6e0e5",
       borderColor:'gray',
       borderWidth:1,
       padding:10,
       borderRadius:20
    }
})
