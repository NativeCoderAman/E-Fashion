import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import SeviceCard from "../Component/ServiceCard";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PaymentCard from "../Component/PaymentCard";
import PriceDetailsCard from "../Component/PriceDetailsCard";
import Button from "../Component/Button";
import Colors from "../Theme/Color";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../Component/CustomHeader";

const CartScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>


                <CustomHeader Back={true} />



            {/* <StatusBar
                backgroundColor={Colors.primary}
                barStyle="light-content"
            /> */}



            <View style={{ gap: 10, marginBottom: hp("15") }}>
                <SeviceCard
                    heading={"Millers Laundry"}
                    paragraph={"Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit "}
                    source={require("../assets/d92422e0e51fb2521c6b4df63b6793f206bd9eff.jpg")}
                />
                <SeviceCard
                    heading={"Millers Laundry"}
                    paragraph={"Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit "}
                    source={require("../assets/d92422e0e51fb2521c6b4df63b6793f206bd9eff.jpg")}
                />

                <View style={{ marginTop: 20, gap: 20 }}>
                    <Text style={{ fontSize: wp(4) , paddingHorizontal:wp("5")}}>Book Now For Best Deal</Text>
                    <PriceDetailsCard Primebutton={true} />
                    <Button title={"Add TO Cart"} wrapper={{ marginTop: hp(0) }} button={{ width: wp("90%"), backgroundColor: Colors.buttonSecondar, }} onPress={() => navigation.navigate("BuyScreen")} />

                </View>
            </View>

        </View>


    )
}

export default CartScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: wp("12")
    }


})
