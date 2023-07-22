import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screen/mobiles/home';
import Category from '../components/category/Category';
import Mobiles from '../screen/mobiles/mobiles';
import Laptop from '../screen/Laptop/laptop';
import Lighting from '../screen/lighting/Lighting';
import Watches from '../screen/watches/Watches';
import Jewellery from '../screen/jewellery/Jewellery';
import Shirts from '../screen/shirts/Shirts';
import Dresses from '../screen/dresses/Dresses';
import Shoes from '../screen/shoes/Shoes';
import Cart from '../components/Cart';
import FilterByBrand from '../components/FilterByBrand';
import Details from '../components/Details';
import Search from '../components/Search/Search';


const Root = () => {
  const Stack = createNativeStackNavigator();

    return (


     



      <Stack.Navigator>
      <Stack.Screen name="home" component={Home} 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="mobiles" component={Mobiles} />
      <Stack.Screen name="laptops" component={Laptop} />
      <Stack.Screen name="lighting" component={Lighting} />
      <Stack.Screen name="watches" component={Watches} />
      <Stack.Screen name="jewellery" component={Jewellery} />
      <Stack.Screen name="shirts" component={Shirts} />
      <Stack.Screen name="dresses" component={Dresses} />
      <Stack.Screen name="shoes" component={Shoes} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen
        name="brand"
        component={FilterByBrand}
        options={{
          headerTitle: "Back",
        }}
      />
       <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="category" component={Category} />
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Root;
