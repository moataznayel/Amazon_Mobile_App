import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contiener: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingTop: 15,
    backgroundColor: "#b6e9e4",
  },

  cart: {
    width: "45%",
    borderRadius: 15,
    borderColor: "transparent",
    marginBottom: 15,
    backgroundColor: "white",
    height: 170,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "black",
    elevation: 5,
  },
  image: {
    resizeMode: "stretch",
    height: 100,
    width: 100,
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    paddingTop: 10,
    textTransform: "capitalize",
  },
  pseudoElement: {
    width: "100%",
    height: "50%",
    backgroundColor: "#e0f5f8",
    position: "absolute",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 75,
    borderTopLeftRadius: 75,
    right: 0,
    bottom: 0,
  },
});
