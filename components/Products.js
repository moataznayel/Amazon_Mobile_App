import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconCorrect from "react-native-vector-icons/MaterialIcons";
import productStyle from "./productStyle";
const Products = ({ products }) => {
  // console.warn(products);
  const { navigate } = useNavigation();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date();
  return (
    <View>
      {products.map((prd) => {
        let price;
        if (prd.price >= 1000) {
          price = prd.price.toString().split("");
          price.splice(1, 0, ",");
        } else {
          price = prd.price;
        }
        return (
          <Pressable
            onPress={() => {
              navigate("details", prd);
            }}
            key={prd.id}
          >
            <View style={productStyle.container}>
              <View style={{ flex: 2 }}>
                <Image
                  source={{ uri: prd.thumbnail }}
                  style={productStyle.image}
                />
              </View>
              <View style={productStyle.content}>
                <Text
                  style={{ fontWeight: 400, color: "#3b3d3d" }}
                  numberOfLines={3}
                >
                  {prd.description}
                </Text>
                <Text>
                  <Text style={productStyle.mainColor}>
                    {prd.rating.toFixed(1)}{" "}
                  </Text>
                  <Icon name="star" size={20} color="#ffa41c" />
                  <Icon name="star" size={20} color="#ffa41c" />
                  <Icon name="star" size={20} color="#ffa41c" />
                  <Icon name="star" size={20} color="#ffa41c" />
                  <Icon name="star-half-empty" size={20} color="#ffa41c" />
                  <Text> ({prd.stock}) </Text>
                </Text>
                <View style={productStyle.wrapPrice}>
                  <Text>EGP</Text>
                  <Text style={productStyle.price}>{price}</Text>
                  <Text>00</Text>
                </View>
                <Text>
                  <IconCorrect name="done" size={20} color="#ffa41c" />

                  <Text style={{ fontWeight: "900", color: "#4da7ce" }}>
                    Prime
                  </Text>
                  <Text style={{ color: "#BDBDBD", fontWeight: "500" }}>
                    Get it as soon as
                    <Text style={{ color: "black", fontWeight: "bold" }}>
                      tomorrow, {date.getDate()} {monthNames[date.getMonth()]}
                    </Text>
                    Fulfilled by Amazon - FREE Shipping
                  </Text>
                </Text>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Products;
