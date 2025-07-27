import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../Theme/Color";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

const BannerCard = ({ title, image, phargraph, show, titleStyle , cardStyle}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={[styles.card,cardStyle ]}>
                <View style={styles.left}>
                    <Text style={[styles.title, titleStyle]}>{title}</Text>
                    <Text style={styles.description}>{phargraph}</Text>

                    {show && (
                        <Button
                            title="See Now"
                            button={styles.button}
                            textStyle={styles.buttonText}
                            onPress={() => navigation.navigate("CartScreen")}
                        />
                    )}
                </View>

                <View style={styles.right}>
                    <Image
                        source={image}
                        resizeMode="cover"
                        style={styles.image}
                    />
                </View>
            </View>
        </View>
    );
};

export default BannerCard;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: hp("2%")
    },
    card: {
        width: wp("88%"),
        height: hp("25%"),
        backgroundColor: "#fff",
        borderRadius: wp("3%"),
        flexDirection: "row",
        overflow: "hidden",
        borderWidth: 2,
        borderColor: Colors.background,
    },
    left: {
        flex: 4,
        justifyContent: "space-evenly",
        padding: wp("3%"),
    },
    right: {
        flex: 6,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: wp("4.8%"),
        fontWeight: "500",
        color: Colors.text,
        // textAlign:"justify"
        textAlign: "center",


    },
    description: {
        fontSize: wp("3.4%"),
        color: "#555",
    },
    button: {
        backgroundColor: Colors.orange,
        width: wp("26%"),
        height: hp("4.5%"),
        borderRadius: wp("2%"),
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: wp("3.2%"),
        fontWeight: "bold",
    },
});
