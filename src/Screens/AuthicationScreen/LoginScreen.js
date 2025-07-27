import React from "react";
import { View, Text, StyleSheet, TextInput, Image, StatusBar } from "react-native";
import ImageCard from "../../Component/ImageCard";
import Colors from "../../Theme/Color";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from "../../Component/Button";
import CustomHeader from "../../Component/CustomHeader";
import { useNavigation } from "@react-navigation/native";



const LoginScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            {/* <StatusBar
                backgroundColor={Colors.primary}
                barStyle="light-content"
            /> */}

            <ImageCard />
            <View style={styles.card}>
                <View style={styles.logincontainer}>
                    <Text style={{ fontSize: wp('6%'), fontWeight: "600", textAlign: "center", paddingVertical: hp('1.2%') }}>
                        Service at your  DoorStep</Text>

                    <View style={styles.iconWrap}>
                        <Entypo name="home" style={styles.icon} />
                        <Entypo name="tools" style={styles.icon} />
                        <Feather name="box" style={styles.icon} />
                        <FontAwesome name="handshake-o" style={styles.icon} />
                    </View>


                    <View style={{ alignItems: "flex-start", marginTop: 30, width: "80%", alignSelf: "center", gap: 20 }}>
                        <Text style={styles.label}>Phone Number</Text>
                        <View style={styles.inputWrap}>

                            <View style={styles.countryWrap}>
                                <Text style={styles.countryCodeText}>+91</Text>
                            </View>

                            <TextInput placeholder="XXXXXXXXX" style={styles.input} keyboardType="phone-pad" />
                        </View>
                        <Button
                            title={"Continue"}
                            onPress={() => navigation.navigate("OtpScreen")}
                        />
                    </View>

                    <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "500", marginTop: hp("4") }}>Or </Text>
                    <View style={styles.iconWrap}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdP6AKFlNa3Afg4RJOp7OtR7RGRrlPE2KbLg&s" }} style={{ width: wp('10%'), height: wp('10%') }} />
                        <Fontisto name="email" style={{ fontWeight: "500", color: Colors.primary, fontSize: 40 }} />
                    </View>
                </View>
                <Text style={{ fontSize: 16, textAlign: "center", fontWeight: "500", color: Colors.text, marginTop: hp("2") }}>By Continuing, You Agree To Our {"\n"} Terms Of Service, Privacy Police.</Text>

            </View>

        </View>



    )
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: Colors.background,
        width: "100%",
        elevation: 5,
        height: hp('66%'),
        borderTopRightRadius: wp('8%'),
        borderTopLeftRadius: wp('8%'),
    },
    iconWrap: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: hp('2%'),
    },
    icon: {
        fontSize: wp('10%'),
        color: Colors.textPrimary,
    },
    inputWrap: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        height: hp('7.5%'),
        width: "100%",
        paddingHorizontal: wp('3%'),
        borderRadius: wp('2.5%'),
        borderColor: Colors.border,
    },
    input: {
        marginLeft: wp('5%'),
        width: wp('70%'),
        height: "100%",
    },
    label: {
        fontWeight: "500",
        fontSize: wp('4%'),
    },
    countryWrap: {
        height: "100%",
        justifyContent: "center",
        borderRightWidth: 1,
        borderColor: Colors.border,
        paddingHorizontal: wp('3%'),
    },
    countryCodeText: {
        fontSize: wp('4%'),
    },
});
