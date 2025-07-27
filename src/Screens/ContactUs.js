import React from "react";
import { View, Text, StyleSheet, TextInput, Image, StatusBar, ScrollView } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import ImageCard from "../Component/ImageCard";
import Colors from "../Theme/Color";
import Button from "../Component/Button";
import DropDown from "../Component/DropDown";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomHeader from "../Component/CustomHeader";


const ContactUs = () => {
    return (
        <View style={styles.container}>
            {/* <StatusBar
                backgroundColor={Colors.primary}
                barStyle="light-content"
            /> */}

            <ImageCard />

<ScrollView>
            <View style={{ marginBottom: wp("50"), marginRight: wp("80") }}>
                <CustomHeader />
            </View>

            <View style={styles.card}>
                <View style={{ margin: 5, paddingHorizontal: wp("2"), paddingVertical: hp("2") }}>
                    <Text style={{ fontSize: 16, fontWeight: "600", }}>Contact us</Text>

                    <View style={styles.ContackCard}>
                        {/* section card */}

                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Fontisto name="email" style={{ fontWeight: "500", color: Colors.black, fontSize: 40 }} />
                            <Text style={{ fontSize: 12, fontWeight: "600" }}>info@zenture.gmail.com</Text>
                        </View>

                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Fontisto name="phone" style={{ fontWeight: "500", color: Colors.black, fontSize: 40 }} />
                            <Text style={{ fontSize: 12, fontWeight: "600", }}>info@zenture.gmail.com</Text>
                        </View>
                    </View>
                    <Text style={{ paddingVertical: hp("3"), fontSize: 16, fontWeight: "700", color: Colors.text }}>Frequently Asked Questions</Text>

                    <View style={{ gap: 10, }}>
                        <Text style={{ fontSize: 14, fontWeight: "500" }}>How do I change my password?</Text>
                        <Text style={{ fontSize: 12, fontWeight: "400", color: Colors.blue }}>To change your password, go to your profile settings and select 'Change Password'. Follow the on-screen instructions to create a new password.
                            Ensure your new password meets the security requirements.</Text>
                    </View>

                    <DropDown />
                    <DropDown />

                </View>
            </View>
</ScrollView>

        </View>
    )
}
export default ContactUs

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    card: {
        backgroundColor: Colors.background,
        width: "100%",
        elevation: 5,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        // marginBottom:20,
    },

    ContackCard: {
        backgroundColor: Colors.background,
        elevation: 1,
        width: wp("89.3"),
        height: hp("21"),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    }


})