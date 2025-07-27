import React, { Profiler } from "react";
import { View, Text, StyleSheet, TextInput, Image, ScrollView, StatusBar } from "react-native";
import Colors from "../Theme/Color";
import ImageCard from "../Component/ImageCard";
import Button from "../Component/Button";
import Options from "../Component/Options";
import Noticard from "../Component/NotiCard";
import Icon from "react-native-vector-icons/FontAwesome"
import Reviewcard from "../Component/ReviewCard";
import HeadingCard from "../Component/HeadingCard";
import OrderConfirmCard from "../Component/OrderConfirmCard";
import CustomHeader from "../Component/CustomHeader";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const OrderConfirm = () => {
    return (


        <View style={styles.container}>
            {/* <ImageCard /> */}
            {/* <StatusBar
                backgroundColor={Colors.primary}
                barStyle="light-content"
            /> */}

            <ScrollView>
                <View style={{
                    width: "100%",
                    height: hp("20"),
                    backgroundColor: Colors.primary
                }}>


                    <CustomHeader />

                </View>

                <View style={styles.card}>
                    <View style={{ margin: 20, paddingHorizontal: 10, }}>
                        <View style={styles.Reviewcard}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>Order Confirmation</Text>
                            <View style={{ borderBottomWidth: 1, width: 298, paddingTop: 20, }}></View>
                        </View>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../assets/Map.png")} style={styles.mapimage} />
                    </View>

                    <View style={{ paddingHorizontal: 10, paddingTop: 16 }}>
                        <Text style={styles.sectionTitle}>Order Summary</Text>
                        {[
                            "Order No #25635622",
                            "Order No #25635623",
                            "Order No #25635624",
                            "Order No #25635625",
                        ].map((order, index) => (
                            <OrderConfirmCard key={index} heading="Order Placed" text={order} />
                        ))}
                    </View>



                </View>

            </ScrollView>

        </View>



    )
}
export default OrderConfirm

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: Colors.background,
        width: "100%",
        elevation: 5,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    Reviewcard: {
        width: wp("85"),
        height: hp("12"),
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        backgroundColor: Colors.background,
        borderRadius: 10
    },
    mapimage: {
        width: wp("85"),
        height: hp("18"),
        borderRadius: 10
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: hp("4"),
        color: "#333",
    },

})