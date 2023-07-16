import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";

const Card = ({ title, image }) => {
  return (
    <View style={[styles.container, { alignSelf: "flex-start" }]}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{uri:image}} style={styles.cardImage} />
    </View>
  );
};
const Offer = ({ image, descriptionTitle, description, offer }) => {
  return (
    <View style={[styles.offContainer, { alignSelf: "flex-start" }]}>
      <Image source={{uri:image}} style={styles.offCardImage} />
      <Text style={styles.descriptionTitle}>{descriptionTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.offer}>{offer}</Text>
    </View>
  );
};
const Offer2 = ({ image, descriptionTitle, description, offer }) => {
  return (
    <View style={[styles.offContainer2, { alignSelf: "flex-start" }]}>
      <Image source={{uri:image}} style={styles.offCardImage2} />
      <Text style={styles.descriptionTitle}>{descriptionTitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.offer}>{offer}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 10,
    margin: 5,
    width: 180,
    height: 200,
  },
  title: {
    fontSize: 16,
    margin: 10,
    // fontFamily:"Times",
  },
  cardImage: {
    // width: "100%",
    height: "100%",
  },
  offContainer:{
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 10,
    margin: 5,
    marginBottom:0,
    width: 300,
    height: "auto",
    cursor: "pointer",
  },
  offContainer2:{
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 10,
    margin: 5,
    marginBottom:0,
    width: 175,
    height: "auto",
    cursor: "pointer",
  },
  descriptionTitle:{
    backgroundColor:"#C31326",
    color:"white",
    fontSize:16,
    width:'60%',
    marginTop:5,
    marginLeft:"40%",
    padding:5
  },
  description: {
    fontSize: 16,
    color:"#C31326",
    padding:2
  },
  offCardImage:{
     width:"100%",
    height: 230,
    padding: 0,
    margin: 0,
    cursor: "pointer",
  },
  offCardImage2:{
    width:"100%",
   height: 160,
   padding: 0,
   margin: 0,
   cursor: "pointer",
 },

  offer:{
    // fontFamily:"Helvetica Neue",
    fontSize:16,
    padding:2
  }
});

export  {Card,Offer,Offer2};
