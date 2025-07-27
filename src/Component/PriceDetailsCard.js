import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../Theme/Color";
import Button from "./Button";

const PriceDetailsCard = ({Primebutton, show}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Price Details</Text>
            <View style={styles.divider} />

            <View style={styles.row}>
                <Text style={styles.label}>Price</Text>
                <Text style={styles.value}>1099</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Discount</Text>
                <Text style={styles.discount}>100</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Visit Charges</Text>
                <Text style={styles.included}>Already Included</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
                <Text style={styles.totalLabel}>Total Amount</Text>
                <Text style={styles.totalValue}>Rs 999</Text>
            </View>

            {/* <TouchableOpacity style={styles.savingButton}>
                <Text style={styles.buttonText}>You Will Save Rs 100 On This Booking</Text>
            </TouchableOpacity> */}


{ show && 
            <Button title={"You Will Save Rs 100 On This Booking"}
                wrapper={{
                    // backgroundColor: "#FFA500",
                    paddingVertical: hp("0.2%"),
                    borderRadius: wp("3%"),
                    marginTop: 16,
                    alignItems: "center",
                }}
                button={{
                    width: wp("87%"),
                    backgroundColor: Colors.orange,
                    height: hp("7%")
                }}
            />
            }


            {Primebutton &&


                <Button title={"You Will Save Rs 100 On This Booking"}
                    wrapper={{
                        // backgroundColor: "#FFA500",
                        paddingVertical: hp("0.2%"),
                        borderRadius: wp("3%"),
                        marginTop: 16,
                        alignItems: "center",
                    }}
                    button={{
                        width: wp("87%"),
                        backgroundColor: Colors.primary,
                        height: hp("7%")
                    }}
                />


            }

        </View>
    );
};

export default PriceDetailsCard;


const styles = StyleSheet.create({
    card: {
        width: wp("90%"),
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: wp("4%"),
        alignSelf: "center",
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        borderWidth: 2,
        borderColor: Colors.grey, 
    },
    title: {
        fontSize: wp("4.5%"),
        fontWeight: "600",
        // marginBottom: 10,
        color: "#333",
    },
    divider: {
        height: 1,
        backgroundColor: "#aaa",
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    label: {
        fontSize: wp("4%"),
        color: "#333",
    },
    value: {
        fontSize: wp("4%"),
        color: "#333",
    },
    discount: {
        fontSize: wp("4%"),
        color: "#FF8C00",
        fontWeight: "600",
    },
    included: {
        fontSize: wp("4%"),
        color: Colors.orange,
    },
    totalLabel: {
        fontSize: wp("4.2%"),
        fontWeight: "600",
        color: "#000",
    },
    totalValue: {
        fontSize: wp("4.2%"),
        fontWeight: "600",
        color: "#000",
    },


});
