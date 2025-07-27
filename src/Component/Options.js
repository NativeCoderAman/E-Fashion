import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../Theme/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Options = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <AntDesign name="right" size={wp("4%")} color="#666" />
    </TouchableOpacity>
  );
};

export default Options;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("4%"),
    backgroundColor: Colors.grey,
    borderRadius: wp("3%"),
    elevation: 1,
    shadowColor: Colors.grey,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: wp("90%"),
    marginBottom: hp("1%"),
  },
  text: {
    fontSize: wp("4%"),
    color: "#333",
  },
});
