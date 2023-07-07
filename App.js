import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar/Navbar';
import Sign from './components/Sign/Sign';
import LoginHome from './components/LoginHome/LoginHome';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Navbar/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

