import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import Colors from "../Theme/Color";
import ImageCard from "../Component/ImageCard";
import Button from "../Component/Button";
import Options from "../Component/Options";
import Noticard from "../Component/NotiCard";
import Icon from "react-native-vector-icons/FontAwesome"
import Reviewcard from "../Component/ReviewCard";
import HeadingCard from "../Component/HeadingCard";
import OrderConfirmCard from "../Component/OrderConfirmCard";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../Component/CustomHeader";
import { Value } from "react-native/types_generated/Libraries/Animated/AnimatedExports";



const BuyScreen = () => {
    const navigation = useNavigation()

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const colors = ['#000', '#fff', '#888', '#b30000', '#00bfff'];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    return (
        <View style={styles.container}>
            {/* <ImageCard /> */}


            {/* <StatusBar
                backgroundColor={Colors.orange}
                barStyle="light-content"
            /> */}

            <View style={{
                width: "100%",
                height: hp("20"),
                backgroundColor: Colors.orange,
            }}>

                <CustomHeader />
                <Text style={{ color: Colors.background, fontSize: wp("7"), position: "absolute", left: wp("17"), bottom: hp("13") }}>Back</Text>

            </View>
            <ScrollView>


                <View style={styles.card}>

                    <View style={styles.buyCard}>

                        <View style={{ gap: 10, }}>
                            <View style={styles.box}>
                                <Image source={{ uri: "https://images.meesho.com/images/products/547834461/milpg_256.webp" }} style={styles.Image} />

                            </View>
                            <View style={styles.box}>
                                <Image source={{ uri: "https://images.meesho.com/images/products/547834461/milpg_256.webp" }} style={styles.Image} />

                            </View>
                            <View style={styles.box}>
                                <Image source={{ uri: "https://images.meesho.com/images/products/547834461/milpg_256.webp" }} style={styles.Image} />

                            </View>
                        </View>


                        <View style={styles.secoundbox}>

                            <Image source={{ uri: "https://images.meesho.com/images/products/547834461/milpg_256.webp" }} style={styles.Image} />

                        </View>

                    </View>




                    <View style={styles.priceContainer}>
                        <View style={styles.mrpRow}>
                            <Text style={styles.label}>MRP</Text>
                            <Text style={styles.price}>₹499</Text>
                        </View>
                        <Text style={styles.taxText}>Inclusive of all taxes</Text>
                    </View>

                    {/* Color Selector */}
                    <Text style={styles.heading}>Select Color</Text>
                    <View style={styles.colorRow}>
                        {colors.map((color, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.colorCircle,
                                    { backgroundColor: color },
                                    selectedColor === index && styles.selectedBorder
                                ]}
                                onPress={() => setSelectedColor(index)}
                            />
                        ))}
                    </View>

                    <Text style={styles.heading}>Select Size</Text>
                    <View style={styles.sizeRow}>
                        {sizes.map((size, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.sizeCircle,
                                    selectedSize === index && styles.selectedSize
                                ]}
                                onPress={() => setSelectedSize(index)}
                            >
                                <Text style={styles.sizeText}>{size}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.buttonWrap}>
                        <Button title="Buy Now" button={{ width: 163, borderWidth: 1, borderColor: Colors.background, backgroundColor: Colors.orange, }} wrapper={{ width: "50%" }} onPress={() => navigation.navigate("OrderConfirm")} />
                        <Button title="Add to Bag" button={{ width: 163, borderWidth: 1, borderColor: Colors.buttonSecondar, backgroundColor: Colors.buttonSecondar, }} wrapper={{ width: "50%" }} onPress={() => navigation.navigate("BagScreen")} />
                    </View>

                </View>

            </ScrollView>
        </View>



    )
}
export default BuyScreen

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
        padding: wp("5")
    },

    buyCard: {
        flexDirection: "row",
        // padding: wp(5)
    },

    box: {
        // backgroundColor: "red",
        width: wp("35"),
        height: hp("15"),
        borderRadius: wp("5"),
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    secoundbox: {
        width: wp("50"),
        height: hp("47"),
        marginLeft: 20,
        borderRadius: wp("5")
    },
    Image: {

        width: "100%",
        height: "100%",
        borderRadius: wp("5")

    },


    priceContainer: {
        marginBottom: hp("2%"),
    },
    mrpRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp("2%"),
    },
    label: {
        fontSize: wp("4%"),
        color: "#333",
    },
    price: {
        fontSize: wp("5%"),
        fontWeight: "bold",
        color: "#000",
    },
    taxText: {
        color: "#555",
        fontSize: wp("3.5%"),
        marginTop: hp("0.5%"),
    },

    heading: {
        fontSize: wp("4%"),
        fontWeight: "600",
        marginVertical: hp("1%"),
    },
    colorRow: {
        flexDirection: "row",
        gap: wp("4%"),
        marginBottom: hp("2%"),
    },
    colorCircle: {
        width: wp("14%"),
        height: wp("14%"),
        borderRadius: wp("9%"),
        borderWidth: 1,
        borderColor: "#ccc",
    },
    selectedBorder: {
        borderWidth: 2,
        borderColor: "#000",
    },

    sizeRow: {
        flexDirection: "row",
        gap: wp("4%"),
    },
    sizeCircle: {
        width: wp("14%"),
        height: wp("14%"),
        borderRadius: wp("9%"),
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000",
    },
    sizeText: {
        fontSize: wp("4%"),
        color: "#000",
    },
    selectedSize: {
        backgroundColor: "#eee",
        borderColor: "#000",
    },


    buttonWrap: {
        flexDirection: "row",
        paddingVertical: 10,

    },

})