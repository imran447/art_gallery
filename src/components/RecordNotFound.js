import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../shared/components/customText';

const RecordNotFound = () => {
  return (
    <View style={[styles.container]}>
      <CustomText style={{fontSize: 18, fontWeight: 'bold'}}>No Records Found..!</CustomText>
    </View>
  );
};
export default RecordNotFound;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 5,
    // borderColor: 'red'
  }
});
