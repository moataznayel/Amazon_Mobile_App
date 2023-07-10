import { View, Text } from 'react-native'
import React from 'react'
import Home from '../../screen/mobiles/home';

const HomeScreen = () => {
  return (
    <View>
      
      {/* <Text 
      onPress={() => navigation.navigate("home")}>Home</Text> */}
      <Home/>
    </View>
  )
}

export default HomeScreen;