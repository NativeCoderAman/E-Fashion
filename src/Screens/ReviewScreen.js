import React, { Profiler } from "react";
import { View, Text, StyleSheet, TextInput, Image, ScrollView, StatusBar } from "react-native";
import Colors from "../Theme/Color";
import ImageCard from "../Component/ImageCard";
import Button from "../Component/Button";
import Options from "../Component/Options";
import Noticard from "../Component/NotiCard";
import Icon from "react-native-vector-icons/FontAwesome"
import Reviewcard from "../Component/ReviewCard";
import CustomHeader from "../Component/CustomHeader";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const ReviewScreen = () => {
    return (
        <View style={styles.container}>

            {/* <StatusBar
                backgroundColor={Colors.primary}
                barStyle="light-content"
            /> */}

            <ImageCard />

            <View style={{ marginBottom: wp("50"), marginRight: wp("80") }}>
                <CustomHeader />
            </View>

            <View style={styles.card}>

                <View style={{ margin: wp(5), paddingHorizontal: wp("1"), }}>


                    <ScrollView>
                        <View style={styles.Reviewcard}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>Reviews & Ratings</Text>
                            <View style={{ borderBottomWidth: 1, width: 298, paddingTop: 20, }}></View>
                        </View>

                        <View style={styles.ReviewWrap}>

                            <View style={styles.left}>
                                <Text style={{ fontSize: 32, fontWeight: "600", color: Colors.star }}>4.7</Text>
                                <View style={styles.starcontainer}>
                                    <Icon name="star" size={13} color={Colors.star} />
                                    <Icon name="star" size={13} color={Colors.star} />
                                    <Icon name="star" size={13} color={Colors.star} />
                                    <Icon name="star" size={13} color={Colors.star} />
                                </View>
                                <Text style={{ fontSize: 10, fontWeight: "500" }}>120 Reviews</Text>
                            </View>

                            <View style={styles.right}>
                                <View style={{ flexDirection: "row", justifyContent: "space-evenly", borderBottomWidth: 1, paddingVertical: 10 }}>
                                    <Text style={{ fontSize: 16, fontWeight: "600", }}>Daily</Text>
                                    <Text style={{ fontSize: 16, fontWeight: "600", }}>Weekly</Text>
                                    <Text style={{ fontSize: 16, fontWeight: "600", }}>Monthly</Text>
                                </View>
                            </View>


                        </View>

                        <Reviewcard name={"David Brown"}

                        />
                        <Reviewcard name={"David Brown"}

                        />
                        <Reviewcard name={"David Brown"}

                        />
                        <Reviewcard name={"David Brown"}

                        />


                    </ScrollView>
                </View>
            </View>
        </View>



    )
}
export default ReviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: Colors.background,
        width: "100%",
        elevation: 5,
        height: "65%",
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

    ReviewWrap: {
        flexDirection: "row",
        marginTop: hp("1"),
        gap: 10
    },
    left: {
        // backgroundColor: "red",
        width: wp("30"),
        height: hp("10"),
        borderRadius: 10,
        borderColor: Colors.grey,
        borderWidth: 4,
        justifyContent: "center",
        alignItems: "center",

    },

    starcontainer: {
        gap: 5,
        flexDirection: "row",

    },


    right: {
        width: wp("54"),
        height: hp("10"),
        borderRadius: 10,
        borderColor: Colors.grey,
        borderWidth: 4,
        // backgroundColor: "pink"
    }

})