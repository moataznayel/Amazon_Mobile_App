import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  NativeBaseProvider,
  Text,
  VStack,
} from "native-base";
import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
// import auth from '@react-native-firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../Firebase/Firebase";

const SignUpComponent = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = ({ navigation }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        if (user.emailVerified) {
          navigation.navigate("home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Center w="100%" bgColor="#fff" h="100%" justifyContent="flex-start">
      <Box safeArea py="10" w="90%" maxW="290" style={styles.container}>
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          size="xs"
        >
          Sign Up!
        </Heading>
        <VStack space={1} mt="5" width="250">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={(e) => setEmail(e)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </FormControl>
          <Button mt="2" bgColor="#f8da17" onPress={handleSignUp}>
            <Text>Sign Up</Text>
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'v already account.{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text
                style={{
                  color: "blue",
                }}
              >
                Sign In
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    
  },
});

export default ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center>
        <SignUpComponent navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  );
};
