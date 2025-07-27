import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../Theme/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const HeadingCard = ({ Heading }) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardInner}>
          <View style={styles.reviewCard}>
            <Text style={styles.headingText}>{Heading}</Text>
            <View style={styles.divider} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeadingCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "red",
    width: "100%",
    height: hp("8%"),
    elevation: 5,
    borderTopRightRadius: wp("7%"),
    borderTopLeftRadius: wp("7%"),
  },
  cardInner: {
    margin: wp("5%"),
    paddingHorizontal: wp("2%"),
  },
  reviewCard: {
    width: wp("90%"),
    height: hp("12%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
    borderRadius: wp("2%"),
    elevation: 5,
  },
  headingText: {
    fontWeight: "600",
    fontSize: wp("4.2%"),
  },
  divider: {
    borderBottomWidth: 1,
    width: wp("80%"),
    paddingTop: hp("2%"),
    borderColor: "#ccc",
  },
});
