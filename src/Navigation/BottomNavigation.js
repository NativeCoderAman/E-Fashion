import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import FashionHome from "../Screens/FashionHome";
import ServiceScreen from "../Screens/ServiceScreen";
import BagScreen from "../Screens/BagScreen";
import MoreDeatils from "../Screens/MoreDeatils";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Colors from "../Theme/Color";

const Tab = createBottomTabNavigator();

const BottomNavigation = ({showFashionTab}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: hp("8%"),
          backgroundColor: "#fff",
          elevation: 5,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: wp("3.3%"),
          fontWeight: "600",
          marginBottom: hp("0.5%"),
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let IconComponent = Ionicons;

          if (route.name === "HomeScreen") {
            return (
              <View style={focused ? styles.activeTab : styles.inactiveTab}>
                <Image
                  source={require("../assets/Logo.jpg")}
                  style={{
                    width: wp("7%"),
                    height: wp("7%"),
                    borderRadius: 8,
                  }}
                  resizeMode="cover"
                />
              </View>
            );
          }

          if (route.name === "FashionHome") {
            iconName = "shirt-outline";
          } else if (route.name === "ServiceScreen") {
            iconName = "location-outline";
          } else if (route.name === "BagScreen") {
            iconName = "cart-outline";
          } else if (route.name === "MoreDeatils") {
            IconComponent = FontAwesome;
            iconName = "user-circle";
          }

          return (
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <IconComponent name={iconName} size={wp("5.5%")} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: Colors.orange,
        tabBarInactiveTintColor: Colors.primary,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home" }} />

 


      <Tab.Screen
          name="FashionHome"
          component={FashionHome}
          options={{ title: "Fashion" }}
        />

      <Tab.Screen name="ServiceScreen" component={ServiceScreen} options={{ title: "Nearby" }} />
      <Tab.Screen name="BagScreen" component={BagScreen} options={{ title: "Cart" }} />
      <Tab.Screen name="MoreDeatils" component={MoreDeatils} options={{ title: "Profile" }} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  activeTab: {
    borderRadius: wp("2%"),
    padding: wp("2.2%"),
    alignItems: "center",
    justifyContent: "center",
    minWidth: wp("10%"),
    minHeight: wp("10%"),
  },
  inactiveTab: {
    padding: wp("2%"),
    alignItems: "center",
    justifyContent: "center",
    minWidth: wp("10%"),
    minHeight: wp("10%"),
  },
});
