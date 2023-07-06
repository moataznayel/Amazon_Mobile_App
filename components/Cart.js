import React, { useState } from "react";
import { useEffect } from "react";
import { View, ScrollView, Text, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import IconDelete from "react-native-vector-icons/MaterialCommunityIcons";
import IconPlus from "react-native-vector-icons/Entypo";
import { changeCart } from "../storeByRedux/action/changeCart";
import usePrice from "../customHook/usePrice";
import cartStyle from "./cart.style";

const Cart = () => {
  let [product, setProduct] = useState([]);
  let allProduct = useSelector((state) => state.cart.cart);
  let [totalPrice, setTotalPrice] = useState(0);
  let [totalItem, setTotalItem] = useState(0);
  let pipetotalPrice = usePrice(totalPrice);
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
    <ScrollView
      style={cartStyle.container}
      showsVerticalScrollIndicator={false}
    >
      {product.length >= 1 && (
        <View style={cartStyle.cardTotal}>
          <View style={{ flexDirection: "row", fontWeight: 500 }}>
            <Text style={{ fontSize: 25, fontWeight: "400", marginRight: 5 }}>
              Subtotal
            </Text>
            <Text style={{ fontWeight: "bold" }}>EGP</Text>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {pipetotalPrice}
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
              cartStyle.btn,
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
            <Text style={cartStyle.btnText}>
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
                <View key={prd.id} style={cartStyle.cardProduct}>
                  <View style={cartStyle.wrapProduct}>
                    <View style={{ flex: 3 }}>
                      <Image
                        source={{ uri: prd.thumbnail }}
                        style={cartStyle.imgProduct}
                      />
                    </View>
                    <View style={cartStyle.content}>
                      <Text numberOfLines={2} style={cartStyle.description}>
                        {prd.description}
                      </Text>

                      <View style={cartStyle.wrapPrice}>
                        <Text style={{ fontWeight: "bold" }}>EGP</Text>
                        <Text style={cartStyle.price}>{price}</Text>
                        <Text style={{ fontWeight: "bold" }}>00</Text>
                      </View>
                      <>
                        <Text style={cartStyle.freeDelivery}>
                          Eligible for FREE delivery
                        </Text>
                        <Text style={cartStyle.stock}>In stock</Text>
                      </>
                    </View>
                  </View>
                  <View style={cartStyle.wrapBtns}>
                    <View style={cartStyle.wrapBtnIncrementAndDecrement}>
                      <Pressable
                        onPress={
                          prd.order > 1
                            ? () => decrement(prd.id)
                            : () => handleDelete(prd.id)
                        }
                      >
                        <View style={cartStyle.decrementAndDelete}>
                          {prd.order > 1 ? (
                            <Icon name="minus" size={20} />
                          ) : (
                            <IconDelete name="delete-outline" size={20} />
                          )}
                        </View>
                      </Pressable>
                      <View>
                        <Text style={cartStyle.input}>{prd.order}</Text>
                      </View>
                      <Pressable
                        onPress={() => {
                          increment(prd.id);
                        }}
                      >
                        <View style={cartStyle.btnIncrement}>
                          <IconPlus name="plus" size={20} />
                        </View>
                      </Pressable>
                    </View>
                    <View style={cartStyle.btnDelete}>
                      <Pressable onPress={() => handleDelete(prd.id)}>
                        <Text style={{ paddingHorizontal: 10 }}>Delete</Text>
                      </Pressable>
                    </View>
                    <View style={cartStyle.save}>
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
          <View style={cartStyle.emptyCard}>
            <Image
              source={require("../assets/images/cart-empty.png")}
              style={cartStyle.emptyImage}
            />
            <Text style={cartStyle.emptyText}>Your Amazon cart is empty</Text>
            <Text style={cartStyle.emptyBtn}>Shop today's deals</Text>
          </View>
        )}
      </>
    </ScrollView>
  );
};

export default Cart;
