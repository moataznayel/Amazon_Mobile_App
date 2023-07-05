import { View, Text } from 'react-native'
import React from 'react'

const UserScreen = () => {
  return (
    <View>
      <Text
       onPress={() => navigation.navigate("settings")}
      >User</Text>
    </View>
  )
}

export default UserScreen;