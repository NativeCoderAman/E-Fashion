import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";



const ImageCard = () => {
    return (
        <View style={styles.container}>
                <Image source={require("../assets/Logo.jpg")} style={styles.Image} />
        </View>
    )
}
export default ImageCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
 
    Image: {
        width: "100%",
        height:hp("46%"),
        resizeMode:"cover",
        // position:"absolute",
    }

})