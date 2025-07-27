import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Colors from "../Theme/Color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  style,
  inputContainer,
}) => {
  return (
    <View style={[styles.inputContainer, inputContainer]}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: hp("2%"),
    backgroundColor: Colors.background,
  },
  input: {
    height: hp("7%"),
    borderWidth: 0.5,
    borderColor: Colors.border,
    borderRadius: wp("2%"),
    paddingHorizontal: wp("3%"),
    paddingVertical: hp("1%"),
    fontSize: wp("4%"),
    color: Colors.textSecondary,
  },
});
