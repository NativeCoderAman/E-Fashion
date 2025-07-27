import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import ImageCard from "../Component/ImageCard";
import Colors from "../Theme/Color";

const Logout = () => {
  return (

    <View style={styles.container}>

      {/* <StatusBar
        backgroundColor={Colors.primary}
        barStyle="light-content"
      /> */}
      <ImageCard />

      <View style={styles.card}>

        <View style={{ justifyContent: "center", height: "100%" }}>
          <View style={styles.logoutBox}>
            <Text style={styles.confirmText}>Are you sure you want to{'\n'}logout?</Text>

            <View style={styles.divider} />

            <Text style={styles.actionText}>Logout</Text>

            <View style={styles.divider} />

            <Text style={styles.actionText}>Logout From All Devices</Text>

            <View style={styles.divider} />

            <Text style={styles.actionText}>Cancel</Text>
          </View>
        </View>

      </View>
    </View>


  )
}
export default Logout
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: Colors.background,
    width: "100%",
    elevation: 5,
    height: "70%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // paddingTop: 10,
  },


  logoutBox: {

    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    //   elevation: 4,
  },
  confirmText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 20,
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  actionText: {
    textAlign: 'center',
    paddingVertical: 18,
    color: 'red',
    fontSize: 16,
    fontWeight: '500',
  }



})