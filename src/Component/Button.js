import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Colors from "../Theme/Color";
import AntDesign from "react-native-vector-icons/AntDesign";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Button = ({ title, onPress, wrapper, button, buttonText, showIcon, iconName }) => {
    return (
        <View style={[styles.wrapper, wrapper]}>
            <TouchableOpacity style={[styles.button, button]} onPress={onPress}>
                <View style={styles.contentRow}>
                    <Text style={[styles.buttonText, buttonText]}>{title}</Text>

                    {showIcon && iconName && (
                        <AntDesign
                            name={iconName}
                            size={wp("4.5%")} // Responsive icon size (~18px on 400px width)
                            color={Colors.background}
                            style={{ marginLeft: wp("2%") }}
                        />
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        alignItems: "center",
    },
    button: {
        width: wp("80%"),        
        height: hp("6.5%"),       
        backgroundColor: Colors.primary,
        borderRadius: wp("2.5%"),
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: Colors.textSecondary,
        fontSize: wp("4.2%"),     
        fontWeight: "600",
    },
    contentRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});
