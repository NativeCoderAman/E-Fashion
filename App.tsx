

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, SafeAreaView } from 'react-native';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import LoginScreen from './src/Screens/AuthicationScreen/LoginScreen';
import OtpScreen from './src/Screens/AuthicationScreen/OtpScreen';
import UserName from './src/Screens/UserName';
import ContactUs from './src/Screens/ContactUs';
import MoreDeatils from './src/Screens/MoreDeatils';
import ReferScreen from './src/Screens/ReferScreen';
import Notifications from './src/Screens/Notification';
import OrderScreen from './src/OrderScreen';
import OrderHistory from './src/Screens/OrderHistory';
import ReviewScreen from './src/Screens/ReviewScreen';
import OrderConfirm from './src/Screens/OrderConfirm';
import PaymentScreen from './src/Screens/PaymentScreen';
import AppointmentScreen from './src/Screens/AppointmentScreen';
import ServiceScreen from './src/Screens/ServiceScreen';
import HomeScreen from './src/Screens/HomeScreen';
import BagScreen from './src/Screens/BagScreen';
import CartScreen from './src/Screens/CartScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import Logout from './src/Screens/Logout';
import FashionHome from './src/Screens/FashionHome';
import FashionService from './src/Screens/FashionService';
import BuyScreen from './src/Screens/BuyScreen';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import Colors from './src/Theme/Color';

const App = () => {

  const [ShowWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 1000)
  })



  return (

    //<WelcomeScreen/> 
    //<LoginScreen/>
    //<OtpScreen/>
    //<UserName/>
    //<ContactUs/>
    // <MoreDeatils/> 
    //<ReferScreen/>
    //<Notifications/>
    //<OrderScreen/>
    //<OrderHistory/>
    //<ReviewScreen/>
    //<OrderConfirm/>
    //<PaymentScreen/>
    //<AppointmentScreen/>
    //<ServiceScreen/>
    //<HomeScreen/> -> pandding icon add and alingment fix
    //<BagScreen/>
    //<CartScreen/>-> button color  is pandding
    //<ProfileScreen/>
    //<Logout/>
    //<FashionHome/>
    //<FashionService/>
    //<BuyScreen/>



    <SafeAreaView style={styles.container}>


   <StatusBar
        backgroundColor={Colors.background}
        barStyle="dark-content"
      />

      <NavigationContainer>
        {ShowWelcomeScreen ? <WelcomeScreen /> : <StackNavigation />}
      </NavigationContainer>
    </SafeAreaView>



  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
