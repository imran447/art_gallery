import React from 'react';
import ImageView from 'react-native-image-view';
export default function DisplayFullScreenImage({Images, HandleClose}) {
  return (
    <ImageView
      images={Images}
      imageIndex={0}
      isPinchZoomEnabled={false}
      visible={true}
      presentationStyle={true}
      animationType={'fade'}
      doubleTapToZoomEnabled={true}
      onRequestClose={HandleClose}
    />
  );
}
