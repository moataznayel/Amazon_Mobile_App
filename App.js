import Navbar from './components/Navbar/Navbar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Mobiles from "./screen/mobiles/mobiles";
import Ionicons from "react-native-vector-icons/Ionicons";

import Filter from "./components/Filter";
import FilterByBrand from "./components/FilterByBrand";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/mobiles/home";
import Details from "./components/Details"
import Search from './components/Search/Search';
import { ScreenStackHeaderConfig } from 'react-native-screens';
import { black } from 'color-name';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
    {/* <NavigationContainer>
    <Stack.Navigator >
      
      <Stack.Screen name="home" component={Home} 
    
        options={{
          headerShown:false
        }} 
      />
      <Stack.Screen name="mobiles" component={Mobiles} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen
        name="brand"
        component={FilterByBrand}
        options={{

          headerTitle: "Back",
          headerTitleStyle: { margin: 50 },
          
        }}
      />

      <Stack.Screen name="details" component={Details} />

    </Stack.Navigator>
    
      </NavigationContainer> */}
  <NavigationContainer>
     <View style={styles.container}>
      <Navbar/>
    </View> 
  </NavigationContainer>
  
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // navbar:{
  //   flex:1,
  //   backgroundColor:"black",
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }
});

