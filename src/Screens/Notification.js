import React, { Profiler } from "react";
import { View, Text, StyleSheet, TextInput, Image, ScrollView, StatusBar } from "react-native";
import Colors from "../Theme/Color";
import ImageCard from "../Component/ImageCard";
import Button from "../Component/Button";
import Options from "../Component/Options";
import Noticard from "../Component/NotiCard";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomHeader from "../Component/CustomHeader";


const Notifications = () => {
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

            <ScrollView>

            <View style={styles.card}>
                <View style={{ margin: 20, paddingHorizontal: wp("1"), }}>

                    <View style={styles.Noticard}>
                        <Text>Notification</Text>
                        <View style={{ borderBottomWidth: 1, width: 298, paddingTop: hp("1"), }}></View>
                    </View>


                        <View style={{ marginTop: hp("2"), gap: 20 }}>
                            <Noticard
                                heading={"New Voucher Added"}
                                paragraph={"Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit ametador Lorem ipsum dolor  "}
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQg0EyXgqJyPGySBOUycoFuS2sdBux8Eq9w&s" }}
                                time={"2AM"}
                            />

                            <Noticard
                                heading={"New Voucher Added"}
                                paragraph={"Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit ametador Lorem ipsum dolor  "}
                                source={{ uri: "https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj" }}
                                time={"2AM"}
                            />

                            <Noticard
                                heading={"New Voucher Added"}
                                paragraph={"Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit ametador Lorem ipsum dolor  "}
                                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQg0EyXgqJyPGySBOUycoFuS2sdBux8Eq9w&s" }}
                                time={"2AM"}
                            />

                            <Noticard
                                heading={"New Voucher Added"}
                                paragraph={"Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit Lorem ipsum dolor sit ametador Lorem ipsum dolor  "}
                                source={{ uri: "https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj" }}
                                time={"2AM"}
                            />

                        </View>
                </View>
            </View>
</ScrollView>


        </View>



    )
}
export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: Colors.background,
        width: "100%",
        elevation: 5,
        // height: "65%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    Noticard: {
        width: wp("85"),
        height: hp("12"),
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        backgroundColor: Colors.background,
        borderRadius: 10

    }

})