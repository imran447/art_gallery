import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import CustomText from '../shared/components/customText';
import FastImage from 'react-native-fast-image';
import GlobalStyles from '../shared/styles/globalStyles';
import DisplayFullScreenImage from '../shared/components/displayFullImage';
import LinearGradient from 'react-native-linear-gradient';

const FavoritePaintingCard = ({
  painting,
  handleCommentList,
  containerWidth,
}) => {
  const refRBSheet = useRef(null);
  const [isDisplayFullImage, setIsDisplayFullImage] = useState(false);

  const handleDisplayImage = () => {
    setIsDisplayFullImage(true);
  };
  const closeFullImage = () => {
    setIsDisplayFullImage(false);
  };
  const handleComments = () => {
    handleCommentList();
  };
  return (
    <>
      <View
        style={[
          styles.container,
          {width: containerWidth},
        ]}>
        <Pressable onPress={handleDisplayImage}>
          <FastImage
            source={{
              // uri: painting.image,
              uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg'
            }}
            style={[styles.imageStyle, GlobalStyles.mb1]}
            resizeMode={FastImage.resizeMode.cover}
          />
        </Pressable>
        <View style={[styles.bottomContainer]}>
          <LinearGradient
            colors={[
              'rgba(0, 0, 0,0.1)',
              'rgba(0, 0,0,0.5)',
              'rgba(0, 0, 0,0.6)',
            ]}
            style={styles.linearGradient}>
            <CustomText style={{color: 'white',fontSize:18}}> {painting.title}</CustomText>
          </LinearGradient>
        </View>
      </View>
      {isDisplayFullImage && (
        <DisplayFullScreenImage
          Images={[
            {
              // uri: painting.image,
              uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg'
            },
          ]}
          HandleClose={closeFullImage}
        />
      )}
    </>
  );
};
export default FavoritePaintingCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    position: 'relative',
  },
  imageStyle: {
    width: '100%',
    height: 130,
  },
  likeContainer: {
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingVertical: 5,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
