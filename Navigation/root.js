import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import Mobiles from '../screen/mobiles/mobiles';
import Search from '../components/Search/Search';
import Home from '../screen/mobiles/home';
import Details from '../components/Details';
import routes from '../../common/routes';

const Stack=createStackNavigator();
const Root = () => {
    return (


     


<Stack.Navigator >
      
      <Stack.Screen name='home' component={Home} 
    
        options={{
          headerShown:false
        }} 
      />
      <Stack.Screen name='mobiles' component={Mobiles} />
      <Stack.Screen name='search' component={Search} />
      <Stack.Screen
        name="brand"
        component={FilterByBrand}
        options={{

          headerTitle: "Back",
          headerTitleStyle: { margin: 50 },
          
        }}
      />

      <Stack.Screen name='details'  component={Details} />
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Root;
