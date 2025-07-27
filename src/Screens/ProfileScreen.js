import React from "react";
import { View, StyleSheet, Text, TouchableOpacity ,StatusBar} from "react-native";
import Colors from "../Theme/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../Component/CustomHeader";



const ProfileScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor:Colors.primary }}>
            

 {/* <StatusBar
                backgroundColor={Colors.primary}
                barStyle="light-content"
            /> */}

            
             <View style={{ marginRight: wp("80"),  }}>
                <CustomHeader />
            </View>
          
            <View style={styles.container}>

          
          
                <View style={styles.card}>



                    <View style={{ flexDirection: "row", alignItems: "center", padding: wp(5) }}>
                        <FontAwesome name="user-circle" size={wp(25)} color={Colors.background} />

                        <View style={{ flexDirection: "column", justifyContent: "center", width: "60%", alignItems: "flex-start", marginLeft: wp(3) }}>
                            <Text style={{ fontSize: wp(5), color: Colors.textSecondary }}>Harsh</Text>
                            <Text style={{ fontSize: wp(5), color: Colors.textSecondary }}>9635125478</Text>
                        </View>


                    </View>


                    <View style={styles.boxwrap}>

                        <TouchableOpacity onPress={() => navigation.navigate("OrderHistory")}>
                            <View style={styles.box}>
                                <SimpleLineIcons name="handbag" size={wp(8)} color={Colors.black} />
                                <Text style={styles.cardtxt}>Your Order</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("ContactUs")}>
                            <View style={styles.box}>
                                <MaterialIcons name="support-agent" size={wp(8)} color={Colors.black} />
                                <Text style={styles.cardtxt}>Setting & Support</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("")}>
                            <View style={styles.box}>
                                <Ionicons name="wallet" size={wp(8)} color={Colors.black} />
                                <Text style={styles.cardtxt}>Zentrue Cash</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ alignItems: "center" }}>
                        <View style={styles.offercard}>
                            <View style={styles.offerHeader}>
                                <Text style={styles.offerLabel}>Zentrue</Text>
                            </View>



                            <View>
                                <Text style={styles.offerText}>
                                    You Would Potentially Save Rs500 Per Month With Zentrue Daily
                                </Text>
                            </View>



                            <View style={styles.buttonWrapper}>
                                <View style={styles.getButton}>
                                    <Text style={styles.getButtonText}>Get Daily</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.zentureCard}>
                            <View style={styles.cardTop}>
                                <View style={styles.iconLabel}>
                                    <FontAwesome name="credit-card" size={wp(6)} color="#5828B0" />
                                    <Text style={styles.cardTitle}>Zenture Cash & Gift Card</Text>
                                </View>

                                <View style={styles.newBadge}>
                                    <Text style={styles.newBadgeText}>New</Text>
                                </View>
                            </View>

                            <View style={styles.divider} />

                            <View style={styles.cardBottom}>
                                <Text style={styles.balanceText}>
                                    <Text style={styles.availableText}>Available Balance </Text>
                                    Rs 0
                                </Text>

                                <TouchableOpacity style={styles.addBalanceBtn}>
                                    <Text style={styles.addBalanceText}>Add Balance</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </View>

    )
}
export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: wp("80%"),
        // elevation: 20,
        padding: wp("4"),
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: wp("0.4"),
        borderColor: Colors.background

    },
    boxwrap: {
        gap: 10,
        flexDirection: "row",
        justifyContent: "center"

    },

    box: {
        width: wp("20%"),
        height: hp("10%"),
        borderRadius: wp("4"),
        backgroundColor: Colors.background,
        alignItems: "center",
        justifyContent: "center"
    },

    cardtxt: {
        fontSize: wp("3.5"),
        color: Colors.black,
        marginTop: hp("0.5"),
        textAlign: "center"
    },

    offerText: {
        color: Colors.background,
        fontSize: wp("4"),
        lineHeight: wp("5.5"),
        flexWrap: 'wrap',
    },



    offercard: {
        width: wp("65%"),
        height: hp("20%"),
        marginTop: hp("2"),
        borderRadius: 10,
        backgroundColor: Colors.darkblue,
        padding: wp("4"),
        justifyContent: "space-between"
    },
    offerHeader: {
        backgroundColor: Colors.orange,
        paddingHorizontal: wp("3"),
        paddingVertical: wp("0.5"),
        borderRadius: wp("2"),
        alignSelf: 'flex-start'
    },
    offerLabel: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: wp("3.5"),
    },
    offerText: {
        color: 'white',
        fontSize: wp("4"),
        lineHeight: wp("6"),
    },
    buttonWrapper: {
        alignItems: 'flex-end',
    },
    getButton: {
        backgroundColor: Colors.orange,
        paddingHorizontal: wp("4"),
        paddingVertical: wp("1"),
        borderRadius: wp("2"),
    },
    getButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: wp("3.5"),
    },
    zentureCard: {
        width: wp("70%"),
        backgroundColor: "#fff",
        borderRadius: wp("3"),
        padding: wp("4"),
        marginTop: hp("2"),
        elevation: 4,
    },
    cardTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconLabel: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp("2"),
    },
    cardTitle: {
        fontSize: wp("3.8"),
        fontWeight: "bold",
        color: Colors.black,
        marginLeft: wp("2"),
    },
    newBadge: {
        backgroundColor: Colors.primary,
        borderRadius: wp("2"),
        paddingHorizontal: wp("2"),
        marginLeft: wp("2"),
        paddingVertical: wp("0.5"),
    },
    newBadgeText: {
        color: "#fff",
        fontSize: wp("3"),
    },
    divider: {
        height: 1,
        backgroundColor: "#eee",
        marginVertical: hp("1"),
    },
    cardBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    availableText: {
        color: "#B295FF",
        fontSize: wp("3.5"),
    },
    balanceText: {
        fontSize: wp("4"),
        fontWeight: "500",
    },
    addBalanceBtn: {
        borderColor: "#8B52FF",
        borderWidth: 1,
        paddingHorizontal: wp("3"),
        paddingVertical: wp("1"),
        borderRadius: wp("2"),
        marginLeft: wp("2")
    },
    addBalanceText: {
        color: "#000",
        fontWeight: "500",
    }



})