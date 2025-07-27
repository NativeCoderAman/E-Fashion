import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Colors from "../Theme/Color";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "./Button";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const OrderCard = ({ heading, paragraph, source, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.leftContainer}>
          <Image source={source} style={styles.image} />
        </View>

        <View style={styles.rightContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.paragraph} numberOfLines={2}>
            {paragraph}
          </Text>

          <View style={styles.starContainer}>
            {[1, 2, 3, 4].map((_, i) => (
              <Icon key={i} name="star" size={wp("3.2%")} color={Colors.likegrey} />
            ))}
            <Text style={styles.ratingText}>(4.7)</Text>
          </View>

          <Text style={styles.rateNow}>Rate Now</Text>
        </View>

        <Button
          title="Repeat Order"
          wrapper={styles.buttonWrapper}
          button={styles.button}
          buttonText={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: hp("1.5%"),
  },
  card: {
    width: wp("90%"),
    height: hp("14%"),
    borderWidth: 0.5,
    borderRadius: wp("2.5%"),
    borderColor: Colors.border,
    flexDirection: "row",
    paddingHorizontal: wp("3%"),
    alignItems: "center",
    position: "relative",
    backgroundColor: "#fff",
    elevation: 2,
  },
  leftContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: wp("2%"),
  },
  image: {
    width: wp("20%"),
    height: hp("11%"),
    resizeMode: "cover",
    borderRadius: wp("2%"),
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    fontSize: wp("4%"),
    fontWeight: "600",
    color: "#000",
  },
  paragraph: {
    fontSize: wp("3.5%"),
    color: "#555",
    marginVertical: hp("0.5%"),
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("1.5%"),
  },
  ratingText: {
    fontSize: wp("3%"),
    color: Colors.text,
    fontWeight: "500",
    marginLeft: wp("1%"),
  },
  rateNow: {
    fontSize: wp("3.2%"),
    color: Colors.primary,
    marginTop: hp("0.3%"),
  },
  buttonWrapper: {
    position: "absolute",
    right: wp("2.5%"),
    bottom: hp("1.5%"),
    width: "auto",
    alignItems: "flex-end",
  },
  button: {
    backgroundColor: Colors.primary,
    height: hp("4%"),
    paddingHorizontal: wp("4%"),
    borderRadius: wp("2%"),
    width: "auto",
  },
  buttonText: {
    fontSize: wp("3%"),
    color: Colors.textSecondary,
    fontWeight: "600",
  },
});
