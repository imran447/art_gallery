import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import CustomText from '../shared/components/customText';
import FastImage from 'react-native-fast-image';
import GlobalStyles from '../shared/styles/globalStyles';
import Headphone from '../assets/images/headphones.svg';
import DisplayFullScreenImage from '../shared/components/displayFullImage';
import BottomSheet from '../shared/components/bottomSheet';
import CommentList from './commentList';

const FavoritePaintingCard = ({painting, handleCommentList}) => {
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
      <View style={[GlobalStyles.bgWhite, styles.container]}>
        <CustomText style={[ GlobalStyles.mb1]}>
          {painting.name}
        </CustomText>
        <Pressable onPress={handleDisplayImage}>
          <FastImage
            source={{
              uri: painting.image,
            }}
            style={[styles.imageStyle, GlobalStyles.mb1]}
            resizeMode={FastImage.resizeMode.cover}
          />
        </Pressable>
      </View>
      {isDisplayFullImage && (
        <DisplayFullScreenImage
          Images={[
            {
              uri: painting.image,
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
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width:'49%'
  },
  imageStyle: {
    width: '100%',
    height: 130,
    borderRadius: 5,
  },
  likeContainer: {
    alignItems: 'center',
  },
});
