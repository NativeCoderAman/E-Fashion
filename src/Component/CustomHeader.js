import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../Theme/Color";

const CustomHeader = ({ show, title, textshow, labelText }) => {
  const navigation = useNavigation();

  if (show) {
    return (
      <View style={styles.fullHeaderWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.circleButton}>
          <Ionicons name="arrow-back" size={wp("4.5%")} color="#000" />
        </TouchableOpacity>

        {textshow && (
          <Text style={styles.titleText}>{title}</Text>
        )}

        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}>{labelText}</Text>
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.onlyBack}>
      <Ionicons name="arrow-back" size={wp("5.5%")} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fullHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
    paddingHorizontal: wp("5%"),
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  circleButton: {
    width: wp("9%"),
    height: wp("9%"),
    borderRadius: wp("4.5%"),
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp("2%"),
  },
  labelWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp("5%"),
    borderWidth: 0.6,
    borderColor: Colors.border,
    width: wp("70%"),
    height: hp("5%"),
  },
  labelText: {
    fontSize: wp("4%"),
    fontWeight: "500",
    color: "#333",
  },
  onlyBack: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: wp("5%"),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: hp("2%"),
    marginLeft: wp("4%"),
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  titleText: {
    fontSize: wp("4.8%"),
    fontWeight: "600",
    marginLeft: wp("2%"),
    color: "#000",
  },
});

export default CustomHeader;
