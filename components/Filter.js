import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconDown from "react-native-vector-icons/Entypo";
const Filter = ({ products, route }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Over 70,000 result in El...</Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigate("brand", { products, route });
          }}
        >
          <Text
            style={{ fontWeight: "bold", color: "#007185", marginRight: 3 }}
          >
            Filter <Icon name="doubleright" size={10} color="#007185" />
          </Text>
        </Pressable>

        <IconDown name="chevron-small-down" size={15} color="#717171" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});

export default Filter;
