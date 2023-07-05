import React, { useState } from "react";
import { useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import IconDelete from "react-native-vector-icons/MaterialCommunityIcons";
import IconPlus from "react-native-vector-icons/Entypo";
import { changeCart } from "../storeByRedux/action/changeCart";

const Card = () => {
  let [product, setProduct] = useState([]);
  let allProduct = useSelector((state) => state.cart.cart);
  let [totalPrice, setTotalPrice] = useState(0);
  let [totalItem, setTotalItem] = useState(0);
  let dispatch = useDispatch();
  let handleDelete = (id) => {
    let filter = product.filter((prd) => prd.id !== id);
    dispatch(changeCart([...filter]));
  };
  let increment = (id) => {
    let newListCart = product.map((ele) => {
      if (ele.id === id && ele.stock >= 1) {
        ele.order += 1;
        ele.stock -= 1;
        return ele;
      }
      return ele;
    });
    dispatch(changeCart(newListCart));
  };
  let decrement = (id) => {
    let newListCart = product.map((ele) => {
      if (ele.id === id && ele.order >= 1) {
        ele.order -= 1;
        ele.stock += 1;
        return ele;
      }
      return ele;
    });
    dispatch(changeCart(newListCart));
  };
  let allItemAndTotalPrice = () => {
    if (product.length > 0) {
      let item = product
        .map((x) => x.order)
        .reduce((fristPrd, NextPrd) => fristPrd + NextPrd);
      setTotalItem(item);
      let price = product
        .map((x) => x.price * x.order)
        .reduce((fristPrd, NextPrd) => fristPrd + NextPrd);
      setTotalPrice(price);
    } else {
      setTotalPrice(0);
      setTotalItem(0);
    }
  };
  useEffect(() => {
    setProduct(allProduct);
    allItemAndTotalPrice();
  }, [handleDelete, product]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {product.length >= 1 && (
        <View style={{ marginVertical: 20 }}>
          <View style={{ flexDirection: "row", fontWeight: 500 }}>
            <Text style={{ fontSize: 25, fontWeight: "400", marginRight: 5 }}>
              Subtotal
            </Text>
            <Text style={{ fontWeight: "bold" }}>EGP</Text>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {totalPrice}
            </Text>
            <Text style={{ fontWeight: "bold" }}>00</Text>
          </View>
          <Text style={{ fontSize: 16, color: "#067d62" }}>
            {" "}
            <Icon name="checkcircle" size={20} color="#067d62" /> Your order
            qualifies for FREE Shipping{" "}
          </Text>
          <Text style={{ marginLeft: 25, color: "#6c706e", fontSize: 16 }}>
            Choose this option at checkout.{" "}
            <Text style={{ color: "#067d62", fontWeight: "bold" }}>
              See details
            </Text>
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.btn,
              {
                backgroundColor: "#FBC02D",
                opacity: pressed ? 0.7 : 1,
                borderColor: pressed ? "#007600" : "white",
              },
            ]}
            onPress={() => {
              console.warn("ok");
            }}
          >
            <Text style={styles.btnText}>
              Proceed to Buy ({totalItem} Item)
            </Text>
          </Pressable>
        </View>
      )}

      <>
        {product.length >= 1 ? (
          <>
            {product.map((prd) => {
              let price;
              if (prd.price >= 1000) {
                price = prd.price.toString().split("");
                price.splice(1, 0, ",");
              } else {
                price = prd.price;
              }

              return (
                <View
                  key={prd.id}
                  style={{
                    backgroundColor: "#f7f9fa",
                    marginBottom: 8,

                    borderRadius: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      // padding: 5,
                      height: 130,
                    }}
                  >
                    <View style={{ flex: 3 }}>
                      <Image
                        source={{ uri: prd.thumbnail }}
                        style={{
                          resizeMode: "stretch",
                          width: "100%",
                          height: "100%",
                          //borderBottomLeftRadius: 5,
                          borderTopLeftRadius: 5,
                        }}
                      />
                    </View>
                    <View style={styles.content}>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontWeight: 500,
                          lineHeight: 19,
                        }}
                      >
                        {prd.description}
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",

                          marginTop: 2,
                        }}
                      >
                        <Text style={{ fontWeight: "bold" }}>EGP</Text>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                          {price}
                        </Text>
                        <Text style={{ fontWeight: "bold" }}>00</Text>
                      </View>
                      <>
                        <Text style={{ color: "#6c706e", fontWeight: 400 }}>
                          Eligible for FREE delivery
                        </Text>
                        <Text style={{ color: "#1B5E20", marginTop: 3 }}>
                          In stock
                        </Text>
                      </>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginVertical: 15,
                      alignItems: "center",
                      height: 35,
                    }}
                  >
                    <View
                      style={{
                        width: "40%",
                        backgroundColor: "white",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderWidth: 1,
                        borderColor: "#DDD",
                        borderRadius: 5,
                        height: "100%",
                        alignItems: "center",
                      }}
                    >
                      <Pressable
                        onPress={
                          prd.order > 1
                            ? () => decrement(prd.id)
                            : () => handleDelete(prd.id)
                        }
                      >
                        <View
                          style={{
                            backgroundColor: "#ebedf0",
                            paddingHorizontal: 10,
                            height: "100%",

                            justifyContent: "center",
                          }}
                        >
                          {prd.order > 1 ? (
                            <Icon name="minus" size={20} />
                          ) : (
                            <IconDelete name="delete-outline" size={20} />
                          )}
                        </View>
                      </Pressable>
                      <View>
                        <Text style={styles.input}>{prd.order}</Text>
                      </View>
                      <Pressable
                        onPress={() => {
                          increment(prd.id);
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "#ebedf0",
                            paddingHorizontal: 10,
                            height: "100%",
                            justifyContent: "center",
                          }}
                        >
                          <IconPlus name="plus" size={20} />
                        </View>
                      </Pressable>
                    </View>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderColor: "#DDD",
                        borderWidth: 1,
                        borderRadius: 10,
                        height: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <Pressable onPress={() => handleDelete(prd.id)}>
                        <Text style={{ paddingHorizontal: 10 }}>Delete</Text>
                      </Pressable>
                    </View>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderColor: "#DDD",
                        borderWidth: 1,
                        borderRadius: 10,
                        height: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <Pressable>
                        <Text style={{ paddingHorizontal: 10 }}>
                          Save for later
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            })}
          </>
        ) : (
          <View style={{ marginTop: 20 }}>
            <Image
              source={require("../assets/images/cart-empty.png")}
              style={{ width: "100%", height: 200 }}
            />
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
            >
              Your Amazon cart is empty
            </Text>
            <Text style={{ color: "#2c8695", textAlign: "center" }}>
              Shop today's deals
            </Text>
          </View>
        )}
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 10,
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
});

export default Card;
