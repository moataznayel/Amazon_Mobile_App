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
import { Pressable } from "react-native";

const SignComponent = ({ navigation }) => {

  
  return (
    <Center w="100%" bgColor="#fff">
      <Box safeArea  py="10" w="90%" maxW="290" alignItems="center" >
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
          Sign in to continue!
        </Heading>
        <VStack space={2} mt="5" width="250">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 500,
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" bgColor="#f8da17">
            <Text>Sign in</Text>
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={{
                  color: "blue",
                }}
              >
                Sign Up
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default ({ navigation }) => {
  return (
    <NativeBaseProvider>
        <SignComponent navigation={navigation} />
    </NativeBaseProvider>
  );
};
