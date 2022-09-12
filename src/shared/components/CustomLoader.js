import {StyleSheet, View} from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native-paper';

const CustomLoader = () => {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator />
    </View>
  );
};
export default CustomLoader

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
