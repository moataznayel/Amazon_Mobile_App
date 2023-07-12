import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../Home/Home";
import UserScreen from "../User/User";
import CartScreen from "../Cart/Cart";
import DetailsScreen from "../Details/Details";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView, StyleSheet } from "react-native";
import LoginHome from "../LoginHome/LoginHome";
import UserScreens from "./../User/User";
import Details from "../Details/Details";
import DetailsHome from "../Details/DetailsHome";

const Tab = createBottomTabNavigator();

const homeName = "home2";
const userName = "user";
const cartName = "cart";
const detailsName = "details";
const Navbar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === userName) {
              iconName = focused ? "person" : "person-outline";
            } else if (rn === cartName) {
              iconName = focused ? "cart" : "cart-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "menu" : "menu-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#94d9d3",
          inactiveTintColor: "#575c59",
          labelStyle: { paddingBottom: 10, fontSize: 0 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name="details" component={DetailsHome} options={{ headerShown: false }}/>
        <Tab.Screen name="cart" component={CartScreen} />
        <Tab.Screen
          name="user"
          component={UserScreens}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="home" component={HomeScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  
});
export default Navbar;
