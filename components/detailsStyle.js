import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  mainColor: {
    color: "#007185",
  },
  btn: {
    height: 60,
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: "center",
  },
  productImg: {
    resizeMode: "stretch",
    height: 500,
    width: "100%",
  },
  wrapPrice: {
    flexDirection: "row",
    fontWeight: 500,
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
    paddingTop: 20,
  },
  deliver: {
    marginVertical: 10,
    flexDirection: "row",
  },
  stock: { color: "#007600", fontSize: 24 },
  dropDown: {
    backgroundColor: "#f0f2f2",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    color: "red",
    width: 120,
    height: 45,
  },
  shoppingCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginVertical: 20,
  },
  textInShoppingCard: { fontSize: 17, textAlign: "center" },
  features: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  iconImg: { width: 50, height: 50 },
  wrapIcon: {
    width: "24%",
    alignItems: "center",
  },
});
