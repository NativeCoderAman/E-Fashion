import React from "react";
import { View, StyleSheet, Text, FlatList , StatusBar} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PaymentCard from "../Component/PaymentCard";
import Button from "../Component/Button";
import SeviceCard from "../Component/ServiceCard";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../Component/CustomHeader";
import Colors from "../Theme/Color";


const ServiceScreen = () => {
const navigation=useNavigation()

    const data = [
        {
            id: 1,
            heading: "New Voucher Added",
            paragraph: "Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit ametador Lorem ipsum dolor",
            source: require("../assets/98e1697b95f99f3ec7eae0771fa256bdde6041a1.jpg"),
        },
        {
            id: 2,
            heading: "Special Deal Inside",
            paragraph: "Get exclusive discounts on your favorite meals. Offer valid for a limited time only!",
            source: require("../assets/c528a026d9b817467d9d73dcafdbe906bb9601b7.jpg"),
        },
        {
            id: 3,
            heading: "Try Something New",
            paragraph: "Discover new dishes added just for you. Fresh, delicious, and waiting!",
            source: require("../assets/c3677830500a7d708ab2e844698cb50ee195f32d.jpg"),
        },
        {
            id: 4,
            heading: "Order Again",
            paragraph: "Your past favorite is just a tap away. Repeat your last order easily and quickly.",
            source: require("../assets/98e1697b95f99f3ec7eae0771fa256bdde6041a1.jpg"),
        },
        {
            id: 5,
            heading: "Limited Time Offer",
            paragraph: "Don't miss out on today's deal. Tasty savings on all orders above ₹500.",
            source: require("../assets/c528a026d9b817467d9d73dcafdbe906bb9601b7.jpg"),

        },
        {
            id: 6,
            heading: "Top Rated Meal",
            paragraph: "This item has a 4.8+ rating! Try the best as chosen by our community.",
            source: require("../assets/c3677830500a7d708ab2e844698cb50ee195f32d.jpg"),

        },

         {
            id: 7,
            heading: "New Voucher Added",
            paragraph: "Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit ametador Lorem ipsum dolor",
            source: require("../assets/98e1697b95f99f3ec7eae0771fa256bdde6041a1.jpg"),
        },
        {
            id: 8,
            heading: "Special Deal Inside",
            paragraph: "Get exclusive discounts on your favorite meals. Offer valid for a limited time only!",
            source: require("../assets/c528a026d9b817467d9d73dcafdbe906bb9601b7.jpg"),
        },
        {
            id: 9,
            heading: "Try Something New",
            paragraph: "Discover new dishes added just for you. Fresh, delicious, and waiting!",
            source: require("../assets/c3677830500a7d708ab2e844698cb50ee195f32d.jpg"),
        },


    ];


    return (
        <View style={{flex:1, backgroundColor:Colors.background}}>
              {/* <StatusBar
                backgroundColor={Colors.primary}
                barStyle="light-content"
            /> */}

            <CustomHeader show={true} labelText={"Service Near You"} />


        <View style={styles.container} >
            <View style={styles.buttonWrap}>
                <Button title="Sort By Date" button={{ width: 163, }} wrapper={{ width: "50%" }} />
                <Button title="Sort By Date" button={{ width: 163 }} wrapper={{ width: "50%" }} />
            </View>

            <View style={{ alignItems: "center" }}>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (

                        <View style={{ marginBottom: 10 }}>
                          
                            <SeviceCard
                                heading={item.heading}
                                paragraph={item.paragraph}
                                source={item.source}
                                onPress={()=>navigation.navigate("OrderScreen")}
                            
                            />


                        </View>

                    )}

                    contentContainerStyle={{paddingBottom:hp("12%")}}
                />

            </View>
        </View>
</View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },

    buttonWrap: {
        flexDirection: "row",
        marginTop: 20,
        paddingVertical: 10,

    },


});

export default ServiceScreen;
