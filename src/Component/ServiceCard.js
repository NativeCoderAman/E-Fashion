import React from "react";
import { StyleSheet, View, Image, Text, Touchable, TouchableOpacity } from "react-native";
import Colors from "../Theme/Color";
import Icon from "react-native-vector-icons/FontAwesome"
import Button from "./Button";


const SeviceCard = ({ heading, paragraph, source, time, distance, onPress }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.leftcontainer}>
                    <Image source={source} style={styles.image} />
                </View>

                <View style={styles.rightcontainer}>
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>{heading}</Text>
                      <View style={styles.starcontainer}>
                        <Icon name="star" size={13} color={Colors.star} />
                        <Icon name="star" size={13} color={Colors.star} />
                        <Icon name="star" size={13} color={Colors.star} />
                        <Icon name="star" size={13} color={Colors.star} />
                        {/* <Text style={{ fontSize: 10, color: Colors.text, fontWeight: "500" }}>(4.7)</Text> */}
                    </View>
                    <Text style={{ fontSize: 13, color: "#555", marginVertical: 2 }} numberOfLines={2}>{paragraph}</Text>
                    <Text style={{fontSize: 14, fontWeight: '400'}}>2.4Km away{distance}</Text>
                </View>
            </View>

</TouchableOpacity>

        </View>
    )
}
export default SeviceCard

const styles = StyleSheet.create({
    container: {
        alignItems:"center", 
        
    },
    card: {
        width: 335,
        height: 112,
        borderWidth: 0.5,
        borderColor:Colors.background,
        borderRadius: 10,
        // elevation:1,
        color: Colors.border,
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
        position: "relative"

    },
    leftcontainer: {
        // backgroundColor: "pink",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    
    },
    rightcontainer: {
        flex: 1,
        justifyContent: "center",
        marginLeft:20
        
    },


    image: {
        width: 76,
        height: 85,
        resizeMode: "cover",
        borderRadius: 8,
    },
    starcontainer: {
        gap: 5,
        flexDirection: "row",
    },
})

