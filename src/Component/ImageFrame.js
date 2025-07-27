import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../Theme/Color";
import { useNavigation } from "@react-navigation/native";

const ImageFrame = ({ Heading, image, text, onPress }) => {

    const navigation=useNavigation()

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.imageContainer}  onPress={onPress}>

                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="cover"
                />
            </TouchableOpacity>


            <Text style={[styles.text, text]}>{Heading}</Text>
        </View>
    );
};

export default ImageFrame;


const styles = StyleSheet.create({
    wrapper: {
        width: wp("25%"),
        // alignItems: "center",
        
    },
    imageContainer: {
        width: "100%",
        height: hp("10%"),
        borderRadius:wp("5"),
        borderWidth: 3,
        borderColor: Colors.background,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    text: {
        fontSize: wp("3.5%"),
        textAlign: "center",
        marginTop: hp("0.5%")
    }
});
