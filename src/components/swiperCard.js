import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomText from '../shared/components/customText';
import environment from '../shared/js/environment';

const SwiperCard = ({card ,titleVisible = false}) => {
  return (
    <View style={styles.card}>
      {
        titleVisible &&
      <CustomText style={styles.title}>{card.title}</CustomText>
      }
       <FastImage
        source={{uri: environment.serverUrl + card.imagePath}}
        style={[styles.image]}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};
export default SwiperCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    height: '85%',
    borderColor: '#D8D7D7',
    backgroundColor: 'white',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title:{
    padding:10,
    fontSize:22,
    fontWeight:'600',
    color:'black'
  }
});
