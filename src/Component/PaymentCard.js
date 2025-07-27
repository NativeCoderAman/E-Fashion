import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Colors from "../Theme/Color";

const PaymentCard = ({ image, Heading }) => {
  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.right}>
        <Text style={styles.heading}>{Heading}</Text>
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  card: {
    width: wp("85%"),
    height: hp("9%"),
    borderRadius: wp("2%"),
    borderWidth: wp("0.3%"),
    borderColor: Colors.likegrey,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("3%"),
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginVertical: hp("1%"),
  },
  image: {
    width: wp("16%"),
    height: wp("16%"),
    borderRadius: wp("4%"),
  },
  right: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: wp("4%"),
  },
  heading: {
    fontSize: wp("4.2%"),
    color: "#333",
    fontWeight: "600",
  },
});
