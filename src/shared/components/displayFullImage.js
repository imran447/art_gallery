import React from 'react';
import ImageView from  'react-native-image-viewing';

export default function DisplayFullScreenImage({Images, HandleClose}) {

  return (
    <ImageView
      images={Images}
      imageIndex={0}
      isPinchZoomEnabled={false}
      visible={true}
      animationType={'fade'}
      doubleTapToZoomEnabled={true}
      onRequestClose={HandleClose}
    />
  );
}
