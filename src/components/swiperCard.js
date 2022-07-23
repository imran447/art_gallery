import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const SwiperCard = ({card}) => {
  return (
    <View style={styles.card}>
      <Image source={card.image} style={styles.image}  />
    </View>
  );
};
export default SwiperCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    height:'85%',
    borderColor: '#D8D7D7',
    backgroundColor: 'white',
  },
  image: {
    height: '100%',
    width: '100%', 
  },
});
