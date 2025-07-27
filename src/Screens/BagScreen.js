import React from "react";
import { View, Image, StyleSheet , StatusBar} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../Theme/Color";
import Button from "../Component/Button";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../Component/CustomHeader";


const BagScreen = () => {
const navigation=useNavigation()


    return (

        <View style={{flex:1, backgroundColor:Colors.background}}>
                      
 {/* <StatusBar
        backgroundColor={Colors.primary}
        barStyle="light-content"  
      /> */}
<CustomHeader/>
       
        <View style={{
            justifyContent: "center",
            alignItems: "center",
           
        }}>
            <View style={styles.card}>
                <View style={{ width: "100%", height: "50%", }}>
                    <Image src="https://media.istockphoto.com/id/1366047062/vector/heart-message-icon-and-shopping-cart-on-smartphone.jpg?s=612x612&w=0&k=20&c=ImuceLED6FP79gG3XhmVw0J6WLSet6PosnjNVidoUKg=" resizeMode="cover" style={{ width: "100%", height: "100%", borderRadius: 20 }} />
                </View>
                <View style={{ width: "100%", height: "50%", }}>
                    <Image src="https://media.istockphoto.com/id/506061738/vector/love-shopping-bag-with-heart-circle-icon.jpg?s=612x612&w=0&k=20&c=nNvcAj3ojdiPSbLue5hRhhHsp0KRfCVwr80srssy1Xc=" resizeMode="cover" style={{ width: "100%", height: "100%", borderRadius: 20 }} />
                </View>

                <Button title={"Add TO Cart"} wrapper={{marginTop:hp(1)}} button={{width:wp("90%"),backgroundColor: Colors.buttonSecondar,}} onPress={()=>navigation.navigate("CartScreen")}/>
           
            </View>
        </View>
   </View>

    )
}
export default BagScreen
const styles = StyleSheet.create({
    card: {
        height: hp("70%"),
        width: wp("90%"),
        marginTop:hp("2"),
        backgroundColor: Colors.background,
        elevation: 2,
        shadowColor: Colors.black,
        borderRadius: 30,
        marginBottom:hp("10"),
        gap:2

    }


})