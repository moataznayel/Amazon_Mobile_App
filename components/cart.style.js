import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  cardTotal: { marginVertical: 20 },

  cardProduct: {
    backgroundColor: "#f7f9fa",
    marginBottom: 8,
    borderRadius: 5,
  },
  wrapProduct: {
    flexDirection: "row",
    height: 130,
  },
  imgProduct: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 5,
  },
  description: {
    fontWeight: 500,
    lineHeight: 19,
  },
  wrapPrice: {
    flexDirection: "row",

    marginTop: 2,
  },
  price: { fontSize: 20, fontWeight: "bold" },
  freeDelivery: { color: "#6c706e", fontWeight: 400 },
  stock: { color: "#1B5E20", marginTop: 3 },
  wrapBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
    alignItems: "center",
    height: 35,
  },
  wrapBtnIncrementAndDecrement: {
    width: "40%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: "100%",
    alignItems: "center",
  },
  decrementAndDelete: {
    backgroundColor: "#ebedf0",
    paddingHorizontal: 10,
    height: "100%",
    justifyContent: "center",
  },
  btnIncrement: {
    backgroundColor: "#ebedf0",
    paddingHorizontal: 10,
    height: "100%",
    justifyContent: "center",
  },
  btnDelete: {
    backgroundColor: "white",
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 10,
    height: "100%",
    justifyContent: "center",
  },
  save: {
    backgroundColor: "white",
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 10,
    height: "100%",
    justifyContent: "center",
  },
  btn: {
    height: 60,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 3,
    marginTop: 10,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  content: {
    padding: 5,

    flex: 4,
  },
  input: {
    color: "#007185",
  },
  emptyCard: { marginTop: 20 },
  emptyImage: { width: "100%", height: 200 },
  emptyText: { textAlign: "center", fontWeight: "bold", fontSize: 20 },
  emptyBtn: { color: "#2c8695", textAlign: "center" },
});
