import React from 'react';
import { ImageBackground, StyleSheet, View,Image,StatusBar } from 'react-native';
import Colors from '../Theme/Color';
import CustomHeader from '../Component/CustomHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ReferScreen = () => {
  return (
    <View style={{backgroundColor:Colors.primary, flex:1}}>
       
         <View style={{ marginRight: wp("80"),  }}>
                <CustomHeader />
            </View>


       <StatusBar
              backgroundColor={Colors.primary}
              barStyle="light-content"  
            />

    <ImageBackground 
      source={require('../assets/Refer.jpg')} 
      style={styles.container}
      resizeMode="contain"
    >
    </ImageBackground>
  </View>
  );
};

export default ReferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
});
