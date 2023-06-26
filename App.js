import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Mobiles from "./screen/mobiles/mobiles";

import Filter from "./components/Filter";
import FilterByBrand from "./components/FilterByBrand";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/mobiles/home";
import Details from "./components/Details";
const Stack = createNativeStackNavigator();
export default function App() {
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
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
