import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ImageFrameRow = ({ images = [] }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {images.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={typeof item === 'string' ? { uri: item } : item}
              style={styles.image}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: wp('4%'),
  },
  scrollContainer: {
    paddingHorizontal: wp('2%'),
  },
  imageContainer: {
    marginRight: wp('3%'),
    borderRadius: wp('3%'),
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: wp('22%'),
    height: wp('22%'),
    resizeMode: 'cover',
  },
});

export default ImageFrameRow;
