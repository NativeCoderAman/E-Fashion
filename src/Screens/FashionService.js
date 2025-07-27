import React from "react";
import { View, StyleSheet, Text, FlatList, StatusBar } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PaymentCard from "../Component/PaymentCard";
import Button from "../Component/Button";
import Colors from "../Theme/Color";
import FashionServiceCard from "../Component/FashionServiceCard";
import CustomHeader from "../Component/CustomHeader";


const FashionService = () => {





    const fashionData = [
        {
            id: 1,
            heading: "New Arrival Alert",
            paragraph: "Check out the latest trends in fashion. Fresh styles just dropped!",
            source: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOqjQKuIsi_LyvRMXYDVj7Ti9pFDhZZ2rMw&s" },
        },
        {
            id: 2,
            heading: "Exclusive Sale Inside",
            paragraph: "Grab the hottest outfits at discounted prices. Limited time only!",
            source: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRUWDVAyzOH1jZ1tb3cg2HmJfadXiBPjn1YGisNODzGCqpoxKEZSpi_YhtzMpMD8dXsI&usqp=CAU" },
        },
        {
            id: 3,
            heading: "Try a Bold Look",
            paragraph: "Explore bold new designs to elevate your wardrobe. Dare to be different!",
            source: { uri: "https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image004.jpg?v=20210616T144221" },
        },
        {
            id: 4,
            heading: "Your Style, Reimagined",
            paragraph: "Revisit your favorites with a twist. Shop your go-to looks, redefined.",
            source: { uri: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2" },
        },
        {
            id: 5,
            heading: "Flash Deal: Today Only",
            paragraph: "Big savings on your fashion picks. Spend ₹500 or more and get 20% off!",
            source: { uri: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
        },
        {
            id: 6,
            heading: "Top Rated Collection",
            paragraph: "Loved by thousands! Discover our most popular styles rated 4.8+.",
            source: { uri: "https://i.pinimg.com/474x/ec/4f/44/ec4f44f3484d7cd8e6754be32ec9d989.jpg" },
        },
        {
            id: 7,
            heading: "New Arrival Alert",
            paragraph: "Check out the latest trends in fashion. Fresh styles just dropped!",
            source: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8a2s93EJ5sRWo-csHhzUXSt4d194czTtfDA&s" },
        },
        {
            id: 8,
            heading: "Exclusive Sale Inside",
            paragraph: "Grab the hottest outfits at discounted prices. Limited time only!",
            source: { uri: "https://i.pinimg.com/474x/56/5d/18/565d1841748d24275f5707d6c7043079.jpg" },
        },
        {
            id: 9,
            heading: "Try a Bold Look",
            paragraph: "Explore bold new designs to elevate your wardrobe. Dare to be different!",
            source: { uri: "https://i.pinimg.com/564x/99/f4/ba/99f4bad033142e4efeb2a388f4502990.jpg" },
        },

        {
            id: 10,
            heading: "Try a Bold Look",
            paragraph: "Explore bold new designs to elevate your wardrobe. Dare to be different!",
            source: { uri: "https://cdn.shopify.com/s/files/1/0162/2116/files/5_COOL_WINTER_OUTFITS_FOR_MEN_6.jpg?v=1540728981" },
        },
    ];



    return (

        <View style={{ flex: 1, backgroundColor: Colors.background }}>

            {/* <StatusBar
                backgroundColor={Colors.orange}
                barStyle="light-content"
            /> */}

            <CustomHeader show={true} labelText={"Service Near You"} />



            <View style={styles.container} >
                <View style={styles.buttonWrap}>

                    <Button title="Sort By Date" button={{ width: 163, borderWidth: 1, borderColor: Colors.background, backgroundColor: Colors.orange, }} wrapper={{ width: "50%" }} />
                    <Button title="Fashion" button={{ width: 163, borderWidth: 1, borderColor: Colors.background, backgroundColor: Colors.orange, }} wrapper={{ width: "50%" }} />
                </View>

                <View style={{ alignItems: "center" }}>

                    <FlatList
                        data={fashionData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (

                            <View style={{ marginBottom: 10 }}>
                                <FashionServiceCard
                                    heading={item.heading}
                                    paragraph={item.paragraph}
                                    source={item.source}

                                />
                            </View>
                        )}

                        contentContainerStyle={{ paddingBottom: hp("16%") }}
                    />

                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },

    buttonWrap: {
        flexDirection: "row",
        marginTop: hp("2"),
        paddingVertical: hp("2"),

    },


});

export default FashionService;
