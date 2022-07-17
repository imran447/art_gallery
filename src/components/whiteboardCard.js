import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import CustomText from '../shared/components/customText';
import FastImage from 'react-native-fast-image';
import GlobalStyles from '../shared/styles/globalStyles';
import Headphone from '../assets/images/headphones.svg';
import DisplayFullScreenImage from '../shared/components/displayFullImage';

const WhiteBoardCard = ({painting}) => {
  const [isDisplayFullImage, setIsDisplayFullImage] = useState(false);

  const handleDisplayImage = () => {
    setIsDisplayFullImage(true);
  };
  const closeFullImage = () => {
    setIsDisplayFullImage(false);
  };
  return (
    <>
      <View style={[GlobalStyles.bgWhite, styles.container]}>
        <CustomText style={[GlobalStyles.heading, GlobalStyles.mb1]}>
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
        <View style={[GlobalStyles.flexDirectionRow, styles.likeContainer]}>
          <View
            style={[GlobalStyles.flexDirectionRow, GlobalStyles.likeContainer]}>
            <CustomText style={[GlobalStyles.mR1]}>2</CustomText>
            <Headphone height={25} width={25} />
          </View>
          <View
            style={[
              GlobalStyles.flexDirectionRow,
              GlobalStyles.likeContainer,
              {marginLeft: 10},
            ]}>
            <CustomText style={[GlobalStyles.mR1]}>2</CustomText>
            <Headphone height={25} width={25} />
          </View>
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
    height: 180,
    borderRadius: 5,
  },
  likeContainer: {
    alignItems: 'center',
  },
});
