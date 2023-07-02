import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text 
      onPress={() => navigation.navigate("home")}>Home</Text>
    </View>
  )
}

export default HomeScreen;