import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Colors from "../Theme/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Noticard = ({ heading, paragraph, source, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftContainer}>
          <Image source={source} style={styles.image} />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.time}>{time}</Text>
          <Text numberOfLines={2} style={styles.paragraph}>{paragraph}</Text>
        </View>
      </View>
    </View>
  );
};

export default Noticard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: hp("1.5%"),
  },
  card: {
    width: wp("85%"),
    height: hp("12%"),
    borderWidth: 0.5,
    borderColor: Colors.border,
    borderRadius: wp("2%"),
    flexDirection: "row",
    backgroundColor: Colors.background,
    paddingHorizontal: wp("2%"),
    paddingVertical: hp("1%"),
    elevation: 2,
  },
  leftContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp("3%"),
  },
  rightContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  image: {
    width: wp("12%"),
    height: wp("12%"),
    resizeMode: "cover",
    borderRadius: wp("2%"),
  },
  heading: {
    fontSize: wp("4%"),
    fontWeight: "600",
    color: "#000",
  },
  time: {
    fontSize: wp("3%"),
    color: "#888",
  },
  paragraph: {
    fontSize: wp("3.3%"),
    color: "#555",
  },
});
