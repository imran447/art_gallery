import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../../shared/components/customText';
import LinearGradient from 'react-native-linear-gradient';

const ArtistCard = ({artist}) => {
  return (
    <View style={[styles.card]}>
      <Image source={artist.image} style={[styles.image]} />
      <View style={[styles.bottomContainer]}>
        <LinearGradient
          colors={[
            'rgba(0, 0, 0,0.5)',
            'rgba(0, 0,0,0.6)',
            'rgba(0, 0, 0,0.6)',
          ]}
          style={styles.linearGradient}>
          <CustomText style={[styles.text]}>{artist.name}</CustomText>
          <CustomText style={[styles.textItem]}>{artist.item} items</CustomText>
        </LinearGradient>
      </View>
    </View>
  );
};
export default ArtistCard;

const styles = StyleSheet.create({
  card: {
    height: 200,
    position: 'relative',
    width: '49%',
    marginBottom: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingVertical: 2,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 19,
  },
  textItem: {
    marginTop: -3,
    fontSize: 14,
    color: '#FCFCFC',
  },
});
