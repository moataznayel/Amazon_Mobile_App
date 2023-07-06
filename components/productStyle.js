import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 8,
    height: 170,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  content: {
    padding: 5,
    flex: 3,
  },
  image: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  mainColor: { color: "#007185" },
  wrapPrice: { flexDirection: "row", fontWeight: "500" },
  price: { fontSize: 20, fontWeight: "500" },
});
