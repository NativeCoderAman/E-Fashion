import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Colors from "../Theme/Color";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FashionServiceCard = ({ heading, paragraph, source, time, distance }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.leftcontainer}>
                    <Image source={source} style={styles.image} />
                </View>

                <View style={styles.rightcontainer}>
                    <Text style={styles.heading}>{heading}</Text>

                    <View style={styles.starcontainer}>
                        <Icon name="star" size={wp("3.3%")} color={Colors.star} />
                        <Icon name="star" size={wp("3.3%")} color={Colors.star} />
                        <Icon name="star" size={wp("3.3%")} color={Colors.star} />
                        <Icon name="star" size={wp("3.3%")} color={Colors.star} />
                        {/* <Text style={styles.ratingText}>(4.7)</Text> */}
                    </View>

                    <Text
                        style={styles.paragraph}
                        numberOfLines={2}
                    >
                        {paragraph}
                    </Text>

                    <View style={styles.deliveryRow}>
                        <Text style={styles.deliveryText}>
                            Delivered By Friday {distance}
                        </Text>

                        <Button
                            title="Add"
                            button={styles.addButton}
                            buttonText={styles.addButtonText}
                            onPress={() => navigation.navigate("BuyScreen")}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default FashionServiceCard;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    card: {
        width: wp("90%"),
        height: hp("14%"),
        borderWidth: 0.5,
        borderColor: Colors.background,
        borderRadius: wp("2.5%"),
        flexDirection: "row",
        paddingHorizontal: wp("3%"),
        alignItems: "center",
    },
    leftcontainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    rightcontainer: {
        flex: 1,
        justifyContent: "center",
        marginLeft: wp("4%"),
    },
    image: {
        width: wp("20%"),
        height: hp("10%"),
        resizeMode: "cover",
        borderRadius: wp("2%"),
    },
    heading: {
        fontSize: wp("3.8%"),
        fontWeight: "600",
    },
    starcontainer: {
        flexDirection: "row",
        gap: wp("1%"),
        marginVertical: hp("0.5%"),
    },
    paragraph: {
        fontSize: wp("3.4%"),
        color: "#555",
        marginVertical: hp("0.4%"),
    },
    deliveryRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: hp("0.5%"),
    },
    deliveryText: {
        fontSize: wp("3.6%"),
        fontWeight: "400",
        width: wp("48%"),
    },
    addButton: {
        width: wp("18%"),
        height: hp("4%"),
        backgroundColor: Colors.orange,
        borderRadius: wp("1.5%"),
        justifyContent: "center",
        alignItems: "center",
        marginRight: wp("3%"),
    },
    addButtonText: {
        fontSize: wp("3.2%"),
    },
});
