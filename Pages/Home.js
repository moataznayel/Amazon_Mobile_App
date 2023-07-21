import React from "react";
import { ScrollView, FlatList } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, Offer, Offer2 } from "../components/Card";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

function Home1() {
  const data = [
    {
      id: 1,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/GW/XCM_Manual_1587293_5684538_186x116_1X._SY116_CB602555655_.jpg",
      text: "Join Prime",
    },
    {
      id: 2,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/GW/XCM_Manual_1587293_5681839_186x116_1X._SY116_CB602257446_.jpg",
      text: "Deals",
    },
    {
      id: 3,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/81i6m64KmUL._AC_UL160_SR160,160_.jpg",
      text: "Mobiles",
    },
    {
      id: 4,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1454862_4881441_379x304_1X._SY304_CB630947473_.jpg",
      text: "Electronics",
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/71no+q7TI0L._AC_SY175_.jpg",
      text: "Supermarket",
    },
    {
      id: 6,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/SL/August/XCM_Manual_1464389_4986660_379x304_1X._SY304_CB609528233_.jpg",
      text: "Fashion",
    },
    {
      id: 7,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/ohl/BAU/XCM_Manual_ORIGIN_1396324_4393332_Egypt_EG_OHL_QC_3_Appliances_186x116_1X._SY116_CB650727264_.jpg",
      text: "Appliances",
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/51JIh+Uzq1S._AC_SY200_.jpg",
      text: "Beauty",
    },
    {
      id: 9,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Home/XCM_Manual_1571341_5581079_379x304_2X._SY304_CB589629912_.jpg",
      text: "Home",
    },
    {
      id: 10,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/ohl/BAU/XCM_Manual_ORIGIN_1396324_4393335_Egypt_EG_OHL_QC_3_Toys_186x116_1X._SY116_CB650727264_.jpg",
      text: "Toys",
    },
    {
      id: 11,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61S+YopJsmL._AC_UL160_SR160,160_.jpg",
      text: "Computers",
    },
    // Add more items as needed
  ];
  const cards = [
    {
      id: 1,
      title: "Keep shoppping for Lipstick",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Beauty_Mass_/XCM_Manual_1474863_5024994_379x304_1X._SY304_CB608898092_.jpg",
    },
    {
      id: 2,
      title: "Keep browsing",
      image: "https://m.media-amazon.com/images/I/71mAOJo4jbL._AC_SY200_.jpg",
    },
    {
      id: 3,
      title: "Up to 50% off Travel Luggage",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg",
    },
    {
      id: 4,
      title: "Up to 20% off Everyday Makeup",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Beauty_Mass_/XCM_Manual_1474863_5024994_379x304_1X._SY304_CB608898092_.jpg",
    },
    {
      id: 5,
      title: "Toys & games New arrivals",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/Gateway/XCM_Manual_1466755_4982783_379x304_1X._SY304_CB609289554_.jpg",
    },
    {
      id: 6,
      title: "Save on Jewlleries",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg",
    },
    {
      id: 7,
      title: "Headphones  p to 20% offer",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1454862_4881441_379x304_1X._SY304_CB630947473_.jpg",
    },
    {
      id: 8,
      title: "Save on Men's clothing",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/SL/August/XCM_Manual_1464389_4986660_379x304_1X._SY304_CB609528233_.jpg",
    },
  ];
  const PHOTOS = [
    {
      id: 1,
      photo: "https://m.media-amazon.com/images/I/61uRe87ZbjL._SX3000_.jpg",
    },
    {
      id: 2,
      photo: "https://m.media-amazon.com/images/I/91TfUWgk6YL._SX3000_.jpg",
    },
    {
      id: 3,
      photo: "https://m.media-amazon.com/images/I/81uF8XR1o6L._SX3000_.jpg",
    },
    {
      id: 4,
      photo: "https://m.media-amazon.com/images/I/61cp6DjP3OL._SX3000_.jpg",
    },
    {
      id: 5,
      photo: "https://m.media-amazon.com/images/I/81bAta68GAL._SX3000_.jpg",
    },
  ];
  const offCards = [
    {
      id: 1,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumables/XCM_CUTTLE_1597254_3234469_372x232_2X_en_US._SY116_CB601311757_.jpg",
      descriptionTitle: "Up to 20% off",
      description: "Prime Day deals",
      offer: "Save on Baby care",
    },
    {
      id: 2,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/PD23/XCM_Manual_1587862_5686259_379x304_1X._SY304_CB601203724_.jpg",
      descriptionTitle: "40% off",
      description: "Prime Day deals",
      offer: "Save on Applicanes",
    },
    {
      id: 3,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg",
      descriptionTitle: "Up to 32% off",
      description: "Prime Day deals",
      offer: "Save on Luggages",
    },
    {
      id: 4,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Beauty_Mass_/XCM_Manual_1474863_5024994_379x304_1X._SY304_CB608898092_.jpg",
      descriptionTitle: "Up to 50% off",
      description: "Prime Day deals",
      offer: "Save on Every day makeup",
    },
    {
      id: 5,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/Gateway/XCM_Manual_1466755_4982783_379x304_1X._SY304_CB609289554_.jpg",
      descriptionTitle: "15% off",
      description: "Prime Day deals",
      offer: "Save on Kids toys",
    },
    {
      id: 6,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/SL/DEC/GW/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg",
      descriptionTitle: "Up to 20% off",
      description: "Prime Day deals",
      offer: "Save on Jewllery",
    },
    {
      id: 7,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1454862_4881441_379x304_1X._SY304_CB630947473_.jpg",
      descriptionTitle: "Up to 30% off",
      description: "Prime Day deals",
      offer: "Save on Headphones",
    },
    {
      id: 8,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/SL/August/XCM_Manual_1464389_4986660_379x304_1X._SY304_CB609528233_.jpg",
      descriptionTitle: "19% off",
      description: "Prime Day deals",
      offer: "Save on Men's clothing",
    },
  ];
  const Offers = [
    {
      id: 1,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673986_200x200_1X._CB601945812_.jpg",
    },
    {
      id: 2,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673933_200x200_1X._CB601945739_.jpg",
    },
    {
      id: 3,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673930_200x200_1X._CB601945812_.jpg",
    },
    {
      id: 4,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673872_200x200_1X._CB601945812_.jpg",
    },
    {
      id: 5,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673925_200x200_1X._CB601945812_.jpg",
    },
    {
      id: 6,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673958_200x200_1X._CB601945812_.jpg",
    },
    {
      id: 7,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673885_200x200_1X._CB601944438_.jpg",
    },
    {
      id: 8,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Kiosk/XCM_Manual_1587813_5673880_200x200_1X._CB601945739_.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const width=10;
  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / width);
    setCurrentIndex(index);
  };
  return (
    // <ScrollView alwaysBounceVertical>
    <View style={styles.Homecontainer}>
      {/* <ScrollView alwaysBounceVertical> */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          // initialScrollIndex={0}
          initialNumToRender={data.length}
          renderItem={({ item }) => (
            <View style={{ margin: 10,justifyContent:'center',alignItems:'center' }}>
              <Image
                source={{uri: item.image}}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
              <Text style={{ alignSelf:'center' }}>{item.text}</Text>
            </View>
          )}
        />
      {/* </ScrollView> */}
      <View >
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {PHOTOS.map((photo, index) => (
            <View key={photo.id} style={styles.photoContainer}>
              <Image source={{uri:photo.photo }} style={styles.photo} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {PHOTOS.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationItem,
                index === currentIndex && styles.paginationItemActive,
              ]}
            />
          ))}
        </View>
      </View>
      <FlatList
        horizontal
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        style={[styles.container,{marginTop:-110}]}
        renderItem={({ item }) => (
          <Card title={item.title} image={item.image}></Card>
        )}
      ></FlatList>
      <Image
        source={require("../assets/backGround2.png")}
        style={{
          width: 400,
          height: 70,
          marginBottom: 5,
          justifyContent: "center",
        }}
      ></Image>
      <Image
        source={require("../assets/backGround3.jpg")}
        style={{
          width: 400,
          height: 70,
          justifyContent: "center",
        }}
      ></Image>
      <FlatList
        horizontal
        data={offCards}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        renderItem={({ item }) => (
          // <Image source={{uri:item.image}} style={styles.photo} />
          <Offer
            image={item.image}
            descriptionTitle={item.descriptionTitle}
            description={item.description}
            offer={item.offer}
          ></Offer>
        )}
      ></FlatList>
      <ScrollView
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Deals For you in Jewllery</Text>
        <View style={styles.topCards}>
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/I/41jKX4xDfJL._AC_UL600_SR600,400_.jpg"
          />
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/I/61WieRlJzVL._AC_UL600_SR600,400_.jpg"
          />
        </View>
        <View style={styles.bottomCards}>
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/I/615nFDLSn6L._AC_UL600_SR600,400_.jpghttps://m.media-amazon.com/images/I/51O1Cc+UUSL._AC_SY200_.jpg"
          />
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/I/41HzgrROSdL._AC_UL600_SR600,400_.jpg"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.seemore}>See more</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Deals For you in Men's clothing</Text>
        <View style={styles.topCards}>
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://m.media-amazon.com/images/I/51ZtQXIukfL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://m.media-amazon.com/images/I/61cKGGvHlSL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </View>
        <View style={styles.bottomCards}>
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://m.media-amazon.com/images/I/4195zwfmj8L._AC_UF226,226_FMjpg_.jpg"
          />
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://m.media-amazon.com/images/I/61vYpczCVCL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.seemore}>See more</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Get you discounts & pay with 0% installments
        </Text>
        <View style={styles.topCards}>
          <Offer2
            offer="Prime Day deal"
            descriptionTitle=""
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Partners/XCM_Manual_1589945_5685785_186x116_1X._SY116_CB602606500_.jpg"
          />
          <Offer2
            offer="Prime Day deal"
            descriptionTitle=""
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Partners/XCM_Manual_1589945_5685780_186x116_1X._SY116_CB602606500_.jpg"
          />
        </View>
        <View style={styles.bottomCards}>
          <Offer2
            offer="Prime Day deal"
            descriptionTitle=""
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Partners/XCM_Manual_1589945_5685786_186x116_1X._SY116_CB602606500_.jpg"
          />
          <Offer2
            offer="Prime Day deal"
            descriptionTitle=""
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/Partners/XCM_Manual_1589945_5685781_186x116_1X._SY116_CB602606500_.jpg"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.seemore}>See more</Text>
        </TouchableOpacity>
      </ScrollView>
      <Image
        source={{uri:"https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Musical_Instruments/XCM_Manual_1538906_5340979_1500x250_2X.jpg"}}
        style={{
          width: 500,
          height: 70,
          marginBottom: 20,
          justifyContent: "center",
        }}
      ></Image>
      <Image
        source={{uri:"https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/GW/XCM_Manual_1599299_5709973_750x130_2X.jpg"}}
        style={{
          width: 500,
          height: 70,
          marginBottom: 20,
          justifyContent: "center",
        }}
      ></Image>
      <FlatList
        horizontal
        data={Offers}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        renderItem={({ item }) => <Image style={{width:200 ,height:200}} source={{uri:item.image}}></Image>}
      ></FlatList>
      <ScrollView
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Deals For you in Women's clothing</Text>
        <View style={styles.topCards}>
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenTops_3868463_440x440_en_AE.jpg"
          />
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenEthnicWear_3868465_440x440_en_AE.jpg"
          />
        </View>
        <View style={styles.bottomCards}>
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenDresses_3868467_440x440_en_AE.jpg"
          />
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/SL/XCM_Manual_1323197_1661000_Egypt_SR_EG_CP_NT_SL_WomensClothingPage_WomenShirt_3868466_440x440_en_AE.jpg"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.seemore}>See more</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Deals For you in Electronics</Text>
        <View style={styles.topCards}>
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Stores/1452930_EG_Headphones_440x300_EN_c64f615d-d919-4edf-b777-6094c1b5ac02.jpg"
          />
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1486648_5076882_440x300_2X.jpg"
          />
        </View>
        <View style={styles.bottomCards}>
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Stores/1452930_EG_Mobiles_Accessories_440x300_EN_f3461310-1871-48db-a32f-4673b59c324c.jpg"
          />
          <Offer2
            descriptionTitle="20% off"
            description="Prime Day deal"
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/Stores/1452930_EG_Laptops_440x300_EN_199bfc26-758f-43fe-9f62-58827d1fbb07.jpg"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.seemore}>See more</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Get you discounts & pay with 0% installments
        </Text>
        <View style={styles.topCards}>
          <Offer2
            offer="Prime Day deal"
            descriptionTitle=""
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/GW/XCM_Manual_1587293_5684538_186x116_1X._SY116_CB602555655_.jpg"
          />
          <Offer2
            offer="Prime Day deal"
            descriptionTitle=""
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Prime/MC_DQC_NoBadge_372x232._SY116_CB604707365_.jpg"
          />
        </View>
        <View style={styles.bottomCards}>
          <Offer2
            offer="Prime Day deal"
            descriptionTitle=""
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/GW/XCM_Manual_1587293_5681839_186x116_1X._SY116_CB602257446_.jpg"
          />
          <Offer2
            offer="Prime Day deal"
            descriptionTitle=""
            image="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/PD23/GW/XCM_Manual_1587293_5681841_186x116_1X._SY116_CB602257446_.jpg"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.seemore}>See more</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  Homecontainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#E5E8EF",
  },
  container: {
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    marginVertical: 10,
    marginHorizontal: 0,
    width: "auto",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 10,
  },
  cardContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  topCards: {
    flex: 1,

    flexDirection: "row",
    
    marginBottom: 20,
  },
  bottomCards: {
    flex: 1,
    flexDirection: "row",
  },
  seemore: {
    marginTop: 20,
    marginBottom: 10,
    color: "#0F6B9F",
    cursor: "pointer",
  },
  photoContainer: {
    // width: 700,
    // height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {

    width: 392,
    height: 300,
    resizeMode: "cover",
  },
  pagination: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationItem: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  paginationItemActive: {
    backgroundColor: "#000",
  },
});
export default Home1;
