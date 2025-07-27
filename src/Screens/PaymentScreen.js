import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PaymentCard from "../Component/PaymentCard";



const PaymentScreen = () => {

    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 16, fontWeight: "600" }} >Pay through Cards</Text>
            <View style={{ gap: 20 }}>
                <PaymentCard Heading={"SBI"} image={require("../assets/1c40268f02f45d99d157162605309a0277c57a99.jpg")} />
                <PaymentCard Heading={"HDFC"} image={require("../assets/87abb7d729de8adcf7835892bd9300e9893a79ea.jpg")} />
                <PaymentCard Heading={"AXIS Bank"} image={require("../assets/a8c243847dc22ee7d7f94bc5202a21935d1e684a.png")} />
                <View style={{ flexDirection: "row" }}>
                    <Text>Pay through UPI</Text>
                    <Text>More Options</Text>
                </View>
                <PaymentCard Heading={"Paytm"} image={require("../assets/1dadfd57306a80ae9015039e7cc35cd46d0240af.png")} />
                <PaymentCard Heading={"Phone Pay"} image={require("../assets/f64067ef9df51653a092a2fd082549ab4432ddfe.png")} />
                <PaymentCard Heading={"Bharat Pay"} image={require("../assets/5db9bef838631db7c4c8fcee37f22e808251426a.png")} />
                <PaymentCard Heading={"Google Pay"} image={require("../assets/99f71a5c8df04da17dcc7bb257aefcac1d4c8326.png")} />

            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp("7%")
    },
});

export default PaymentScreen;
