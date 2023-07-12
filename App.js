import Navbar from './components/Navbar/Navbar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Mobiles from "./screen/mobiles/mobiles";
import Ionicons from "react-native-vector-icons/Ionicons";

import Filter from "./components/Filter";


import FilterByBrand from "./components/FilterByBrand";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/mobiles/home";
import Search from './components/Search/Search';
import { ScreenStackHeaderConfig } from 'react-native-screens';
import { black } from 'color-name';
import Details from "./components/Details";
import Laptop from "./screen/Laptop/laptop";
import Shirts from "./screen/shirts/Shirts";
import { Provider } from "react-redux";
import store from "./storeByRedux/store/store";
import Lighting from "./screen/lighting/Lighting";
import Watches from "./screen/watches/Watches";
import Jewellery from "./screen/jewellery/Jewellery";
import Dresses from "./screen/dresses/Dresses";
import Shoes from "./screen/shoes/Shoes";
import Cart from "./components/Cart";
import Category from "./components/category/Category";
import Root from './Navigation/root';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>

          <Provider store={store}>
      <NavigationContainer>
        <Root></Root>
       <Navbar/>
      </NavigationContainer>
    </Provider>

  
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


