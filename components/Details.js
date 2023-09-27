import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Iconlocation from "react-native-vector-icons/EvilIcons";
import IconArrow from "react-native-vector-icons/MaterialIcons";
import SelectDropdown from "react-native-select-dropdown";
import { Pressable } from "react-native";
import { Table, Rows } from "react-native-table-component";
import { useState } from "react";
import { changeCart } from "../storeByRedux/action/changeCart";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-native";
import usePrice from "../customHook/usePrice";
import detailsStyle from "./detailsStyle";

const Details = () => {
  const { params } = useRoute();
  let [quantity, setQuantity] = useState(1);
  let dispatch = useDispatch();
  let { navigate } = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  let price = usePrice(params.price);
  let dropDown = [];
  for (var i = 1; i <= params.stock; i++) {
    dropDown.push(i);
  }
  let [tableData, setTableData] = useState([
    ["Payment", "Secure transaction"],
    ["Ships from", "Amazon.eg"],
    ["Sold by", "Amazon.eg"],
  ]);

  let addToCard = (prd) => {
    const result = cart.some((obj) => obj.id === prd.id);
    const resultStock = cart.some(
      (obj) => obj.id === prd.id && obj.stock >= quantity
    );

    if (result) {
      resultStock
        ? dispatch(
            changeCart([
              ...cart.map((ele) => {
                if (ele.id === prd.id) {
                  ele.order = ele.order + quantity;
                  ele.stock = ele.stock - quantity;
                  return ele;
                }
                return ele;
              }),
            ])
          )
        : Alert.alert("The quantity is not available");
    } else {
      if (prd.stock >= quantity) {
        dispatch(
          changeCart([
            ...cart,
            {
              ...params,
              stock: params.stock - quantity,
              order: quantity,
            },
          ])
        );
      } else {
        Alert.alert("Cancel Pressed");
      }
    }
  };
  return (
    <ScrollView
      style={detailsStyle.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={detailsStyle.footer}>
        <Text style={detailsStyle.mainColor}>
          Visit the {params.brand.toUpperCase()} Store
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Icon name="star" size={20} color="#ffa41c" />
          <Icon name="star" size={20} color="#ffa41c" />
          <Icon name="star" size={20} color="#ffa41c" />
          <Icon name="star" size={20} color="#ffa41c" />
          <Icon name="star-half-empty" size={20} color="#ffa41c" />
          <Text style={[detailsStyle.mainColor, { marginLeft: 3 }]}>
            {params.rating.toFixed(1)}
          </Text>
        </View>
      </View>
      <>
        <Text>{params.description}</Text>
        <Image
          source={{
            uri: params.images[0],
          }}
          style={detailsStyle.productImg}
        />
      </>

      <View style={detailsStyle.wrapPrice}>
        <Text style={{ fontSize: 20 }}>EGP</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>{price}</Text>
        <Text style={{ fontSize: 20 }}>00</Text>
      </View>
      <>
        <Text style={detailsStyle.mainColor}>FREE Returns</Text>
        <Text>All prices include VAT.</Text>
        <Text style={{ fontWeight: "bold" }}>
          Buy with installments and pay EGP 534.77 for 60 months with select
          banks.
        </Text>
        <Text>
          EGP 28 delivery
          <Text style={{ fontWeight: "bold" }}>Friday,30 June.</Text>
          Order within 5 hrs 9 mins
        </Text>
        <View style={detailsStyle.deliver}>
          <Iconlocation name="location" size={30} color={"black"} />
          <Text style={[detailsStyle.mainColor, { fontSize: 20 }]}>
            Deliver to Egypt
          </Text>
        </View>
        <Text style={detailsStyle.stock}>In Stock</Text>
        <SelectDropdown
          buttonStyle={detailsStyle.dropDown}
          defaultButtonText={"Qty: 1"}
          renderDropdownIcon={(isOpened) => {
            return (
              <IconArrow
                name={isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                color={"black"}
                size={30}
              />
            );
          }}
          data={dropDown}
          onSelect={(selectedItem, index) => {
            setQuantity(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return `Qty:${selectedItem}`;
          }}
        />
      </>
      <View style={{ marginTop: 20 }}>
        <Pressable
          style={({ pressed }) => [
            detailsStyle.btn,
            {
              backgroundColor: "#FBC02D",
              opacity: pressed ? 0.7 : 1,
              borderColor: pressed ? "#007600" : "white",
            },
          ]}
          onPress={() => {
            addToCard(params);
          }}
        >
          <Text style={detailsStyle.btnText}>Add to Cart</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            detailsStyle.btn,
            {
              backgroundColor: "#ffa41c",
              opacity: pressed ? 0.7 : 1,
              borderColor: pressed ? "#007600" : "white",
            },
          ]}
        >
          <Text style={detailsStyle.btnText}>Buy Now</Text>
        </Pressable>
      </View>
      <Table>
        <Rows data={tableData} />
      </Table>
      <View style={detailsStyle.shoppingCard}>
        <Text style={detailsStyle.textInShoppingCard}>
          Yes,I want FREE Shopping with Amation Prime
        </Text>
      </View>
      <View style={detailsStyle.features}>
        <View style={detailsStyle.wrapIcon}>
          <Image
            source={require("../assets/images/icon-cod._CB638858551_.png")}
            style={detailsStyle.iconImg}
          />
          <Text style={{ textAlign: "center" }}>Cash on Delivery</Text>
        </View>
        <View style={detailsStyle.wrapIcon}>
          <Image
            source={require("../assets/images/icon-returns._CB403797073_.png")}
            style={detailsStyle.iconImg}
          />
          <Text style={{ textAlign: "center" }}>15 days Returnable</Text>
        </View>
        <View style={detailsStyle.wrapIcon}>
          <Image
            source={require("../assets/images/trust_icon_free_shipping_81px._CB590597072_.png")}
            style={detailsStyle.iconImg}
          />
          <Text style={{ textAlign: "center" }}>Free Delivery</Text>
        </View>
        <View style={detailsStyle.wrapIcon}>
          <Image
            source={require("../assets/images/icon-amazon-delivered._CB403797073_.png")}
            style={detailsStyle.iconImg}
          />
          <Text style={{ textAlign: "center" }}>Delivered by Amazon</Text>
        </View>
      </View>
     
    </ScrollView>
  );
};

export default Details;
