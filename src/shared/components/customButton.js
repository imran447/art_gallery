import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import GlobalStyles from '../styles/globalStyles';

const CustomButton = ({
  LeftIcon,
  Mode = 'contain',
  Title,
  onPress,
  style,
  labelStyle,
  contentStyle,
  IsLoading,
  OverlayColor="white",
}) => {
  return (
    <Button
      icon={LeftIcon}
      mode={Mode}
      style={[style]}
      loading={IsLoading}
      uppercase={false}
      color={OverlayColor}
      contentStyle={[
        styles.buttonContainer,
        contentStyle,
      ]}
      labelStyle={[styles.buttonText,  labelStyle]}
      onPress={onPress}>
      {Title}
    </Button>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    height: Platform.OS === 'ios' ? 40 : 45,
    borderRadius:20,
    backgroundColor:GlobalStyles.primary
  },
  buttonText: {
    color: 'white',
    fontSize:15
  },
});
export default CustomButton;
