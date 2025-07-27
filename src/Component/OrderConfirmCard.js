import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../Theme/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const OrderConfirmCard = ({ heading, text }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default OrderConfirmCard;

const styles = StyleSheet.create({
  card: {
    width: wp("90%"),
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: "#fff",
    paddingVertical: hp("1.8%"),
    paddingHorizontal: wp("4%"),
    marginBottom: hp("1.5%"),
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  heading: {
    fontSize: wp("4.2%"),
    fontWeight: "600",
    color: "#333",
    marginBottom: hp("0.8%"),
  },
  text: {
    fontSize: wp("3.6%"),
    color: "#666",
  },
});
