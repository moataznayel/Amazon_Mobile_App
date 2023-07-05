import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar/Navbar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Mobiles from "./screen/mobiles/mobiles";

import Filter from "./components/Filter";
import FilterByBrand from "./components/FilterByBrand";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/mobiles/home";
import Details from "./components/Details"
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="mobiles" component={Mobiles} />
      <Stack.Screen
        name="brand"
        component={FilterByBrand}
        options={{
          headerTitle: "Back",
          headerTitleStyle: { margin: 0 },
        }}
      />
        <View style={styles.container}>
      <Navbar/>
    </View>
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"500px"
  },
  navbar:{
    flex:1,
    backgroundColor:"black",
    alignItems: 'center',
    justifyContent: 'center',
  }
});

