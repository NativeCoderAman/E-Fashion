import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import Colors from "../Theme/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";

import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Button from "../Component/Button";
import Input from "../Component/Input";
import HeadingCard from "../Component/HeadingCard";
import BannerCard from "../Component/BannerCard";
import ImageFrame from "../Component/ImageFrame";
import ImageFrameRow from "../Component/ImageFrameRow";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {


    useEffect(() => {
        StatusBar.setHidden(false)
    })

    const navigation = useNavigation()

    const localImages = [
        require('../assets/98e1697b95f99f3ec7eae0771fa256bdde6041a1.jpg'),
        require('../assets/0011670d0e53d8a63f6d6f78855d03286d6caf78.jpg'),
        require('../assets/c3677830500a7d708ab2e844698cb50ee195f32d.jpg'),
        require('../assets/db83cf1ec859f00fa63ff8fbf94fd842036c22dd.jpg'),
    ];


    return (
        <View style={styles.container}>



            {/* <StatusBar
                backgroundColor={Colors.primary}
                barStyle="light-content"
            /> */}


            <ScrollView>
                <View style={styles.headcontainer}>

                    <View style={styles.locatiowrap}>
                        <View style={styles.leftblock}>

                            <Feather name="map-pin" size={wp("14%")} color={Colors.background} />
                            <View style={styles.locationTextWrap}>
                                <Text style={styles.title}>Zentrue</Text>
                                <Text style={styles.subtext}>
                                    Service In 20 Mins {"\n"}Jhalwa - Kabir Nagar
                                </Text>
                            </View>
                        </View>


                        <View style={styles.rightBlock}>
                            <FontAwesome6 name="circle-user" color={Colors.background} size={wp("6%")} style={styles.icon} onPress={() => navigation.navigate("ProfileScreen")} />
                            <FontAwesome6 name="wallet" color={Colors.background} size={wp("6%")} style={styles.icon} />
                        </View>
                    </View>

                    <View style={styles.buttonWrap}>
                        <Button title="Service" button={{ width: wp('40%'), borderWidth: 1, borderColor: Colors.background, backgroundColor: Colors.background }} wrapper={{ width: "50%" }} buttonText={{ color: Colors.text }} onPress={() => navigation.navigate("ServiceScreen")} />
                        <Button title="Fashion" button={{ width: wp('40%'), borderWidth: 1, borderColor: Colors.background }} wrapper={{ width: "50%" }} onPress={() => navigation.navigate("FashionHome")} />
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Input placeholder="Search For “ Cleaning; Chef, etc " inputContainer={{ width: wp("90%"), borderRadius: 8 }} />
                    </View>

                    <BannerCard
                        title={"Fresh Clean Cloth"}
                        image={require("../assets/c87c9058cd873e179d4ca62166381afd8c4299c2.jpg")}
                        left={{ padding: 20 }}
                        titleStyle={{ fontSize: wp("8"), paddingTop: hp("2") }}

                    />

                    <Text style={{ fontSize: wp("5"), color: Colors.textSecondary, paddingHorizontal: wp("5"), paddingVertical: hp("1") }}>
                        Most Booked
                    </Text>



                    <View style={{ gap: 20, marginLeft: wp("5") }}>
                        <View style={styles.imageRow}>
                            <ImageFrame Heading={"Chef"} image={require("../assets/o-h1.jpg")} text={{ color: Colors.textSecondary, fontWeight: "600" }} onPress={() => navigation.navigate("ServiceScreen")} />
                            <ImageFrame Heading={"Cloths"} image={require("../assets/6b3ab1e03238d25d12223bce971a85b8fca6ffce.jpg")} text={{ color: Colors.textSecondary, fontWeight: "600" }} onPress={() => navigation.navigate("ServiceScreen")} />
                            <ImageFrame Heading={"Laundry"} image={require("../assets/0011670d0e53d8a63f6d6f78855d03286d6caf78.jpg")} text={{ color: Colors.textSecondary, fontWeight: "600" }} onPress={() => navigation.navigate("ServiceScreen")} />
                            <ImageFrame Heading={"Plumber"} image={require("../assets/d92422e0e51fb2521c6b4df63b6793f206bd9eff.jpg")} text={{ color: Colors.textSecondary, fontWeight: "600" }} onPress={() => navigation.navigate("ServiceScreen")} />
                            <ImageFrame Heading={"Electrician"} image={require("../assets/c87c9058cd873e179d4ca62166381afd8c4299c2.jpg")} text={{ color: Colors.textSecondary, fontWeight: "600" }} onPress={() => navigation.navigate("ServiceScreen")} />
                        </View>
                    </View>



                    {/* bottomCard */}

                    <View style={styles.bottomhead}>
                        <Text style={{ fontSize: wp("5%"), fontWeight: "600" }}>Recently Added</Text>

                        <BannerCard
                            image={require("../assets/0adbdc561e831d8ecf4d721c2386cd5c3006fe4e.jpg")}
                            headerCard={{ backgroundColor: "#f9f9f9" }}
                            title={"Zara Clothing's"}
                            titleStyle={{ fontSize: wp("7") }}
                            phargraph={"Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit  consectetur."}
                            show={true}
                            cardStyle={{ borderColor: "#9d6ee8", height: hp("30%"), }}

                        />


                        <Text style={{ fontSize: wp("5"), color: Colors.text, paddingHorizontal: wp("5"), paddingVertical: hp("1"), fontWeight: "500" }}>
                            Chef
                        </Text>

                        <View style={{ gap: 20 }}>
                            <View style={styles.imageRow}>
                                <ImageFrame Heading={"Chef"} image={require("../assets/o-h1.jpg")} text={{ color: Colors.text, fontWeight: "600", fontSize: wp("4%") }} onPress={() => navigation.navigate("ServiceScreen")} />
                                <ImageFrame Heading={"Cloths"} image={require("../assets/6b3ab1e03238d25d12223bce971a85b8fca6ffce.jpg")} text={{ color: Colors.text, fontWeight: "600", fontSize: wp("4%") }} onPress={() => navigation.navigate("ServiceScreen")} />
                                <ImageFrame Heading={"Laundry"} image={require("../assets/0011670d0e53d8a63f6d6f78855d03286d6caf78.jpg")} text={{ color: Colors.text, fontWeight: "600", fontSize: wp("4%") }} onPress={() => navigation.navigate("ServiceScreen")} />
                                <ImageFrame Heading={"Plumber"} image={require("../assets/d92422e0e51fb2521c6b4df63b6793f206bd9eff.jpg")} text={{ color: Colors.text, fontWeight: "600", fontSize: wp("4%") }} onPress={() => navigation.navigate("ServiceScreen")} />
                                <ImageFrame Heading={"Electrician"} image={require("../assets/c87c9058cd873e179d4ca62166381afd8c4299c2.jpg")} text={{ color: Colors.text, fontWeight: "600", fontSize: wp("4%") }} onPress={() => navigation.navigate("ServiceScreen")} />


                                <View style={styles.seemorebox}>
                                    <TouchableOpacity onPress={() => navigation.navigate("FashionService")}>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                            <Text style={{ fontSize: wp("4"), marginRight:wp("2") ,color:Colors.orange }}>See More</Text>

                                            <Feather name="arrow-right-circle" style={{ fontSize: wp("8"), color: Colors.orange }} />

                                        </View>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>


                        <Text style={{ fontSize: wp("5"), color: Colors.text, paddingHorizontal: wp("8"), paddingVertical: hp("1"), fontWeight: "500" }}>
                            Cleaner
                        </Text>

                        <View style={{ gap: 20, }}>
                            <View style={styles.imageRow}>
                                <ImageFrame Heading={"Chef"} image={require("../assets/o-h1.jpg")} text={{ color: Colors.textSecondary, fontWeight: "600" }} />
                                <ImageFrame Heading={"Cloths"} image={require("../assets/6b3ab1e03238d25d12223bce971a85b8fca6ffce.jpg")} text={{ color: Colors.text, fontWeight: "600", fontSize: wp("4%") }} onPress={() => navigation.navigate("ServiceScreen")} />
                                <ImageFrame Heading={"Laundry"} image={require("../assets/0011670d0e53d8a63f6d6f78855d03286d6caf78.jpg")} text={{ color: Colors.text, fontWeight: "600", fontSize: wp("4%") }} onPress={() => navigation.navigate("ServiceScreen")} />
                                <ImageFrame Heading={"Plumber"} image={require("../assets/d92422e0e51fb2521c6b4df63b6793f206bd9eff.jpg")} text={{ color: Colors.text, fontWeight: "600", fontSize: wp("4%") }} onPress={() => navigation.navigate("ServiceScreen")} />
                                <ImageFrame Heading={"Electrician"} image={require("../assets/c87c9058cd873e179d4ca62166381afd8c4299c2.jpg")} text={{ color: Colors.text, fontWeight: "600", fontSize: wp("4%") }} onPress={() => navigation.navigate("ServiceScreen")} />



                                <View style={styles.seemorebox}>
                                    <TouchableOpacity onPress={() => navigation.navigate("FashionService")}>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}>

                                            <Text style={{ fontSize: wp("4"), marginRight:wp("2") ,color:Colors.orange }}>See More</Text>

                                            <Feather name="arrow-right-circle" style={{ fontSize: wp("8"), color: Colors.orange }} />

                                        </View>
                                    </TouchableOpacity>
                                </View>




                            </View>
                        </View>


                        <Text style={{ fontSize: wp("5"), fontWeight: "600" }}>Sponsored</Text>

                        <BannerCard
                            image={require("../assets/e3ed8ab9c7267c898273889ba4af0856d78cd7ff.jpg")}
                            headerCard={{ backgroundColor: "#f9f9f9" }}
                            title={"Foods By Meyo"}
                            phargraph={"Lorem ipsum dolor sit ametador consectetur. Lorem ipsum dolor sit  consectetur."}
                            show={false}



                        />
                        <Button title={"Save Up To 35% On Daily Meal"} button={{ width: wp("90%"), backgroundColor: Colors.button, height: 50 }} />

                        {/* 1 */}
                        <Text style={{ fontSize: wp("5"), fontWeight: "600", marginTop: hp("2") }}>Laundry  </Text>
                        <ImageFrameRow images={localImages} />
                        <Button title={"See More "} button={{ width: wp("31%"), height: hp("5"), marginBottom: hp("2") }} wrapper={{ alignItems: "" }} showIcon={true} iconName="arrowright" onPress={() => navigation.navigate("ServiceScreen")} />

                        {/* 2 */}
                        <Text style={{ fontSize: wp("5"), fontWeight: "600", marginTop: hp("2") }}>Plumber</Text>
                        <ImageFrameRow images={localImages} />
                        <Button title={"See More "} button={{ width: wp("31%"), height: hp("5"), marginBottom: hp("2") }} wrapper={{ alignItems: "" }} showIcon={true} iconName="arrowright" onPress={() => navigation.navigate("ServiceScreen")} />

                        {/* 3 */}

                        <Text style={{ fontSize: wp("5"), fontWeight: "600", marginTop: hp("2") }}>Electrician  </Text>
                        <ImageFrameRow images={localImages} />
                        <Button title={"See More "} button={{ width: wp("31%"), height: hp("5"), marginBottom: hp("2") }} wrapper={{ alignItems: "" }} showIcon={true} iconName="arrowright" onPress={() => navigation.navigate("ServiceScreen")} />


                    </View>



                </View>
            </ScrollView>
        </View>

    )
}
export default HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headcontainer: {
        // height: hp("500%"),
        backgroundColor: Colors.primary,
        gap: hp("2")

    },

    locatiowrap: {
        flexDirection: "row",
        padding: wp("5%"),
        alignItems: "center",

    },
    locationTextWrap: {
        marginLeft: wp("3%"),
        flexDirection: "column",
        justifyContent: "space-between"
    },
    title: {
        fontSize: wp("6%"),
        color: Colors.background,
        fontWeight: "600",
    },
    subtext: {
        fontSize: wp("3.8%"),
        color: "#fff",
        marginTop: hp("0.5%"),
    },

    rightBlock: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp("5%"),

    },
    leftblock: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,

        // backgroundColor:"Red",
    },
    buttonWrap: {
        flexDirection: "row",
    },

    imageRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: hp("2%"),
        columnGap: wp("5%"),

    },



    bottomhead: {
        // height: hp("300%"),
        backgroundColor: Colors.background,
        padding: wp("5%"),
    },
    seemorebox: {
        width: wp("25"),
        height: hp("12%"),
        borderRadius: wp("5"),
        borderRadius: wp("5"),
        borderWidth: 3,
        borderColor: Colors.background,
        justifyContent: "center",
        alignItems: "center"
    }




})