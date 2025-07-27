import React from "react";
import { View, StyleSheet, Text,StatusBar } from "react-native";
import Colors from "../../Theme/Color";
import BoxInput from "../../Component/BoxInput";
import Button from "../../Component/Button";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";



const OtpScreen = () => {
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
             {/* <StatusBar
        backgroundColor={Colors.primary}
        barStyle="light-content"  
      /> */}

            <View style={styles.textWrap}>
                <Text style={{ fontSize: wp('4.5%'), fontWeight: "500", color: Colors.text }}>OTP Verification</Text>
                <Text style={styles.txt}>We Have Sent a Verification Code To</Text>
                <Text style={{
                    fontSize: wp('4%'),
                    fontWeight: "500",
                    color: Colors.textPrimary
                }}>+91-2536984125</Text>
                <BoxInput />
                <Text style={styles.txtbottom}>By Choosing To Login, you Agree & Accept All The Applicable Terms & Conditions Privacy Policy security Tips</Text>
                <Button title={"Start Now"} wrapper={{ marginTop: 40 }} onPress={()=>navigation.navigate("UserName")} />

            </View>
        </View>
    )
}

export default OtpScreen

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
        fontSize: wp('4%'),
        fontWeight: "500",
        marginTop: hp('1%'),
        color: Colors.textPrimary
    },
    txtbottom: {
        marginTop: hp('2%'),
        fontSize: wp('3.2%'),
        color: Colors.text,
        color: Colors.textPrimary
    },
});
