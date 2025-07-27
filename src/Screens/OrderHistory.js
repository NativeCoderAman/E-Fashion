import React from "react";
import { FlatList, StyleSheet, View, StatusBar } from "react-native";
import Button from "../Component/Button";
import OrderCard from "../Component/OrderCard";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomHeader from "../Component/CustomHeader";
import Colors from "../Theme/Color";


const OrderHistory = () => {



    const data = [
        {
            id: 1,
            heading: "New Voucher Added",
            paragraph: "Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit ametador Lorem ipsum dolor",
            source: require("../assets/o-h1.jpg"),
        },
        {
            id: 2,
            heading: "Special Deal Inside",
            paragraph: "Get exclusive discounts on your favorite meals. Offer valid for a limited time only!",
            source: require("../assets/o-h1.jpg"),
        },
        {
            id: 3,
            heading: "Try Something New",
            paragraph: "Discover new dishes added just for you. Fresh, delicious, and waiting!",
            source: require("../assets/o-h1.jpg"),
        },
        {
            id: 4,
            heading: "Order Again",
            paragraph: "Your past favorite is just a tap away. Repeat your last order easily and quickly.",
            source: require("../assets/o-h1.jpg"),
        },
        {
            id: 5,
            heading: "Limited Time Offer",
            paragraph: "Don't miss out on today's deal. Tasty savings on all orders above ₹500.",
            source: require("../assets/o-h1.jpg"),
        },
        {
            id: 6,
            heading: "Top Rated Meal",
            paragraph: "This item has a 4.8+ rating! Try the best as chosen by our community.",
            source: require("../assets/o-h1.jpg"),
        },



    ];

    return (

        <View style={{ flex: 1, backgroundColor:Colors.background }}>

                  
 {/* <StatusBar
        backgroundColor={Colors.primary}
        barStyle="light-content"  
      /> */}

            <CustomHeader show={true} labelText={"My order"} />
            <View style={styles.container}>


                <View style={styles.buttonWrap}>

                    <Button title="Sort By Date" button={{ width: wp("44%"), }} wrapper={{ width: "50%" }} />
                    <Button title="Sort By Date" button={{ width:  wp("44%") }} wrapper={{ width: "50%" }} />
                </View>

                <View style={{ alignItems: "center", marginTop: hp("1") }}>


                    {/* <OrderCard heading={"New Voucher Added"}
                    paragraph={"Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit ametador Lorem ipsum dolor"}
                    source={require("../assets/o-h1.jpg")} /> */}

                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (

                            <View style={{ marginBottom: hp("2") }}>
                                <OrderCard
                                    heading={item.heading}
                                    paragraph={item.paragraph}
                                    source={item.source}
                                />
                            </View>

                        )}


                        contentContainerStyle={{paddingBottom:hp("16")}}
                    />



                </View>

            </View>
        </View>
    )
}
export default OrderHistory
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp("3")
    },
    buttonWrap: {
        flexDirection: "row",
        marginTop: hp("2"),
        paddingVertical: hp("1"),

    },

})