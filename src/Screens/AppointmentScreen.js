import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import ImageCard from "../Component/ImageCard";
import Colors from "../Theme/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../Component/Button";
import PriceDetailsCard from "../Component/PriceDetailsCard";
import CustomHeader from "../Component/CustomHeader";
import { useNavigation } from "@react-navigation/native";

const AppointmentScreen = () => {
    const navigation = useNavigation()
    return (


        <View style={styles.container}>
            <ImageCard />

            <View style={{ marginBottom: wp("50"), marginRight: wp("80") }}>
                <CustomHeader />
            </View>

            <ScrollView>
                <View style={styles.card}>

                    <View style={styles.appointmentWrapper}>
                        <View style={styles.AppointmentCard}>
                            <View style={styles.left}>
                                <Image
                                    source={require("../assets/o-h1.jpg")}
                                    style={styles.Image}
                                    resizeMode="cover"
                                />
                            </View>

                            <View style={styles.right}>
                                <Text style={styles.title}>Book Your</Text>
                                <Text style={styles.title}>Appointment</Text>

                                <View style={styles.starcontainer}>
                                    <Icon name="star" size={13} color={Colors.star} />
                                    <Icon name="star" size={13} color={Colors.star} />
                                    <Icon name="star" size={13} color={Colors.star} />
                                    <Icon name="star" size={13} color={Colors.star} />
                                </View>

                                <Text style={styles.subtext}>Starts At Rs999 Per Visit</Text>
                                <Text style={styles.highlightText}>10 Offers Available</Text>
                                <Text style={styles.highlightText}>View Details</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.addAddress}>Add Address</Text>

                    <TouchableOpacity style={styles.addressButton}>
                        <Text style={styles.leftText}>Add Address</Text>
                        <Text style={styles.rightText}>CHECK</Text>
                    </TouchableOpacity>


                    <Text style={styles.booktxt}>
                        Book Now For Best Deal
                    </Text>

                    <PriceDetailsCard />

                    <Button title={"Pay Now"}
                        button={{ width: wp("87%") }}
                        onPress={() => navigation.navigate("OrderConfirm")}
                    />


                </View>
            </ScrollView>

        </View>
    );
};

export default AppointmentScreen;


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
    },
    appointmentWrapper: {
        alignItems: "center",
        marginBottom: 20,
    },
    AppointmentCard: {
        width: wp("90%"),
        height: hp("25%"),
        borderRadius: 10,
        elevation: 5,
        backgroundColor: Colors.background,
        flexDirection: "row",
        alignItems: "center",
        padding: wp("3%"),
        marginTop: hp("2%")
    },
    left: {
        width: "40%",
        height: "100%",
        paddingRight: wp("2%"),
    },
    Image: {
        width: wp("40%"),
        height: "100%",
        borderRadius: 10,
    },
    right: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: wp("12")
    },
    title: {
        fontSize: wp("4.5%"),
        fontWeight: "600",
        color: "#333",
    },
    subtext: {
        fontSize: wp("3.5%"),
        color: "#333",
        marginTop: hp("1"),
    },
    highlightText: {
        color: Colors.textyellow,
        fontSize: wp("3.5%"),
    },
    starcontainer: {
        flexDirection: "row",
        gap: 5,
        marginVertical: hp("1"),
    },
    addAddress: {
        paddingHorizontal: wp("5%"),
        fontSize: wp("4%"),
        color: "#000",
        fontWeight: "500",
    },

    addressButton: {
        width: wp("90%"),
        height: hp("6.5%"),
        borderRadius: wp("10%"),
        backgroundColor: Colors.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: wp("5%"),
        alignSelf: "center",
        marginTop: 15,
    },
    leftText: {
        color: "#fff",
        fontSize: wp("4%"),
        fontWeight: "500",
    },
    rightText: {
        color: "#fff",
        fontSize: wp("4%"),
        fontWeight: "700",
    },
    booktxt: {
        paddingHorizontal: wp("5%"),
        fontSize: wp("5%"),
        color: "#000",
        fontWeight: "600",
        paddingVertical: hp("1%")
    }



});
