import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../Theme/Color";

const Reviewcard = ({ name }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
                    }}
                    style={styles.image}
                />
                <Text style={styles.name}>{name}</Text>
            </View>

            <View style={styles.starcontainer}>
                {[...Array(4)].map((_, i) => (
                    <Icon key={i} name="star" size={13} color={Colors.star} style={{ marginRight: 2 }} />
                ))}
                <Text style={styles.ratingText}>(4.7)</Text>
            </View>

            <Text style={styles.reviewText}>Great service And High Quality Work</Text>
            <Text style={styles.timeText}>2 days ago</Text>
        </View>
    );
};

export default Reviewcard;

const styles = StyleSheet.create({
    card: {
        width: 334,
        minHeight: 84,
        borderRadius: 10,
        borderColor: Colors.grey,
        borderWidth: 4,
        padding: 10,
        justifyContent: "center"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 25,
    },
    name: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: Colors.text,
    },
    starcontainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    ratingText: {
        fontSize: 10,
        color: Colors.text,
        fontWeight: "500",
        marginLeft: 5,
    },
    reviewText: {
        fontSize: 12,
        color: Colors.text,
        marginBottom: 2,
    },
    timeText: {
        fontSize: 10,
        color: Colors.text,
    },
});
