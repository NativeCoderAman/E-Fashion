import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/Logo.jpg')} 
      style={styles.container}
      resizeMode="cover"
    >
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
});
