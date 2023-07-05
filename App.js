
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Mobiles from "./screen/mobiles/mobiles";
import FilterByBrand from "./components/FilterByBrand";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/mobiles/home";
import Details from "./components/Details";
import Laptop from "./screen/Laptop/laptop";
import Shirts from "./screen/shirts/Shirts";
import Card from "./components/Card";
import { Provider } from "react-redux";
import store from "./storeByRedux/store/store";
import Lighting from "./screen/lighting/Lighting";
import Watches from "./screen/watches/Watches";
import Jewellery from "./screen/jewellery/Jewellery";
import Dresses from "./screen/dresses/Dresses";
import Shoes from "./screen/shoes/Shoes";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="mobiles" component={Mobiles} />
          <Stack.Screen name="laptops" component={Laptop} />
          <Stack.Screen name="lighting" component={Lighting} />
          <Stack.Screen name="watches" component={Watches} />
          <Stack.Screen name="jewellery" component={Jewellery} />
          <Stack.Screen name="shirts" component={Shirts} />
          <Stack.Screen name="dresses" component={Dresses} />
          <Stack.Screen name="shoes" component={Shoes} />
          <Stack.Screen name="card" component={Card} />
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
    </Provider>
  );
}

const styles = StyleSheet.create({});

