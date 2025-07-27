import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import Colors from "../Theme/Color";
import BoxInput from "../Component/BoxInput";
import Button from "../Component/Button";
import Input from "../Component/Input";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";



const UserName = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      {/* <StatusBar
        backgroundColor={Colors.primary}
        barStyle="light-content"
      /> */}

      <View style={styles.textWrap}>
        <Text style={{ fontSize: wp('8.5%'), fontWeight: "500", color: Colors.text, textAlign: "center" }}>Entry Your Name</Text>
        <Text style={styles.txt}>Please enter Your full name</Text>

        <Input placeholder="User Name" />


        <Button title={"Continue"} wrapper={{ marginTop: hp('5%'), }} button={{ width: wp("90%") }} onPress={() => navigation.navigate("HomeScreen")} />
      </View>

    </View>
  )
}

export default UserName


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  textWrap: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: wp('5%'),
  },
  txt: {
    fontSize: wp('4.2%'),
    fontWeight: "500",
    textAlign: "center",
    marginTop: hp('1%'),
    color: Colors.textPrimary

  },
  txtbottom: {
    marginTop: hp('4%'),
  },
});
