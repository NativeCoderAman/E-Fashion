import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import LoginScreen from "../Screens/AuthicationScreen/LoginScreen"
import OtpScreen from "../Screens/AuthicationScreen/OtpScreen"
import UserName from "../Screens/UserName"
import ContactUs from "../Screens/ContactUs"
import MoreDeatils from "../Screens/MoreDeatils"
import ReferScreen from "../Screens/ReferScreen"
import Notifications from "../Screens/Notification"
import OrderScreen from "../OrderScreen"
import OrderHistory from "../Screens/OrderHistory"
import ReviewScreen from "../Screens/ReviewScreen"
import OrderConfirm from "../Screens/OrderConfirm"
import PaymentScreen from "../Screens/PaymentScreen"
import AppointmentScreen from "../Screens/AppointmentScreen"
import ServiceScreen from "../Screens/ServiceScreen"
import HomeScreen from "../Screens/HomeScreen"
import BagScreen from "../Screens/BagScreen"
import CartScreen from "../Screens/CartScreen"
import ProfileScreen from "../Screens/ProfileScreen"
import Logout from "../Screens/Logout"
import FashionHome from "../Screens/FashionHome"
import FashionService from "../Screens/FashionService"
import BuyScreen from "../Screens/BuyScreen"
import BottomNavigation from "./BottomNavigation"

const StackNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen}  />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="UserName" component={UserName} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="MoreDeatils" component={MoreDeatils} />
            <Stack.Screen name="ReferScreen" component={ReferScreen} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
            <Stack.Screen name="OrderHistory" component={OrderHistory} />
            <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
            <Stack.Screen name="OrderConfirm" component={OrderConfirm} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
            <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
            <Stack.Screen name="HomeScreen" component={BottomNavigation} />
            <Stack.Screen name="BagScreen" component={BagScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="Logout" component={Logout} />
            <Stack.Screen name="FashionHome" component={FashionHome} />
            <Stack.Screen name="FashionService" component={FashionService} />
            <Stack.Screen name="BuyScreen" component={BuyScreen} />

        </Stack.Navigator>

    )
}
export default StackNavigation