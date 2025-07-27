import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from "react-native-vector-icons/AntDesign";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DropDown = () => {
    const data = [
        { label: 'How do I update my profile?', value: 'To update your profile, go to settings and tap on edit profile.' },
        { label: 'How do I delete my account?', value: 'Please contact support to delete your account.' },
    ];

    const [value, setValue] = useState(null);
    const [isFocus, setFocus] = useState(false);

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                containerStyle={styles.dropdownContainer}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.itemTextStyle}
                iconStyle={styles.iconStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="How do I update my profile?"
                value={value}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setFocus(false);
                }}
                renderRightIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? 'blue' : 'black'}
                        name={isFocus ? 'up' : 'down'}
                        size={wp('4%')}
                    />
                )}
                renderItem={item => (
                    <View style={styles.item}>
                        <Text style={styles.question}>{item.label}</Text>
                        <Text style={styles.answer}>{item.value}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default DropDown;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: wp("4%"),
    },
    dropdown: {
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: wp("2%"),
        paddingHorizontal: wp("4%"),
        height: hp("6.5%"),
        justifyContent: 'center',
    },
    dropdownContainer: {
        borderRadius: wp("2%"),
        padding: wp("3%"),
    },
    placeholderStyle: {
        fontSize: wp("4%"),
        color: '#333',
    },
    selectedTextStyle: {
        fontSize: wp("4%"),
        color: '#000',
    },
    icon: {
        marginRight: wp("2%"),
    },
    iconStyle: {
        width: wp("5%"),
        height: wp("5%"),
    },
    item: {
        paddingVertical: hp("1.5%"),
        paddingHorizontal: wp("2%"),
        borderBottomWidth: 0.5,
        borderColor: '#ccc',
    },
    question: {
        fontWeight: 'bold',
        fontSize: wp("3.8%"),
        marginBottom: hp("0.5%"),
    },
    answer: {
        fontSize: wp("3.6%"),
        color: '#555',
    },
    itemTextStyle: {
        fontSize: wp("3.6%"),
    },
});
