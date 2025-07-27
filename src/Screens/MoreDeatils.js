import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import Colors from "../Theme/Color";
import ImageCard from "../Component/ImageCard";
import Button from "../Component/Button";
import Options from "../Component/Options";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../Component/CustomHeader";

const MoreDetails = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor={Colors.primary} barStyle="light-content" /> */}
            <ImageCard />



            <View style={{ marginBottom: wp("50"), marginRight: wp("80") }}>
                <CustomHeader />
            </View>


                <ScrollView>

            <View style={styles.card}>


                    <View style={styles.headerRow}>
                        <Text style={styles.sectionTitle}>More Details :</Text>
                    </View>

                    <View style={styles.optionList}>

                        <Options title="Edit Profile" onPress={() => navigation.navigate("ProfileScreen")} />
                        <Options title="Notifications" onPress={() => navigation.navigate("Notifications")} />
                        <Options title="Reviews & Ratings" onPress={() => navigation.navigate("ReviewScreen")} />
                        <Options title="Help & Support" onPress={() => navigation.navigate("ContactUs")} />
                        <Options title="My Order" onPress={() => navigation.navigate("OrderHistory")} />
                        <Options title="Share Your App" onPress={() => navigation.navigate("ReferScreen")} />
                        <Options title="Logout" onPress={() => navigation.navigate("Logout")} />

                    </View>
            </View>

                </ScrollView>


        </View>
    );
};

export default MoreDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    card: {
        backgroundColor: Colors.background,
        width: "100%",
        elevation: 5,
        borderTopRightRadius: wp("7%"),
        borderTopLeftRadius: wp("7%"),
        paddingBottom: hp("2%"),
    },
    headerRow: {
        marginTop: hp("2%"),
        marginHorizontal: wp("5%"),
    },
    sectionTitle: {
        fontSize: wp("4.5%"),
        fontWeight: "600",
        color: Colors.text,
    },
    optionList: {
        marginTop: hp("2%"),
        alignItems: "center",
        gap: hp("0.6%"),
    },
});
