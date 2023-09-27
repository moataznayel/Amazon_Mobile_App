import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../../screen/mobiles/home';
import Category from '../category/Category';
import Mobiles from '../../screen/mobiles/mobiles';
import Laptop from '../../screen/Laptop/laptop';
import Lighting from '../../screen/lighting/Lighting';
import Watches from '../../screen/watches/Watches';
import Jewellery from '../../screen/jewellery/Jewellery';
import Shirts from '../../screen/shirts/Shirts';
import Dresses from '../../screen/dresses/Dresses';
import Shoes from '../../screen/shoes/Shoes';
import Cart from '../Cart';
import FilterByBrand from '../FilterByBrand';
import Search from '../Search/Search';
import Details from '../Details';

const HomeScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
<>
  
  <Stack.Navigator >
      <Stack.Screen name="home" component={Home}
        options={{
          headerShown:false
        }}
      />
    
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="smartphones" component={Mobiles}/>
      <Stack.Screen name="laptops" component={Laptop} />
      <Stack.Screen name="lighting" component={Lighting}/>
      <Stack.Screen name="womens-watches" component={Watches} />
      <Stack.Screen name="mens-watches" component={Watches} />
      <Stack.Screen name="womens-jewellery" component={Jewellery} />
      <Stack.Screen name="mens-shirts" component={Shirts} />
      <Stack.Screen name="womens-dresses" component={Dresses} />
      <Stack.Screen name="mens-shoes" component={Shoes} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen
        name="brand"
        component={FilterByBrand}
        options={{
          headerTitle: "Back",
        }}
      />
       <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="search"   options={{
          headerBackVisible:true,
          headerTitle:''
        }} component={Search} />
      <Stack.Screen name="category" component={Category} />
    </Stack.Navigator>
</>

  
  )
}

export default HomeScreen;