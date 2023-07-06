import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    height: "100%",
  },
  checkbox: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderRadius: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginVertical: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
