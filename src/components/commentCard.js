import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import GlobalStyles from '../shared/styles/globalStyles';
import CustomText from '../shared/components/customText';

const CommentCard = ({comment}) => {
  return (
    <View style={[GlobalStyles.flexDirectionRow, styles.container]}>
      <Image source={comment.image} style={styles.iconStyle} />
      <CustomText style={{marginLeft: 5}}>{comment.comment}</CustomText>
    </View>
  );
};
export default CommentCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20,
    alignItems: 'center',
    backgroundColor:'white',
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.borderColor,
  },
  iconStyle: {
    height: 35,
    width: 35,
    borderRadius: 35,
  },
});
