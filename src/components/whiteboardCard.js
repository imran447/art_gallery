import React, {useRef, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import CustomText from '../shared/components/customText';
import FastImage from 'react-native-fast-image';
import GlobalStyles from '../shared/styles/globalStyles';
import HeartIcon from '../assets/images/heart.svg';
import DisplayFullScreenImage from '../shared/components/displayFullImage';
import BottomSheet from '../shared/components/bottomSheet';
import CommentList from './commentList';
import environment from '../shared/js/environment';

const WhiteBoardCard = ({painting, handleCommentList}) => {
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
        <CustomText style={[GlobalStyles.heading, GlobalStyles.mb1]}>
          {painting.title}
        </CustomText>
        <Pressable onPress={handleDisplayImage}>
          <FastImage
            source={
              { uri: environment.serverUrl + painting.imagePath}
            }
            style={[styles.imageStyle, GlobalStyles.mb1]}
            resizeMode={FastImage.resizeMode.cover}
          />
        </Pressable>
        <View style={[GlobalStyles.flexDirectionRow, styles.likeContainer]}>
          <View
            style={[GlobalStyles.flexDirectionRow, GlobalStyles.likeContainer]}>
            <CustomText style={[GlobalStyles.mR1]}>{painting.likeCount}</CustomText>
            <HeartIcon height={20} width={20} fill="black" />
          </View>
          {/* <Pressable onPress={handleComments}>
            <View
              style={[
                GlobalStyles.flexDirectionRow,
                GlobalStyles.likeContainer,
                {marginLeft: 10},
              ]}>
              <CustomText style={[GlobalStyles.mR1]}>2</CustomText>
              <Image
                source={require('../assets/images/comment.png')}
                style={{height: 20, width: 20}}
              />
            </View>
          </Pressable> */}
        </View>
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
export default WhiteBoardCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageStyle: {
    width: '100%',
    height: 140,
    borderRadius: 5,
  },
  likeContainer: {
    alignItems: 'center',
  },
});
