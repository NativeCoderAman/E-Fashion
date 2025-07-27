import React, { useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Colors from '../Theme/Color';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BoxInput = () => {
    const inputRefs = Array.from({ length: 6 }, () => useRef(null));
    const values = Array(6).fill('');

    const handleChange = (text, index) => {
        if (text.length === 1 && index < 5) {
            inputRefs[index + 1].current.focus();
        }
    };

    return (
        <View style={styles.container}>
            {inputRefs.map((ref, index) => (
                <TextInput
                    key={index}
                    ref={ref}
                    style={styles.input}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(text) => handleChange(text, index)}
                />
            ))}
        </View>
    );
};

export default BoxInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('2%'),
        gap:wp("1")
    },
    input: {
        width: wp('13%'),         
        height: hp('7%'),       
        borderWidth: 1.5,
        borderColor: Colors.border,
        borderRadius: wp('2%'),
        textAlign: 'center',
        fontSize: wp('4.5%'),
        color: Colors.text,
        backgroundColor: '#fff',
    },
});
