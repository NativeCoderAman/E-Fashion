import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import Colors from "./Theme/Color";
import ImageCard from "./Component/ImageCard";
import Button from "./Component/Button";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import CustomHeader from "./Component/CustomHeader";


const OrderScreen = () => {

    const navigation = useNavigation()

    const timeSlots = [
        "9:00 AM", "9:30 AM", "10:00 AM",
        "10:30 AM", "11:00 AM", "11:30 AM",
        "9:00 PM", "9:30 PM", "10:00 PM"
    ];

    return (
        <View style={styles.container}>
            {/* <ImageCard /> */}

            <StatusBar
                backgroundColor={Colors.primary}
                barStyle="light-content"
            />


            <View style={{
                width: "100%",
                height: hp("25"),
                backgroundColor: Colors.primary
            }} >


                <View style={{ marginBottom: wp("30"), marginRight: wp("80"), }}>

                    <CustomHeader Back={true} />
                    <Text style={{ color: Colors.background, fontSize: wp("7"), position: "absolute", left: wp("17"), bottom: hp("0.5") }}>Back</Text>


                </View>
            </View>


            <View style={styles.card}>
                <View style={styles.innerWrapper}>
                    <View style={styles.notiCard}>
                        <Text style={styles.heading}>Select Time Slot</Text>
                        <View style={styles.divider}></View>
                    </View>

                    <Text style={styles.label}>Available Date</Text>
                    <View style={styles.buttonWrapper}>
                        {timeSlots.map((time, i) => (
                            <TouchableOpacity key={i} style={styles.Datebtn}>
                                <Text style={styles.DateText}>{time}</Text>
                            </TouchableOpacity>
                        ))}

                    </View>


                    <Text style={styles.label}>Available Times</Text>

                    <View style={styles.buttonWrapper}>
                        {timeSlots.map((time, i) => (
                            <TouchableOpacity key={i} style={styles.customButton}>
                                <Text style={styles.buttonText}>{time}</Text>
                            </TouchableOpacity>
                        ))}

                        <Button title={"Place Order"} button={{
                            width: "100%",
                            marginTop: hp("5")
                        }}
                            onPress={() => navigation.navigate("AppointmentScreen")}
                        />

                    </View>

                </View>
            </View>
        </View>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: Colors.background,
        width: "100%",
        elevation: 5,
        height: "80%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    innerWrapper: {
        margin: wp("5"),
        paddingHorizontal: 10,
    },
    notiCard: {
        width: wp("85%"),
        height: hp("12%"),
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        backgroundColor: Colors.background,
        borderRadius: 10,

    },
    heading: {
        fontSize: 16,
        fontWeight: "600",
    },
    divider: {
        borderBottomWidth: 1,
        width: wp("70%"),
        paddingTop: hp("2"),
    },
    label: {
        marginVertical: hp("1"),
        fontSize: 14,
        fontWeight: "500",
        marginTop: hp("2")
    },
    buttonWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: hp("2")

    },
    customButton: {
        width: "31%",
        height: 34,
        backgroundColor: "#7B2CBF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "600"
    },

    Datebtn: {
        width: wp("19"),
        height: hp("4"),
        backgroundColor: Colors.BtnDate,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: hp("0.5"),
    },
    DateText: {
        color: Colors.text,
        fontWeight: "600"
    }
});
