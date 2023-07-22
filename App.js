import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import store from "./storeByRedux/store/store";

import Navbar from './components/Navbar/Navbar';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <View style={styles.container}>
      <NavigationContainer >
         <Navbar/>
     </NavigationContainer>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});


