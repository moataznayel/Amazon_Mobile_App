import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import Slides from "./Slides";
import SlideItem from "./SlideItem";
// import Pagination from './Pagination';

const Slider = () => {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
